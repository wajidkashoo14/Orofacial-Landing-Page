import { useReveal } from '../hooks/useReveal'
import { Shield, FileCheck, Smartphone, ClipboardList, Globe, Check } from 'lucide-react'

const badges = [
  { icon: <Shield size={13} />, label: 'HIPAA Compliant' },
  { icon: <FileCheck size={13} />, label: 'BAA Available' },
  { icon: <Smartphone size={13} />, label: 'MFA Enforced' },
  { icon: <ClipboardList size={13} />, label: 'Audit Logging' },
  { icon: <Globe size={13} />, label: 'US Data Residency' },
]

const complianceFeatures = [
  {
    title: 'End-to-end encryption',
    description: 'All patient data encrypted in transit and at rest. PHI fields are visually flagged with lock icons throughout the provider portal.',
  },
  {
    title: 'Business Associate Agreement (BAA)',
    description: 'A signed BAA is available for all clinic accounts. Provider registration includes a dedicated BAA acceptance step with an immutable timestamp.',
  },
  {
    title: 'Mandatory MFA for all providers',
    description: 'TOTP authenticator app or SMS. Cannot be disabled. 15-minute session timeout with 2-minute warning. New device login email alerts.',
  },
  {
    title: 'Full audit logging',
    description: 'Every login event, patient record accessed, report viewed and change made is logged with timestamp, device, and IP — and viewable by the provider.',
  },
  {
    title: 'Data residency in the United States',
    description: 'All patient data stored on HIPAA-compliant cloud infrastructure within the United States. No cross-border data transfer.',
  },
]

const roles = [
  { icon: '🦷', title: 'DDS / DMD', sub: 'Dentists' },
  { icon: '🏃', title: 'Physical Therapists', sub: 'PT Specialists' },
  { icon: '🫁', title: 'TMJ & Orofacial Pain', sub: 'Specialists' },
  { icon: '🏥', title: 'Oral Surgeons', sub: 'Surgical Specialists' },
]

export default function Security() {
  const { ref, visible } = useReveal()

  return (
    <section id="security" className="py-24 bg-white" ref={ref}>
      <div className="max-w-6xl mx-auto px-6">
        {/* Provider type logos */}
        <div className={`flex flex-wrap justify-center gap-8 mb-14 reveal ${visible ? 'visible' : ''}`}>
          {roles.map((r) => (
            <div key={r.title} className="flex flex-col items-center gap-1.5">
              <span className="text-2xl">{r.icon}</span>
              <div className="text-navy text-xs font-semibold text-center">{r.title}</div>
              <div className="text-navy/40 text-[10px] text-center">{r.sub}</div>
            </div>
          ))}
        </div>

        {/* Security badges */}
        <div className={`flex flex-wrap justify-center gap-2 mb-20 reveal delay-100 ${visible ? 'visible' : ''}`}>
          {badges.map((b) => (
            <span key={b.label} className="badge border-navy/15 text-navy/70 bg-offwhite text-xs">
              {b.icon}
              {b.label}
            </span>
          ))}
        </div>

        {/* Dark section */}
        <div className={`bg-navy rounded-3xl overflow-hidden reveal delay-200 ${visible ? 'visible' : ''}`}>
          <div className="grid lg:grid-cols-2 gap-0">
            {/* Left: headline */}
            <div className="p-10 lg:p-14 flex flex-col justify-center">
              <span className="section-label mb-4">Security & Compliance</span>
              <h2 className="font-serif text-4xl font-medium text-white leading-snug mb-4">
                Built for HIPAA compliance from day one.
              </h2>
              <p className="text-white/55 text-sm leading-relaxed">
                Not retrofitted. Not approximate. Every architectural decision in this platform was made with HIPAA in mind from the first line of code.
              </p>
            </div>

            {/* Right: feature list */}
            <div className="p-8 lg:p-10 bg-white/4 space-y-4">
              {complianceFeatures.map((f) => (
                <div key={f.title} className="bg-white/5 rounded-xl p-4">
                  <div className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-gold/20 flex items-center justify-center shrink-0 mt-0.5">
                      <Check size={10} className="text-gold" />
                    </div>
                    <div>
                      <div className="text-white text-sm font-semibold mb-0.5">{f.title}</div>
                      <div className="text-white/50 text-xs leading-relaxed">{f.description}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
