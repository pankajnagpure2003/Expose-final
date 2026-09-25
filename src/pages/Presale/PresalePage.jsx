import Footer from '../../components/layout/Footer.jsx'
import Hero from './components/Hero.jsx'
import PresaleSection from './components/PresaleSection.jsx'
import HowItWorks from './components/HowItWorks.jsx'

import ImportantNotice from './components/ImportantNotice.jsx'

export default function PresalePage() {
  return (
    <main className="bg-paper text-ink">
<Hero />
      <PresaleSection />
      <HowItWorks />

      <ImportantNotice />
      <Footer />
    </main>
  )
}
