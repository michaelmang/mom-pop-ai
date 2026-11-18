import { siteConfig } from '@/lib/site'

export default function HandymanHero() {
  return (
    <section className="min-h-[70vh] flex flex-col justify-center px-6 pt-28 pb-16">
      <div className="max-w-5xl mx-auto w-full">
        <div className="glass rounded-3xl px-7 py-9 sm:px-10 sm:py-12 w-full text-center animate-fade-up">
          <p className="text-[12px] sm:text-[13px] uppercase tracking-[0.18em] text-[#C4A574] font-semibold mb-6">
            <span className="block sm:inline">Digital Handyman</span>
            <span className="hidden sm:inline" aria-hidden>
              {' · '}
            </span>
            <span className="block sm:inline mt-1 sm:mt-0">New River Valley, Virginia</span>
          </p>
          <h1 className="font-serif text-[2.2rem] sm:text-5xl lg:text-[3.4rem] leading-[1.22] tracking-[-0.01em] text-ink mb-7 mx-auto max-w-3xl text-balance">
            From quick fixes to custom software.
          </h1>
          <p className="text-[17px] sm:text-lg leading-relaxed text-mute mx-auto max-w-2xl">
            I help businesses in Radford, Christiansburg, Blacksburg, and across
            the New River Valley with websites, Google listings, ads, and print.
            For bigger jobs, I build custom apps, automation, and AI integrations
            for clients anywhere.
          </p>
          <div className="mt-9 flex flex-col sm:flex-row items-center justify-center gap-3">
            <a href={`tel:${siteConfig.phoneE164}`} className="btn-gold w-full sm:w-auto">
              Call or text {siteConfig.phone}
            </a>
            <a href="#contact" className="btn-glass w-full sm:w-auto">
              Send a message
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
