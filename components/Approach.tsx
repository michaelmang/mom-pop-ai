const steps = [
  {
    title: 'Open communication',
    body: 'You talk with me. I share progress as it happens. Questions get answers.',
  },
  {
    title: 'No agency middlemen',
    body: 'I am the person doing the work. No account manager and no layers of handoff.',
  },
  {
    title: 'Rapid development',
    body: 'I ship in short cycles so you can see something working early, give feedback, and keep going.',
  },
]

const offerings = [
  {
    title: 'Websites',
    body: 'Sites that need to work and stay working: public sites, product sites, and the pieces that sit behind them.',
  },
  {
    title: 'Apps',
    body: 'iOS, Android, and web apps. Reading products, libraries, accounts, offline use, audio, and the details that make daily use hold up.',
  },
  {
    title: 'Automation',
    body: 'Connecting websites, apps, and day-to-day processes so routine work happens without extra hands.',
  },
]

export default function Approach() {
  return (
    <section id="approach" className="px-6 py-24 border-t border-line">
      <div className="max-w-5xl mx-auto">
        <p className="text-[13px] font-semibold tracking-[0.14em] uppercase text-mute mb-3">
          Approach
        </p>
        <h2 className="font-serif text-3xl sm:text-4xl tracking-tight text-ink max-w-xl mb-14">
          How I work.
        </h2>

        <ol className="grid md:grid-cols-3 gap-10 mb-20">
          {steps.map((step, i) => (
            <li key={step.title}>
              <p className="font-serif text-sm text-mute mb-3">{i + 1}</p>
              <h3 className="font-serif text-xl text-ink mb-3">{step.title}</h3>
              <p className="text-[15px] leading-relaxed text-mute">{step.body}</p>
            </li>
          ))}
        </ol>

        <div className="border-t border-line pt-14">
          <h3 className="font-serif text-2xl text-ink mb-8">What I take on</h3>
          <div className="grid md:grid-cols-3 gap-10">
            {offerings.map((item) => (
              <div key={item.title}>
                <h4 className="font-semibold text-ink mb-2">{item.title}</h4>
                <p className="text-[15px] leading-relaxed text-mute">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
