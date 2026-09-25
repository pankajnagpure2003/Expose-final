import React, { useState } from 'react';
import { Send, ShieldAlert } from 'lucide-react';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail('');
      setTimeout(() => setSubscribed(false), 4000);
    }
  };

  return (
    <footer className="relative bg-[#05030D] border-t border-[#8B2CFF]/20 pt-16 pb-12 overflow-hidden">
      
      {/* Background Subtle Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-[250px] bg-gradient-to-t from-[#8B2CFF]/10 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main Footer Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-purple-500/15">
          
          {/* Brand & Systems Online */}
          <div className="lg:col-span-4 space-y-6">
            <a href="#home" className="inline-block">
              <img
  src="/assets/expose-logo.png"
  alt="EXPOSE Logo"
  className="h-11 w-auto object-contain"
  onError={(e) => {
    e.currentTarget.style.display = 'none';
    e.currentTarget.nextElementSibling.style.display = 'block';
  }}
/>
              <div className="hidden font-['Outfit'] font-black text-2xl text-white">
                <span className="text-[#8B2CFF]">E</span>XPOSE
              </div>
            </a>

            <p className="text-xs text-[#A8A5B8] leading-relaxed max-w-sm">
              AI-powered trading intelligence & automated strategy ecosystem. Turning market complexity into structured decision advantage.
            </p>

            {/* Systems Online Status Pill */}
            {/* <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-emerald-950/60 border border-emerald-500/30 text-xs font-mono font-bold text-emerald-400">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
              <span>SYSTEMS ONLINE</span>
            </div> */}

            {/* Social Icons */}
            <div className="flex items-center gap-3 pt-2">
              {/* X / Twitter */}
              <a href="#" className="p-2.5 rounded-xl bg-[#090719] border border-purple-500/20 text-[#A8A5B8] hover:text-[#B84CFF] hover:border-[#B84CFF]/50 transition-all" aria-label="X Twitter">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
              </a>
              {/* Telegram */}
              <a href="#" className="p-2.5 rounded-xl bg-[#090719] border border-purple-500/20 text-[#A8A5B8] hover:text-[#B84CFF] hover:border-[#B84CFF]/50 transition-all" aria-label="Telegram">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69.01-.03.01-.14-.07-.2-.08-.06-.19-.04-.27-.02-.12.02-1.96 1.25-5.54 3.69-.52.36-1 .54-1.42.53-.47-.01-1.37-.26-2.04-.48-.82-.27-1.47-.42-1.42-.88.03-.24.38-.49 1.05-.75 4.12-1.79 6.87-2.97 8.24-3.54 3.92-1.63 4.74-1.92 5.27-1.92.12 0 .37.03.54.18.14.12.18.28.2.45-.02.07-.02.24-.04.42z"/></svg>
              </a>
              {/* YouTube */}
              <a href="#" className="p-2.5 rounded-xl bg-[#090719] border border-purple-500/20 text-[#A8A5B8] hover:text-[#B84CFF] hover:border-[#B84CFF]/50 transition-all" aria-label="YouTube">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
              </a>
              {/* Discord */}
              <a href="#" className="p-2.5 rounded-xl bg-[#090719] border border-purple-500/20 text-[#A8A5B8] hover:text-[#B84CFF] hover:border-[#B84CFF]/50 transition-all" aria-label="Discord">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994.021-.041.001-.09-.041-.106a13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.061 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.028zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"/></svg>
              </a>
              {/* LinkedIn */}
              <a href="#" className="p-2.5 rounded-xl bg-[#090719] border border-purple-500/20 text-[#A8A5B8] hover:text-[#B84CFF] hover:border-[#B84CFF]/50 transition-all" aria-label="LinkedIn">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/></svg>
              </a>
            </div>
          </div>

          {/* Links Column 1: Ecosystem */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-xs font-extrabold uppercase tracking-widest text-white font-['Outfit']">
              ECOSYSTEM
            </h4>
            <ul className="space-y-2.5 text-xs text-[#A8A5B8]">
              <li><a href="#ai-platform" className="hover:text-white transition-colors">AI Platform</a></li>
              <li><a href="#ai-platform" className="hover:text-white transition-colors">Strategy & Automation</a></li>
              <li><a href="#ecosystem" className="hover:text-white transition-colors">Platform Access</a></li>
              <li><a href="#staking" className="hover:text-white transition-colors">Staking</a></li>
            </ul>
          </div>

          {/* Links Column 2: Token */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-xs font-extrabold uppercase tracking-widest text-white font-['Outfit']">
              TOKEN
            </h4>
            <ul className="space-y-2.5 text-xs text-[#A8A5B8]">
              <li><a href="#tokenomics" className="hover:text-white transition-colors">Tokenomics</a></li>
              <li><a href="#presale" className="hover:text-white transition-colors">Join Presale</a></li>
              <li><a href="#faq" className="hover:text-white transition-colors">FAQ</a></li>
              <li>
                <span className="text-[#A8A5B8]/60 inline-flex items-center gap-1">
                  Whitepaper <span className="text-[10px] font-mono font-normal text-purple-300">(soon)</span>
                </span>
              </li>
            </ul>
          </div>

          {/* Links Column 3: Company */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-xs font-extrabold uppercase tracking-widest text-white font-['Outfit']">
              COMPANY
            </h4>
            <ul className="space-y-2.5 text-xs text-[#A8A5B8]">
              <li><a href="#about" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Risk Disclosure</a></li>
            </ul>
          </div>

          {/* Newsletter Subscribe */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-xs font-extrabold uppercase tracking-widest text-white font-['Outfit']">
              Stay Updated
            </h4>
            <p className="text-xs text-[#A8A5B8]">
              Get the latest updates and market insights.
            </p>

            <form onSubmit={handleSubscribe} className="space-y-2">
              <div className="relative">
                <input
                  type="email"
                  required
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-3.5 py-2.5 text-xs rounded-xl bg-[#090719] border border-purple-500/30 text-white placeholder-[#A8A5B8]/60 focus:outline-none focus:border-[#B84CFF]"
                />
                <button
                  type="submit"
                  className="absolute right-1 top-1 bottom-1 px-3 bg-gradient-purple-btn rounded-lg text-white hover:bg-[#8B2CFF] transition-all"
                  aria-label="Subscribe"
                >
                  <Send className="w-3.5 h-3.5" />
                </button>
              </div>
              {subscribed && (
                <div className="text-[11px] text-emerald-400 font-semibold">
                  ✓ Thank you for subscribing!
                </div>
              )}
            </form>
          </div>

        </div>

        {/* Bottom Legal Disclaimer */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-[#A8A5B8]">
          <p>© 2026 EXPOSE. All rights reserved.</p>
          
          <p className="text-center md:text-right max-w-xl text-[11px] text-[#A8A5B8]/70">
            Digital assets and trading involve risk. EXPOSE does not guarantee profits, token appreciation or staking outcomes.
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
