import { useCallback, useEffect, useMemo, useState } from 'react'
import { BrowserProvider, Contract, formatUnits } from 'ethers'
import { PresaleContext } from './presaleContext.js'
import { ERC20_ABI, PRESALE_ABI } from './abi.js'
import { FALLBACK_PRICE, NETWORK, PRESALE_ADDRESS, PRESALE_CONFIG_ERROR, PRESALE_ENV_KEY } from './config.js'
import { errorText } from './format.js'
import { readProvider } from './readProvider.js'
import useWallet from './useWallet.js'

const REFRESH_MS = 15000

export default function PresaleProvider({ children }) {
  const { account, walletProvider } = useWallet()
  const [sale, setSale] = useState(null)
  const [user, setUser] = useState(null)
  const [loadError, setLoadError] = useState(PRESALE_CONFIG_ERROR)

  const reload = useCallback(async () => {
    if (!PRESALE_ADDRESS) return
    try {
      if ((await readProvider.getCode(PRESALE_ADDRESS)) === '0x') {
        throw new Error(
          `No presale contract at ${PRESALE_ENV_KEY} on ${NETWORK.name}. Check the address and VITE_NETWORK in .env.`,
        )
      }

      const presale = new Contract(PRESALE_ADDRESS, PRESALE_ABI, readProvider)
      const [tokenAddress, usdtAddress, saleOpen, tokensSold, hardCap, price, maxPerWallet, usdtRaised] =
        await Promise.all([
          presale.token(),
          presale.usdt(),
          presale.saleOpen(),
          presale.tokensSold(),
          presale.HARD_CAP(),
          presale.price(),
          presale.maxPurchasePerWallet(),
          // Presales deployed before usdtRaised existed fall back to tokensSold * price.
          presale.usdtRaised().catch(() => null),
        ])

      const token = new Contract(tokenAddress, ERC20_ABI, readProvider)
      const usdt = new Contract(usdtAddress, ERC20_ABI, readProvider)
      const [tokenSymbol, tokenDecimals, usdtSymbol, usdtDecimals, presaleTokenBalance] = await Promise.all([
        token.symbol(),
        token.decimals(),
        usdt.symbol(),
        usdt.decimals(),
        token.balanceOf(PRESALE_ADDRESS),
      ])

      let userData = null
      if (account) {
        const [tokenBalance, usdtBalance, allowance, purchased] = await Promise.all([
          token.balanceOf(account),
          usdt.balanceOf(account),
          usdt.allowance(account, PRESALE_ADDRESS),
          presale.purchased(account),
        ])
        userData = { tokenBalance, usdtBalance, allowance, purchased }
      }

      setSale({
        tokenAddress,
        usdtAddress,
        saleOpen,
        tokensSold,
        hardCap,
        price,
        maxPerWallet,
        usdtRaised: usdtRaised ?? (tokensSold * price) / 10n ** BigInt(tokenDecimals),
        tokenSymbol,
        tokenDecimals: Number(tokenDecimals),
        usdtSymbol,
        usdtDecimals: Number(usdtDecimals),
        presaleTokenBalance,
      })
      setUser(userData)
      setLoadError('')
    } catch (error) {
      setLoadError(errorText(error))
    }
  }, [account])

  useEffect(() => {
    reload()
    const timer = setInterval(reload, REFRESH_MS)
    return () => clearInterval(timer)
  }, [reload])

  const sendTx = useCallback(
    async (build, onSubmitted) => {
      if (!walletProvider) throw new Error('Connect a wallet first.')
      const signer = await new BrowserProvider(walletProvider).getSigner()
      const tx = await build(signer)
      onSubmitted?.(tx.hash)
      const receipt = await tx.wait()
      if (receipt.status !== 1) throw new Error('Transaction failed.')
      return tx.hash
    },
    [walletProvider],
  )

  const approveUsdt = useCallback(
    (amount, onSubmitted) =>
      sendTx((signer) => new Contract(sale.usdtAddress, ERC20_ABI, signer).approve(PRESALE_ADDRESS, amount), onSubmitted),
    [sendTx, sale],
  )

  const buy = useCallback(
    (amount, onSubmitted) => sendTx((signer) => new Contract(PRESALE_ADDRESS, PRESALE_ABI, signer).buy(amount), onSubmitted),
    [sendTx],
  )

  const value = useMemo(
    () => ({
      configured: !!PRESALE_ADDRESS,
      presaleAddress: PRESALE_ADDRESS,
      sale,
      user,
      loadError,
      reload,
      approveUsdt,
      buy,
      priceLabel: sale ? formatUnits(sale.price, sale.usdtDecimals) : FALLBACK_PRICE,
    }),
    [sale, user, loadError, reload, approveUsdt, buy],
  )

  return <PresaleContext.Provider value={value}>{children}</PresaleContext.Provider>
}
