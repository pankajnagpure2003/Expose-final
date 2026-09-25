import useCountdown from '../../../hooks/useCountdown.js'

export default function Countdown() {
  const { days, hours, minutes, seconds } = useCountdown({
    days: 12,
    hours: 8,
    minutes: 45,
    seconds: 30,
  })

  const units = [
    ['Days', days],
    ['Hours', hours],
    ['Minutes', minutes],
    ['Seconds', seconds],
  ]

  return (
    <section className="relative overflow-hidden py-16 md:py-20 text-white">

      {/* =====================================================
          CONTENT
      ====================================================== */}

      <div className="relative mx-auto w-[min(100%-32px,900px)] text-center">

        {/* Label */}

        <div className="animate-fadeUp flex items-center justify-center gap-2 text-purple text-[10px] font-bold tracking-[.2em] uppercase">

          <span className="relative flex h-2 w-2">

            <span className="absolute h-full w-full rounded-full bg-purple opacity-40 animate-ping" />

            <span className="relative h-2 w-2 rounded-full bg-purple shadow-[0_0_12px_rgba(155,77,255,.9)]" />

          </span>

          Presale Countdown

        </div>


        {/* Heading */}

        <h3 className="heading-tight mt-5 mb-[14px] animate-fadeUp uppercase text-[clamp(34px,6vw,68px)] leading-[.93] text-white">

          Your next move

          <br />

          <span className="text-purple">
            starts here.
          </span>

        </h3>


        {/* Description */}

        <p className="mx-auto max-w-[420px] animate-fadeUp text-[13px] leading-relaxed text-[#77737e] [animation-delay:.1s]">

          Illustrative countdown — final presale date and time
          to be announced.

        </p>


        {/* =====================================================
            COUNTDOWN CARDS
        ====================================================== */}

        <div className="relative mt-8 animate-fadeUp sm:mt-[40px] [animation-delay:.18s]">

          {/* Connecting line */}

          <div className="pointer-events-none absolute left-[8%] right-[8%] top-1/2 hidden h-px bg-gradient-to-r from-transparent via-purple/25 to-transparent sm:block" />


          <div className="relative grid grid-cols-2 gap-3 sm:flex sm:justify-center sm:gap-3">

            {units.map(([label, value], index) => (

              <div
                key={label}
                className="group relative overflow-hidden rounded-[8px] border border-white/[0.09] bg-[#08080b]/90 px-3 py-5 text-center shadow-[0_20px_60px_rgba(0,0,0,.4)] backdrop-blur-sm transition-all duration-500 hover:-translate-y-2 hover:border-purple/40 hover:bg-[#0c0b10] hover:shadow-[0_20px_60px_rgba(155,77,255,.13)] sm:min-w-[110px] sm:px-5 sm:py-6"
                style={{
                  animationDelay: `${index * 0.08}s`,
                }}
              >

                {/* Top accent */}

                <div className="absolute left-0 right-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-purple/70 to-transparent opacity-50 transition-opacity duration-300 group-hover:opacity-100" />


                {/* Corner glow */}

                <div className="pointer-events-none absolute -right-8 -top-8 h-20 w-20 rounded-full bg-purple/[0.1] blur-[25px] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />


                {/* Number */}

                <strong className="relative block text-3xl font-bold tracking-[-.04em] text-white tabular-nums transition-all duration-300 group-hover:text-purple sm:text-[40px]">

                  {String(value).padStart(2, '0')}

                </strong>


                {/* Label */}

                <span className="relative mt-1 block text-[8px] font-semibold uppercase tracking-[.16em] text-[#65616c] transition-colors duration-300 group-hover:text-[#96919f]">

                  {label}

                </span>


                {/* Bottom line */}

                <span className="absolute bottom-0 left-1/2 h-[2px] w-0 -translate-x-1/2 bg-purple shadow-[0_0_12px_rgba(155,77,255,.8)] transition-all duration-500 group-hover:w-[45%]" />

              </div>

            ))}

          </div>

        </div>


        {/* =====================================================
            STATUS
        ====================================================== */}

        <div className="mt-7 flex items-center justify-center gap-3 animate-fadeUp [animation-delay:.28s]">

          <span className="h-px w-8 bg-white/[0.08]" />

          <span className="text-[8px] uppercase tracking-[.18em] text-[#4f4b55]">

            EXPOSE / Upcoming Distribution

          </span>

          <span className="h-px w-8 bg-white/[0.08]" />

        </div>

      </div>

    </section>
  )
}