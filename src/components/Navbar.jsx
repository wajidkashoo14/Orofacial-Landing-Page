import { useState, useEffect } from 'react'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-offwhite/95 backdrop-blur-sm shadow-sm border-b border-navy/8' : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between h-16">
        {/* Logo */}
        <a href="#" className="font-serif font-semibold text-navy text-lg tracking-tight">
          TMJConnect
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {['How It Works', 'For Providers', 'For Patients', 'Security'].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase().replace(/\s+/g, '-')}`}
              className="text-sm text-navy/70 hover:text-navy transition-colors font-medium"
            >
              {item}
            </a>
          ))}
        </div>

        {/* CTA */}
        <div className="hidden md:block">
          <a href="#early-access" className="btn-primary text-sm px-5 py-2.5">
            Join Waitlist
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span className={`block w-5 h-0.5 bg-navy transition-all ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`block w-5 h-0.5 bg-navy transition-all ${menuOpen ? 'opacity-0' : ''}`} />
          <span className={`block w-5 h-0.5 bg-navy transition-all ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-offwhite border-t border-navy/8 px-6 py-4 flex flex-col gap-4">
          {['How It Works', 'For Providers', 'For Patients', 'Security'].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase().replace(/\s+/g, '-')}`}
              className="text-sm text-navy/70 hover:text-navy font-medium"
              onClick={() => setMenuOpen(false)}
            >
              {item}
            </a>
          ))}
          <a href="#early-access" className="btn-primary w-fit" onClick={() => setMenuOpen(false)}>
            Join Waitlist
          </a>
        </div>
      )}
    </nav>
  )
}
