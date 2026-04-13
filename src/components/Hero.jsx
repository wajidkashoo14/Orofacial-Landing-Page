import { useEffect, useRef } from 'react'
import { ArrowRight, Shield, Smartphone } from 'lucide-react'

function DashboardMockup() {
  return (
    <div className="relative w-full max-w-sm sm:max-w-md mx-auto mt-6 lg:mt-0">
      {/* Urgent report badge — hidden on very small screens to avoid overflow */}
      <div className="hidden sm:flex absolute -top-3 -right-2 z-10 bg-white rounded-lg shadow-lg border border-red-100 px-2.5 py-1.5 items-center gap-1.5 text-xs font-medium text-red-600 max-w-[220px]">
        <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse shrink-0" />
        <span className="truncate">Urgent Report · Pain 8/10</span>
      </div>

      {/* Main dashboard card */}
      <div className="bg-navy rounded-2xl overflow-hidden shadow-2xl border border-navy-800">
        {/* Browser chrome */}
        <div className="bg-navy-950 px-3 sm:px-4 py-2.5 flex items-center gap-2">
          <div className="flex gap-1.5 shrink-0">
            <span className="w-2.5 h-2.5 rounded-full bg-red-400" />
            <span className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
            <span className="w-2.5 h-2.5 rounded-full bg-green-400" />
          </div>
          <div className="flex-1 mx-2 bg-navy-800 rounded px-2 py-1 text-[10px] text-navy-200 font-mono truncate min-w-0">
            app.tmjconnect.com/dashboard
          </div>
          <span className="text-[10px] text-gold font-medium px-1.5 py-0.5 bg-gold/10 rounded border border-gold/20 shrink-0">
            ● LIVE
          </span>
        </div>

        {/* Dashboard content */}
        <div className="p-4 sm:p-5">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-white font-serif text-sm font-medium">Patient Overview</h3>
          </div>

          {/* Stats row */}
          <div className="grid grid-cols-3 gap-2 sm:gap-3 mb-4 sm:mb-5">
            {[
              { val: '24', label: 'PATIENTS' },
              { val: '3', label: 'URGENT' },
              { val: '89%', label: 'ADHERENCE' },
            ].map(({ val, label }) => (
              <div key={label} className="bg-navy-800 rounded-lg p-2.5 sm:p-3 text-center">
                <div className="text-white font-serif text-lg sm:text-xl font-semibold">{val}</div>
                <div className="text-navy-300 text-[9px] sm:text-[10px] font-medium tracking-wider mt-0.5">
                  {label}
                </div>
              </div>
            ))}
          </div>

          {/* Patient list */}
          <div className="space-y-1.5 sm:space-y-2">
            {[
              { name: 'Sarah Mitchell', note: 'Pain 8/10 — Urgent', dot: 'bg-red-400', badge: 'Urgent', badgeColor: 'bg-red-500/20 text-red-300 border-red-500/30' },
              { name: 'James Rivera', note: '3 exercises due', dot: 'bg-yellow-400', badge: 'View', badgeColor: 'bg-gold/20 text-gold border-gold/30' },
              { name: 'Anna Chen', note: 'On track ↗', dot: 'bg-green-400', badge: null, badgeColor: '' },
            ].map((p) => (
              <div
                key={p.name}
                className="flex items-center justify-between bg-navy-800/60 rounded-lg px-2.5 sm:px-3 py-2 sm:py-2.5 gap-2"
              >
                <div className="flex items-center gap-2 min-w-0">
                  <span className={`w-2 h-2 rounded-full shrink-0 ${p.dot}`} />
                  <div className="min-w-0">
                    <div className="text-white text-xs font-medium truncate">{p.name}</div>
                    <div className="text-navy-300 text-[10px] truncate">{p.note}</div>
                  </div>
                </div>
                {p.badge && (
                  <span className={`text-[10px] font-medium px-1.5 py-0.5 rounded border shrink-0 ${p.badgeColor}`}>
                    {p.badge}
                  </span>
                )}
              </div>
            ))}
          </div>

          {/* Adherence row */}
          <div className="mt-3 sm:mt-4 bg-navy-800/40 rounded-lg px-2.5 sm:px-3 py-2 flex items-center justify-between gap-2">
            <div className="min-w-0">
              <div className="text-gold text-[10px] font-semibold tracking-wider">92% ADHERENCE</div>
              <div className="text-navy-300 text-[10px] truncate">This week's avg.</div>
            </div>
            <div className="text-right shrink-0">
              <div className="text-white/60 text-[10px]">Anna Chen</div>
              <div className="text-navy-300 text-[10px]">On track</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function Hero() {
  const titleRef = useRef(null)

  useEffect(() => {
    const el = titleRef.current
    if (!el) return
    el.style.opacity = '0'
    el.style.transform = 'translateY(18px)'
    setTimeout(() => {
      el.style.transition = 'opacity 0.7s ease, transform 0.7s ease'
      el.style.opacity = '1'
      el.style.transform = 'translateY(0)'
    }, 100)
  }, [])

  return (
    <section className="relative bg-offwhite pt-20 sm:pt-24 pb-16 overflow-hidden">
      {/* Background texture */}
      <div
        className="absolute inset-0 pointer-events-none opacity-30"
        style={{
          backgroundImage:
            'radial-gradient(circle at 70% 30%, #e8d9b8 0%, transparent 50%), radial-gradient(circle at 20% 80%, #d1d9f0 0%, transparent 50%)',
        }}
      />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        {/* Pill badge */}
        <div className="inline-flex items-center gap-2 border border-navy/15 bg-white rounded-full px-3 sm:px-4 py-1.5 sm:py-2 text-xs font-medium text-navy/70 mb-8 shadow-sm">
          <span className="w-1.5 h-1.5 rounded-full bg-gold animate-pulse shrink-0" />
          Now in Pilot — Limited Access
        </div>

        <div className="grid lg:grid-cols-2 gap-10 lg:gap-12 items-center">
          {/* Left: text */}
          <div ref={titleRef}>
            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-[4.2rem] font-medium leading-[1.08] text-navy mb-5 sm:mb-6">
              Care that <br />doesn't stop <br />at the{' '}
              <em className="text-gold not-italic cursor-blink">clinic.</em>
            </h1>

            <p className="text-navy/65 text-sm sm:text-base leading-relaxed max-w-md mb-6 sm:mb-8 font-sans">
              The first purpose-built platform for TMJ &amp; orofacial pain management —
              connecting specialists with patients between visits through structured
              treatment, real-time tracking, and clinical communication.
            </p>

            <div className="flex flex-wrap gap-3 mb-6 sm:mb-8">
              <a href="#early-access" className="btn-primary text-sm">
                Join the Waitlist <ArrowRight size={15} />
              </a>
              <a href="#how-it-works" className="btn-secondary text-sm">
                See How It Works
              </a>
            </div>

            {/* Trust badges */}
            <div className="flex flex-wrap gap-2 sm:gap-3 items-center">
              <span className="text-navy/40 text-xs font-medium">Built for</span>
              {[
                { icon: <Shield size={11} />, label: 'HIPAA Ready' },
                { label: 'DDS · DMD · PT' },
                { icon: <Smartphone size={11} />, label: 'iOS & Android' },
              ].map(({ icon, label }) => (
                <span
                  key={label}
                  className="badge border-navy/15 text-navy/60 bg-white/80 gap-1 text-xs"
                >
                  {icon}
                  {label}
                </span>
              ))}
            </div>
          </div>

          {/* Right: dashboard mockup */}
          <div className="relative flex justify-center lg:justify-end px-2 sm:px-0">
            <div className="absolute top-6 right-2 sm:right-0 w-2.5 h-2.5 rounded-full bg-gold opacity-60" />
            <DashboardMockup />
          </div>
        </div>
      </div>
    </section>
  )
}