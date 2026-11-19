import { siteConfig } from '@/lib/site'

export default function HandymanHero() {
  return (
    <section className="min-h-[70vh] flex flex-col justify-center px-6 pt-28 pb-16">
      <div className="max-w-5xl mx-auto w-full">
        <div className="glass rounded-3xl px-7 py-9 sm:px-10 sm:py-12 w-full text-center animate-fade-up">
          <h1 className="font-serif text-[2.2rem] sm:text-5xl lg:text-[3.4rem] leading-[1.22] tracking-[-0.01em] text-ink mx-auto max-w-3xl text-balance">
            Michael is a digital handyman for businesses in the New River Valley.
          </h1>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-3">
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
