import React from 'react';
import { motion } from 'framer-motion';
import { 
  Sparkles, 
  Cpu, 
  Bot, 
  Layers, 
  Coins, 
  ArrowRight,
  CheckCircle2
} from 'lucide-react';

const Ecosystem = () => {
  const pillars = [
    {
      id: 'trading-intelligence',
      title: 'TRADING INTELLIGENCE',
      icon: Cpu,
      accent: 'border-[#8B2CFF]/40 text-[#8B2CFF]',
      description: 'AI-assisted market analysis, technical analysis, market structure, futures intelligence and structured signals.',
      features: ['Real-time Processing', 'Multi-Indicator Synthesis', 'Regime Detection']
    },
    {
      id: 'strategy-automation',
      title: 'STRATEGY & AUTOMATION',
      icon: Bot,
      accent: 'border-[#B84CFF]/40 text-[#B84CFF]',
      description: 'Strategy-oriented processing with a roadmap toward optional automated execution through supported exchange APIs.',
      features: ['Automated Workflows', 'API Integration', 'Custom Param Rules']
    },
    {
      id: 'platform-services',
      title: 'PLATFORM SERVICES',
      icon: Layers,
      accent: 'border-[#5B4DFF]/40 text-[#5B4DFF]',
      description: 'Proposed subscription access through tier levels providing tailored analytical and automated functionalities.',
      badgeList: ['STARTER', 'PROFESSIONAL', 'ADVANCED', 'ELITE'],
    },
    {
      id: 'expose-token',
      title: 'EXPOSE TOKEN',
      icon: Coins,
      accent: 'border-[#B84CFF]/50 text-amber-300',
      description: 'The EXPOSE token is proposed as the utility layer connecting eligible platform functions with the broader ecosystem.',
      utilities: [
        'Premium Platform Access',
        'Strategy & Signal Access',
        'Algorithmic Trading Features',
        'Staking Rewards',
        'Subscription Benefits',
        'Ecosystem Integrations'
      ]
    },
  ];

  return (
    <section id="ecosystem" className="relative py-24 md:py-20 bg-[#05030D] overflow-hidden">
      
      {/* Background Lighting */}
      <div className="absolute top-1/2 -right-40 w-96 h-96 bg-[#8B2CFF]/15 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-10 -left-40 w-96 h-96 bg-[#5B4DFF]/15 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <motion.div 
          className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
        >
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-panel border border-[#8B2CFF]/30 text-xs font-bold tracking-widest text-[#B84CFF] uppercase">
              <Sparkles className="w-3.5 h-3.5" />
              <span>ECOSYSTEM</span>
            </div>
            
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white uppercase tracking-tight font-['Outfit']">
              ONE CONNECTED TECHNOLOGY ECOSYSTEM
            </h2>
            
            <p className="text-base sm:text-lg text-[#A8A5B8]">
              EXPOSE combines multiple platform and blockchain components within one proposed environment.
            </p>
          </div>

          <div className="shrink-0">
            <a
              href="#tokenomics"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-xs font-bold tracking-wider text-white bg-gradient-purple-btn border border-[#B84CFF]/40 shadow-[0_0_20px_rgba(139,44,255,0.3)] hover:shadow-[0_0_30px_rgba(184,76,255,0.6)] transition-all"
            >
              <span>Explore Ecosystem</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </motion.div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((pillar, index) => {
            const IconComp = pillar.icon;
            return (
              <motion.div
                key={pillar.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass-panel glass-panel-hover p-8 rounded-3xl border border-[#8B2CFF]/20 flex flex-col justify-between relative group"
              >
                <div className="space-y-6">
                  
                  {/* Pillar Icon Box */}
                  <div className="flex items-center justify-between">
                    <div className="p-4 rounded-2xl bg-[#090719] border border-[#8B2CFF]/30 shadow-inner">
                      <IconComp className="w-7 h-7 text-[#B84CFF]" />
                    </div>
                    <span className="text-xs font-mono font-bold text-purple-300">0{pillars.indexOf(pillar) + 1}</span>
                  </div>

                  {/* Pillar Title */}
                  <h3 className="text-xl font-bold text-white uppercase tracking-wide font-['Outfit']">
                    {pillar.title}
                  </h3>

                  {/* Pillar Description */}
                  <p className="text-xs text-[#A8A5B8] leading-relaxed">
                    {pillar.description}
                  </p>

                  {/* Features / Tier Badges / Utilities */}
                  {pillar.badgeList && (
                    <div className="space-y-2 pt-2">
                      <div className="text-[11px] font-bold text-purple-300 uppercase tracking-wider">Tiers:</div>
                      <div className="flex flex-wrap gap-1.5">
                        {pillar.badgeList.map((tier) => (
                          <span
                            key={tier}
                            className="px-2.5 py-1 rounded-lg bg-[#8B2CFF]/20 border border-[#B84CFF]/40 text-[10px] font-bold text-white font-mono"
                          >
                            {tier}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  {pillar.utilities && (
                    <div className="space-y-2 pt-2 border-t border-purple-500/15">
                      <div className="text-[11px] font-bold text-amber-300 uppercase tracking-wider">Utility Includes:</div>
                      <div className="grid grid-cols-1 gap-1">
                        {pillar.utilities.map((util, i) => (
                          <div key={i} className="flex items-center gap-2 text-xs text-purple-200">
                            <CheckCircle2 className="w-3.5 h-3.5 text-[#B84CFF] shrink-0" />
                            <span>{util}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {pillar.features && (
                    <div className="space-y-2 pt-2 border-t border-purple-500/15">
                      {pillar.features.map((feat, i) => (
                        <div key={i} className="flex items-center gap-2 text-xs text-purple-200">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#5B4DFF]" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                  )}

                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default Ecosystem;
