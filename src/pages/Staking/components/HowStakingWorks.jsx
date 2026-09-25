import SectionHeading from '../../../components/common/SectionHeading.jsx'

const steps = [
  ['01', 'Connect Wallet', 'Link a supported wallet to the EXPOSE staking portal.'],
  ['02', 'Select Staking Period', 'Choose 3, 6, 9 or 12 months based on your target hold time.'],
  ['03', 'Stake EXPOSE', 'Lock the amount of EXPOSE you want to commit for that period.'],
  ['04', 'Rewards Accumulate', 'Target rewards build up over the course of the lock period.'],
  ['05', 'Maturity', 'Your stake reaches the end of its selected period.'],
  ['06', 'Claim', 'Withdraw your original stake plus accumulated target rewards.'],
]

export default function HowStakingWorks() {
  return (
    <section className="pt-8 pb-16 md:pt-12 md:pb-24 bg-white">
      <div className="w-[min(100%-32px,560px)] md:w-[min(1180px,calc(100%-48px))] mx-auto">
        <SectionHeading
          eyebrow="02 /How Staking Works"
          title={<>Six steps,<br /><em className="text-purple not-italic">start to claim.</em></>}
          description="The full lifecycle of a stake — from connecting a wallet to claiming rewards at maturity."
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 border-t border-l border-line">
          {steps.map(([num, title, text], i) => (
            <article
              key={num}
              className="p-6 md:p-7 border-r border-b border-line animate-fadeUp transition-transform hover:-translate-y-1"
              style={{ animationDelay: `${i * 0.06}s` }}
            >
              <span className="text-purple text-[11px] tracking-[.13em]">{num}</span>
              <h3 className="mt-6 mb-2 text-lg uppercase">{title}</h3>
              <p className="text-muted text-xs leading-[1.55]">{text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
