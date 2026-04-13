import { useReveal } from '../hooks/useReveal'
import { Check } from 'lucide-react'

const milestones = [
  {
    period: 'Q1 2026',
    status: 'done',
    title: 'Foundation & Clinical Validation',
    description: 'Core platform architecture, provider portal MVP, and initial clinical validation with two TMJ specialists.',
  },
  {
    period: 'Q2 2026',
    status: 'active',
    title: 'Pilot Programme Launch',
    description: 'Onboarding first cohort of providers and patients. Gathering structured feedback on adherence tracking, symptom logging, and provider workflow.',
  },
  {
    period: 'Q3 2026',
    status: 'upcoming',
    title: 'iOS & Android App',
    description: 'Patient mobile app submitted to App Store and Google Play. Push notifications, video streaming, and offline symptom logging.',
  },
  {
    period: 'Q4 2026',
    status: 'upcoming',
    title: 'Multi-Specialty Expansion',
    description: 'Platform opens to physical therapists, general dentists, and oral surgeons. Referral workflow and multi-provider patient management.',
  },
  {
    period: '2027',
    status: 'upcoming',
    title: 'Public Launch & Integrations',
    description: 'Full public availability. EHR integrations with major platforms. Analytics suite for clinic-level outcomes reporting.',
  },
]

export default function Roadmap() {
  const { ref, visible } = useReveal()

  return (
    <section id="roadmap" className="py-24 bg-offwhite" ref={ref}>
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className={`text-center mb-16 reveal ${visible ? 'visible' : ''}`}>
          <span className="section-label">Roadmap</span>
          <h2 className="font-serif text-4xl md:text-5xl font-medium text-navy mt-3 leading-tight">
            Where we are.
            <br />Where we're going.
          </h2>
          <p className="text-navy/55 text-sm mt-4">
            TMJConnect is being built alongside real clinicians. Here's our trajectory.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-6 top-0 bottom-0 w-px bg-navy/10 hidden sm:block" />

          <div className="space-y-8">
            {milestones.map((m, i) => (
              <div
                key={m.period}
                className={`reveal delay-${(i + 1) * 100} ${visible ? 'visible' : ''} sm:pl-16 relative`}
              >
                {/* Timeline dot */}
                <div className={`absolute left-4 top-6 w-4 h-4 rounded-full border-2 -translate-x-1/2 hidden sm:flex items-center justify-center ${
                  m.status === 'done' ? 'bg-gold border-gold' :
                  m.status === 'active' ? 'bg-navy border-navy' :
                  'bg-white border-navy/20'
                }`}>
                  {m.status === 'done' && <Check size={8} className="text-white" />}
                  {m.status === 'active' && <div className="w-2 h-2 rounded-full bg-white animate-pulse" />}
                </div>

                <div className={`rounded-2xl border p-6 ${
                  m.status === 'active'
                    ? 'bg-navy border-navy'
                    : m.status === 'done'
                    ? 'bg-white border-gold/30'
                    : 'bg-white border-navy/8'
                }`}>
                  <div className="flex items-center gap-3 mb-2">
                    <span className={`text-xs font-semibold tracking-wider font-mono ${
                      m.status === 'active' ? 'text-gold' :
                      m.status === 'done' ? 'text-gold' :
                      'text-navy/30'
                    }`}>
                      {m.period}
                    </span>
                    {m.status === 'done' && (
                      <span className="text-[10px] font-semibold text-gold bg-gold/10 border border-gold/20 px-2 py-0.5 rounded-full">
                        ✓ DONE
                      </span>
                    )}
                    {m.status === 'active' && (
                      <span className="text-[10px] font-semibold text-white bg-white/15 px-2 py-0.5 rounded-full animate-pulse">
                        IN PROGRESS
                      </span>
                    )}
                  </div>
                  <h3 className={`font-serif text-lg font-medium mb-2 ${m.status === 'active' ? 'text-white' : 'text-navy'}`}>
                    {m.title}
                  </h3>
                  <p className={`text-sm leading-relaxed ${m.status === 'active' ? 'text-white/60' : 'text-navy/55'}`}>
                    {m.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
