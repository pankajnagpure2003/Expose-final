import React from 'react';
import { motion } from 'framer-motion';
import { 
  Database, 
  TrendingUp, 
  GitCommit, 
  CandlestickChart, 
  BrainCircuit, 
  ShieldAlert, 
  Bell, 
  Bot,
  ArrowRight,
  Sparkles
} from 'lucide-react';

const AIPlatform = () => {
  const platformFeatures = [
    {
      id: 'market-data',
      title: 'MARKET DATA',
      icon: Database,
      accentColor: 'from-[#5B4DFF] to-[#8B2CFF]',
      iconColor: 'text-[#5B4DFF]',
      description: 'The foundation of the platform receives and organizes relevant market information for further analysis.',
    },
    {
      id: 'technical-analysis',
      title: 'TECHNICAL ANALYSIS',
      icon: TrendingUp,
      accentColor: 'from-[#8B2CFF] to-[#B84CFF]',
      iconColor: 'text-[#8B2CFF]',
      description: 'The proposed intelligence engine can process indicators including:',
      tags: ['RSI', 'MACD', 'EMA / SMA', 'VWAP', 'Bollinger Bands', 'ATR', 'Volume']
    },
    {
      id: 'market-structure',
      title: 'MARKET STRUCTURE',
      icon: GitCommit,
      accentColor: 'from-[#00F0FF] to-[#5B4DFF]',
      iconColor: 'text-cyan-400',
      description: 'The platform incorporates market-structure concepts including:',
      tags: ['Break of Structure', 'Change of Character', 'Support & Resistance', 'Breakouts', 'Liquidity-related info']
    },
    {
      id: 'futures-intelligence',
      title: 'FUTURES INTELLIGENCE',
      icon: CandlestickChart,
      accentColor: 'from-[#FF9900] to-[#B84CFF]',
      iconColor: 'text-amber-400',
      description: 'The proposed futures analytics layer can incorporate:',
      tags: ['Open Interest', 'Funding Rates', 'Liquidation Data', 'Volatility', 'Market-Regime Info']
    },
    {
      id: 'ai-strategy',
      title: 'AI & ALGORITHMIC STRATEGY',
      icon: BrainCircuit,
      accentColor: 'from-[#B84CFF] to-[#8B2CFF]',
      iconColor: 'text-[#B84CFF]',
      description: 'Analytical inputs can be combined through AI and algorithmic processing to generate strategy-oriented outputs and scoring.',
    },
    {
      id: 'risk-management',
      title: 'RISK MANAGEMENT',
      icon: ShieldAlert,
      accentColor: 'from-[#10B981] to-[#059669]',
      iconColor: 'text-emerald-400',
      description: 'The proposed risk layer incorporates:',
      tags: ['Entry Parameters', 'Stop-Loss', 'Take-Profit', 'Risk / Reward', 'Position Sizing']
    },
    {
      id: 'signals-alerts',
      title: 'SIGNALS & ALERTS',
      icon: Bell,
      accentColor: 'from-[#3B82F6] to-[#8B2CFF]',
      iconColor: 'text-blue-400',
      description: 'The platform is designed to provide structured outputs such as:',
      highlightBadge: 'LONG  |  SHORT  |  WAIT',
      highlightNote: 'where technically appropriate.'
    },
    {
      id: 'optional-automation',
      title: 'OPTIONAL AUTOMATION',
      icon: Bot,
      accentColor: 'from-[#8B2CFF] to-[#EC4899]',
      iconColor: 'text-pink-400',
      description: 'Supported exchange APIs may subsequently enable automated trading workflows, subject to implementation, permissions, security testing and user authorization.',
    },
  ];

  return (
    <section id="ai-platform" className="relative py-10 md:py-20 bg-[#090719] overflow-hidden">
      
      {/* Background Lighting */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[#8B2CFF]/10 rounded-full blur-[160px] pointer-events-none" />

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
              <span>AI PLATFORM</span>
            </div>
            
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white uppercase tracking-tight font-['Outfit']">
              INTELLIGENCE BUILT AROUND MARKET DATA
            </h2>
            
            <p className="text-base sm:text-lg text-[#A8A5B8]">
              EXPOSE proposes a layered trading-intelligence engine designed to process multiple forms of market information before generating structured analytical outputs.
            </p>
          </div>

          <div className="shrink-0">
            <a
              href="#ecosystem"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-xs font-bold tracking-wider text-white bg-gradient-purple-btn border border-[#B84CFF]/40 shadow-[0_0_20px_rgba(139,44,255,0.3)] hover:shadow-[0_0_30px_rgba(184,76,255,0.6)] transition-all"
            >
              <span>Explore AI Platform</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </motion.div>

        {/* 4-Column Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {platformFeatures.map((item, index) => {
            const IconComp = item.icon;
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: (index % 4) * 0.1 }}
                className="glass-panel glass-panel-hover p-6 rounded-3xl border border-[#8B2CFF]/20 flex flex-col justify-between relative overflow-hidden group"
              >
                {/* Glowing Top Line Accent */}
                <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${item.accentColor}`} />

                <div className="space-y-4">
                  {/* Icon Header */}
                  <div className="flex items-center justify-between">
                    <div className={`p-3 rounded-2xl bg-[#05030D] border border-purple-500/20 ${item.iconColor}`}>
                      <IconComp className="w-6 h-6" />
                    </div>
                    <span className="text-[10px] font-bold text-purple-300 font-mono">EXPOSE AI</span>
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-bold text-white uppercase tracking-wide font-['Outfit']">
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="text-xs text-[#A8A5B8] leading-relaxed">
                    {item.description}
                  </p>

                  {/* Tags List if available */}
                  {item.tags && (
                    <ul className="space-y-1.5 pt-2 border-t border-purple-500/10">
                      {item.tags.map((tag, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-xs text-purple-200 font-medium">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#B84CFF]" />
                          <span>{tag}</span>
                        </li>
                      ))}
                    </ul>
                  )}

                  {/* Highlight Badge for Signals */}
                  {item.highlightBadge && (
                    <div className="pt-3 space-y-2">
                      <div className="px-3 py-2 rounded-xl bg-[#05030D] border border-[#B84CFF]/40 text-center text-xs font-mono font-bold text-[#B84CFF] shadow-inner">
                        {item.highlightBadge}
                      </div>
                      <p className="text-[11px] text-[#A8A5B8] italic text-center">
                        {item.highlightNote}
                      </p>
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

export default AIPlatform;
