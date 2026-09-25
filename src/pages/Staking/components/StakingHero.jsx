import DotGrid from "./DotGrid";

export default function StakingHero() {
  return (
    <section className="relative min-h-[700px] overflow-hidden bg-black pt-[110px] pb-16 text-white md:min-h-[760px] md:pt-[150px] md:pb-[100px]">

      {/* DOT GRID BACKGROUND */}
      <div className="pointer-events-none absolute inset-0 z-0">
        <DotGrid
          dotSize={3}
          gap={32}
          baseColor="#241a35"
          activeColor="#a855f7"
          proximity={180}
          speedTrigger={100}
          shockRadius={250}
          shockStrength={5}
          maxSpeed={5000}
          resistance={750}
          returnDuration={1.5}
        />
      </div>

      {/* PURPLE ATMOSPHERE */}
      <div
        className="
          pointer-events-none
          absolute
          inset-0
          z-[1]
          bg-[radial-gradient(circle_at_50%_40%,rgba(139,92,246,0.10),transparent_45%)]
        "
      />

      {/* BOTTOM FADE */}
      <div
        className="
          pointer-events-none
          absolute
          inset-x-0
          bottom-0
          z-[2]
          h-[180px]
          bg-gradient-to-t
          from-black
          via-black/60
          to-transparent
        "
      />

      {/* CONTENT */}
      <div className="relative z-10 mx-auto w-[min(100%-32px,560px)] md:w-[min(1180px,calc(100%-48px))]">

        {/* LABEL */}
        <div
          className="
            flex
            items-center
            gap-[9px]
            text-purple
            text-[10px]
            font-bold
            tracking-[.18em]
            uppercase
            animate-fadeUp
          "
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inset-0 rounded-full bg-purple/40 animate-ping" />

            <span className="relative h-2 w-2 rounded-full bg-purple shadow-[0_0_14px_rgba(155,77,255,.8)]" />
          </span>

          EXPOSE / Staking portal
        </div>

        {/* HEADING */}
        <h1
          className="
            heading-tight
            my-[22px]
            max-w-[950px]
            uppercase
            text-[clamp(46px,9vw,126px)]
            leading-[.87]
            tracking-[-.035em]
            animate-fadeUp
            [animation-delay:.08s]
          "
        >
          Stake EXPOSE.
          <br />

          <span className="text-purple">
            Participate.
          </span>
        </h1>

        {/* DESCRIPTION */}
        <p
          className="
            max-w-[440px]
            text-base
            leading-relaxed
            text-[#aaa7b0]
            animate-fadeUp
            [animation-delay:.16s]
          "
        >
          Lock your EXPOSE Tokens for a selected period and participate
          in the proposed staking program.
        </p>

        {/* SECONDARY DESCRIPTION */}
        <p
          className="
            mt-5
            max-w-[520px]
            text-sm
            leading-relaxed
            text-darkmuted
            animate-fadeUp
            [animation-delay:.22s]
          "
        >
          EXPOSE offers planned staking periods designed to support
          long-term ecosystem participation — giving holders a structured
          way to commit to the project while the platform, strategies and
          rewards infrastructure continue to develop.
        </p>

        {/* BOTTOM META */}
        <div
          className="
            mt-10
            flex
            items-center
            gap-3
            animate-fadeUp
            [animation-delay:.28s]
          "
        >
          <span className="h-px w-12 bg-gradient-to-r from-purple to-transparent" />

          <span className="text-[8px] uppercase tracking-[.2em] text-[#55515d]">
            EXPOSE / STAKING
          </span>
        </div>

      </div>
    </section>
  );
}