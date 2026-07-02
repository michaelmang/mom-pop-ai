export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center hero-nebula overflow-hidden">
      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 pt-24 pb-32">
        {/* Eyebrow */}
        <p className="font-mono text-xs font-semibold tracking-[0.18em] text-teal-400 uppercase mb-6 flex items-center gap-2">
          <span className="text-teal-600">›</span>
          Local AI Consulting · Roanoke &amp; New River Valley, VA
        </p>

        {/* Headline */}
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold leading-[1.08] tracking-tight text-white mb-8 max-w-3xl">
          Don&apos;t Learn AI.{' '}
          <span className="text-gradient">Delegate It.</span>
        </h1>

        {/* Card */}
        <div className="glass-card rounded-xl p-6 max-w-xl mb-10">
          <p className="font-mono text-xs text-slate-500 mb-1 tracking-widest uppercase">
            The plain truth
          </p>
          <p className="text-slate-200 text-base leading-relaxed">
            Most small businesses in Roanoke and the New River Valley don&apos;t need an AI strategy. They need someone to handle it. I set up the right tools, automate the busywork, and hand you back hours every week. No courses, no hype, no learning curve.
          </p>
        </div>

        {/* CTAs */}
        <div className="flex flex-wrap gap-4">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-purple-600 hover:bg-purple-500 text-white font-semibold text-sm transition-colors shadow-lg shadow-purple-900/40"
          >
            Book a Free 30-Min Call →
          </a>
          <a
            href="#services"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-white/15 hover:border-white/30 hover:bg-white/5 text-slate-300 font-semibold text-sm transition-colors"
          >
            See What I Do
          </a>
        </div>
      </div>

      {/* Mountain silhouette */}
      <div className="absolute bottom-0 left-0 right-0 z-10">
        <svg
          viewBox="0 0 1440 140"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          className="w-full"
        >
          <path
            d="M0,140 L0,100 L80,72 L200,105 L320,55 L440,90 L540,30 L640,75 L740,40 L860,85 L960,48 L1080,88 L1180,52 L1300,92 L1380,68 L1440,82 L1440,140 Z"
            fill="#0B0E14"
            fillOpacity="0.95"
          />
          <path
            d="M0,140 L0,115 L120,90 L260,118 L380,78 L500,108 L600,60 L700,95 L800,65 L920,100 L1040,72 L1160,105 L1280,75 L1440,98 L1440,140 Z"
            fill="#0B0E14"
          />
        </svg>
      </div>
    </section>
  )
}
