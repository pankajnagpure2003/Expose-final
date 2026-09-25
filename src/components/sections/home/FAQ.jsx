import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus, HelpCircle, ArrowRight, Sparkles } from 'lucide-react';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0); // First item open by default

  const faqs = [
    {
      question: 'What is EXPOSE?',
      answer: 'An AI-powered trading intelligence and automated strategy ecosystem, built to bring analysis, strategy, risk management and automation into one platform.'
    },
    {
      question: 'What does the AI Platform offer?',
      answer: 'Market analysis, technical indicators, market structure, futures analytics, algorithmic strategies, risk tools and trading signals.'
    },
    {
      question: 'What is the EXPOSE Token used for?',
      answer: 'Platform access, advanced strategies, staking and ecosystem rewards, with further integrations planned as the ecosystem grows.'
    },
    {
      question: 'Are trading or staking returns guaranteed?',
      answer: 'No. EXPOSE does not guarantee trading profits, token appreciation or staking outcomes. Digital assets and trading carry risk.'
    },
    {
      question: 'Where are Presale and Staking available?',
      answer: 'Both are available through their dedicated platforms.'
    },
    {
      question: 'How can I get started?',
      answer: 'You can explore the AI platform engine features, participate in the official presale, or prepare your wallet for upcoming staking opportunities.'
    }
  ];

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="relative py-24 md:py-20 bg-[#05030D] overflow-hidden">
      
      {/* Background Lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-[#8B2CFF]/10 rounded-full blur-[170px] pointer-events-none" />

      <div className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <motion.div 
          className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
        >
          <div className="max-w-2xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-panel border border-[#8B2CFF]/30 text-xs font-bold tracking-widest text-[#B84CFF] uppercase">
              <Sparkles className="w-3.5 h-3.5" />
              <span>FAQ</span>
            </div>
            
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white uppercase tracking-tight font-['Outfit']">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="shrink-0">
            <a
              href="#presale"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-xs font-bold tracking-wider text-white bg-gradient-purple-btn border border-[#B84CFF]/40 shadow-[0_0_20px_rgba(139,44,255,0.3)] hover:shadow-[0_0_30px_rgba(184,76,255,0.6)] transition-all"
            >
              <span>View All FAQ</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </motion.div>

        {/* 2-Column Accordion Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: (idx % 2) * 0.15 }}
                className={`glass-panel rounded-2xl transition-all duration-300 border ${
                  isOpen
                    ? 'border-[#B84CFF]/50 bg-[#090719]/90 shadow-[0_0_25px_rgba(139,44,255,0.2)]'
                    : 'border-[#8B2CFF]/20 hover:border-[#8B2CFF]/40 bg-[#0D0A1F]/60'
                }`}
              >
                <button
                  onClick={() => toggleAccordion(idx)}
                  className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
                >
                  <span className="text-base sm:text-lg font-bold text-white pr-4 font-['Outfit']">
                    {faq.question}
                  </span>
                  <div className={`p-2 rounded-xl border shrink-0 transition-colors ${
                    isOpen
                      ? 'bg-[#8B2CFF] border-[#B84CFF] text-white'
                      : 'bg-[#05030D] border-purple-500/20 text-[#B84CFF]'
                  }`}>
                    {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                  </div>
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div 
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6 pt-0 text-sm text-[#A8A5B8] leading-relaxed border-t border-purple-500/10 mt-1">
                        <p className="pt-3">{faq.answer}</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default FAQ;
