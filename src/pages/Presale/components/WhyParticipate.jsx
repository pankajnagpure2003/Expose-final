import { Check } from 'lucide-react'

const reasons = [
  'Early access to EXPOSE Token',
  'Utility across the EXPOSE ecosystem',
  'Platform and subscription utilities',
  'Access to future ecosystem integrations',
  'Staking and community participation',
]

export default function WhyParticipate() {
  return (
    <div className="mt-16 md:mt-20 animate-fadeUp">
      <div className="flex items-center gap-[9px] text-purple text-[10px] font-bold tracking-[.18em] uppercase">
        Why participate?
      </div>
      <ul className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4">
        {reasons.map((reason) => (
          <li key={reason} className="flex items-start gap-3">
            <Check size={16} className="mt-[3px] text-purple shrink-0" />
            <span className="text-sm text-ink">{reason}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}
