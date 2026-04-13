import { useState } from 'react'
import { useReveal } from '../hooks/useReveal'
import { Plus, Minus } from 'lucide-react'

const faqs = [
  {
    q: 'Is this app only for TMJ?',
    a: 'No. While TMJConnect was designed with orofacial pain in mind, it works for any condition requiring structured home exercise, symptom tracking, and between-visit patient communication — including headache disorders, neck pain, and post-surgical recovery.',
  },
  {
    q: 'How does my patient get the app?',
    a: 'You invite them directly from the provider portal. They receive an email with a simple invite code. No separate sign-up or app store search needed — the link takes them straight to their account.',
  },
  {
    q: 'Is patient data secure and HIPAA-compliant?',
    a: 'Yes. All data is encrypted in transit and at rest. Mandatory MFA is enforced for all provider accounts. A Business Associate Agreement (BAA) is available for every clinic. Audit logs track every access event. US data residency is guaranteed.',
  },
  {
    q: 'Can I use the provider portal on any computer?',
    a: 'Yes. The provider portal is a web application — no software installation required. It runs in any modern browser on desktop or laptop. The patient-facing experience is a mobile app (iOS and Android).',
  },
  {
    q: 'When will the app be available?',
    a: 'We are currently running a limited pilot with selected providers. Join the waitlist to be among the first to access the platform when we expand.',
  },
  {
    q: 'Is there a cost to use the platform?',
    a: 'The pilot is free for selected providers. Pricing for the full launch will be shared with waitlist members first. We are committed to keeping it accessible for independent practices.',
  },
]

function FAQItem({ faq, isOpen, onToggle }) {
  return (
    <div className="border-b border-navy/8">
      <button
        className="w-full flex items-center justify-between py-5 text-left gap-4 hover:text-navy transition-colors"
        onClick={onToggle}
      >
        <span className="text-navy text-sm font-medium">{faq.q}</span>
        <span className="shrink-0 text-navy/40 hover:text-navy transition-colors">
          {isOpen ? <Minus size={16} /> : <Plus size={16} />}
        </span>
      </button>
      {isOpen && (
        <div className="pb-5">
          <p className="text-navy/60 text-sm leading-relaxed max-w-2xl">{faq.a}</p>
        </div>
      )}
    </div>
  )
}

export default function FAQ() {
  const { ref, visible } = useReveal()
  const [openIndex, setOpenIndex] = useState(null)

  return (
    <section id="faq" className="py-24 bg-white" ref={ref}>
      <div className="max-w-3xl mx-auto px-6">
        <div className={`text-center mb-14 reveal ${visible ? 'visible' : ''}`}>
          <span className="section-label">FAQ</span>
          <h2 className="font-serif text-4xl md:text-5xl font-medium text-navy mt-3">
            Questions answered.
          </h2>
        </div>

        <div className={`reveal delay-100 ${visible ? 'visible' : ''}`}>
          {faqs.map((faq, i) => (
            <FAQItem
              key={i}
              faq={faq}
              isOpen={openIndex === i}
              onToggle={() => setOpenIndex(openIndex === i ? null : i)}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
