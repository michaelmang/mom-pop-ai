import PersonaContent from '@/components/PersonaContent'
import JsonLd from '@/components/JsonLd'
import { homeJsonLd } from '@/lib/seo'
import { siteConfig } from '@/lib/site'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  description: siteConfig.description,
  alternates: { canonical: '/' },
  openGraph: {
    title: siteConfig.title,
    description: siteConfig.description,
    url: '/',
    type: 'website',
  },
}

export default function Home() {
  return (
    <main id="main">
      <JsonLd data={homeJsonLd()} />
      <PersonaContent />
    </main>
  )
}
