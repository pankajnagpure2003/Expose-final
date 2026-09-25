import { useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import Navbar from './components/layout/Navbar.jsx'
import HomePage from './pages/Home/HomePage.jsx'
import PresalePage from './pages/Presale/PresalePage.jsx'
import StakingPage from './pages/Staking/StakingPage.jsx'

function ScrollManager() {
  const location = useLocation()

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.slice(1)
      const timer = setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }, 80)
      return () => clearTimeout(timer)
    }
    window.scrollTo({ top: 0, behavior: 'instant' })
  }, [location.pathname, location.hash])

  return null
}

function AppLayout() {
  const location = useLocation()
  const isHome = location.pathname === '/'
  const isPresale = location.pathname === '/presale'
  const isStaking = location.pathname === '/staking'

  // Presale and staking pages have their own hero backgrounds, so the shared
  // navigation changes its surface automatically while remaining one component.
  const variant = isStaking ? 'solid' : 'transparent'

  return (
    <div className="min-h-screen">
      <Navbar
        variant={variant}
        activePage={isPresale ? 'presale' : isStaking ? 'staking' : 'home'}
      />

      <ScrollManager />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/presale" element={<PresalePage />} />
        <Route path="/staking" element={<StakingPage />} />
        <Route path="*" element={<HomePage />} />
      </Routes>
    </div>
  )
}

export default function App() {
  return <AppLayout />
}
