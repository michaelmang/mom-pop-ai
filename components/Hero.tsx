export default function Hero() {
  return (
    <section className="min-h-[88vh] flex flex-col justify-center px-6 pt-28 pb-20">
      <div className="max-w-5xl mx-auto w-full">
        <p className="text-[13px] font-semibold tracking-[0.14em] uppercase text-mute mb-6">
          Independent developer · Roanoke, Virginia
        </p>
        <h1 className="font-serif text-4xl sm:text-5xl lg:text-[3.5rem] leading-[1.15] tracking-tight text-ink max-w-3xl mb-8">
          I design and ship mobile apps and digital products.
        </h1>
        <p className="text-lg sm:text-xl leading-relaxed text-mute max-w-2xl mb-10">
          The work is in the store and in people&apos;s hands—not in a slide deck.
          I build software for organizations that need something their readers
          and teams will actually use.
        </p>
        <div className="flex flex-wrap gap-3">
          <a
            href="#contact"
            className="inline-flex items-center px-5 py-2.5 rounded-md bg-navy hover:bg-navy-hover text-white text-[15px] font-semibold transition-colors"
          >
            Start a conversation
          </a>
          <a
            href="#work"
            className="inline-flex items-center px-5 py-2.5 rounded-md border border-line hover:border-ink/30 text-ink text-[15px] font-semibold transition-colors"
          >
            See the work
          </a>
        </div>
      </div>
    </section>
  )
}
