import { useCallback, useMemo } from 'react'
import {
  useAppKit,
  useAppKitAccount,
  useAppKitNetwork,
  useAppKitProvider,
  useAppKitState,
  useDisconnect,
} from '@reown/appkit/react'
import { WalletContext } from './walletContext.js'
import { NETWORK } from './config.js'
import { appNetwork } from './appkit.js'

export default function WalletProvider({ children }) {
  const { open } = useAppKit()
  const { initialized } = useAppKitState()
  const { address, isConnected } = useAppKitAccount()
  const { chainId: rawChainId, switchNetwork: appKitSwitchNetwork } = useAppKitNetwork()
  const { walletProvider } = useAppKitProvider('eip155')
  const { disconnect: appKitDisconnect } = useDisconnect()

  const account = isConnected && address ? address : ''
  const chainId = rawChainId != null ? Number(rawChainId) : null

  const connect = useCallback(() => open({ view: 'Connect' }), [open])

  const disconnect = useCallback(() => appKitDisconnect(), [appKitDisconnect])

  const switchNetwork = useCallback(() => appKitSwitchNetwork(appNetwork), [appKitSwitchNetwork])

  const openAccount = useCallback(() => open({ view: 'Account' }), [open])

  const addToken = useCallback(
    async ({ address: tokenAddress, symbol, decimals }) => {
      if (!walletProvider) throw new Error('Connect a wallet first.')
      await walletProvider.request({
        method: 'wallet_watchAsset',
        params: { type: 'ERC20', options: { address: tokenAddress, symbol, decimals } },
      })
    },
    [walletProvider],
  )

  const value = useMemo(
    () => ({
      walletProvider,
      walletReady: initialized,
      account,
      chainId,
      isCorrectChain: chainId === NETWORK.chainId,
      connect,
      disconnect,
      switchNetwork,
      openAccount,
      addToken,
    }),
    [walletProvider, initialized, account, chainId, connect, disconnect, switchNetwork, openAccount, addToken],
  )

  return <WalletContext.Provider value={value}>{children}</WalletContext.Provider>
}
