import SectionHeading from '../../../components/common/SectionHeading.jsx'

const benefits = [
  {
    num: '01',
    title: 'Early Access',
    text: 'Get access to EXPOSE Token during the early distribution phase.',
  },
  {
    num: '02',
    title: 'Ecosystem Utility',
    text: 'Use EXPOSE across planned platform and ecosystem features.',
  },
  {
    num: '03',
    title: 'Platform Access',
    text: 'Designed to support platform services and subscription utilities.',
  },
  {
    num: '04',
    title: 'Future Integrations',
    text: 'Participate as the EXPOSE ecosystem expands with new integrations.',
  },
  {
    num: '05',
    title: 'Staking & Community',
    text: 'Planned staking functionality and community participation opportunities.',
  },
]

const steps = [
  [
    '01',
    'Connect Wallet',
    'Link a MetaMask, Trust Wallet or WalletConnect-compatible wallet.',
  ],
  [
    '02',
    'Select Presale',
    'Choose the active EXPOSE Presale round.',
  ],
  [
    '03',
    'Enter Amount',
    'Specify your contribution in the supported currency.',
  ],
  [
    '04',
    'Confirm',
    'Review the details and approve the transaction.',
  ],
  [
    '05',
    'Receive EXPOSE',
    'Tokens are allocated according to the distribution schedule.',
  ],
]

export default function HowItWorks() {
  return (
   <section 
  id="how-it-works" 
  className="relative overflow-hidden pt-8 pb-20 md:pt-12 md:pb-28 text-white bg-dark"
>
      {/* Background glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/3 -translate-x-1/2 w-[500px] h-[500px] rounded-full bg-purple/5 blur-[140px]" />

      <div className="relative w-[min(100%-32px,560px)] md:w-[min(1180px,calc(100%-48px))] mx-auto">

        {/* =====================================================
            WHY PARTICIPATE
        ====================================================== */}

        <div className="flex  flex-col lg:flex-row lg:items-end lg:justify-between gap-6">

          <SectionHeading
            title={
              <>
                Why
                <br />
                <em className="text-purple not-italic">
                  Participate?
                </em>
              </>
            }
            description="Explore the planned utility and opportunities within the EXPOSE ecosystem."
            light
          />

          <div className="hidden lg:flex items-center gap-3 mb-3 text-[9px] tracking-[.18em] uppercase text-[#66636d]">
            <span className="w-8 h-px bg-purple/50" />
            EXPOSE / BENEFITS
          </div>

        </div>


        {/* =====================================================
            INTERACTIVE BENEFITS
        ====================================================== */}

        <div className="mt-12 grid grid-cols-1 md:grid-cols-5 border-y border-white/[0.08]">

          {benefits.map((benefit, i) => (
            <article
              key={benefit.num}
              className={`
                benefit-card
                group
                relative
                min-h-[180px]
                md:min-h-[230px]
                p-6
                md:p-7
                overflow-hidden
                cursor-default
                border-white/[0.08]
                ${i !== 4 ? 'border-b md:border-b-0 md:border-r' : ''}
                animate-fadeUp
              `}
              style={{
                animationDelay: `${i * 0.08}s`,
              }}
            >

              {/* Animated background */}
              <div className="absolute inset-0 bg-gradient-to-b from-purple/[0.10] via-purple/[0.025] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              {/* Large background number */}
              <span className="absolute -right-3 -bottom-7 text-[100px] md:text-[120px] font-bold leading-none text-white/[0.025] group-hover:text-purple/[0.08] group-hover:-translate-y-2 transition-all duration-700">
                {benefit.num}
              </span>

              {/* Top line */}
              <div className="relative flex items-center justify-between">

                <span className="text-purple text-[9px] font-bold tracking-[.16em]">
                  {benefit.num}
                </span>

                <span className="w-2 h-2 rounded-full bg-purple/30 group-hover:bg-purple group-hover:shadow-[0_0_15px_rgba(155,77,255,.8)] transition-all duration-500" />

              </div>

              {/* Content */}
              <div className="relative mt-12 md:mt-16">

                <h3 className="text-[14px] md:text-[15px] font-semibold uppercase tracking-[-0.01em] text-white group-hover:text-purple transition-colors duration-300">
                  {benefit.title}
                </h3>

                <p className="mt-3 max-w-[190px] text-[11px] leading-[1.65] text-darkmuted group-hover:text-[#aaa7b1] transition-colors duration-300">
                  {benefit.text}
                </p>

              </div>

              {/* Bottom animated line */}
              <span className="absolute bottom-0 left-0 h-[2px] w-0 bg-purple group-hover:w-full transition-all duration-700" />

            </article>
          ))}

        </div>


        {/* =====================================================
            BUY FLOW
        ====================================================== */}

        <div className="mt-24 md:mt-32">

          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">

            <SectionHeading
              title={
                <>
                  Buy Flow —
                  <br />
                  <em className="text-purple not-italic">
                    How It Works
                  </em>
                </>
              }
              description="Five simple steps from connecting your wallet to receiving EXPOSE."
              light
            />

            <div className="hidden lg:flex items-center gap-3 mb-3 text-[9px] tracking-[.18em] uppercase text-[#66636d]">
              EXPOSE / PROCESS
              <span className="w-8 h-px bg-purple/50" />
            </div>

          </div>


          {/* =====================================================
              ANIMATED FLOW
          ====================================================== */}

          <div className="relative mt-14">

            {/* Main connecting line */}
            <div className="hidden md:block absolute top-[22px] left-[9%] right-[9%] h-px bg-white/[0.08]" />

            {/* Moving purple beam */}
            <div className="hidden md:block absolute top-[21px] left-[9%] w-[18%] h-[2px] bg-purple shadow-[0_0_12px_rgba(155,77,255,.7)] animate-flowLine" />


            <div className="grid grid-cols-1 md:grid-cols-5">

              {steps.map(([num, title, text], i) => (

                <article
                  key={num}
                  className="group relative px-5 md:px-4 py-5 md:py-0 animate-fadeUp"
                  style={{
                    animationDelay: `${i * 0.1}s`,
                  }}
                >

                  {/* Mobile line */}
                  {i !== steps.length - 1 && (
                    <span className="md:hidden absolute left-[35px] top-[65px] h-[calc(100%-35px)] w-px bg-gradient-to-b from-purple/40 to-white/[0.05]" />
                  )}


                  {/* Number */}
                  <div className="relative z-10 flex items-center justify-center w-11 h-11 rounded-full border border-white/[0.12] bg-dark text-[9px] font-bold tracking-[.12em] text-[#77737e] group-hover:border-purple group-hover:text-white group-hover:bg-purple group-hover:shadow-[0_0_30px_rgba(155,77,255,.35)] group-hover:scale-110 transition-all duration-500">

                    {num}

                  </div>


                  {/* Content */}
                  <div className="mt-5 md:pr-6">

                    <div className="flex items-center gap-2">

                      <h3 className="text-[13px] md:text-[14px] font-semibold uppercase tracking-[-0.01em] text-white group-hover:text-purple transition-colors duration-300">
                        {title}
                      </h3>

                      <span className="opacity-0 -translate-x-2 text-purple group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
                        →
                      </span>

                    </div>

                    <p className="mt-2 max-w-[190px] text-[11px] leading-[1.65] text-darkmuted">
                      {text}
                    </p>

                  </div>


                  {/* Active bottom indicator */}
                  <div className="mt-5 md:mt-7 h-px w-0 bg-purple group-hover:w-[65px] transition-all duration-500" />

                </article>

              ))}

            </div>

          </div>


          {/* Bottom status bar */}
          <div className="mt-12 md:mt-16 flex items-center justify-between border-t border-white/[0.07] pt-5">

            <div className="flex items-center gap-3">

              <span className="relative flex w-2 h-2">
                <span className="absolute inline-flex w-full h-full rounded-full bg-purple opacity-60 animate-ping" />
                <span className="relative inline-flex w-2 h-2 rounded-full bg-purple" />
              </span>

              <span className="text-[9px] tracking-[.15em] uppercase text-[#77737e]">
                EXPOSE PRESALE PROCESS
              </span>

            </div>

            

          </div>

        </div>

      </div>
      
    </section>
    
  )
}


