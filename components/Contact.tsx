import ContactForm from '@/components/ContactForm'
import { siteConfig } from '@/lib/site'

const linkClass =
  'text-[#C4A574] hover:text-[#D8BC8E] transition-colors underline underline-offset-4 decoration-[#C4A574]/40'

export default function Contact() {
  return (
    <section id="contact" className="px-6 pb-16 scroll-mt-20">
      <div className="max-w-5xl mx-auto w-full">
        <div className="glass rounded-3xl p-7 sm:p-10 w-full">
          <p className="font-serif text-2xl sm:text-3xl leading-snug text-ink text-balance">
            Call or text{' '}
            <a href={`tel:${siteConfig.phoneE164}`} className={`${linkClass} whitespace-nowrap`}>
              {siteConfig.phone}
            </a>
            ,{' '}
            <a href={`mailto:${siteConfig.email}`} className={`${linkClass} whitespace-nowrap`}>
              email me
            </a>
            , or send a note here.
          </p>
          <div className="mt-8">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  )
}
