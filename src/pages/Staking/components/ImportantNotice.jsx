import { ArrowRight } from 'lucide-react'

export default function ImportantNotice() {
  return (
    <section className="pb-20 md:pb-[120px] text-white bg-dark">
      <div className="w-[min(100%-32px,560px)] md:w-[min(1180px,calc(100%-48px))] mx-auto">
        <div className="max-w-[650px] p-6 border border-darkline animate-fadeUp">
          <strong className="text-purple uppercase tracking-[.12em] text-[11px]">Important</strong>
          <p className="mt-3 text-[#aaa7b0] text-xs leading-relaxed">
            The stated staking percentages are target rewards, not guaranteed returns. Final reward mechanisms,
            funding, smart-contract logic and applicable terms are subject to final implementation.
          </p>
        </div>

        <a
          href="#top"
          className="inline-flex items-center gap-[10px] mt-10 rounded-[3px] px-[21px] py-[17px] text-[11px] font-bold tracking-[.1em] uppercase text-white bg-purple hover:bg-[#ad69ff] transition-colors animate-fadeUp"
        >
          Start Staking <ArrowRight size={18} />
        </a>
      </div>
    </section>
  )
}
