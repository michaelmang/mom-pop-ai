import { siteConfig } from '@/lib/site'

export default function Closing() {
  return (
    <section className="px-6 pb-16">
      <div className="max-w-5xl mx-auto w-full">
        <div className="glass-soft rounded-3xl px-7 py-9 sm:px-10 sm:py-10 w-full text-center">
          <p className="text-[17px] sm:text-lg leading-relaxed text-ink/90 mx-auto max-w-3xl">
            With 10 years of experience and emergent tooling, I iterate fast,
            communicate responsively, and craft something special through
            attention to detail. I turn your digital idea into an artifact.
          </p>
          <p className="mt-5 text-[17px] sm:text-lg leading-relaxed">
            <a
              href={`mailto:${siteConfig.email}`}
              className="text-[#C4A574] hover:text-[#D8BC8E] transition-colors underline underline-offset-4 decoration-[#C4A574]/40"
            >
              Email me for inquiries
            </a>
            .
          </p>
        </div>
      </div>
    </section>
  )
}
