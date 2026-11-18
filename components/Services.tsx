import { buildServices, everydayServices, type Service } from '@/lib/services'

type ServiceGroupProps = {
  eyebrow: string
  title: string
  intro: string
  services: Service[]
  cta: { label: string; href: string }
}

function ServiceGroup({ eyebrow, title, intro, services, cta }: ServiceGroupProps) {
  return (
    <article className="glass rounded-3xl p-7 sm:p-9 w-full flex flex-col">
      <p className="text-[11px] uppercase tracking-[0.14em] text-[#C4A574] font-semibold">
        {eyebrow}
      </p>
      <h2 className="font-serif text-3xl text-ink leading-tight mt-2">{title}</h2>
      <p className="text-[16px] leading-relaxed text-mute mt-2">{intro}</p>
      <ul className="mt-6 border-t border-white/10 divide-y divide-white/10">
        {services.map((service) => (
          <li key={service.name} className="py-4">
            <h3 className="text-[16px] font-semibold text-ink">{service.name}</h3>
            <p className="text-[15px] leading-relaxed text-mute mt-1">{service.description}</p>
          </li>
        ))}
      </ul>
      <a
        href={cta.href}
        className="mt-auto pt-6 self-start text-[15px] font-medium text-[#C4A574] hover:text-[#D8BC8E] transition-colors"
      >
        {cta.label}
      </a>
    </article>
  )
}

export default function Services() {
  return (
    <section id="services" className="px-6 pb-16 scroll-mt-20">
      <div className="max-w-5xl mx-auto w-full grid md:grid-cols-2 gap-8">
        <ServiceGroup
          eyebrow="Around the New River Valley"
          title="Everyday digital work"
          intro="For local businesses that need it done right and done soon."
          services={everydayServices}
          cta={{ label: 'Ask about a project', href: '#contact' }}
        />
        <ServiceGroup
          eyebrow="For clients anywhere"
          title="Bigger builds"
          intro="Custom software for when your business outgrows the basics."
          services={buildServices}
          cta={{ label: 'See recent builds', href: '#work' }}
        />
      </div>
    </section>
  )
}
