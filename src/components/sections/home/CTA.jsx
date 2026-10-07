import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  Sparkles,
  Cpu,
  Coins,
  Lock,
  Copy,
  Check,
  ExternalLink,
} from 'lucide-react';
import { NETWORK, TOKEN_ADDRESS } from '../../../web3/config.js';

const ContractAddress = () => {
  const tokenAddress = TOKEN_ADDRESS;
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    if (!tokenAddress) return;
    try {
      await navigator.clipboard.writeText(tokenAddress);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Clipboard can be blocked on insecure origins; the address stays selectable.
    }
  };

  const displayText = tokenAddress || 'Contract address will be announced soon';

  return (
    <div className="mt-10 rounded-2xl border border-[#8B2CFF]/30 bg-[#090719]/80 p-5 sm:p-6 text-left backdrop-blur-md shadow-[0_0_40px_rgba(139,44,255,0.15)]">
      <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
        <span className="text-[11px] font-bold uppercase tracking-[.22em] text-white">
          Official Contract Address
        </span>
        <span className="text-[10px] font-bold uppercase tracking-[.2em] text-[#B84CFF]">
          Verify before transaction
        </span>
      </div>

      <div className="mt-4 flex flex-col gap-3 sm:flex-row">
        <div className="relative flex min-w-0 flex-1 items-center gap-3 overflow-hidden rounded-xl border border-white/10 bg-[#05030D]/80 py-3 pl-5 pr-3">
          <span className="absolute inset-y-0 left-0 w-[3px] bg-gradient-to-b from-[#B84CFF] to-[#5B4DFF]" />

          <span
            className={`min-w-0 flex-1 break-all font-mono text-[13px] sm:text-sm ${
              tokenAddress ? 'text-white' : 'text-[#A8A5B8]'
            }`}
          >
            {displayText}
          </span>

          <button
            type="button"
            onClick={handleCopy}
            disabled={!tokenAddress}
            aria-label={copied ? 'Address copied' : 'Copy contract address'}
            title={copied ? 'Copied' : 'Copy'}
            className="shrink-0 rounded-lg border border-[#8B2CFF]/30 bg-[#8B2CFF]/15 p-2.5 text-purple-200 transition-all hover:border-[#B84CFF]/60 hover:bg-[#8B2CFF]/25 disabled:cursor-not-allowed disabled:opacity-40"
          >
            {copied ? <Check className="h-4 w-4 text-emerald-300" /> : <Copy className="h-4 w-4" />}
          </button>
        </div>

        <a
          href={tokenAddress ? `${NETWORK.explorer}/token/${tokenAddress}` : undefined}
          target="_blank"
          rel="noreferrer"
          aria-disabled={!tokenAddress}
          onClick={(e) => {
            if (!tokenAddress) e.preventDefault();
          }}
          className={`inline-flex shrink-0 items-center justify-center gap-2 rounded-xl border px-8 py-3.5 text-sm font-bold tracking-wide transition-all sm:min-w-[180px] ${
            tokenAddress
              ? 'border-[#B84CFF]/40 bg-[#8B2CFF]/15 text-white hover:border-[#B84CFF] hover:bg-[#8B2CFF]/25 hover:shadow-[0_0_25px_rgba(139,44,255,0.35)]'
              : 'pointer-events-none border-white/10 text-[#A8A5B8] opacity-50'
          }`}
        >
          <ExternalLink className="h-4 w-4 text-[#B84CFF]" />
          View on Explorer
        </a>
      </div>
    </div>
  );
};

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
               
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-xl text-xs font-bold tracking-wider text-white glass-panel border border-[#8B2CFF]/40 hover:border-[#B84CFF]/70 shadow-lg transition-all"
              >
                <Lock className="w-4 h-4 text-purple-300" />
                <span>START STAKING</span>
                <ArrowRight className="w-4 h-4 text-purple-300" />
              </a>

            </div>

            <ContractAddress />

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