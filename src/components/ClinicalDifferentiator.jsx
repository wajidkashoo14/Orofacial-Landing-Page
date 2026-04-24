import { useReveal } from '../hooks/useReveal'
import { ClipboardList, Brain, FileText, Activity, Stethoscope } from 'lucide-react'

const intakeFields = [
  { icon: <Stethoscope size={14} />, label: 'Diagnosis & Clinical Examination Findings' },
  { icon: <FileText size={14} />, label: 'Full Medical & Headache History' },
  { icon: <ClipboardList size={14} />, label: 'Current Medications' },
  { icon: <Activity size={14} />, label: 'Validated DC-TMD Assessments' },
]

export default function ClinicalDifferentiator() {
  const { ref, visible } = useReveal()

  return (
    <section className="py-16 sm:py-24 bg-white" ref={ref}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">

        {/* Top label */}
        <div className={`text-center mb-12 reveal ${visible ? 'visible' : ''}`}>
          <span className="section-label">What Makes It Clinical</span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-medium text-navy mt-3 leading-tight max-w-3xl mx-auto">
            Not a wellness app.
            <br />A clinical platform.
          </h2>
          <p className="text-navy/55 text-sm mt-4 max-w-xl mx-auto leading-relaxed">
            Every other TMJ app has exercise videos, symptom logging, and adherence tracking.
            So do we. But that is not what separates us.
          </p>
        </div>

        {/* Main content block */}
        <div className="grid lg:grid-cols-2 gap-8 items-stretch">

          {/* Left: the clinical baseline card */}
          <div className={`reveal delay-100 ${visible ? 'visible' : ''} bg-offwhite rounded-2xl border p-7 sm:p-9 flex flex-col justify-between`}
            style={{ borderColor: 'rgb(26 39 68 / 0.08)' }}>

            <div>
              <div className="flex items-center gap-2.5 mb-5">
                <div className="w-9 h-9 rounded-xl bg-navy flex items-center justify-center shrink-0">
                  <ClipboardList size={17} className="text-gold" />
                </div>
                <div>
                  <div className="text-[10px] font-semibold tracking-widest uppercase text-gold">
                    Clinical Intake
                  </div>
                  <div className="text-navy text-sm font-semibold">Structured baseline at first appointment</div>
                </div>
              </div>

              <p className="text-navy/65 text-sm leading-relaxed mb-6">
                When a clinician onboards a patient, they establish a full structured
                clinical baseline — diagnosis, examination findings, complete medical
                history, and validated DC-TMD assessments.{' '}
                <strong className="text-navy font-semibold">
                  Every symptom report that comes in after that is interpreted against
                  the actual clinical picture, not generic data.
                </strong>
              </p>

              {/* Intake fields list */}
              <div className="space-y-2.5">
                {intakeFields.map((f) => (
                  <div
                    key={f.label}
                    className="flex items-center gap-3 bg-white rounded-xl px-4 py-3 border"
                    style={{ borderColor: 'rgb(26 39 68 / 0.07)' }}
                  >
                    <span className="text-gold shrink-0">{f.icon}</span>
                    <span className="text-navy text-xs font-medium">{f.label}</span>
                  </div>
                ))}
              </div>
            </div>

            <p className="text-navy/40 text-xs mt-6 italic">
              This is what makes every between-visit report clinically meaningful —
              not just a number on a scale.
            </p>
          </div>

          {/* Right: AI differentiator card */}
          <div className={`reveal delay-200 ${visible ? 'visible' : ''} bg-navy rounded-2xl p-7 sm:p-9 flex flex-col justify-between`}>

            <div>
              <div className="flex items-center gap-2.5 mb-5">
                <div className="w-9 h-9 rounded-xl bg-white/10 flex items-center justify-center shrink-0">
                  <Brain size={17} className="text-gold" />
                </div>
                <div>
                  <div className="text-[10px] font-semibold tracking-widest uppercase text-gold">
                    AI Engine
                  </div>
                  <div className="text-white text-sm font-semibold">Built to support differential diagnosis</div>
                </div>
              </div>

              <p className="text-white/65 text-sm leading-relaxed mb-6">
                The structured clinical intake, full medical history, validated
                questionnaires, and every between-visit symptom log all feed a single
                engine — one built to help clinicians{' '}
                <strong className="text-white font-semibold">
                  arrive at a differential diagnosis faster and with more confidence.
                </strong>
              </p>

              {/* AI capability points */}
              <div className="space-y-3">
                {[
                  {
                    title: 'Structured clinical data from day one',
                    desc: 'Intake, history, DC-TMD assessments — all captured in a format the AI can reason over.',
                  },
                  {
                    title: 'Longitudinal symptom patterns',
                    desc: 'Between-visit logs build a timeline of pain, adherence, and change — not a snapshot.',
                  },
                  {
                    title: 'AI-assisted differential diagnosis',
                    desc: 'The platform is built to surface patterns the clinician can act on — not just store data.',
                  },
                ].map((item) => (
                  <div
                    key={item.title}
                    className="flex gap-3 bg-white/6 rounded-xl px-4 py-3.5"
                  >
                    <span className="text-gold mt-0.5 shrink-0 text-sm">→</span>
                    <div>
                      <div className="text-white text-xs font-semibold mb-0.5">{item.title}</div>
                      <div className="text-white/50 text-xs leading-relaxed">{item.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* AI badge */}
            <div className="mt-7 flex items-center gap-2.5 border border-gold/25 rounded-xl px-4 py-3 bg-gold/5">
              <Brain size={15} className="text-gold shrink-0" />
              <p className="text-gold text-xs font-medium leading-snug">
                Built to support AI-assisted differential diagnosis —
                a major differentiator from every wellness app in this space.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom callout strip */}
        <div className={`reveal delay-300 ${visible ? 'visible' : ''} mt-8 rounded-2xl border px-6 sm:px-8 py-5 flex flex-col sm:flex-row items-start sm:items-center gap-3`}
          style={{ borderColor: 'rgb(26 39 68 / 0.08)', backgroundColor: 'rgb(26 39 68 / 0.02)' }}>
          <div className="w-8 h-8 rounded-lg bg-gold/10 flex items-center justify-center shrink-0">
            <Stethoscope size={15} className="text-gold" />
          </div>
          <p className="text-navy/65 text-sm leading-relaxed">
            <strong className="text-navy font-semibold">The clinician establishes a full structured clinical baseline at the first appointment</strong>{' '}
            — so every symptom report your patient sends is interpreted against their actual
            clinical picture, not generic data. That is what makes this a clinical platform.
          </p>
        </div>

      </div>
    </section>
  )
}