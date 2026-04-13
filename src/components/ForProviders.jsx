import { useReveal } from '../hooks/useReveal'
import { BarChart2, Video, MessageSquare, Lock } from 'lucide-react'

const features = [
  {
    icon: <BarChart2 size={18} className="text-gold" />,
    title: 'Real-Time Patient Dashboard',
    description:
      'A live view of all your patients — pain trends, exercise adherence rates, and urgent reports surfaced automatically by severity. You see who needs attention the moment they do.',
  },
  {
    icon: <Video size={18} className="text-gold" />,
    title: 'Video Exercise Assignment',
    description:
      'Upload your own exercise videos and assign them to specific patients with frequency, reminders, and instructions. Patients get structured, video-based guidance they can replay at any time.',
  },
  {
    icon: <MessageSquare size={18} className="text-gold" />,
    title: 'Structured Report Inbox',
    description:
      'Receive patient reports with urgency levels — Routine, Concerning, or Urgent. Respond with pre-written templates or custom messages. Urgent reports alert you immediately by browser push and email.',
  },
  {
    icon: <Lock size={18} className="text-gold" />,
    title: 'HIPAA-Compliant by Design',
    description:
      'Mandatory MFA for all provider accounts. Business Associate Agreement available. Audit logs of every patient data access. End-to-end encryption. Built for healthcare from day one — not retrofitted.',
  },
]

export default function ForProviders() {
  const { ref, visible } = useReveal()

  return (
    <section className="py-24 bg-offwhite" ref={ref}>
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className={`text-center mb-14 reveal ${visible ? 'visible' : ''}`}>
          <span className="section-label">For Providers</span>
          <h2 className="font-serif text-4xl md:text-5xl font-medium text-navy mt-3 leading-tight">
            Stop guessing.
            <br />See exactly how your
            <br />patients are doing.
          </h2>
        </div>

        {/* Feature grid */}
        <div className="grid md:grid-cols-2 gap-5">
          {features.map((f, i) => (
            <div
              key={f.title}
              className={`reveal delay-${(i + 1) * 100} ${visible ? 'visible' : ''} bg-white rounded-2xl border border-navy/8 p-7 hover:shadow-md transition-all duration-200 hover:-translate-y-0.5`}
            >
              <div className="w-10 h-10 bg-offwhite rounded-xl flex items-center justify-center mb-4 border border-navy/6">
                {f.icon}
              </div>
              <h3 className="font-serif text-lg font-medium text-navy mb-2">{f.title}</h3>
              <p className="text-sm text-navy/60 leading-relaxed">{f.description}</p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className={`text-center mt-12 reveal delay-400 ${visible ? 'visible' : ''}`}>
          <a href="#early-access" className="btn-primary">
            Join the Waitlist as a Provider
          </a>
        </div>
      </div>
    </section>
  )
}
