import Hero from '@/components/Hero'
import Work from '@/components/Work'
import Approach from '@/components/Approach'
import About from '@/components/About'
import Faq from '@/components/Faq'
import Contact from '@/components/Contact'
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
      <Hero />
      <Work />
      <Approach />
      <About />
      <Faq />
      <Contact />
    </main>
  )
}
