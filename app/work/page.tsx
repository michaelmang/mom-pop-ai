import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import JsonLd from '@/components/JsonLd'
import Breadcrumb from '@/components/Breadcrumb'
import { workIndexJsonLd } from '@/lib/seo'
import { projects, siteUrl } from '@/lib/site'

export const metadata: Metadata = {
  title: 'Work',
  description:
    'Websites, iOS apps, and Android apps I have built, including the Monergism eBook Library, Theology Witness, and Kalam.',
  alternates: { canonical: '/work' },
  openGraph: {
    title: 'Work | Michael Mangialardi',
    description:
      'Websites, iOS apps, and Android apps I have built, including the Monergism eBook Library, Theology Witness, and Kalam.',
    url: `${siteUrl}/work`,
    type: 'website',
  },
}

export default function WorkIndexPage() {
  return (
    <main id="main" className="px-6 pt-28 pb-24">
      <JsonLd data={workIndexJsonLd()} />
      <div className="max-w-5xl mx-auto">
        <div className="glass rounded-3xl p-7 sm:p-10 mb-8">
          <Breadcrumb items={[{ label: 'Home', href: '/' }, { label: 'Work' }]} />
          <h1 className="font-serif text-4xl sm:text-5xl leading-[1.25] tracking-tight text-ink max-w-3xl mb-4">
            Work
          </h1>
          <p className="text-lg leading-relaxed text-mute max-w-2xl">
            Library apps and corpus search products now in people&apos;s hands —
            and one upcoming.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project) => (
            <article key={project.slug} className="glass rounded-2xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <Image
                  src={project.icon}
                  alt=""
                  width={40}
                  height={40}
                  className="w-10 h-10 rounded-lg ring-1 ring-white/10"
                />
                <div>
                  <h2 className="font-serif text-xl text-ink">
                    <Link href={`/work/${project.slug}`} className="hover:text-rose transition-colors">
                      {project.name}
                    </Link>
                  </h2>
                  <p className="text-sm text-mute">
                    {project.platforms}
                    {project.upcoming ? ' · Upcoming' : ''}
                  </p>
                </div>
              </div>
              <p className="text-[15px] leading-relaxed text-mute mb-4">{project.summary}</p>
              <Link
                href={`/work/${project.slug}`}
                className="text-[15px] font-medium text-rose hover:text-rose-soft transition-colors"
              >
                More about {project.name}
              </Link>
            </article>
          ))}
        </div>
      </div>
    </main>
  )
}
