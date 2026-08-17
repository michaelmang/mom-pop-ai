const steps = [
  {
    title: 'Understand the work',
    body: 'Before anything is built, I learn who the product is for, what they need to do, and what would actually help. The plan is short and in plain language.',
  },
  {
    title: 'Build and ship',
    body: 'I design and implement the product, then put it in the world—App Store, Google Play, the web. The measure is a working app, not a prototype that never leaves a laptop.',
  },
  {
    title: 'Stay with it',
    body: 'Software needs care after launch. I remain available for fixes, improvements, and the next version, so the product does not stall the week after it ships.',
  },
]

const offerings = [
  {
    title: 'Mobile apps',
    body: 'iOS and Android apps that have to hold up in daily use: reading, libraries, accounts, offline access, audio, and the unglamorous details that make an app feel finished.',
  },
  {
    title: 'The product around the app',
    body: 'Websites, backends, and catalog work that make a mobile app last. Mobile is the center of what I take on. I do not treat the surrounding product as an afterthought.',
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
          A straightforward way of working.
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
          <div className="grid md:grid-cols-2 gap-10">
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
