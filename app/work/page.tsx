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
    'Websites, iOS apps, and Android apps I have built, including the Monergism eBook Library and Kalam. Independent software work from Roanoke, Virginia.',
  alternates: { canonical: '/work' },
  openGraph: {
    title: 'Work | Michael Mangialardi',
    description:
      'Websites, iOS apps, and Android apps I have built, including the Monergism eBook Library and Kalam.',
    url: `${siteUrl}/work`,
    type: 'website',
  },
}

export default function WorkIndexPage() {
  return (
    <main id="main" className="px-6 pt-28 pb-24">
      <JsonLd data={workIndexJsonLd()} />
      <div className="max-w-5xl mx-auto">
        <Breadcrumb items={[{ label: 'Home', href: '/' }, { label: 'Work' }]} />
        <p className="text-[13px] font-semibold tracking-[0.14em] uppercase text-mute mb-3">
          Work
        </p>
        <h1 className="font-serif text-4xl sm:text-5xl leading-[1.4] tracking-tight text-ink max-w-3xl mb-6">
          Products I have built.
        </h1>
        <p className="text-lg leading-relaxed text-mute max-w-2xl mb-16">
          Two library apps now in people&apos;s hands: an iOS catalog of 1,700+ books,
          and an Arabic reading and listening app on iOS, Android, and the web.
        </p>

        <div className="grid md:grid-cols-2 gap-10">
          {projects.map((project) => (
            <article key={project.slug} className="border border-line rounded-lg p-6 bg-white">
              <div className="flex items-center gap-3 mb-4">
                <Image
                  src={project.icon}
                  alt=""
                  width={40}
                  height={40}
                  className="w-10 h-10 rounded-lg"
                />
                <div>
                  <h2 className="font-serif text-xl text-ink">
                    <Link href={`/work/${project.slug}`} className="hover:text-navy">
                      {project.name}
                    </Link>
                  </h2>
                  <p className="text-sm text-mute">{project.platforms}</p>
                </div>
              </div>
              <p className="text-[15px] leading-relaxed text-mute mb-4">{project.summary}</p>
              <Link
                href={`/work/${project.slug}`}
                className="text-[15px] font-semibold text-navy hover:underline underline-offset-4"
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
