import Countdown from './Countdown'
import BuySection from './BuySection'

export default function PresaleSection() {
  return (
    <section
      id="presale-area"
      className="relative overflow-hidden bg-black text-white"
    >

      {/* =====================================================
          CONTINUOUS BACKGROUND
      ====================================================== */}

      <div className="pointer-events-none absolute inset-0 overflow-hidden">

        {/* Main center glow */}
        <div className="absolute left-1/2 top-[8%] h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-purple/[0.055] blur-[150px] animate-pulseSlow" />

        {/* Countdown glow */}
        <div className="absolute left-[15%] top-[10%] h-[320px] w-[320px] rounded-full bg-purple/[0.035] blur-[120px]" />

        {/* Middle glow */}
        <div className="absolute right-[10%] top-[38%] h-[400px] w-[400px] rounded-full bg-purple/[0.04] blur-[140px]" />

        {/* Buy section glow */}
        <div className="absolute left-[5%] bottom-[5%] h-[420px] w-[420px] rounded-full bg-purple/[0.035] blur-[140px]" />

        {/* Subtle right glow */}
        <div className="absolute right-[-180px] bottom-[-100px] h-[500px] w-[500px] rounded-full bg-purple/[0.045] blur-[150px]" />

        {/* Continuous grid */}
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage:
              'linear-gradient(rgba(255,255,255,.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.3) 1px, transparent 1px)',
            backgroundSize: '55px 55px',
          }}
        />

        {/* Soft vertical light */}
        <div className="absolute left-1/2 top-0 h-full w-px bg-gradient-to-b from-transparent via-purple/[0.08] to-transparent" />

      </div>


      {/* =====================================================
          COUNTDOWN
      ====================================================== */}

      <div className="relative">
        <Countdown />
      </div>


      {/* =====================================================
          BUY SECTION
      ====================================================== */}

      <div className="relative">
        <BuySection />
      </div>


      {/* =====================================================
          BOTTOM FADE
      ====================================================== */}

      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent" />

    </section>
  )
}