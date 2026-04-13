import { useState } from 'react'
import { useReveal } from '../hooks/useReveal'
import { Check, ArrowRight, Lock, Video, User } from 'lucide-react'

const steps = [
  {
    number: '1',
    tab: 'Provider sets up',
    role: 'Provider',
    title: 'Your provider sets up your treatment plan.',
    description:
      'Your specialist registers on the web portal, adds you as a patient with a simple invite code, and assigns the exact video exercises they want you to follow — tailored frequency, reminders, and clinical context included.',
    features: [
      { icon: <User size={13} />, text: 'No IT setup. The provider portal runs in any browser. Login, invite, assign — in minutes.' },
      { icon: <Video size={13} />, text: 'Video exercises. Upload your own clinical exercise videos. Patients get the exact technique — not a printed description.' },
      { icon: <Lock size={13} />, text: 'HIPAA-compliant. Mandatory MFA, audit logging, and BAA available from day one.' },
    ],
    mockup: (
      <div className="bg-navy rounded-xl overflow-hidden shadow-xl w-full max-w-sm mx-auto lg:mx-0">
        <div className="bg-navy-950 px-4 py-2.5 flex items-center justify-between">
          <span className="text-white/80 text-xs font-medium">TMJConnect Portal</span>
          <span className="text-[10px] text-green-400 border border-green-400/30 px-2 py-0.5 rounded-full shrink-0">
            ⊕ MFA Active
          </span>
        </div>
        <div className="p-4">
          <div className="text-white/40 text-[10px] tracking-widest uppercase mb-2">Active Patients</div>
          {['Sarah Mitchell', 'James Rivera', 'Anna Chen'].map((name, i) => (
            <div key={name} className="flex items-center gap-2 py-2 border-b border-white/5">
              <span
                className={`w-2 h-2 rounded-full shrink-0 ${
                  i === 0 ? 'bg-red-400' : i === 1 ? 'bg-yellow-400' : 'bg-green-400'
                }`}
              />
              <span className="text-white text-xs">{name}</span>
            </div>
          ))}
          <div className="mt-3">
            <div className="text-white/40 text-[10px] tracking-widest uppercase mb-2">
              Upload & Assign Exercise
            </div>
            <div className="bg-navy-800 rounded-lg p-3 flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-gold/20 flex items-center justify-center shrink-0">
                <Video size={14} className="text-gold" />
              </div>
              <div className="min-w-0">
                <div className="text-white text-xs font-medium truncate">Jaw Opening Exercise</div>
                <div className="text-white/40 text-[10px]">Assigned · 3× daily</div>
              </div>
            </div>
            <button className="mt-2 w-full text-[10px] text-gold border border-gold/30 rounded-lg py-1.5 hover:bg-gold/5 transition-colors">
              + Assign to Patient
            </button>
          </div>
        </div>
      </div>
    ),
  },
  {
    number: '2',
    tab: 'Patient follows plan',
    role: 'Patient',
    title: 'The patient follows their plan — anywhere.',
    description:
      'Patients open the mobile app to watch their assigned exercises on video, log how they feel each day in under a minute, and send reports if something changes. No logins to remember. No confusion.',
    features: [
      { icon: <Video size={13} />, text: 'Video-guided exercises assigned directly to their phone — clear technique, every time.' },
      { icon: <User size={13} />, text: '60-second symptom logs with pain level, type, and location. Structured and instant.' },
      { icon: <Check size={13} />, text: 'Smart reminders at the times that work for them. Consistency is recovery.' },
    ],
    mockup: (
      <div className="bg-white rounded-xl border border-navy/10 shadow-xl p-5 w-full max-w-xs mx-auto lg:mx-0">
        <div className="text-navy text-sm font-semibold mb-3">My Exercises</div>
        {[
          { name: 'Jaw Opening Exercise', freq: '3× daily · 5 min', done: true },
          { name: 'Temporal Massage', freq: '2× daily · 3 min', done: true },
          { name: 'Postural Alignment', freq: '1× daily · 4 min', done: false },
        ].map((ex) => (
          <div key={ex.name} className="flex items-start gap-3 py-2.5 border-b border-navy/6 last:border-0">
            <div
              className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 ${
                ex.done ? 'bg-gold/20' : 'bg-navy/8'
              }`}
            >
              {ex.done
                ? <Check size={12} className="text-gold" />
                : <Video size={12} className="text-navy/40" />}
            </div>
            <div className="min-w-0">
              <div className="text-navy text-xs font-medium leading-tight">{ex.name}</div>
              <div className="text-navy/40 text-[10px] mt-0.5">{ex.freq}</div>
            </div>
          </div>
        ))}
        <div className="mt-3">
          <div className="text-[10px] text-navy/40 mb-1">Today's progress</div>
          <div className="w-full bg-navy/8 rounded-full h-1.5">
            <div className="bg-gold h-1.5 rounded-full" style={{ width: '67%' }} />
          </div>
          <div className="text-[10px] text-navy/40 mt-1">2 of 3 complete</div>
        </div>
      </div>
    ),
  },
  {
    number: '3',
    tab: 'In real time',
    role: 'Together',
    title: 'Provider and patient — connected in real time.',
    description:
      'The provider sees every symptom log, adherence metric, and pain trend the moment it happens. Urgent reports surface automatically. Respond in seconds with pre-written templates.',
    features: [
      { icon: <Check size={13} />, text: 'Patient list sorted by who needs attention first. Red means urgent — always.' },
      { icon: <User size={13} />, text: 'Pain trend over 14 days, adherence percentage, and recent activity — all on one screen.' },
      { icon: <ArrowRight size={13} />, text: 'Reply in seconds. Patient is notified instantly on their phone.' },
    ],
    mockup: (
      <div className="bg-navy rounded-xl overflow-hidden shadow-xl w-full max-w-sm mx-auto lg:mx-0">
        <div className="bg-navy-950 px-4 py-2.5">
          <span className="text-white/80 text-xs font-medium">Provider Dashboard</span>
        </div>
        <div className="p-4 space-y-2">
          {[
            { name: 'Sarah Mitchell', status: 'Urgent', color: 'bg-red-500 text-white' },
            { name: 'James Rivera', status: 'Attention', color: 'bg-yellow-500/20 text-yellow-300 border border-yellow-500/30' },
            { name: 'Anna Chen', status: 'On Track', color: 'bg-green-500/20 text-green-300 border border-green-500/30' },
            { name: 'Mark Kim', status: 'On Track', color: 'bg-green-500/20 text-green-300 border border-green-500/30' },
          ].map((p) => (
            <div
              key={p.name}
              className="flex items-center justify-between bg-navy-800/60 rounded-lg px-3 py-2 gap-2"
            >
              <div className="flex items-center gap-2 min-w-0">
                <div className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center text-white text-[10px] font-medium shrink-0">
                  {p.name[0]}
                </div>
                <span className="text-white text-xs truncate">{p.name}</span>
              </div>
              <span className={`text-[9px] font-semibold px-2 py-0.5 rounded shrink-0 ${p.color}`}>
                {p.status}
              </span>
            </div>
          ))}
        </div>
      </div>
    ),
  },
]

export default function HowItWorks() {
  const [activeStep, setActiveStep] = useState(0)
  const { ref, visible } = useReveal()
  const step = steps[activeStep]

  return (
    <section id="how-it-works" className="py-16 sm:py-24 bg-white" ref={ref}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">

        {/* Header */}
        <div className={`text-center mb-10 sm:mb-14 reveal ${visible ? 'visible' : ''}`}>
          <span className="section-label">The Platform</span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-medium text-navy mt-3">
            How it works
          </h2>
          <p className="text-navy/55 text-sm mt-4">
            Three steps. Two sides. One continuous treatment relationship.
          </p>
        </div>

        {/* Tabs */}
        <div className={`reveal delay-100 ${visible ? 'visible' : ''} mb-10 sm:mb-12`}>

          {/* Mobile: vertical stacked tabs */}
          <div className="flex flex-col sm:hidden gap-1 bg-navy/5 rounded-xl p-1.5">
            {steps.map((s, i) => (
              <button
                key={s.tab}
                onClick={() => setActiveStep(i)}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm font-medium transition-all text-left ${
                  activeStep === i
                    ? 'bg-navy text-white shadow-sm'
                    : 'text-navy/60 hover:text-navy'
                }`}
              >
                <span
                  className={`w-5 h-5 rounded-full text-xs flex items-center justify-center font-semibold shrink-0 ${
                    activeStep === i ? 'bg-white/20' : 'bg-navy/10'
                  }`}
                >
                  {s.number}
                </span>
                {s.tab}
              </button>
            ))}
          </div>

          {/* Tablet+: horizontal tabs */}
          <div className="hidden sm:flex justify-center gap-1 bg-navy/5 rounded-xl p-1.5 max-w-xl mx-auto">
            {steps.map((s, i) => (
              <button
                key={s.tab}
                onClick={() => setActiveStep(i)}
                className={`flex items-center gap-2 px-3 sm:px-4 py-2 rounded-lg text-xs sm:text-sm font-medium transition-all flex-1 justify-center ${
                  activeStep === i
                    ? 'bg-navy text-white shadow-sm'
                    : 'text-navy/60 hover:text-navy'
                }`}
              >
                <span
                  className={`w-5 h-5 rounded-full text-xs flex items-center justify-center font-semibold shrink-0 ${
                    activeStep === i ? 'bg-white/20' : 'bg-navy/10'
                  }`}
                >
                  {s.number}
                </span>
                {s.tab}
              </button>
            ))}
          </div>
        </div>

        {/* Step content */}
        <div key={activeStep} className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center">

          {/* Text — order-1 so it's always first on mobile */}
          <div className="space-y-5 sm:space-y-6 order-1">
            <div>
              <div className="section-label mb-2">{step.role}</div>
              <h3 className="font-serif text-2xl sm:text-3xl md:text-4xl font-medium text-navy leading-snug">
                {step.title}
              </h3>
            </div>

            <p className="text-navy/60 text-sm leading-relaxed">{step.description}</p>

            <ul className="space-y-3">
              {step.features.map((f, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-navy/70">
                  <div className="w-7 h-7 rounded-lg bg-navy/6 flex items-center justify-center shrink-0 text-navy/50 mt-0.5">
                    {f.icon}
                  </div>
                  <span className="leading-relaxed">{f.text}</span>
                </li>
              ))}
            </ul>

            {/* Next + dots */}
            <div className="flex items-center gap-4 pt-2 flex-wrap">
              <button
                onClick={() => setActiveStep((activeStep + 1) % steps.length)}
                className="btn-primary text-sm px-4 sm:px-5 py-2.5"
              >
                <span className="hidden sm:inline">
                  Next: {steps[(activeStep + 1) % steps.length].tab}
                </span>
                <span className="sm:hidden">Next step</span>
                <ArrowRight size={14} />
              </button>
              <div className="flex gap-1.5">
                {steps.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveStep(i)}
                    className={`h-2 rounded-full transition-all ${
                      i === activeStep ? 'bg-navy w-6' : 'bg-navy/20 w-2'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Mockup — order-2 so it appears below text on mobile */}
          <div className="order-2 flex justify-center lg:justify-end">
            {step.mockup}
          </div>
        </div>
      </div>
    </section>
  )
}