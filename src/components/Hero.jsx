import { useEffect, useRef } from 'react'
import { ArrowRight, Shield, Smartphone } from 'lucide-react'

// Mock dashboard UI for hero
function DashboardMockup() {
  return (
    <div className="relative w-full max-w-md mx-auto">
      {/* Urgent report badge */}
      <div className="absolute -top-3 -right-3 z-10 bg-white rounded-lg shadow-lg border border-red-100 px-3 py-2 flex items-center gap-2 text-xs font-medium text-red-600">
        <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
        Urgent Report
        <span className="text-navy/40 font-normal">Pain 8/10 — Jaw 4h...</span>
      </div>

      {/* Main dashboard card */}
      <div className="bg-navy rounded-2xl overflow-hidden shadow-2xl border border-navy-800">
        {/* Browser chrome */}
        <div className="bg-navy-950 px-4 py-3 flex items-center gap-2">
          <div className="flex gap-1.5">
            <span className="w-3 h-3 rounded-full bg-red-400" />
            <span className="w-3 h-3 rounded-full bg-yellow-400" />
            <span className="w-3 h-3 rounded-full bg-green-400" />
          </div>
          <div className="flex-1 mx-3 bg-navy-800 rounded px-3 py-1 text-xs text-navy-200 font-mono">
            app.tmjconnect.com/dashboard
          </div>
          <span className="text-xs text-gold font-medium px-2 py-0.5 bg-gold/10 rounded border border-gold/20">● LIVE</span>
        </div>

        {/* Dashboard content */}
        <div className="p-5">
          {/* Header */}
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-white font-serif text-sm font-medium">Patient Overview</h3>
          </div>

          {/* Stats row */}
          <div className="grid grid-cols-3 gap-3 mb-5">
            {[
              { val: '24', label: 'PATIENTS' },
              { val: '3', label: 'URGENT' },
              { val: '89%', label: 'ADHERENCE' },
            ].map(({ val, label }) => (
              <div key={label} className="bg-navy-800 rounded-lg p-3 text-center">
                <div className="text-white font-serif text-xl font-semibold">{val}</div>
                <div className="text-navy-300 text-[10px] font-medium tracking-wider mt-0.5">{label}</div>
              </div>
            ))}
          </div>

          {/* Patient list */}
          <div className="space-y-2">
            {[
              { name: 'Sarah Mitchell', note: 'Pain 8/10 — Urgent report', dot: 'bg-red-400', badge: 'Urgent', badgeColor: 'bg-red-500/20 text-red-300 border-red-500/30' },
              { name: 'James Rivera', note: 'Pain 5/10 — 3 exercises due', dot: 'bg-yellow-400', badge: 'View', badgeColor: 'bg-gold/20 text-gold border-gold/30' },
              { name: 'Anna Chen', note: 'On track ↗', dot: 'bg-green-400', badge: null, badgeColor: '' },
            ].map((p) => (
              <div key={p.name} className="flex items-center justify-between bg-navy-800/60 rounded-lg px-3 py-2.5">
                <div className="flex items-center gap-2.5">
                  <span className={`w-2 h-2 rounded-full ${p.dot}`} />
                  <div>
                    <div className="text-white text-xs font-medium">{p.name}</div>
                    <div className="text-navy-300 text-[10px]">{p.note}</div>
                  </div>
                </div>
                {p.badge && (
                  <span className={`text-[10px] font-medium px-2 py-0.5 rounded border ${p.badgeColor}`}>
                    {p.badge}
                  </span>
                )}
              </div>
            ))}
          </div>

          {/* Adherence row */}
          <div className="mt-4 bg-navy-800/40 rounded-lg px-3 py-2 flex items-center justify-between">
            <div>
              <div className="text-gold text-[10px] font-semibold tracking-wider">92% ADHERENCE</div>
              <div className="text-navy-300 text-[10px]">This week's avg.</div>
            </div>
            <div className="text-right">
              <div className="text-white/60 text-[10px]">Anna Chen</div>
              <div className="text-navy-300 text-[10px]">Jul 20 — On track</div>
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
    <section className="relative min-h-screen bg-offwhite pt-24 pb-16 overflow-hidden">
      {/* Subtle background texture */}
      <div className="absolute inset-0 pointer-events-none opacity-30"
        style={{
          backgroundImage: 'radial-gradient(circle at 70% 30%, #e8d9b8 0%, transparent 50%), radial-gradient(circle at 20% 80%, #d1d9f0 0%, transparent 50%)'
        }}
      />

      <div className="relative max-w-6xl mx-auto px-6">
        {/* Pill badge */}
        <div className="inline-flex items-center gap-2 border border-navy/15 bg-white rounded-full px-4 py-2 text-xs font-medium text-navy/70 mb-8 shadow-sm">
          <span className="w-1.5 h-1.5 rounded-full bg-gold animate-pulse" />
          Now in Pilot — Limited Access
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: text */}
          <div ref={titleRef}>
            <h1 className="font-serif text-5xl md:text-6xl lg:text-[4.2rem] font-medium leading-[1.08] text-navy mb-6 text-balance">
              Care that{' '}
              <br />doesn't stop{' '}
              <br />at the{' '}
              <em className="text-gold not-italic cursor-blink">clinic.</em>
            </h1>

            <p className="text-navy/65 text-base leading-relaxed max-w-md mb-8 font-sans">
              The first purpose-built platform for TMJ &amp; orofacial pain management — connecting specialists with patients between visits through structured treatment, real-time tracking, and clinical communication.
            </p>

            <div className="flex flex-wrap gap-3 mb-8">
              <a href="#early-access" className="btn-primary">
                Join the Waitlist <ArrowRight size={15} />
              </a>
              <a href="#how-it-works" className="btn-secondary">
                See How It Works
              </a>
            </div>

            {/* Trust badges */}
            <div className="flex flex-wrap gap-3 items-center">
              <span className="text-navy/40 text-xs font-medium">Built for</span>
              {[
                { icon: <Shield size={11} />, label: 'HIPAA Ready' },
                { label: 'DDS · DMD · PT' },
                { icon: <Smartphone size={11} />, label: 'iOS & Android' },
              ].map(({ icon, label }) => (
                <span key={label} className="badge border-navy/15 text-navy/60 bg-white/80 gap-1">
                  {icon}
                  {label}
                </span>
              ))}
            </div>
          </div>

          {/* Right: dashboard mockup */}
          <div className="relative flex justify-center lg:justify-end">
            {/* Decorative gold dot */}
            <div className="absolute top-8 right-0 w-3 h-3 rounded-full bg-gold opacity-60" />
            <DashboardMockup />
          </div>
        </div>
      </div>
    </section>
  )
}
