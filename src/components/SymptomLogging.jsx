import { useReveal } from '../hooks/useReveal'
import { Check } from 'lucide-react'

const steps = [
  {
    num: '01',
    title: 'Rate your pain.',
    description: 'Drag the slider to rate how you feel today. Takes 3 seconds.',
    mockup: (
      <div className="bg-white rounded-xl border border-navy/10 p-4 text-center">
        <div className="font-serif text-4xl font-semibold text-navy mb-3">7</div>
        <div className="relative h-2 bg-navy/10 rounded-full mb-2">
          <div className="absolute top-0 left-0 h-2 bg-gradient-to-r from-green-400 to-red-400 rounded-full" style={{ width: '70%' }} />
          <div className="absolute top-1/2 -translate-y-1/2 w-4 h-4 bg-white border-2 border-navy rounded-full shadow" style={{ left: 'calc(70% - 8px)' }} />
        </div>
        <div className="flex justify-between text-[10px] text-navy/30">
          <span>0</span><span>10</span>
        </div>
      </div>
    ),
  },
  {
    num: '02',
    title: 'Show us where it hurts.',
    description: 'Tap the face diagram to mark exactly where you feel pain.',
    mockup: (
      <div className="bg-white rounded-xl border border-navy/10 p-4 flex items-center justify-center">
        <div className="relative">
          {/* Simple face outline SVG */}
          <svg width="80" height="90" viewBox="0 0 80 90">
            <ellipse cx="40" cy="38" rx="30" ry="34" fill="none" stroke="#d4cfc6" strokeWidth="1.5" />
            <ellipse cx="28" cy="32" rx="5" ry="3" fill="none" stroke="#d4cfc6" strokeWidth="1" />
            <ellipse cx="52" cy="32" rx="5" ry="3" fill="none" stroke="#d4cfc6" strokeWidth="1" />
            <path d="M 30 50 Q 40 58 50 50" fill="none" stroke="#d4cfc6" strokeWidth="1.5" strokeLinecap="round" />
            <rect x="10" y="60" width="60" height="25" rx="8" fill="none" stroke="#d4cfc6" strokeWidth="1.5" />
            {/* Pain dot on jaw */}
            <circle cx="22" cy="67" r="5" fill="#c9952a" opacity="0.7" />
            <circle cx="22" cy="67" r="3" fill="#c9952a" />
          </svg>
        </div>
      </div>
    ),
  },
  {
    num: '03',
    title: 'Describe how it feels.',
    description: 'Select your pain type and any triggers. One tap per option.',
    mockup: (
      <div className="bg-white rounded-xl border border-navy/10 p-4">
        <div className="grid grid-cols-2 gap-1.5">
          {['Aching', 'Sharp', 'Throbbing', 'Burning', 'Pressure', 'Stress', 'Eating'].map((tag, i) => (
            <span
              key={tag}
              className={`text-[11px] px-2.5 py-1.5 rounded-lg border text-center cursor-pointer ${
                [0, 1, 4].includes(i)
                  ? 'bg-navy text-white border-navy'
                  : 'border-navy/15 text-navy/60'
              }`}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    ),
  },
  {
    num: '04',
    title: 'Saved to your provider.',
    description: 'Your log is instantly visible to your provider\'s dashboard. No uploads, no emails.',
    mockup: (
      <div className="bg-white rounded-xl border border-navy/10 p-4 flex flex-col items-center justify-center text-center gap-2">
        <div className="w-12 h-12 bg-gold/10 rounded-full flex items-center justify-center">
          <Check size={22} className="text-gold" />
        </div>
        <div className="text-navy text-sm font-semibold">Entry saved.</div>
        <div className="text-navy/50 text-xs">Your provider can see this.</div>
      </div>
    ),
  },
]

export default function SymptomLogging() {
  const { ref, visible } = useReveal()

  return (
    <section className="py-24 bg-offwhite" ref={ref}>
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className={`text-center mb-16 reveal ${visible ? 'visible' : ''}`}>
          <span className="section-label">Symptom Logging</span>
          <h2 className="font-serif text-4xl md:text-5xl font-medium text-navy mt-3 leading-tight">
            Log your pain
            <br />in under a minute.
          </h2>
          <p className="text-navy/55 text-sm mt-4 max-w-md mx-auto">
            Your provider gets a complete picture of how you are feeling between appointments — without a phone call or a long form.
          </p>
        </div>

        {/* 4-step grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {steps.map((s, i) => (
            <div key={s.num} className={`reveal delay-${(i + 1) * 100} ${visible ? 'visible' : ''} flex flex-col gap-4`}>
              <div className="text-[10px] font-semibold tracking-widest text-navy/40 uppercase">Step {s.num}</div>
              <div className="flex-1 min-h-[130px]">{s.mockup}</div>
              <div>
                <h4 className="font-serif text-base font-medium text-navy mb-1">{s.title}</h4>
                <p className="text-xs text-navy/55 leading-relaxed">{s.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Footer banner */}
        <div className={`mt-14 bg-navy rounded-2xl px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4 reveal delay-400 ${visible ? 'visible' : ''}`}>
          <div className="flex items-center gap-3">
            <span className="text-gold text-xl">⏱</span>
            <div>
              <div className="text-white font-medium text-sm">Designed to take under a minute.</div>
              <div className="text-white/50 text-xs">Every entry is structured, timestamped, and visible to your provider instantly.</div>
            </div>
          </div>
          <a href="#how-it-works" className="btn-secondary border-white/20 text-white hover:bg-white/10 shrink-0">
            See what your provider sees
          </a>
        </div>
      </div>
    </section>
  )
}
