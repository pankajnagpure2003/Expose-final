import { Check } from 'lucide-react'
import SectionHeading from '../../../components/common/SectionHeading.jsx'

const benefits = [
  ['Multiple holding periods', "Pick 3, 6, 9 or 12 months to match your own time horizon."],
  ['Simple wallet-based participation', 'No extra accounts — stake directly from your connected wallet.'],
  ['Ecosystem participation', 'Staking ties holders more closely to the long-term EXPOSE ecosystem.'],
  ['Target staking rewards', 'Clear, published per-period reward targets across all four options.'],
  ['Transparent staking structure', 'Period, rate and total target are laid out up front, with no hidden terms.'],
]

export default function Benefits() {
  return (
    <section className="pt-8 pb-16 md:pt-12 md:pb-24 text-white bg-dark">
      <div className="w-[min(100%-32px,560px)] md:w-[min(1180px,calc(100%-48px))] mx-auto">
        <SectionHeading
          eyebrow="03 / Staking Benefits"
          title={<>Why stake<br /><em className="text-purple not-italic">EXPOSE</em></>}
          description=" "
          light
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-6 md:gap-6">
          {benefits.map(([title, text], i) => (
            <div
              key={title}
              className="pr-0 md:pr-5 md:border-r border-darkline last:border-0 animate-fadeUp transition-transform hover:-translate-y-1"
              style={{ animationDelay: `${i * 0.08}s` }}
            >
              <Check size={18} className="mb-5 md:mb-[35px] text-purple" />
              <strong className="block text-base leading-tight">{title}</strong>
              <p className="mt-2 text-darkmuted text-xs leading-relaxed">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
