import { useReveal } from '../hooks/useReveal'
import { Activity, Users, Zap, Heart } from 'lucide-react'

const roles = [
  {
    tag: 'Specialist',
    title: 'TMJ / Orofacial Pain',
    icon: <Activity size={18} className="text-gold" />,
    description: 'Assign exercises, track symptoms, and manage patients between visits from a single dashboard.',
    features: ['Patient symptom dashboard', 'Video exercise library', 'Urgent alert system'],
  },
  {
    tag: 'General Dentist',
    title: 'DDS / DMD',
    icon: <Users size={18} className="text-gold" />,
    description: 'Refer patients seamlessly and stay informed on their specialist-managed treatment progress.',
    features: ['Easy patient referrals', 'Treatment progress view', 'Secure messaging'],
  },
  {
    tag: 'Physical Therapist',
    title: 'PT / OT',
    icon: <Zap size={18} className="text-gold" />,
    description: 'Assign targeted exercises with video guidance and monitor adherence in real time.',
    features: ['Custom exercise plans', 'Adherence tracking', 'Pain trend reports'],
  },
  {
    tag: 'The One Who Matters Most',
    title: 'Patient',
    icon: <Heart size={18} className="text-gold" />,
    description: 'Follow your treatment with clear video exercises, log symptoms in seconds, and stay connected to your provider.',
    features: ['Video-guided exercises', '60-second symptom log', 'iOS & Android app'],
    highlight: true,
  },
]

export default function ForWho() {
  const { ref, visible } = useReveal()

  return (
    <section id="for-providers" className="py-24 bg-white" ref={ref}>
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className={`text-center mb-14 reveal ${visible ? 'visible' : ''}`}>
          <span className="section-label">Who It's For</span>
          <h2 className="font-serif text-4xl md:text-5xl font-medium text-navy mt-3 leading-tight">
            Built for every role
            <br />in the care team.
          </h2>
          <p className="text-navy/55 text-sm mt-4 max-w-md mx-auto">
            Whether you treat, refer, or recover — TMJConnect fits into your workflow.
          </p>
        </div>

        {/* Role cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {roles.map((role, i) => (
            <div
              key={role.title}
              className={`reveal delay-${(i + 1) * 100} ${visible ? 'visible' : ''} rounded-2xl p-6 flex flex-col gap-4 border transition-all duration-200 hover:-translate-y-1 hover:shadow-md ${
                role.highlight
                  ? 'bg-navy border-navy text-white'
                  : 'bg-offwhite border-navy/8'
              }`}
            >
              {/* Icon */}
              <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${role.highlight ? 'bg-white/10' : 'bg-white border border-navy/8'}`}>
                {role.icon}
              </div>

              {/* Tag + title */}
              <div>
                <div className={`text-[10px] font-semibold tracking-widest uppercase mb-1 ${role.highlight ? 'text-gold' : 'text-gold'}`}>
                  {role.tag}
                </div>
                <h3 className={`font-serif text-lg font-medium ${role.highlight ? 'text-white' : 'text-navy'}`}>
                  {role.title}
                </h3>
              </div>

              {/* Description */}
              <p className={`text-sm leading-relaxed ${role.highlight ? 'text-white/70' : 'text-navy/60'}`}>
                {role.description}
              </p>

              {/* Features */}
              <ul className="space-y-1.5 mt-auto">
                {role.features.map((f) => (
                  <li key={f} className={`flex items-start gap-2 text-xs ${role.highlight ? 'text-white/80' : 'text-navy/65'}`}>
                    <span className="text-gold mt-0.5">✓</span>
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
