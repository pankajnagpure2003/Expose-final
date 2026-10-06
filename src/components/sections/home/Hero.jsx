import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Cpu, Sparkles, LineChart, Shield, Zap } from 'lucide-react';
import DotGrid from '../../../pages/Staking/components/DotGrid.jsx';

const Hero = () => {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden bg-black px-0 py-24 text-white md:py-28"
    >

      {/* ================= BACKGROUND ================= */}
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

      <div className="pointer-events-none absolute inset-0 z-[1] bg-[radial-gradient(circle_at_50%_40%,rgba(139,92,246,0.10),transparent_45%)]" />

      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-[2] h-[180px] bg-gradient-to-t from-black via-black/60 to-transparent" />

      <div className="relative z-10 mx-auto flex w-full max-w-[90rem] items-center px-4 sm:px-6 lg:px-8">
        <div className="flex w-full items-center justify-center">

          {/* Left Hero Content */}
          <div className="mx-auto flex w-full max-w-5xl flex-col items-center space-y-6 text-center">

            {/* Tag Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full glass-panel border border-[#B84CFF]/30 shadow-[0_0_15px_rgba(139,44,255,0.25)]"
            >
              <Sparkles className="w-4 h-4 text-[#B84CFF] animate-pulse" />
              <span className="text-xs font-bold tracking-widest uppercase text-purple-200">
                AI-POWERED TRADING INTELLIGENCE
              </span>
            </motion.div>

            {/* Main Headline */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-2"
            >
              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black tracking-tight leading-[1.08]">
                <span className="block text-white">TRADE WITH INTELLIGENCE.</span>
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#B84CFF] via-[#8B2CFF] to-[#5B4DFF] drop-shadow-[0_0_35px_rgba(184,76,255,0.5)]">
                  POWERED BY AI.
                </span>
              </h1>
            </motion.div>

            {/* Paragraph Body */}
            <motion.p
  initial={{ opacity: 0, y: 25 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6, delay: 0.3 }}
  className="mx-auto max-w-2xl text-sm font-normal leading-relaxed text-[#A8A5B8] sm:text-base"
>
  <strong className="text-white font-semibold">EXPOSE</strong> is an AI-powered
  trading intelligence ecosystem built to bring market analysis, structured
  strategies, risk management and automated trading tools together in one
  powerful platform. It turns complex market data into clear, structured and
  actionable trading intelligence.
</motion.p>

            {/* Feature Highlights Pills */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-wrap justify-center gap-2 pt-2 text-xs font-bold tracking-wider text-white sm:gap-3"
            >
              <div className="flex items-center gap-2 px-3.5 py-2 rounded-lg bg-[#0D0A1F]/80 border border-[#8B2CFF]/30 shadow-inner">
                <Cpu className="w-3.5 h-3.5 text-[#B84CFF]" />
                <span>AI ANALYSIS</span>
              </div>
              <div className="flex items-center gap-2 px-3.5 py-2 rounded-lg bg-[#0D0A1F]/80 border border-[#8B2CFF]/30 shadow-inner">
                <LineChart className="w-3.5 h-3.5 text-[#5B4DFF]" />
                <span>SMART STRATEGIES</span>
              </div>
              <div className="flex items-center gap-2 px-3.5 py-2 rounded-lg bg-[#0D0A1F]/80 border border-[#8B2CFF]/30 shadow-inner">
                <Shield className="w-3.5 h-3.5 text-[#B84CFF]" />
                <span>RISK MANAGEMENT</span>
              </div>
              <div className="flex items-center gap-2 px-3.5 py-2 rounded-lg bg-[#0D0A1F]/80 border border-[#8B2CFF]/30 shadow-inner">
                <Zap className="w-3.5 h-3.5 text-purple-300" />
                <span>AUTOMATION</span>
              </div>
            </motion.div>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex w-full flex-col justify-center gap-4 pt-4 sm:flex-row sm:items-center"
            >
              <Link
                to="/presale#presale-area"
                className="group relative inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl text-sm font-bold tracking-wider text-white bg-gradient-purple-btn border border-[#B84CFF]/50 shadow-[0_0_25px_rgba(139,44,255,0.45)] hover:shadow-[0_0_40px_rgba(184,76,255,0.7)] transition-all duration-300 active:scale-95"
              >
                <span>BUY NOW</span>
                <ArrowRight className="w-4 h-4 text-purple-100 group-hover:translate-x-1 transition-transform" />
              </Link>

              <a
                href="https://expose-1.gitbook.io/expose-docs"
                className="group inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl text-sm font-bold tracking-wider text-white glass-panel border border-[#8B2CFF]/40 hover:border-[#B84CFF]/70 hover:bg-[#8B2CFF]/15 shadow-lg transition-all duration-300 active:scale-95"
              >
                <span>WHITEPAPER</span>
                <ArrowRight className="w-4 h-4 text-[#B84CFF] group-hover:translate-x-1 transition-transform" />
              </a>
            </motion.div>

          </div>

          {/* Right Hero Graphic Showcase */}

        </div>
      </div>
    </section>
  );
};

export default Hero;
