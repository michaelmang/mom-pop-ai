import { faqs } from '@/lib/site'

export default function Faq() {
  return (
    <section id="faq" className="px-6 py-24 border-t border-line">
      <div className="max-w-5xl mx-auto">
        <p className="text-[13px] font-semibold tracking-[0.14em] uppercase text-mute mb-3">
          Questions
        </p>
        <h2 className="font-serif text-3xl sm:text-4xl tracking-tight text-ink max-w-xl mb-12">
          A few things people ask.
        </h2>
        <dl className="grid md:grid-cols-2 gap-x-12 gap-y-10">
          {faqs.map((item) => (
            <div key={item.question}>
              <dt className="font-serif text-xl text-ink mb-3">{item.question}</dt>
              <dd className="text-[15px] leading-relaxed text-mute">{item.answer}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}
