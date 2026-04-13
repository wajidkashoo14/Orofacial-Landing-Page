import { useReveal } from '../hooks/useReveal'
import { Video, Activity, MessageSquare, Bell, Check } from 'lucide-react'

const features = [
  {
    icon: <Video size={16} className="text-gold" />,
    title: 'Exercise Videos',
    description: 'Watch your prescribed exercises anytime — on your phone, at home, or on the go. Replay as many times as you need.',
  },
  {
    icon: <Activity size={16} className="text-gold" />,
    title: 'Symptom Tracking',
    description: 'Log how you feel each day in under a minute. Your provider sees your pain patterns automatically — no calls needed.',
  },
  {
    icon: <MessageSquare size={16} className="text-gold" />,
    title: 'Provider Connection',
    description: 'Send a report to your provider when something changes. No waiting rooms. No phone tag. Just direct, clinical communication.',
  },
  {
    icon: <Bell size={16} className="text-gold" />,
    title: 'Smart Reminders',
    description: 'Get gentle reminders to complete your exercises at the times that work for you. Consistency is what drives recovery.',
  },
]

// Phone mockup
function PhoneMockup() {
  return (
    <div className="relative mx-auto w-52">
      {/* Phone frame */}
      <div className="bg-navy rounded-[2.5rem] p-3 shadow-2xl border-4 border-navy-800">
        <div className="bg-offwhite rounded-[2rem] overflow-hidden">
          {/* Status bar */}
          <div className="bg-white px-5 py-2 flex justify-between items-center">
            <span className="text-[9px] text-navy/40 font-medium">9:41</span>
            <div className="w-16 h-3 bg-navy rounded-full" />
            <div className="flex gap-1">
              <span className="w-3 h-2 bg-navy/20 rounded-sm" />
              <span className="w-1.5 h-2 bg-navy/30 rounded-sm" />
            </div>
          </div>

          {/* App content */}
          <div className="bg-white px-4 py-3 min-h-[320px]">
            <div className="text-navy text-sm font-semibold mb-3">My Exercises</div>

            {[
              { name: 'Jaw Opening Exercise', freq: '3× · 5 min', done: true },
              { name: 'Temporal Massage', freq: '2× · 3 min', done: true },
              { name: 'Postural Alignment', freq: '1× · 4 min', done: false },
            ].map((ex) => (
              <div key={ex.name} className="flex items-center gap-2.5 py-2.5 border-b border-navy/5 last:border-0">
                <div className={`w-8 h-8 rounded-xl flex items-center justify-center ${ex.done ? 'bg-gold/15' : 'bg-navy/5'}`}>
                  {ex.done
                    ? <Check size={13} className="text-gold" />
                    : <Video size={13} className="text-navy/30" />}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-navy text-[11px] font-medium leading-tight truncate">{ex.name}</div>
                  <div className="text-navy/40 text-[10px]">{ex.freq}</div>
                </div>
              </div>
            ))}

            {/* Progress */}
            <div className="mt-3 pt-3 border-t border-navy/5">
              <div className="flex justify-between text-[10px] text-navy/40 mb-1.5">
                <span>Today's progress</span>
                <span>2 / 3</span>
              </div>
              <div className="bg-navy/8 rounded-full h-1.5">
                <div className="bg-gold h-1.5 rounded-full transition-all" style={{ width: '67%' }} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function ForPatients() {
  const { ref, visible } = useReveal()

  return (
    <section id="for-patients" className="py-24 bg-white" ref={ref}>
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: text */}
          <div>
            <div className={`reveal ${visible ? 'visible' : ''}`}>
              <span className="section-label">For Patients</span>
              <h2 className="font-serif text-4xl md:text-5xl font-medium text-navy mt-3 leading-tight">
                Your treatment plan,
                <br />
                <em className="text-gold">always with you.</em>
              </h2>
            </div>

            <p className={`text-navy/60 text-sm leading-relaxed mt-5 mb-8 max-w-sm reveal delay-100 ${visible ? 'visible' : ''}`}>
              TMJ pain is hard enough. Your recovery plan shouldn't be. Get clear video exercises from your provider, track your symptoms in under a minute, and stay connected without waiting for the next appointment.
            </p>

            <div className="space-y-4 mb-10">
              {features.map((f, i) => (
                <div
                  key={f.title}
                  className={`reveal delay-${(i + 2) * 100} ${visible ? 'visible' : ''} flex gap-4 p-4 rounded-xl border border-navy/8 bg-offwhite hover:border-gold/30 transition-colors`}
                >
                  <div className="w-9 h-9 rounded-lg bg-white border border-navy/8 flex items-center justify-center shrink-0">
                    {f.icon}
                  </div>
                  <div>
                    <h4 className="text-navy text-sm font-semibold mb-0.5">{f.title}</h4>
                    <p className="text-navy/55 text-xs leading-relaxed">{f.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* App store badges */}
            <div className={`flex gap-3 reveal delay-400 ${visible ? 'visible' : ''}`}>
              {[
                { icon: '🍎', label: 'Coming Soon to', store: 'App Store' },
                { icon: '▶', label: 'Coming Soon to', store: 'Google Play' },
              ].map((b) => (
                <button
                  key={b.store}
                  className="flex items-center gap-2.5 border border-navy/20 rounded-xl px-4 py-2.5 text-left hover:border-navy/40 transition-colors bg-white"
                >
                  <span className="text-lg">{b.icon}</span>
                  <div>
                    <div className="text-[9px] text-navy/40 uppercase tracking-wider">{b.label}</div>
                    <div className="text-navy text-xs font-semibold">{b.store}</div>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Right: phone mockup */}
          <div className={`flex justify-center reveal delay-200 ${visible ? 'visible' : ''}`}>
            <PhoneMockup />
          </div>
        </div>
      </div>
    </section>
  )
}
