import React from 'react';
import Hero from '../../components/sections/home/Hero';
import Stats from '../../components/sections/home/Stats';
import About from '../../components/sections/home/About';
import AIPlatform from '../../components/sections/home/AIPlatform';
import Ecosystem from '../../components/sections/home/Ecosystem';
import Tokenomics from '../../components/sections/home/Tokenomics';
import FAQ from '../../components/sections/home/FAQ';
import CTA from '../../components/sections/home/CTA';
import Footer from '../../components/layout/Footer';

function HomePage() {
  return (
    <div className="min-h-screen bg-[#05030D] text-white selection:bg-[#8B2CFF]/40 selection:text-white font-['Inter',sans-serif]">
      <main>
        <Hero />
        <Stats />
        <About />
        <AIPlatform />
        <Ecosystem />
        <Tokenomics />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}

export default HomePage;
