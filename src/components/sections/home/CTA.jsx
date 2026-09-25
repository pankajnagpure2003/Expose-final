import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, Cpu, Coins, Lock } from 'lucide-react';

const CTA = () => {
  return (
    <section id="presale" className="relative py-28 md:py-20 bg-[#05030D] overflow-hidden">
      
      {/* Background Graphic Atmosphere Container */}
      <div className="absolute inset-0 z-0">
  <img
    src="/assets/hero-bg.jpg"
    alt="Ecosystem Portal"
    className="w-full h-full object-cover object-center opacity-50 filter saturate-150 contrast-125"
  />

  <div className="absolute inset-0 bg-gradient-to-t from-[#05030D] via-[#05030D]/60 to-[#05030D]/70" />

  <div className="absolute inset-0 radial-glow-center opacity-80" />
</div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.95, y: 30 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7 }}
          className="glass-panel p-8 sm:p-14 lg:p-20 rounded-3xl border border-[#8B2CFF]/40 shadow-[0_0_80px_rgba(139,44,255,0.3)] text-center relative overflow-hidden group"
        >
          
          {/* Internal Glow Lights */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-[#8B2CFF]/25 rounded-full blur-[120px] pointer-events-none" />
          
          {/* Content */}
          <div className="relative z-10 max-w-3xl mx-auto space-y-6">
            
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#8B2CFF]/20 border border-[#B84CFF]/40 shadow-inner">
              <Sparkles className="w-4 h-4 text-[#B84CFF] animate-pulse" />
              <span className="text-xs font-bold tracking-widest text-purple-200 uppercase">
                JOIN THE REVOLUTION
              </span>
            </div>

            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white uppercase tracking-tight leading-tight font-['Outfit']">
              Enter the <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#B84CFF] via-[#8B2CFF] to-[#5B4DFF]">EXPOSE</span> Ecosystem
            </h2>

            <p className="text-base sm:text-xl text-[#A8A5B8] max-w-2xl mx-auto font-normal">
              Analyze smarter. Build strategies. Explore the future of AI-powered trading.
            </p>

            {/* 3 Action Buttons Row */}
            <div className="pt-6 flex flex-col sm:flex-row flex-wrap items-center justify-center gap-4">
              
              <a
                href="#ai-platform"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-xl text-xs font-bold tracking-wider text-white bg-gradient-purple-btn border border-[#B84CFF]/50 shadow-[0_0_25px_rgba(139,44,255,0.4)] hover:shadow-[0_0_40px_rgba(184,76,255,0.7)] transition-all"
              >
                <Cpu className="w-4 h-4" />
                <span>EXPLORE AI PLATFORM</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#presale"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-xl text-xs font-bold tracking-wider text-white bg-[#090719] border border-[#8B2CFF]/50 hover:border-[#B84CFF] shadow-lg transition-all"
              >
                <Coins className="w-4 h-4 text-[#B84CFF]" />
                <span>JOIN PRESALE</span>
                <ArrowRight className="w-4 h-4 text-[#B84CFF]" />
              </a>

              <a
                id="staking"
                href="#staking"
                onClick={(e) => {
                  e.preventDefault();
                  alert("EXPOSE Staking platform launching alongside mainnet deployment.");
                }}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-xl text-xs font-bold tracking-wider text-white glass-panel border border-[#8B2CFF]/40 hover:border-[#B84CFF]/70 shadow-lg transition-all"
              >
                <Lock className="w-4 h-4 text-purple-300" />
                <span>START STAKING</span>
                <ArrowRight className="w-4 h-4 text-purple-300" />
              </a>

            </div>

            {/* Bottom Slogan */}
            <div className="pt-8 text-xs font-extrabold tracking-widest text-[#B84CFF] uppercase">
              INTELLIGENCE MOVES MARKETS.
            </div>

          </div>

        </motion.div>

      </div>
    </section>
  );
};

export default CTA;
