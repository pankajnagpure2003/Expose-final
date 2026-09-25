import { ArrowRight, ChevronDown } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative min-h-[720px] md:min-h-[760px] flex items-center overflow-hidden bg-[#08080a] text-white">

      {/* ================= BACKGROUND VIDEO ================= */}
      <video
        className="absolute inset-0 w-full h-full object-cover opacity-50"
        autoPlay
        muted
        loop
        playsInline
      >
        <source src="/videos/hero_presale.mp4" type="video/mp4" />
      </video>

      {/* ================= DARK OVERLAY ================= */}
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(6,6,8,.96)_0%,rgba(6,6,8,.64)_48%,rgba(6,6,8,.32)),linear-gradient(0deg,rgba(6,6,8,.90),transparent_60%)]" />


      {/* ================= HERO CONTENT ================= */}
      <div
        className="
          relative
          z-10
          max-w-[90rem]
          mx-auto
          px-4
          sm:px-6
          lg:px-8
          w-full
          pt-28
          pb-20
          md:pt-32
          md:pb-24
        "
      >

        {/* ================= CONTENT WRAPPER ================= */}
        <div className="max-w-[900px]">


          {/* ================= LABEL ================= */}
          <div
            className="
              flex
              items-center
              gap-[9px]
              text-[10px]
              sm:text-[11px]
              font-bold
              tracking-[.18em]
              uppercase
              text-[#aeadb4]
              animate-fadeUp
            "
          >

            <span className="w-[7px] h-[7px] rounded-full bg-purple shadow-[0_0_18px_#9b4dff]" />

            <span>
              EXPOSE PRESALE
            </span>

          </div>


          {/* ================= HEADING ================= */}
          <h1
            className="
              heading-tight
              mt-6
              mb-7
              max-w-[850px]
              text-[48px]
              sm:text-[58px]
              md:text-[72px]
              lg:text-[82px]
              xl:text-[88px]
              leading-[0.94]
              tracking-[-0.045em]
              font-bold
              uppercase
              animate-fadeUp
              [animation-delay:.08s]
            "
          >

            <span className="block">
              GET EARLY
            </span>

            <span className="block">
              ACCESS TO THE
            </span>

            <span className="block text-purple">
              EXPOSE  
            </span>
  <span className="block text-purple">
               ECOSYSTEM
            </span>

          </h1>


          {/* ================= DESCRIPTION ================= */}
          <div
            className="
              max-w-[650px]
              animate-fadeUp
              [animation-delay:.16s]
            "
          >

            <p className="text-[#c2c0c7] text-base md:text-[17px] leading-[1.7]">
              Join the early-stage token distribution and become part of the
              EXPOSE ecosystem.
            </p>

            <p className="mt-2 text-[#9e9ba5] text-sm md:text-[15px] leading-[1.75]">
              EXPOSE Presale provides access to the planned distribution of
              EXPOSE Tokens, designed to support the platform, trading ecosystem,
              subscriptions, staking and future integrations.
            </p>

          </div>


          {/* ================= BUTTONS ================= */}
          <div
            className="
              flex
              flex-col
              sm:flex-row
              gap-3
              mt-8
              mb-12
              md:mb-14
              animate-fadeUp
              [animation-delay:.24s]
            "
          >

            {/* PRIMARY */}
            <a
              href="#presale"
              className="
                group
                inline-flex
                items-center
                justify-center
                gap-[10px]
                rounded-[4px]
                px-[24px]
                py-[17px]
                text-[11px]
                font-bold
                tracking-[.1em]
                uppercase
                text-white
                bg-purple
                hover:bg-[#ad69ff]
                hover:shadow-[0_0_25px_rgba(155,77,255,0.35)]
                transition-all
                duration-300
              "
            >
              Join the presale

              <ArrowRight
                size={18}
                className="
                  transition-transform
                  duration-300
                  group-hover:translate-x-1
                "
              />
            </a>


            {/* SECONDARY */}
            <a
              href="#how-it-works"
              className="
                group
                inline-flex
                items-center
                justify-center
                gap-[10px]
                rounded-[4px]
                px-[24px]
                py-[17px]
                text-[11px]
                font-bold
                tracking-[.1em]
                uppercase
                text-white
                border
                border-white/25
                hover:border-purple/60
                hover:bg-white/5
                transition-all
                duration-300
              "
            >
              Explore the ecosystem

              <ChevronDown
                size={18}
                className="
                  transition-transform
                  duration-300
                  group-hover:translate-y-1
                "
              />
            </a>

          </div>


          {/* ================= STATS ================= */}
          <div
            className="
              grid
              grid-cols-1
              sm:grid-cols-3
              gap-3
              sm:gap-4
              max-w-[680px]
              animate-fadeUp
              [animation-delay:.32s]
            "
          >

            {/* STAT 1 */}
            <div
              className="
                group
                rounded-[6px]
                border
                border-white/[0.08]
                bg-white/[0.035]
                backdrop-blur-sm
                px-5
                py-4
                transition-all
                duration-300
                hover:border-purple/40
                hover:bg-white/[0.055]
              "
            >
              <div className="flex flex-col gap-2">

                <strong
                  className="
                    text-[23px]
                    md:text-[25px]
                    font-semibold
                    tracking-[-0.02em]
                    text-white
                  "
                >
                  $0.05
                </strong>

                <span
                  className="
                    text-[#85818c]
                    text-[9px]
                    md:text-[10px]
                    font-medium
                    tracking-[.14em]
                    uppercase
                  "
                >
                  Planning price
                </span>

              </div>
            </div>


            {/* STAT 2 */}
            <div
              className="
                group
                rounded-[6px]
                border
                border-white/[0.08]
                bg-white/[0.035]
                backdrop-blur-sm
                px-5
                py-4
                transition-all
                duration-300
                hover:border-purple/40
                hover:bg-white/[0.055]
              "
            >
              <div className="flex flex-col gap-2">

                <strong
                  className="
                    text-[23px]
                    md:text-[25px]
                    font-semibold
                    tracking-[-0.02em]
                    text-white
                  "
                >
                  1B
                </strong>

                <span
                  className="
                    text-[#85818c]
                    text-[9px]
                    md:text-[10px]
                    font-medium
                    tracking-[.14em]
                    uppercase
                  "
                >
                  Total supply
                </span>

              </div>
            </div>


            {/* STAT 3 */}
            <div
              className="
                group
                rounded-[6px]
                border
                border-white/[0.08]
                bg-white/[0.035]
                backdrop-blur-sm
                px-5
                py-4
                transition-all
                duration-300
                hover:border-purple/40
                hover:bg-white/[0.055]
              "
            >
              <div className="flex flex-col gap-2">

                <strong
                  className="
                    text-[23px]
                    md:text-[25px]
                    font-semibold
                    tracking-[-0.02em]
                    text-white
                  "
                >
                  150M
                </strong>

                <span
                  className="
                    text-[#85818c]
                    text-[9px]
                    md:text-[10px]
                    font-medium
                    tracking-[.14em]
                    uppercase
                  "
                >
                  Presale allocation
                </span>

              </div>
            </div>

          </div>

        </div>

      </div>


      {/* ================= SCROLL INDICATOR ================= */}
      <div
        className="
          hidden
          md:flex
          absolute
          bottom-7
          left-1/2
          -translate-x-1/2
          flex-col
          items-center
          text-[#8e8b95]
          text-[9px]
          font-medium
          tracking-[.16em]
          uppercase
        "
      >

        <span>
          Scroll to explore
        </span>

        <span
          className="
            block
            w-px
            h-[32px]
            mt-3
            bg-white/10
            overflow-hidden
          "
        >
          <span className="block w-full h-1/2 bg-purple animate-scrollDown" />
        </span>

      </div>

    </section>
  )
}