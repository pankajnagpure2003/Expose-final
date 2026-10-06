import { createPortal } from 'react-dom'
import { CircleAlert, CircleCheck, CircleX, ExternalLink, Info, X } from 'lucide-react'
import { NETWORK } from '../../../web3/config.js'

const STYLES = {
  success: { icon: CircleCheck, accent: 'text-emerald-300', bar: 'bg-emerald-400' },
  error: { icon: CircleX, accent: 'text-red-400', bar: 'bg-red-400' },
  warning: { icon: CircleAlert, accent: 'text-amber-300', bar: 'bg-amber-300' },
  info: { icon: Info, accent: 'text-purple', bar: 'bg-purple' },
}

export default function Toasts({ toasts, onDismiss }) {
  if (toasts.length === 0) return null

  return createPortal(
    <div className="fixed bottom-5 right-5 z-[210] flex w-[min(360px,calc(100%-40px))] flex-col gap-3">
      {toasts.map((toast) => {
        const style = STYLES[toast.type] || STYLES.info
        const Icon = style.icon

        return (
          <div
            key={toast.id}
            role="status"
            className="relative flex animate-fadeUp gap-3 overflow-hidden rounded-[10px] border border-white/[0.09] bg-[#08080b]/95 p-4 pl-5 text-white shadow-[0_20px_60px_rgba(0,0,0,.6)] backdrop-blur-md"
          >
            <span className={`absolute inset-y-0 left-0 w-[3px] ${style.bar}`} />

            <Icon size={18} className={`mt-0.5 shrink-0 ${style.accent}`} />

            <div className="min-w-0 flex-1">
              <p className="text-[12px] font-bold uppercase tracking-[.08em]">{toast.title}</p>
              {toast.message && (
                <p className="mt-1 break-words text-[12px] leading-[1.6] text-[#aaa6b0]">{toast.message}</p>
              )}
              {toast.hash && (
                <a
                  href={`${NETWORK.explorer}/tx/${toast.hash}`}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-2 inline-flex items-center gap-1 text-[11px] font-bold text-purple hover:text-[#ad69ff]"
                >
                  View on Explorer <ExternalLink size={11} />
                </a>
              )}
            </div>

            <button
              type="button"
              onClick={() => onDismiss(toast.id)}
              aria-label="Dismiss"
              className="h-fit rounded-full p-1 text-[#77737e] transition-colors hover:bg-white/[0.06] hover:text-white"
            >
              <X size={14} />
            </button>
          </div>
        )
      })}
    </div>,
    document.body,
  )
}
