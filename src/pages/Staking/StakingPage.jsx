import Footer from '../../components/layout/Footer.jsx'
import StakingHero from './components/StakingHero.jsx'
import StakingOptions from './components/StakingOptions.jsx'
import HowStakingWorks from './components/HowStakingWorks.jsx'
import Benefits from './components/Benefits.jsx'
import ImportantNotice from './components/ImportantNotice.jsx'

export default function StakingPage() {
  return (
    <main id="top" className="bg-paper text-ink">
<StakingHero />
      <StakingOptions />
      <HowStakingWorks />
      <Benefits />
      <ImportantNotice />
      <Footer />
    </main>
  )
}
