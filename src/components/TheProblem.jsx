import { useReveal } from '../hooks/useReveal'
import { Home, Heart } from 'lucide-react'

export default function TheProblem() {
  const { ref, visible } = useReveal()

  return (
    <section id="the-problem" className="py-24 bg-offwhite" ref={ref}>
      <div className="max-w-6xl mx-auto px-6">
        {/* Section label */}
        <div className={`text-center mb-4 reveal ${visible ? 'visible' : ''}`}>
          <span className="section-label">The Gap We Close</span>
        </div>

        {/* Large headline with strikethrough repetition effect */}
        <div className={`text-center mb-16 reveal delay-100 ${visible ? 'visible' : ''}`}>
          <h2 className="font-serif text-4xl md:text-5xl font-medium text-navy leading-tight mb-2">
            TMJ pain treatment
          </h2>
          <h2 className="font-serif text-4xl md:text-5xl font-medium text-navy/20 leading-tight line-through decoration-gold/50">
            has a visibility problem.
          </h2>
        </div>

        {/* Two columns */}
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20">
          {/* For Providers */}
          <div className={`reveal delay-200 ${visible ? 'visible' : ''}`}>
            <div className="flex items-center gap-2 mb-6">
              <Home size={14} className="text-gold" />
              <span className="section-label">For Providers</span>
            </div>
            <div className="space-y-5">
              {[
                'Patients leave with paper handouts and verbal instructions — and providers have no idea whether they follow them.',
                'Between appointments, providers are completely blind to how patients are progressing.',
                'If something worsens, the only option is a phone call, a wait, and a retrospective guessing game at the next visit.',
              ].map((text, i) => (
                <p key={i} className="text-navy/65 text-sm leading-relaxed border-l-2 border-navy/10 pl-4">
                  {text}
                </p>
              ))}
            </div>
          </div>

          {/* For Patients */}
          <div className={`reveal delay-300 ${visible ? 'visible' : ''}`}>
            <div className="flex items-center gap-2 mb-6">
              <Heart size={14} className="text-gold" />
              <span className="section-label">For Patients</span>
            </div>
            <div className="space-y-5">
              {[
                'Patients forget how to do exercises correctly at home — leading to poor adherence and slower recovery.',
                'Tracking pain patterns means relying on fragmented memory at the next appointment — weeks later.',
                'When something changes, there is no easy way to reach the provider without waiting for an appointment.',
              ].map((text, i) => (
                <p key={i} className="text-navy/65 text-sm leading-relaxed border-l-2 border-navy/10 pl-4">
                  {text}
                </p>
              ))}
            </div>
          </div>
        </div>

        {/* CTA Banner */}
        <div className={`mt-16 bg-navy rounded-2xl px-8 py-8 flex flex-col sm:flex-row items-center justify-between gap-6 reveal delay-400 ${visible ? 'visible' : ''}`}>
          <p className="font-serif text-2xl text-white font-medium leading-snug">
            We close <em className="text-gold not-italic">every gap</em>
            <br />in that workflow.
          </p>
          <a href="#how-it-works" className="btn-gold shrink-0">
            See How It Works →
          </a>
        </div>
      </div>
    </section>
  )
}
