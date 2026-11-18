import Link from 'next/link'
import { ProjectCard } from '@/components/ConsultingWork'
import { projects } from '@/lib/site'

const projectKinds: Record<string, string> = {
  'monergism-ebook-library': 'Mobile app',
  'theology-witness': 'Search engine',
  kalam: 'Mobile and web app',
}

export default function RecentWork() {
  return (
    <section id="work" className="px-6 pb-16 scroll-mt-20">
      <div className="max-w-5xl mx-auto w-full space-y-8">
        <div className="glass-soft rounded-3xl px-7 py-8 sm:px-10 w-full text-center">
          <h2 className="font-serif text-3xl sm:text-4xl text-ink">Recent builds</h2>
          <p className="mt-3 text-[17px] leading-relaxed text-mute mx-auto max-w-2xl">
            Library apps in people&apos;s hands, and a search engine on the way.
          </p>
          <Link
            href="/work"
            className="inline-block mt-4 text-[15px] font-medium text-[#C4A574] hover:text-[#D8BC8E] transition-colors"
          >
            See all work
          </Link>
        </div>
        {projects.map((project) => (
          <ProjectCard
            key={project.slug}
            project={project}
            kind={projectKinds[project.slug]}
            detailsHref={`/work/${project.slug}`}
          />
        ))}
      </div>
    </section>
  )
}
