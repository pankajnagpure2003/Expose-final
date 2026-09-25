import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Coins, Layers, DollarSign, Network, PieChart, Info } from 'lucide-react';

const Tokenomics = () => {
  const [activeSegment, setActiveSegment] = useState(null);

  const allocations = [
    { name: 'Community & Subscription Rewards', share: '30%', percentage: 30, color: '#8B2CFF' },
    { name: 'Trading Ecosystem / Bot Rewards', share: '20%', percentage: 20, color: '#B84CFF' },
    { name: 'Presale / Public Sale', share: '15%', percentage: 15, color: '#5B4DFF' },
    { name: 'Liquidity & DEX', share: '10%', percentage: 10, color: '#00F0FF' },
    { name: 'Treasury & Ecosystem', share: '10%', percentage: 10, color: '#EC4899' },
    { name: 'Team, Marketing & Strategic Allocation', share: '15%', percentage: 15, color: '#F59E0B' },
  ];

  // Helper for SVG donut chart rendering
  const renderDonutSlices = () => {
    let accumulatedAngle = 0;
    const radius = 80;
    const strokeWidth = 28;
    const center = 100;
    const circumference = 2 * Math.PI * radius;

    return allocations.map((alloc, idx) => {
      const strokeDasharray = `${(alloc.percentage / 100) * circumference} ${circumference}`;
      const strokeDashoffset = -((accumulatedAngle / 100) * circumference);
      accumulatedAngle += alloc.percentage;

      const isHovered = activeSegment === idx;

      return (
        <circle
          key={alloc.name}
          cx={center}
          cy={center}
          r={radius}
          fill="transparent"
          stroke={alloc.color}
          strokeWidth={isHovered ? strokeWidth + 6 : strokeWidth}
          strokeDasharray={strokeDasharray}
          strokeDashoffset={strokeDashoffset}
          className="transition-all duration-300 cursor-pointer origin-center transform hover:scale-105"
          onMouseEnter={() => setActiveSegment(idx)}
          onMouseLeave={() => setActiveSegment(null)}
          style={{
            transformOrigin: '50% 50%',
            transform: `rotate(-90deg)`,
            filter: isHovered ? `drop-shadow(0 0 12px ${alloc.color})` : 'none'
          }}
        />
      );
    });
  };

  return (
    <section id="tokenomics" className="relative py-24 md:py-20 bg-[#090719] overflow-hidden">
      
      {/* Background Radial Glow */}
      <div className="absolute top-1/3 right-10 w-[600px] h-[600px] bg-[#8B2CFF]/10 rounded-full blur-[180px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-[500px] h-[500px] bg-[#5B4DFF]/10 rounded-full blur-[180px] pointer-events-none" />

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
            <span>TOKEN & TOKENOMICS</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white uppercase tracking-tight font-['Outfit']">
            EXPOSE Token
          </h2>
          
          <p className="text-base sm:text-lg text-[#A8A5B8]">
            Designed to power AI analytical features, platform subscriptions, signal feeds and ecosystem rewards on BNB Smart Chain.
          </p>
        </motion.div>

        {/* 3 Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Column 1: Token Specs */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-4 glass-panel glass-panel-hover p-8 rounded-3xl border border-[#8B2CFF]/30 flex flex-col justify-between"
          >
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <div className="p-3 rounded-2xl bg-[#8B2CFF]/20 border border-[#8B2CFF]/40 text-[#B84CFF]">
                  <Coins className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-white uppercase font-['Outfit']">
                  TOKEN SPECIFICATIONS
                </h3>
              </div>

              <div className="space-y-4 pt-2">
                
                {/* Total Supply */}
                <div className="p-4 rounded-2xl bg-[#05030D] border border-purple-500/20 space-y-1">
                  <div className="text-[11px] font-bold text-[#A8A5B8] uppercase tracking-wider">TOTAL SUPPLY</div>
                  <div className="text-xl font-black font-mono text-white">1,000,000,000 EXPOSE</div>
                </div>

                {/* Decimals */}
                <div className="p-4 rounded-2xl bg-[#05030D] border border-purple-500/20 space-y-1">
                  <div className="text-[11px] font-bold text-[#A8A5B8] uppercase tracking-wider">DECIMALS</div>
                  <div className="text-xl font-black font-mono text-purple-200">18</div>
                </div>

                {/* Planning Price */}
                <div className="p-4 rounded-2xl bg-[#05030D] border border-purple-500/20 space-y-1">
                  <div className="text-[11px] font-bold text-[#A8A5B8] uppercase tracking-wider">PLANNING PRICE</div>
                  <div className="text-xl font-black font-mono text-emerald-400">$0.01</div>
                </div>

                {/* Proposed Network */}
                <div className="p-4 rounded-2xl bg-[#05030D] border border-purple-500/20 space-y-1">
                  <div className="text-[11px] font-bold text-[#A8A5B8] uppercase tracking-wider">PROPOSED NETWORK</div>
                  <div className="text-sm font-bold text-amber-300 flex items-center gap-2">
                    <Network className="w-4 h-4" />
                    <span>BNB Smart Chain (BEP-20)</span>
                  </div>
                </div>

              </div>
            </div>
          </motion.div>

          {/* Column 2: Allocation Breakdown & Interactive Donut Chart */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-5 glass-panel glass-panel-hover p-8 rounded-3xl border border-[#8B2CFF]/30 flex flex-col justify-between"
          >
            
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-bold text-white uppercase font-['Outfit']">
                  ALLOCATION BREAKDOWN
                </h3>
                <PieChart className="w-5 h-5 text-[#B84CFF]" />
              </div>

              {/* SVG Interactive Donut Chart */}
              <div className="relative w-48 h-48 sm:w-56 sm:h-56 mx-auto flex items-center justify-center">
                <svg viewBox="0 0 200 200" className="w-full h-full">
                  {renderDonutSlices()}
                </svg>
                
                {/* Center Badge */}
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center pointer-events-none">
                  <span className="text-2xl sm:text-3xl font-black text-white font-['Outfit']">1B</span>
                  <span className="text-[10px] font-bold tracking-widest text-[#B84CFF] uppercase">EXPOSE</span>
                </div>
              </div>

              {/* Allocations Legend */}
              <div className="space-y-2.5 pt-2">
                {allocations.map((item, idx) => {
                  const isHovered = activeSegment === idx;
                  return (
                    <div
                      key={item.name}
                      onMouseEnter={() => setActiveSegment(idx)}
                      onMouseLeave={() => setActiveSegment(null)}
                      className={`flex items-center justify-between p-2.5 rounded-xl transition-all cursor-pointer ${
                        isHovered ? 'bg-[#8B2CFF]/20 border border-[#B84CFF]/40' : 'bg-[#05030D]/60 border border-transparent'
                      }`}
                    >
                      <div className="flex items-center gap-2.5">
                        <span
                          className="w-3 h-3 rounded-full shrink-0"
                          style={{ backgroundColor: item.color, boxShadow: `0 0 8px ${item.color}` }}
                        />
                        <span className="text-xs font-semibold text-gray-200">
                          {item.name}
                        </span>
                      </div>
                      <span className="text-xs font-bold font-mono text-white">
                        {item.share}
                      </span>
                    </div>
                  );
                })}
              </div>

            </div>

          </motion.div>

          {/* Column 3: 3D Token Card Showcase */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="lg:col-span-3 glass-panel glass-panel-hover p-8 rounded-3xl border border-[#8B2CFF]/30 flex flex-col items-center justify-between text-center relative overflow-hidden group min-h-[350px]"
          >
            
            <div className="absolute inset-0 bg-gradient-to-b from-[#8B2CFF]/15 via-transparent to-[#5B4DFF]/20 pointer-events-none" />

            <div className="relative z-10 w-full space-y-4">
              <span className="inline-block px-3 py-1 rounded-full bg-[#8B2CFF]/30 border border-[#B84CFF]/40 text-[10px] font-extrabold text-purple-200 uppercase tracking-widest">
                BEP-20 UTILITY
              </span>
            </div>

            {/* 3D Glowing Orb Visual */}
            <div className="relative z-10 my-6 flex flex-col items-center">
              <div className="relative w-36 h-36 sm:w-40 sm:h-40 flex items-center justify-center">
                <div className="absolute inset-0 rounded-full border border-dashed border-[#B84CFF]/50 animate-[spin_15s_linear_infinite]" />
                <div className="absolute inset-3 rounded-full bg-gradient-to-tr from-[#8B2CFF] to-[#5B4DFF] opacity-30 blur-xl animate-pulse" />
                <img
                  src="/assets/hero-bg.jpg"
                  alt="EXPOSE Coin"
                  className="w-28 h-28 sm:w-32 sm:h-32 object-cover rounded-full border-2 border-[#B84CFF] shadow-[0_0_35px_rgba(184,76,255,0.7)] animate-float"
                />
              </div>
            </div>

            <div className="relative z-10 space-y-2">
              <h4 className="text-lg font-black text-white uppercase tracking-tight font-['Outfit']">
                MORE THAN A TOKEN.
              </h4>
              <p className="text-xs font-bold tracking-widest text-[#B84CFF] uppercase">
                A MOVEMENT.
              </p>
            </div>

          </motion.div>

        </div>

      </div>
    </section>
  );
};

export default Tokenomics;
