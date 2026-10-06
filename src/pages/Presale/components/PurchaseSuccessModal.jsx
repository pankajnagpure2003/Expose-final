import { useEffect } from 'react'
import { createPortal } from 'react-dom'
import { CircleCheck, ExternalLink, Wallet, X } from 'lucide-react'
import { NETWORK } from '../../../web3/config.js'
import { shortAddress } from '../../../web3/format.js'

export default function PurchaseSuccessModal({ purchase, onClose, onAddToken }) {
  useEffect(() => {
    if (!purchase) return
    const onKey = (event) => {
      if (event.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [purchase, onClose])

  if (!purchase) return null

  const explorerUrl = `${NETWORK.explorer}/tx/${purchase.hash}`

  // Portal keeps the fixed overlay out of the animated (transformed) presale card.
  return createPortal(
    <div
      className="fixed inset-0 z-[200] flex items-center justify-center p-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby="purchase-success-title"
    >
      <div className="absolute inset-0 bg-black/75 backdrop-blur-sm" onClick={onClose} />

      <div className="relative w-full max-w-[420px] animate-fadeUp overflow-hidden rounded-[12px] border border-white/[0.09] bg-[#08080b] px-6 pb-7 pt-9 text-center text-white shadow-[0_30px_100px_rgba(0,0,0,.7)] sm:px-8">
        <div className="absolute left-0 right-0 top-0 h-[2px] bg-purple shadow-[0_0_18px_rgba(155,77,255,.9)]" />
        <div className="pointer-events-none absolute -top-16 left-1/2 h-40 w-40 -translate-x-1/2 rounded-full bg-emerald-400/[0.12] blur-[50px]" />

        <button
          type="button"
          onClick={onClose}
          aria-label="Close"
          className="absolute right-4 top-4 rounded-full p-1.5 text-[#77737e] transition-colors hover:bg-white/[0.06] hover:text-white"
        >
          <X size={16} />
        </button>

        <div className="relative mx-auto flex h-16 w-16 items-center justify-center rounded-full border border-emerald-400/30 bg-emerald-400/10 text-emerald-300 shadow-[0_0_30px_rgba(52,211,153,.2)]">
          <CircleCheck size={30} />
        </div>

        <h3
          id="purchase-success-title"
          className="relative mt-5 text-[18px] font-bold uppercase tracking-[.08em]"
        >
          Purchase successful
        </h3>

        <p className="relative mt-2 text-[12px] text-[#77737e]">You bought</p>

        <strong className="relative mt-1 block text-[28px] font-bold tracking-[-.03em] text-white">
          {purchase.tokenAmount} <span className="text-purple">{purchase.tokenSymbol}</span>
        </strong>

        <p className="relative mt-1 text-[12px] text-[#77737e]">
          for {purchase.payAmount} {purchase.usdtSymbol}
        </p>

        <div className="relative mt-6 flex items-center justify-between rounded-[8px] border border-white/[0.07] bg-white/[0.025] px-4 py-3 text-left">
          <span className="text-[9px] font-bold uppercase tracking-[.14em] text-[#6f6a77]">Transaction</span>
          <span className="font-mono text-[12px] text-[#d8d5dc]">{shortAddress(purchase.hash)}</span>
        </div>

        <div className="relative mt-6 grid gap-3">
          <a
            href={explorerUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-[6px] bg-purple px-5 py-4 text-[10px] font-bold uppercase tracking-[.1em] text-white shadow-[0_0_25px_rgba(155,77,255,.2)] transition-all hover:bg-[#ad69ff] hover:shadow-[0_0_40px_rgba(155,77,255,.35)]"
          >
            View on Explorer
            <ExternalLink size={14} />
          </a>

        
        </div>
      </div>
    </div>,
    document.body,
  )
}
