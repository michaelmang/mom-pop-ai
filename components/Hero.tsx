import Image from 'next/image'

export default function Hero() {
  return (
    <section className="min-h-[88vh] flex flex-col justify-center px-6 pt-28 pb-20">
      <div className="max-w-5xl mx-auto w-full grid md:grid-cols-[1fr_17rem] gap-10 lg:gap-16 items-center">
        <Image
          src="/michael.jpg"
          alt="Michael Mangialardi"
          width={460}
          height={460}
          priority
          className="order-first md:order-last w-40 sm:w-48 md:w-full h-auto rounded-2xl ring-1 ring-black/10 shadow-[0_20px_40px_-16px_rgba(28,25,23,0.35)]"
        />
        <div className="order-last md:order-first">
          <p className="text-[13px] font-semibold tracking-[0.14em] uppercase text-mute mb-6">
            Independent software developer · Virginia
          </p>
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-[3.5rem] leading-[1.4] tracking-tight text-ink max-w-3xl mb-8">
            I build websites, apps, and automations.
          </h1>
          <p className="text-lg sm:text-xl leading-relaxed text-mute max-w-2xl mb-10">
            I live in the Blacksburg and Christiansburg (New River Valley) area, near Roanoke. Local and remote
            work are both fine. You work with me directly. We keep communication
            open, and we move quickly.
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
      </div>
    </section>
  )
}
