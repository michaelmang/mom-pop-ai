import type { Metadata } from 'next'
import Image from 'next/image'
import { notFound } from 'next/navigation'
import JsonLd from '@/components/JsonLd'
import Breadcrumb from '@/components/Breadcrumb'
import { projectJsonLd } from '@/lib/seo'
import { getProject, projects, siteUrl } from '@/lib/site'

type Props = {
  params: { slug: string }
}

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }))
}

export const dynamicParams = false

export function generateMetadata({ params }: Props): Metadata {
  const project = getProject(params.slug)
  if (!project) return {}

  const url = `${siteUrl}/work/${project.slug}`

  return {
    title: {
      absolute: project.seoTitle,
    },
    description: project.seoDescription,
    alternates: { canonical: `/work/${project.slug}` },
    openGraph: {
      title: project.seoTitle,
      description: project.seoDescription,
      url,
      type: 'article',
    },
    twitter: {
      card: 'summary_large_image',
      title: project.seoTitle,
      description: project.seoDescription,
    },
  }
}

export default function ProjectPage({ params }: Props) {
  const project = getProject(params.slug)
  if (!project) notFound()

  return (
    <main id="main" className="px-6 pt-28 pb-24">
      <JsonLd data={projectJsonLd(project)} />
      <article className="max-w-5xl mx-auto">
        <Breadcrumb
          items={[
            { label: 'Home', href: '/' },
            { label: 'Work', href: '/work' },
            { label: project.name },
          ]}
        />

        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-start">
          <div>
            <p className="text-[13px] font-semibold tracking-[0.14em] uppercase text-mute mb-3">
              {project.platforms} · {project.client}
            </p>
            <h1 className="font-serif text-4xl sm:text-5xl leading-[1.4] tracking-tight text-ink mb-6">
              {project.name}
            </h1>
            <p className="text-lg leading-relaxed text-mute mb-5">{project.details}</p>
            <p className="text-[17px] leading-relaxed text-ink/90 mb-8">{project.summary}</p>

            <h2 className="font-serif text-2xl text-ink mb-4">What it includes</h2>
            <ul className="space-y-2 mb-10">
              {project.features.map((feature) => (
                <li key={feature} className="flex gap-3 text-[15px] leading-relaxed text-mute">
                  <span className="mt-2 h-1 w-1 rounded-full bg-navy shrink-0" aria-hidden />
                  {feature}
                </li>
              ))}
            </ul>

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

          <div className="mx-auto w-full max-w-[280px] md:mx-0 md:justify-self-end">
            <Image
              src={project.screenshot}
              alt={project.screenshotAlt}
              width={project.screenshotWidth}
              height={project.screenshotHeight}
              priority
              className="w-full h-auto rounded-[2rem] shadow-[0_20px_40px_-16px_rgba(28,25,23,0.35)] ring-1 ring-black/10"
            />
          </div>
        </div>
      </article>
    </main>
  )
}
