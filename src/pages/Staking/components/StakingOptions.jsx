import { ArrowRight } from 'lucide-react'
import SectionHeading from '../../../components/common/SectionHeading.jsx'

const options = [
  ['3 Months', '2%', '6%'],
  ['6 Months', '3%', '18%'],
  ['9 Months', '4%', '36%'],
  ['12 Months', '5%', '60%'],
]

export default function StakingOptions() {
  return (
    <section className="pt-8 pb-16 md:pt-12 md:pb-24">
      <div className="w-[min(100%-32px,560px)] md:w-[min(1180px,calc(100%-48px))] mx-auto">

        {/* Section Heading */}
        <SectionHeading
          eyebrow="01 / Staking Options"
          title={
            <>
              Choose your
              <br />
              <em className="text-purple not-italic">
                lock period.
              </em>
            </>
          }
          description="Longer commitments carry a higher target monthly rate. Pick the period that matches how long you're comfortable holding, then lock in and let rewards accumulate toward maturity."
        />

        {/* Staking Options */}
        <div className="mt-10 md:mt-12 border-t border-line">

          {/* Table Header */}
          <div className="hidden md:grid grid-cols-[1.4fr_1fr_1fr_1fr] gap-5 items-center py-[17px] px-5 text-muted text-[10px] tracking-[.12em] uppercase">
            <span>Period</span>
            <span>Target reward / month</span>
            <span>Total target</span>
            <span />
          </div>

          {/* Options */}
          {options.map(([period, monthly, total], i) => (
            <div
              key={period}
              className="
                grid grid-cols-2
                md:grid-cols-[1.4fr_1fr_1fr_1fr]
                gap-3 md:gap-5
                items-center
                py-5
                px-4 md:px-5
                border-t border-line
                bg-white
                animate-fadeUp
                transition-colors
                hover:bg-paper
              "
              style={{
                animationDelay: `${i * 0.06}s`,
              }}
            >

              {/* Period */}
              <strong className="text-[17px]">
                {period}
              </strong>

              {/* Monthly */}
              <span
                className="
                  font-bold
                  before:content-['Monthly_']
                  before:text-muted
                  before:text-[9px]
                  before:uppercase
                  before:block
                  md:before:content-none
                "
              >
                {monthly}
              </span>

              {/* Total */}
              <span
                className="
                  font-bold
                  before:content-['Total_']
                  before:text-muted
                  before:text-[9px]
                  before:uppercase
                  before:block
                  md:before:content-none
                "
              >
                {total}
              </span>

              {/* Select Button */}
              <button
                className="
                  col-span-2
                  md:col-span-1
                  justify-self-stretch
                  md:justify-self-end
                  inline-flex
                  items-center
                  justify-center
                  gap-[10px]
                  rounded-[3px]
                  px-[15px]
                  py-3
                  text-[9px]
                  font-bold
                  tracking-[.1em]
                  uppercase
                  text-white
                  bg-purple
                  hover:bg-[#ad69ff]
                  transition-colors
                "
              >
                Select
                <ArrowRight size={15} />
              </button>

            </div>
          ))}
        </div>

        {/* Disclaimer */}
        <p className="mt-5 text-[#aaa7af] text-[10px] leading-relaxed">
          Figures shown are target rewards for a full, uninterrupted staking
          period and are not guaranteed. See "Important" below.
        </p>

      </div>
    </section>
  )
}