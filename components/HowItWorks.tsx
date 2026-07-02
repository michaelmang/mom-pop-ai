const steps = [
  {
    n: '01',
    title: 'Free 30-minute call',
    desc: "We talk through your business, your biggest time drains, and whether AI is actually the right solution right now. No pitch, just a real conversation.",
  },
  {
    n: '02',
    title: 'Plain-English plan',
    desc: "You get a short written summary of what I'd recommend and roughly what it would cost, with no jargon and no pressure to move forward.",
  },
  {
    n: '03',
    title: 'We build it together',
    desc: "I set things up, show you and your team how they work, and make sure you can run with it confidently before I step back.",
  },
]

export default function HowItWorks() {
  return (
    <section id="how" className="py-28 px-6 border-t border-white/[0.05]">
      <div className="max-w-5xl mx-auto">
        <p className="font-mono text-xs font-semibold tracking-[0.15em] text-teal-400 uppercase mb-4">
          The process
        </p>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-14 max-w-xl">
          Simple from the first call
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((s, i) => (
            <div key={s.n} className="relative">
              {/* Connector line */}
              {i < steps.length - 1 && (
                <div className="hidden md:block absolute top-5 left-[calc(100%_-_16px)] w-full h-px bg-gradient-to-r from-white/10 to-transparent z-0" />
              )}
              <div className="font-mono text-4xl font-bold text-white/[0.07] mb-4 select-none">
                {s.n}
              </div>
              <h3 className="font-semibold text-white text-lg mb-3">{s.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
