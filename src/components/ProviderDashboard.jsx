import { useReveal } from '../hooks/useReveal'

const dashboardFeatures = [
  {
    num: '01',
    title: 'See every patient at a glance.',
    description:
      'Your dashboard shows all active patients sorted by who needs attention first. Red means urgent. Green means they\'re on track. You never have to search for the problem.',
    mockup: (
      <div className="space-y-2">
        {[
          { name: 'Sarah Mitchell', status: 'Urgent', bg: 'bg-red-500 text-white' },
          { name: 'James Rivera', status: 'Low Adherence', bg: 'bg-yellow-500/20 text-yellow-300 border border-yellow-500/30' },
          { name: 'Anna Chen', status: 'On Track', bg: 'bg-green-500/20 text-green-300 border border-green-500/30' },
          { name: 'Mark Kim', status: 'On Track', bg: 'bg-green-500/20 text-green-300 border border-green-500/30' },
        ].map((p) => (
          <div key={p.name} className="flex items-center justify-between bg-white/5 rounded-lg px-4 py-2.5">
            <div className="flex items-center gap-2.5">
              <div className="w-7 h-7 rounded-full bg-white/10 text-white text-xs flex items-center justify-center font-medium">
                {p.name[0]}
              </div>
              <span className="text-white/80 text-sm">{p.name}</span>
            </div>
            <span className={`text-[10px] font-semibold px-2.5 py-1 rounded ${p.bg}`}>{p.status}</span>
          </div>
        ))}
      </div>
    ),
  },
  {
    num: '02',
    title: 'Filter to who needs you most.',
    description:
      'One click filters your list to patients with urgent reports, low adherence, or no recent activity. No scrolling through everyone who is doing fine to find the one who isn\'t.',
    mockup: (
      <div>
        <div className="flex gap-2 mb-3 flex-wrap">
          {['Needs Attention', 'All Patients', 'No Activity'].map((f, i) => (
            <button key={f} className={`text-xs px-3 py-1.5 rounded-full border transition-all ${i === 0 ? 'bg-gold text-white border-gold' : 'border-white/20 text-white/50 hover:border-white/40'}`}>
              {f}
            </button>
          ))}
        </div>
        <div className="space-y-2">
          {[
            { name: 'Sarah Mitchell', status: 'Urgent', bg: 'bg-red-500 text-white' },
            { name: 'James Rivera', status: 'Low Adherence', bg: 'bg-yellow-500/20 text-yellow-300 border border-yellow-500/30' },
          ].map((p) => (
            <div key={p.name} className="flex items-center justify-between bg-white/5 rounded-lg px-4 py-2.5">
              <span className="text-white/80 text-sm">{p.name}</span>
              <span className={`text-[10px] font-semibold px-2.5 py-1 rounded ${p.bg}`}>{p.status}</span>
            </div>
          ))}
        </div>
      </div>
    ),
  },
  {
    num: '03',
    title: 'See the full picture instantly.',
    description:
      'Click any patient to see their pain trend over 14 days, exercise adherence percentage, and recent activity — all on one screen. Treatment decisions based on real data, not recall.',
    mockup: (
      <div className="bg-white/5 rounded-xl p-4">
        <div className="text-white/40 text-xs mb-2">Pain trend — last 14 days</div>
        <div className="flex items-end gap-1 h-12 mb-3">
          {[4, 6, 5, 7, 8, 6, 5, 4, 6, 7, 5, 4, 3, 4].map((v, i) => (
            <div key={i} className="flex-1 rounded-sm"
              style={{ height: `${v * 10}%`, backgroundColor: v >= 7 ? '#ef4444' : '#c9952a', opacity: 0.7 + (i / 20) }}
            />
          ))}
        </div>
        <div className="grid grid-cols-2 gap-2">
          <div className="bg-white/8 rounded-lg p-2.5">
            <div className="text-[10px] text-white/40 uppercase tracking-wider">Adherence</div>
            <div className="text-white text-sm font-semibold mt-0.5">✓ Tracked</div>
          </div>
          <div className="bg-white/8 rounded-lg p-2.5">
            <div className="text-[10px] text-white/40 uppercase tracking-wider">Pain Level</div>
            <div className="text-white text-sm font-semibold mt-0.5">⚠ Monitored</div>
          </div>
        </div>
      </div>
    ),
  },
  {
    num: '04',
    title: 'Every symptom log, in order.',
    description:
      'The activity log shows exactly how your patient has been feeling each day — structured data with pain levels, types, and body locations. Colour-coded. Searchable. No more "how were things since your last visit?"',
    mockup: (
      <div className="space-y-2">
        {[
          { date: 'Mar 30', pain: 'Pain 8/10', type: 'Sharp · Left Jaw', color: 'bg-red-500' },
          { date: 'Mar 28', pain: 'Pain 5/10', type: 'Aching · Temple', color: 'bg-yellow-500' },
          { date: 'Mar 26', pain: 'Pain 4/10', type: 'Throbbing · Jaw', color: 'bg-yellow-500' },
          { date: 'Mar 27', pain: 'Pain 2/10', type: 'Mild · Neck', color: 'bg-green-500' },
        ].map((log) => (
          <div key={log.date} className="flex items-center gap-3 bg-white/5 rounded-lg px-3 py-2.5">
            <span className={`w-2 h-2 rounded-full shrink-0 ${log.color}`} />
            <div className="flex-1 min-w-0">
              <span className="text-white/80 text-xs font-medium">{log.pain}</span>
              <span className="text-white/40 text-xs"> · {log.type}</span>
            </div>
            <span className="text-white/30 text-[10px] shrink-0">{log.date}</span>
          </div>
        ))}
      </div>
    ),
  },
  {
    num: '05',
    title: 'Respond in seconds.',
    description:
      'Urgent reports surface immediately in your inbox and alert you by browser notification and email simultaneously. Reply with a pre-written template or write your own — your patient is notified on their phone instantly.',
    mockup: (
      <div className="bg-red-900/30 border border-red-500/30 rounded-xl p-4">
        <div className="flex items-center gap-2 mb-2">
          <span className="text-red-400 text-xs font-semibold">⚠ URGENT REPORT</span>
        </div>
        <p className="text-white/80 text-sm italic mb-3">
          "My jaw locked this morning and I'm having trouble opening it fully. Pain is at 8/10."
        </p>
        <div className="flex items-center gap-2 text-green-400 text-xs">
          <span>✓ Reply sent · 2 min ago</span>
        </div>
      </div>
    ),
  },
]

export default function ProviderDashboard() {
  const { ref, visible } = useReveal()

  return (
    <section className="py-24 bg-navy" ref={ref}>
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className={`text-center mb-20 reveal ${visible ? 'visible' : ''}`}>
          <span className="section-label">Provider Dashboard</span>
          <h2 className="font-serif text-4xl md:text-5xl font-medium text-white mt-3 leading-tight">
            Every patient. Every day.
            <br />No effort.
          </h2>
          <p className="text-white/50 text-sm mt-4 max-w-md mx-auto">
            Your patient list updates in real time — so you always know who is on track, who needs attention, and who has gone quiet.
          </p>
        </div>

        {/* Features */}
        <div className="space-y-20">
          {dashboardFeatures.map((feat, i) => (
            <div
              key={feat.num}
              className={`reveal delay-${(i % 3 + 1) * 100} ${visible ? 'visible' : ''} grid lg:grid-cols-2 gap-10 items-center ${i % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}
            >
              <div className={i % 2 === 1 ? 'lg:order-2' : ''}>
                <div className="font-serif text-7xl font-medium text-white/5 leading-none mb-4 select-none">
                  {feat.num}
                </div>
                <h3 className="font-serif text-2xl md:text-3xl font-medium text-white leading-snug mb-4">
                  {feat.title}
                </h3>
                <p className="text-white/55 text-sm leading-relaxed">{feat.description}</p>
              </div>
              <div className={i % 2 === 1 ? 'lg:order-1' : ''}>
                {feat.mockup}
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className={`text-center mt-16 reveal ${visible ? 'visible' : ''}`}>
          <a href="#early-access" className="btn-gold">
            Join the Waitlist as a Provider
          </a>
        </div>
      </div>
    </section>
  )
}
