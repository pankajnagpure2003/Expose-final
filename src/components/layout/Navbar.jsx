import { useEffect, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { Menu, X, Wallet, ChevronRight } from 'lucide-react'

const NAV_ITEMS = [
  { label: 'HOME', type: 'route', to: '/' },
  { label: 'ABOUT US', type: 'section', hash: '#about' },
  { label: 'AI PLATFORM', type: 'section', hash: '#ai-platform' },
  { label: 'ECOSYSTEM', type: 'section', hash: '#ecosystem' },
  { label: 'FAQ', type: 'section', hash: '#faq' },
  { label: 'PRESALE', type: 'route', to: '/presale', key: 'presale' },
  { label: 'STAKING', type: 'route', to: '/staking', key: 'staking' },
]

export default function Navbar({ variant = 'transparent', activePage = 'home' }) {
  const [open, setOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')
  const location = useLocation()
  const navigate = useNavigate()

  const isHome = location.pathname === '/'
  const isPresale = location.pathname === '/presale'
  const isStaking = location.pathname === '/staking'

  useEffect(() => {
    if (!isHome) {
      setActiveSection(activePage)
      return
    }

    const updateActive = () => {
      const sections = ['home', 'about', 'ai-platform', 'ecosystem', 'faq']
      const position = window.scrollY + 180
      let current = 'home'

      for (const id of sections) {
        const el = document.getElementById(id)
        if (!el) continue
        if (position >= el.offsetTop) current = id
      }

      setActiveSection(current)
    }

    updateActive()
    window.addEventListener('scroll', updateActive, { passive: true })
    return () => window.removeEventListener('scroll', updateActive)
  }, [isHome, activePage, location.pathname])

  const close = () => setOpen(false)

  const isActive = (item) => {
    if (item.type === 'route') {
      if (item.key) return activePage === item.key
      return isHome && activeSection === 'home'
    }
    return isHome && activeSection === item.hash.slice(1)
  }

  const sectionLink = (hash) => `/${hash}`

  const shell =
    variant === 'solid'
      ? 'fixed top-0 left-0 right-0 z-[100] bg-[#05030D]/95 backdrop-blur-xl border-b border-[#8B2CFF]/20 shadow-lg shadow-black/30'
      : 'fixed top-0 left-0 right-0 z-[100] bg-[#05030D]/55 backdrop-blur-xl border-b border-white/10'

  return (
    <header className={`${shell} transition-all duration-300`}>
      <div className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="min-h-[76px] flex items-center justify-between gap-5">
          <Link to="/" onClick={close} className="flex items-center shrink-0 group" aria-label="EXPOSE Home">
            <img
              src="/assets/expose-logo.png"
              alt="EXPOSE"
              className="h-10 sm:h-11 md:h-12 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
            />
          </Link>

          <div className="hidden lg:flex items-center gap-1 xl:gap-2 glass-panel px-4 py-2 rounded-full border border-[#8B2CFF]/20">
            {NAV_ITEMS.map((item) => {
              const active = isActive(item)

              if (item.type === 'route') {
                return (
                  <Link
                    key={item.label}
                    to={item.to}
                    onClick={close}
                    className={`px-3 py-2 rounded-full text-[11px] font-semibold tracking-[.11em] transition-all ${
                      active
                        ? 'text-white bg-[#8B2CFF]/30 border border-[#B84CFF]/40 shadow-[0_0_12px_rgba(139,44,255,.35)]'
                        : 'text-[#A8A5B8] hover:text-white hover:bg-white/5'
                    }`}
                  >
                    {item.label}
                  </Link>
                )
              }

              return (
                <Link
                  key={item.label}
                  to={sectionLink(item.hash)}
                  onClick={close}
                  className={`px-3 py-2 rounded-full text-[11px] font-semibold tracking-[.11em] transition-all ${
                    active
                      ? 'text-white bg-[#8B2CFF]/30 border border-[#B84CFF]/40 shadow-[0_0_12px_rgba(139,44,255,.35)]'
                      : 'text-[#A8A5B8] hover:text-white hover:bg-white/5'
                  }`}
                >
                  {item.label}
                </Link>
              )
            })}
          </div>

          <div className="hidden sm:flex items-center">
            <button
              type="button"
              onClick={() => {
                if (isPresale) document.getElementById('presale-area')?.scrollIntoView({ behavior: 'smooth' })
                else if (isStaking) document.getElementById('top')?.scrollIntoView({ behavior: 'smooth' })
                else navigate('/presale#presale-area')
              }}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-bold tracking-wider text-white bg-gradient-purple-btn border border-[#B84CFF]/40 shadow-[0_0_20px_rgba(139,44,255,.3)] hover:shadow-[0_0_30px_rgba(184,76,255,.5)] transition-all active:scale-95"
            >
              <Wallet className="w-4 h-4 text-purple-200" />
              <span>Connect Wallet</span>
            </button>
          </div>

          <div className="flex lg:hidden items-center gap-2">
            <button
              type="button"
              onClick={() => {
                if (isPresale) document.getElementById('presale-area')?.scrollIntoView({ behavior: 'smooth' })
                else navigate('/presale#presale-area')
              }}
              className="sm:hidden p-2 rounded-lg bg-[#8B2CFF]/20 border border-[#8B2CFF]/40 text-purple-300"
              aria-label="Connect Wallet"
            >
              <Wallet className="w-4 h-4" />
            </button>
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              className="p-2.5 rounded-xl glass-panel text-white"
              aria-label="Toggle navigation"
            >
              {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </nav>
      </div>

      {open && (
        <div className="lg:hidden absolute top-[76px] left-4 right-4 rounded-2xl glass-panel border border-[#8B2CFF]/30 p-4 shadow-2xl">
          <div className="flex flex-col gap-2">
            {NAV_ITEMS.map((item) => {
              const active = isActive(item)
              const common = `flex items-center justify-between px-4 py-3 rounded-xl text-xs font-semibold tracking-wider transition-all ${
                active ? 'text-white bg-[#8B2CFF]/25 border border-[#8B2CFF]/30' : 'text-gray-200 hover:bg-white/5'
              }`

              if (item.type === 'route') {
                return (
                  <Link key={item.label} to={item.to} onClick={close} className={common}>
                    <span>{item.label}</span>
                    <ChevronRight className="w-4 h-4 text-[#B84CFF]" />
                  </Link>
                )
              }

              return (
                <Link key={item.label} to={sectionLink(item.hash)} onClick={close} className={common}>
                  <span>{item.label}</span>
                  <ChevronRight className="w-4 h-4 text-[#B84CFF]" />
                </Link>
              )
            })}

            <button
              type="button"
              onClick={() => {
                close()
                if (isPresale) document.getElementById('presale-area')?.scrollIntoView({ behavior: 'smooth' })
                else navigate('/presale#presale-area')
              }}
              className="mt-2 w-full flex items-center justify-center gap-2 py-3 px-5 rounded-xl text-xs font-bold tracking-wider text-white bg-gradient-purple-btn"
            >
              <Wallet className="w-4 h-4" />
              Connect Wallet
            </button>
          </div>
        </div>
      )}
    </header>
  )
}
