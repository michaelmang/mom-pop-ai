import { buildServices, everydayServices, type Service } from '@/lib/services'

type ServiceGroupProps = {
  title: string
  services: Service[]
  cta: { label: string; href: string }
}

const linkClass = 'text-[#C4A574] hover:text-[#D8BC8E] transition-colors'

function ServiceGroup({ title, services, cta }: ServiceGroupProps) {
  return (
    <article className="glass rounded-3xl p-7 sm:p-9 w-full flex flex-col">
      <h2 className="font-serif text-3xl text-ink leading-tight">{title}</h2>
      <ul className="mt-6 border-t border-white/10 divide-y divide-white/10">
        {services.map((service) => (
          <li key={service.name} className="py-4">
            <h3 className="text-[16px] font-semibold text-ink">{service.name}</h3>
            <p className="text-[15px] leading-relaxed text-mute mt-1">{service.description}</p>
            {service.basis && (
              <a
                href={service.basis.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-block mt-1.5 text-[14px] ${linkClass}`}
              >
                {service.basis.label}
              </a>
            )}
          </li>
        ))}
      </ul>
      <a href={cta.href} className={`mt-auto pt-6 self-start text-[15px] font-medium ${linkClass}`}>
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
          title="Everyday digital work"
          services={everydayServices}
          cta={{ label: 'Ask about a project', href: '#contact' }}
        />
        <ServiceGroup
          title="Bigger builds"
          services={buildServices}
          cta={{ label: 'See recent builds', href: '#work' }}
        />
      </div>
    </section>
  )
}
