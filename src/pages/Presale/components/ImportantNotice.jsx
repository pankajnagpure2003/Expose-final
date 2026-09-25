import { ArrowRight, AlertCircle, Sparkles } from 'lucide-react'

export default function ImportantNotice() {
  return (
    <section className="relative overflow-hidden bg-black py-16 md:py-24 text-white">

      {/* Ambient background glow */}
      <div className="pointer-events-none absolute -left-40 top-1/2 h-[360px] w-[360px] -translate-y-1/2 rounded-full bg-purple/[0.07] blur-[130px]" />

      <div className="pointer-events-none absolute -right-32 bottom-0 h-[300px] w-[300px] rounded-full bg-purple/[0.05] blur-[120px]" />

      <div className="relative w-[min(100%-32px,560px)] md:w-[min(1180px,calc(100%-48px))] mx-auto">

        {/* =====================================================
            NOTICE
        ====================================================== */}

        <div className="group relative max-w-[820px] overflow-hidden rounded-[10px] border border-white/[0.09] bg-[#09090c] shadow-[0_20px_80px_rgba(0,0,0,.35)] animate-fadeUp">

          {/* Animated border glow */}
          <div className="pointer-events-none absolute inset-0 rounded-[10px] opacity-0 group-hover:opacity-100 transition-opacity duration-700">
            <div className="absolute inset-0 rounded-[10px] ring-1 ring-purple/30" />
          </div>

          {/* Top purple line */}
          <div className="absolute left-0 right-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-purple to-transparent opacity-70" />

          {/* Hover gradient */}
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-purple/[0.08] via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

          <div className="relative p-6 md:p-8">

            {/* Header */}
            <div className="flex items-center justify-between">

              <div className="flex items-center gap-3">

                {/* Icon */}
                <div className="relative flex h-10 w-10 items-center justify-center rounded-full border border-purple/30 bg-purple/[0.08] text-purple">

                  <span className="absolute inset-0 rounded-full bg-purple/10 animate-ping opacity-30" />

                  <AlertCircle
                    size={17}
                    strokeWidth={1.8}zzzz
                    className="relative"
                  />

                </div>

                <div>
                  <span className="block text-[8px] font-medium uppercase tracking-[.22em] text-[#66626c]">
                    EXPOSE PRESALE
                  </span>

                  <h3 className="mt-1 text-[12px] font-bold uppercase tracking-[.15em] text-white">
                    Important Notice
                  </h3>
                </div>

              </div>

              {/* Desktop label */}
              <div className="hidden sm:flex items-center gap-2">

                <Sparkles
                  size={12}
                  className="text-purple/60"
                />

       
              </div>

            </div>


            {/* Divider */}
            <div className="my-6 h-px bg-gradient-to-r from-white/[0.1] via-white/[0.05] to-transparent" />


            {/* Main notice */}
            <div className="flex gap-4">

              {/* Side accent */}
              <div className="hidden sm:block w-[2px] shrink-0 rounded-full bg-gradient-to-b from-purple via-purple/40 to-transparent" />

              <p className="max-w-[680px] text-[13px] md:text-[14px] leading-[1.85] text-[#aaa7b0]">

                The{' '}

                <span className="font-semibold text-white">
                  $0.05
                </span>

                {' '}price is a preliminary planning assumption. Final presale terms,
                pricing, allocation, launch conditions and liquidity arrangements
                are subject to final project decisions.

              </p>

            </div>


            {/* Bottom information */}
            <div className="mt-7 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">

              <div className="flex items-center gap-2.5">

                <span className="relative flex h-[7px] w-[7px]">

                  <span className="absolute inline-flex h-full w-full rounded-full bg-purple opacity-50 animate-ping" />

                  <span className="relative inline-flex h-[7px] w-[7px] rounded-full bg-purple shadow-[0_0_10px_rgba(155,77,255,.8)]" />

                </span>

                <span className="text-[8px] uppercase tracking-[.17em] text-[#66626c]">
                  Terms subject to final confirmation
                </span>

              </div>

              <span className="text-[8px] uppercase tracking-[.2em] text-[#45414b]">
                EXPOSE / 2026
              </span>

            </div>

          </div>
        </div>


        {/* =====================================================
            CTA
        ====================================================== */}

        <div className="mt-7 animate-fadeUp [animation-delay:.15s]">

          <a
            href="#presale"
            className="
              group
              relative
              inline-flex
              items-center
              gap-3
              overflow-hidden
              rounded-[4px]
              bg-purple
              px-[23px]
              py-[16px]
              text-[10px]
              font-bold
              uppercase
              tracking-[.12em]
              text-white
              transition-all
              duration-300
              hover:bg-[#ad69ff]
              hover:shadow-[0_0_35px_rgba(155,77,255,.3)]
            "
          >

            {/* Button shine */}
            <span className="absolute inset-y-0 -left-full w-1/2 skew-x-[-20deg] bg-white/20 transition-all duration-700 group-hover:left-[120%]" />

            <span className="relative">
              Join EXPOSE Presale
            </span>

            <ArrowRight
              size={17}
              className="relative transition-transform duration-300 group-hover:translate-x-1"
            />

          </a>

        </div>

      </div>
    </section>
  )
}