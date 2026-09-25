import React from 'react';
import { motion } from 'framer-motion';
import { Users, BarChart3, ShieldCheck, Layers, Activity } from 'lucide-react';

const Stats = () => {
  const stats = [
    {
      id: 'traders',
      icon: Users,
      value: '350K+',
      label: 'Global Traders',
      color: 'text-purple-300',
    },
    {
      id: 'volume',
      icon: BarChart3,
      value: '$2.1B+',
      label: 'Trading Volume Analyzed',
      color: 'text-violet-300',
    },
    {
      id: 'uptime',
      icon: ShieldCheck,
      value: '99.9%',
      label: 'System Uptime',
      color: 'text-emerald-400',
    },
    {
      id: 'exchanges',
      icon: Layers,
      value: '10+',
      label: 'Exchange Integrations',
      color: 'text-blue-300',
    },
  ];

  return (
    <section className="relative z-20 -mt-16  py-8 border-y border-[#8B2CFF]/20 bg-[#090719]/80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <motion.div 
          className="grid grid-cols-2 md:grid-cols-5 gap-6 lg:gap-8 items-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
        >
          
          {stats.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex items-center gap-3.5 p-3 rounded-2xl glass-panel-hover border border-transparent hover:border-[#8B2CFF]/20 transition-all"
              >
                <div className="p-2.5 rounded-xl bg-[#8B2CFF]/15 border border-[#8B2CFF]/30 text-[#B84CFF]">
                  <IconComponent className="w-5 h-5" />
                </div>
                <div>
                  <div className={`text-xl sm:text-2xl font-black font-['Outfit'] tracking-tight ${item.color}`}>
                    {item.value}
                  </div>
                  <div className="text-xs font-semibold text-[#A8A5B8] uppercase tracking-wider">
                    {item.label}
                  </div>
                </div>
              </motion.div>
            );
          })}

          {/* Real-time Market Insights Equalizer Badge */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="col-span-2 md:col-span-1 flex items-center justify-between md:justify-end gap-3 p-3.5 rounded-2xl glass-panel border border-[#8B2CFF]/30 shadow-[0_0_15px_rgba(139,44,255,0.15)]"
          >
            <div className="text-left">
              <div className="flex items-center gap-1.5 text-xs font-bold tracking-wider text-purple-200 uppercase">
                <Activity className="w-3.5 h-3.5 text-[#B84CFF] animate-pulse" />
                <span>REAL-TIME</span>
              </div>
              <div className="text-[11px] font-medium text-[#A8A5B8]">
                MARKET INSIGHTS
              </div>
            </div>

            {/* Equalizer Bars */}
            <div className="flex items-end gap-1 h-5 px-2 py-0.5 rounded bg-[#05030D] border border-purple-500/20">
              <div className="w-1 bg-[#8B2CFF] rounded-full animate-eq-1" />
              <div className="w-1 bg-[#B84CFF] rounded-full animate-eq-2" />
              <div className="w-1 bg-[#5B4DFF] rounded-full animate-eq-3" />
              <div className="w-1 bg-[#8B2CFF] rounded-full animate-eq-4" />
            </div>
          </motion.div>

        </motion.div>

      </div>
    </section>
  );
};

export default Stats;
