import React from 'react';
import { motion } from 'framer-motion';
import { Eye, Layers, ArrowRight, Globe, Sparkles } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="relative py-24 md:py-20 bg-[#05030D] overflow-hidden">
      
      {/* Background Ambient Glow */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-[#8B2CFF]/15 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 right-10 w-96 h-96 bg-[#5B4DFF]/15 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <motion.div 
          className="max-w-3xl space-y-4 mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-panel border border-[#8B2CFF]/30 text-xs font-bold tracking-widest text-[#B84CFF] uppercase">
            <Sparkles className="w-3.5 h-3.5" />
            <span>ABOUT US</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
            Built for the <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#B84CFF] to-[#8B2CFF]">next generation</span> of trading
          </h2>
          
          <p className="text-base sm:text-lg text-[#A8A5B8] leading-relaxed">
            EXPOSE is a technology-driven ecosystem designed to simplify the way traders understand and interact with financial markets. By combining AI-assisted market analysis, technical indicators, market structure, futures intelligence, algorithmic strategies and risk-management tools, EXPOSE creates a connected environment for smarter trading decisions.
          </p>
        </motion.div>

        {/* Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Column: Vision & Approach */}
          <div className="lg:col-span-7 flex flex-col gap-6 justify-between">
            
            {/* OUR VISION Card */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="glass-panel glass-panel-hover p-8 rounded-3xl border border-[#8B2CFF]/25 relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#8B2CFF]/10 rounded-full blur-2xl group-hover:bg-[#8B2CFF]/25 transition-all" />
              
              <div className="flex items-start gap-5">
                <div className="p-3.5 rounded-2xl bg-[#8B2CFF]/20 border border-[#8B2CFF]/40 text-[#B84CFF] shrink-0">
                  <Eye className="w-6 h-6" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold tracking-wide text-white uppercase font-['Outfit']">
                    OUR VISION
                  </h3>
                  <p className="text-sm text-[#A8A5B8] leading-relaxed">
                    To develop an integrated technology environment where market intelligence, AI-assisted analysis, algorithmic strategies and blockchain utility can work together through a structured platform.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* OUR APPROACH Card */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="glass-panel glass-panel-hover p-8 rounded-3xl border border-[#8B2CFF]/25 relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#5B4DFF]/10 rounded-full blur-2xl group-hover:bg-[#5B4DFF]/25 transition-all" />
              
              <div className="flex items-start gap-5">
                <div className="p-3.5 rounded-2xl bg-[#5B4DFF]/20 border border-[#5B4DFF]/40 text-[#5B4DFF] shrink-0">
                  <Layers className="w-6 h-6 text-purple-300" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold tracking-wide text-white uppercase font-['Outfit']">
                    OUR APPROACH
                  </h3>
                  <p className="text-sm text-[#A8A5B8] leading-relaxed">
                    EXPOSE follows a modular development approach, allowing the ecosystem to progressively expand from foundational infrastructure and trading intelligence toward advanced AI capabilities, automation, integrations, staking, subscriptions and additional ecosystem services.
                  </p>
                </div>
              </div>
            </motion.div>

          </div>

          {/* Right Column: Visual Hero Banner Card */}
          <motion.div 
            className="lg:col-span-5"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="h-full glass-panel glass-panel-hover p-8 rounded-3xl border border-[#8B2CFF]/30 flex flex-col justify-between relative overflow-hidden group min-h-[340px]">
              
              {/* Background Planet Graphic Overlay */}
              <div className="absolute inset-0 z-0 opacity-40 group-hover:opacity-60 transition-opacity">
                <img
                  src="/assets/hero-bg.jpg"
                  alt="Planet Atmosphere"
                  className="w-full h-full object-cover filter contrast-125 saturate-150"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#05030D] via-[#05030D]/60 to-transparent" />
              </div>

              {/* Card Header Content */}
              <div className="relative z-10 space-y-3">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#8B2CFF]/30 border border-[#B84CFF]/40 text-xs font-bold text-purple-200">
                  <Globe className="w-3.5 h-3.5 text-[#B84CFF]" />
                  <span>GLOBAL MARKETS</span>
                </div>
                
                <h3 className="text-2xl sm:text-3xl font-black text-white leading-tight font-['Outfit']">
                  A SMARTER TRADING TOMORROW
                </h3>
                <p className="text-xs font-semibold tracking-widest text-[#B84CFF] uppercase">
                  GLOBAL MARKETS, GREATER OPPORTUNITIES.
                </p>
              </div>

              {/* Card Bottom CTA */}
              <div className="relative z-10 pt-8">
                <a
                  href="#ai-platform"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-xs font-bold tracking-wider text-white bg-[#8B2CFF]/30 hover:bg-[#8B2CFF] border border-[#B84CFF]/50 shadow-md transition-all duration-300"
                >
                  <span>Learn More</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>

            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
};

export default About;
