import { useReveal } from '../hooks/useReveal'
import { X, Check } from 'lucide-react'

const withoutItems = [
  'Paper handouts patients lose or forget before they get home.',
  'Symptom changes go unreported until the next appointment, weeks later.',
  'Urgent escalations rely on phone tag and missed calls.',
]

const withItems = [
  { text: 'Real-time adherence tracking — see who completed what, and when.', bold: 'Real-time adherence tracking' },
  { text: '60-second symptom logs — structured entries visible on the provider dashboard instantly.', bold: '60-second symptom logs' },
  { text: 'Urgent alerts surface automatically — no phone calls, no delays.', bold: 'Urgent alerts surface automatically' },
]

export default function WhatChanges() {
  const { ref, visible } = useReveal()

  return (
    <section id="the-difference" className="py-24 bg-offwhite" ref={ref}>
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className={`text-center mb-14 reveal ${visible ? 'visible' : ''}`}>
          <span className="section-label">The Difference</span>
          <h2 className="font-serif text-4xl md:text-5xl font-medium text-navy mt-3 leading-tight">
            What changes when you
            <br />connect the gap.
          </h2>
        </div>

        {/* Before/After cards */}
        <div className="grid md:grid-cols-2 gap-6">
          {/* Without */}
          <div className={`reveal delay-100 ${visible ? 'visible' : ''} bg-white rounded-2xl border border-navy/8 p-8`}>
            <div className="text-xs font-semibold tracking-widest uppercase text-navy/30 mb-6">
              — Without TMJConnect
            </div>
            <h3 className="font-serif text-2xl text-navy font-medium mb-6 leading-snug">
              Care stops at the door.
            </h3>
            <div className="space-y-4">
              {withoutItems.map((text, i) => (
                <div key={i} className="flex gap-3">
                  <div className="mt-0.5 w-4 h-4 rounded-full bg-red-100 flex items-center justify-center shrink-0">
                    <X size={10} className="text-red-500" />
                  </div>
                  <p className="text-sm text-navy/60 leading-relaxed">{text}</p>
                </div>
              ))}
            </div>

            {/* Stat */}
            <div className="mt-8 pt-6 border-t border-navy/8">
              <div className="font-serif text-4xl text-navy/25 font-medium">~15%</div>
              <div className="text-xs text-navy/40 mt-1">Typical home exercise adherence</div>
            </div>
          </div>

          {/* With */}
          <div className={`reveal delay-200 ${visible ? 'visible' : ''} bg-navy rounded-2xl p-8`}>
            <div className="text-xs font-semibold tracking-widest uppercase text-gold/70 mb-6">
              ✓ With TMJConnect
            </div>
            <h3 className="font-serif text-2xl text-white font-medium mb-6 leading-snug">
              Care that continues.
            </h3>
            <div className="space-y-4">
              {withItems.map((item, i) => (
                <div key={i} className="flex gap-3">
                  <div className="mt-0.5 w-4 h-4 rounded-full bg-gold/20 flex items-center justify-center shrink-0">
                    <Check size={10} className="text-gold" />
                  </div>
                  <p className="text-sm text-white/70 leading-relaxed">
                    <strong className="text-white font-medium">{item.bold}</strong>
                    {item.text.replace(item.bold, '')}
                  </p>
                </div>
              ))}
            </div>

            {/* Stat */}
            <div className="mt-8 pt-6 border-t border-white/10">
              <div className="font-serif text-4xl text-gold font-medium">89%</div>
              <div className="text-xs text-white/40 mt-1">Pilot adherence rate with TMJConnect</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
