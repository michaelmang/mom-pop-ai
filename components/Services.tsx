import { buildServices, everydayServices, type Service } from '@/lib/services'

function ServiceGroup({ title, services }: { title: string; services: Service[] }) {
  return (
    <article className="glass rounded-3xl p-7 sm:p-9 w-full">
      <h2 className="font-serif text-3xl text-ink leading-tight">{title}</h2>
      <ul className="mt-6 border-t border-white/10 divide-y divide-white/10">
        {services.map((service) => (
          <li key={service.name} className="py-4">
            <h3 className="text-[16px] font-semibold text-ink">{service.name}</h3>
            <p className="text-[15px] leading-relaxed text-mute mt-1">{service.description}</p>
          </li>
        ))}
      </ul>
    </article>
  )
}

export default function Services() {
  return (
    <section id="services" className="px-6 pb-16 scroll-mt-20">
      <div className="max-w-5xl mx-auto w-full grid md:grid-cols-2 gap-8">
        <ServiceGroup title="Everyday digital work" services={everydayServices} />
        <ServiceGroup title="Bigger builds" services={buildServices} />
      </div>
    </section>
  )
}
