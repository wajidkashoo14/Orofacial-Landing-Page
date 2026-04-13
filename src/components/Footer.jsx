export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-navy py-14 border-t border-white/8">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="font-serif text-xl text-white font-semibold mb-3">TMJConnect</div>
            <p className="text-white/45 text-sm leading-relaxed max-w-xs">
              The first purpose-built platform for TMJ &amp; orofacial pain management — connecting care beyond the clinic.
            </p>
          </div>

          {/* Product links */}
          <div>
            <div className="text-white/30 text-xs font-semibold tracking-widest uppercase mb-4">Platform</div>
            <ul className="space-y-2.5">
              {['How It Works', 'For Providers', 'For Patients', 'Security'].map((item) => (
                <li key={item}>
                  <a href={`#${item.toLowerCase().replace(/\s+/g, '-')}`} className="text-white/55 text-sm hover:text-white transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company links */}
          <div>
            <div className="text-white/30 text-xs font-semibold tracking-widest uppercase mb-4">Company</div>
            <ul className="space-y-2.5">
              {['Early Access', 'FAQ', 'Roadmap', 'Privacy Policy', 'Terms of Service'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-white/55 text-sm hover:text-white transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-white/8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/25 text-xs">
            © {currentYear} TMJConnect. All rights reserved.
          </p>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            <span className="text-white/35 text-xs">Pilot in progress — limited access</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
