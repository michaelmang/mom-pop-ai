const credentials = [
  'Software engineering & management, 10+ years',
  'Cloud platforms: AWS, Azure, multi-region systems',
  'Managed vendor integrations & billing tech at scale',
  'Serving the New River & Roanoke Valleys',
]

export default function About() {
  return (
    <section id="about" className="py-28 px-6 border-t border-white/[0.05]">
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-14 items-start">
        {/* Text */}
        <div>
          <p className="font-mono text-xs font-semibold tracking-[0.15em] text-purple-400 uppercase mb-4">
            Who I am
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-6">
            A local person with real tech experience
          </h2>
          <p className="text-slate-400 text-base leading-relaxed mb-5">
            I&apos;ve spent a decade in software engineering and management, and I&apos;ve since gone deep on the AI landscape. Before that, I helped run software and teams for a cloud technology product doing over $1B in annual revenue.
          </p>
          <p className="text-slate-400 text-base leading-relaxed">
            Now I&apos;m applying AI to problems I already know how to solve the hard way.
          </p>
        </div>

        {/* Credentials card */}
        <div className="glass-card rounded-xl p-7">
          <p className="font-mono text-xs text-slate-500 tracking-widest uppercase mb-5">
            Background
          </p>
          <ul className="space-y-4">
            {credentials.map((c) => (
              <li key={c} className="flex items-start gap-3 text-sm text-slate-300">
                <span className="mt-0.5 text-teal-400 flex-shrink-0">✓</span>
                {c}
              </li>
            ))}
          </ul>
          <div className="divider mt-7 mb-5" />
          <p className="text-slate-500 text-xs">
            Not affiliated with any AI platform. No products to sell, just honest advice.
          </p>
        </div>
      </div>
    </section>
  )
}
