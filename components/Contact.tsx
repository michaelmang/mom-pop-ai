import ContactForm from '@/components/ContactForm'
import { serviceArea } from '@/lib/services'
import { siteConfig } from '@/lib/site'

const termClass = 'text-[11px] uppercase tracking-[0.14em] text-mute font-semibold'
const linkClass = 'text-[17px] text-ink hover:text-[#C4A574] transition-colors break-words'

export default function Contact() {
  return (
    <section id="contact" className="px-6 pb-16 scroll-mt-20">
      <div className="max-w-5xl mx-auto w-full">
        <div className="glass rounded-3xl p-7 sm:p-10 w-full grid md:grid-cols-[0.85fr_1.15fr] gap-10 md:gap-14">
          <div>
            <h2 className="font-serif text-3xl sm:text-4xl text-ink leading-tight">
              Tell me what you need
            </h2>
            <p className="mt-4 text-[17px] leading-relaxed text-mute">
              Call or text, email, or send a note here. Big job or small, I&apos;ll
              let you know quickly whether I can help.
            </p>
            <dl className="mt-8 space-y-5">
              <div>
                <dt className={termClass}>Call or text</dt>
                <dd className="mt-1">
                  <a href={`tel:${siteConfig.phoneE164}`} className={linkClass}>
                    {siteConfig.phone}
                  </a>
                </dd>
              </div>
              <div>
                <dt className={termClass}>Email</dt>
                <dd className="mt-1">
                  <a href={`mailto:${siteConfig.email}`} className={linkClass}>
                    {siteConfig.email}
                  </a>
                </dd>
              </div>
              <div>
                <dt className={termClass}>Serving</dt>
                <dd className="mt-1 text-[15px] leading-relaxed text-mute">
                  {serviceArea} in person, and clients anywhere for bigger builds.
                </dd>
              </div>
            </dl>
          </div>
          <ContactForm />
        </div>
      </div>
    </section>
  )
}
