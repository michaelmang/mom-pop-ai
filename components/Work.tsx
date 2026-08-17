import { projects } from '@/lib/site'

export default function Work() {
  return (
    <section id="work" className="px-6 py-24 border-t border-line">
      <div className="max-w-5xl mx-auto">
        <p className="text-[13px] font-semibold tracking-[0.14em] uppercase text-mute mb-3">
          Work
        </p>
        <h2 className="font-serif text-3xl sm:text-4xl tracking-tight text-ink max-w-2xl mb-16">
          Two products I have built.
        </h2>

        <div className="space-y-20">
          {projects.map((project, i) => (
            <article
              key={project.name}
              className={`grid md:grid-cols-2 gap-10 md:gap-16 items-center ${
                i > 0 ? 'pt-20 border-t border-line' : ''
              }`}
            >
              <div className={i % 2 === 1 ? 'md:order-2' : ''}>
                <div className="flex items-center gap-3 mb-5">
                  <img
                    src={project.icon}
                    alt=""
                    width={48}
                    height={48}
                    className="w-12 h-12 rounded-xl shadow-sm"
                  />
                  <div>
                    <h3 className="font-serif text-2xl text-ink leading-tight">
                      {project.name}
                    </h3>
                    <p className="text-sm text-mute">
                      {project.platforms} · {project.client}
                    </p>
                  </div>
                </div>
                <p className="text-[17px] leading-relaxed text-ink/90 mb-4">
                  {project.summary}
                </p>
                <p className="text-[15px] leading-relaxed text-mute mb-6">
                  {project.details}
                </p>
                <div className="flex flex-wrap gap-x-5 gap-y-2">
                  {project.links.map((link) => (
                    <a
                      key={link.href}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[15px] font-semibold text-navy hover:underline underline-offset-4"
                    >
                      {link.label}
                    </a>
                  ))}
                </div>
              </div>

              <div className={i % 2 === 1 ? 'md:order-1' : ''}>
                <div className="mx-auto w-full max-w-[280px]">
                  <img
                    src={project.screenshot}
                    alt={project.screenshotAlt}
                    className="w-full h-auto rounded-[2rem] shadow-[0_20px_40px_-16px_rgba(28,25,23,0.35)] ring-1 ring-black/10"
                  />
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
