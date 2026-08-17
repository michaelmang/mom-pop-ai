export default function Hero() {
  return (
    <section className="min-h-[88vh] flex flex-col justify-center px-6 pt-28 pb-20">
      <div className="max-w-5xl mx-auto w-full">
        <p className="text-[13px] font-semibold tracking-[0.14em] uppercase text-mute mb-6">
          Independent software developer · Roanoke, Virginia
        </p>
        <h1 className="font-serif text-4xl sm:text-5xl lg:text-[3.5rem] leading-[1.4] tracking-tight text-ink max-w-3xl mb-8">
          I build websites, apps, and automations.
        </h1>
        <p className="text-lg sm:text-xl leading-relaxed text-mute max-w-2xl mb-10">
          Based in Roanoke and the New River Valley. You work with me directly.
          We keep communication open, and we move quickly.
        </p>
        <div className="flex flex-wrap gap-3">
          <a
            href="#contact"
            className="inline-flex items-center px-5 py-2.5 rounded-md bg-navy hover:bg-navy-hover text-white text-[15px] font-semibold transition-colors"
          >
            Get in touch
          </a>
          <a
            href="#work"
            className="inline-flex items-center px-5 py-2.5 rounded-md border border-line hover:border-ink/30 text-ink text-[15px] font-semibold transition-colors"
          >
            Work
          </a>
        </div>
      </div>
    </section>
  )
}
