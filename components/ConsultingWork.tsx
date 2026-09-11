import Image from 'next/image'
import { projects, type Project } from '@/lib/site'

function isLandscape(project: Project) {
  return project.screenshotWidth / project.screenshotHeight >= 1.2
}

function ProjectCard({ project }: { project: Project }) {
  const landscape = isLandscape(project)

  return (
    <article className="glass rounded-3xl p-6 sm:p-8 w-full">
      <div
        className={`grid gap-8 md:gap-12 items-center ${
          landscape ? '' : 'md:grid-cols-[1.2fr_0.8fr]'
        }`}
      >
        <div>
          <div className="flex items-center gap-3 mb-5">
            <Image
              src={project.icon}
              alt=""
              width={48}
              height={48}
              className="w-12 h-12 rounded-xl shadow-sm ring-1 ring-white/10 shrink-0"
            />
            <div>
              <h3 className="font-serif text-2xl text-ink leading-tight">{project.name}</h3>
              {project.upcoming && (
                <p className="text-[11px] uppercase tracking-[0.14em] text-[#C4A574] font-semibold mt-1.5">
                  Upcoming
                </p>
              )}
              {(project.platforms || project.client) && (
                <p className="text-sm text-mute mt-1">
                  {[project.platforms, project.client].filter(Boolean).join(' · ')}
                </p>
              )}
            </div>
          </div>
          <p className="text-[17px] leading-relaxed text-ink/90 mb-6 max-w-xl">
            {project.summary}
          </p>
          {project.links.length > 0 && (
            <div className="flex flex-wrap gap-x-5 gap-y-2">
              {project.links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[15px] font-medium text-[#C4A574] hover:text-[#D8BC8E] transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>
          )}
        </div>

        <div className={landscape ? 'w-full' : 'mx-auto w-full max-w-[240px] md:mx-0 md:justify-self-end'}>
          <Image
            src={project.screenshot}
            alt={project.screenshotAlt}
            width={project.screenshotWidth}
            height={project.screenshotHeight}
            className="w-full h-auto rounded-2xl shadow-[0_24px_48px_-18px_rgba(0,0,0,0.65)] ring-1 ring-white/10"
          />
        </div>
      </div>
    </article>
  )
}

export default function ConsultingWork() {
  return (
    <section id="work" className="px-6 pb-20">
      <div className="max-w-5xl mx-auto w-full space-y-8">
        {projects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </section>
  )
}
