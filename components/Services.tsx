const services = [
  {
    icon: '🔍',
    title: 'AI Audit & Strategy',
    desc: "A clear-eyed look at your workflow and a plain-English recommendation for where AI can genuinely save you time, and where it's just noise.",
  },
  {
    icon: '⚙️',
    title: 'Tool Setup & Integration',
    desc: 'Get the right tools configured and connected to how you already work: email, scheduling, customer communication, document generation.',
  },
  {
    icon: '🎓',
    title: 'Staff Training',
    desc: "Hands-on sessions that teach your team to use AI tools confidently, without the learning-curve frustration. They'll actually use what I set up.",
  },
]

export default function Services() {
  return (
    <section id="services" className="py-28 px-6">
      <div className="max-w-5xl mx-auto">
        {/* Label */}
        <p className="font-mono text-xs font-semibold tracking-[0.15em] text-purple-400 uppercase mb-4">
          What I do
        </p>

        <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4 max-w-xl">
          Practical help, not a platform pitch
        </h2>
        <p className="text-slate-400 max-w-lg mb-14 text-base">
          I&apos;m not selling you software. I help you figure out what to use, set it up, and make sure it sticks, without the upsell.
        </p>

        <div className="grid md:grid-cols-3 gap-5">
          {services.map((s) => (
            <div key={s.title} className="glass-card rounded-xl p-7 group hover:border-white/15 transition-colors">
              <div className="text-3xl mb-5">{s.icon}</div>
              <h3 className="font-semibold text-white text-lg mb-3 group-hover:text-purple-300 transition-colors">
                {s.title}
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
