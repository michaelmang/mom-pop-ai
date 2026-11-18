import type { Metadata } from 'next'
import HandymanHero from '@/components/HandymanHero'
import Services from '@/components/Services'
import RecentWork from '@/components/RecentWork'
import WorkingWithMe from '@/components/WorkingWithMe'
import Contact from '@/components/Contact'
import { previewPath } from '@/lib/preview'
import { siteConfig } from '@/lib/site'

const title = 'Michael Mangialardi | Digital Handyman in the New River Valley'
const description =
  'Websites, Google listings, SEO, ads, and print for New River Valley businesses, plus custom apps, automation, and AI integrations for clients anywhere.'

// Unlisted preview of the redesigned homepage, kept out of search results.
export const metadata: Metadata = {
  title: { absolute: title },
  description,
  robots: { index: false, follow: false },
  openGraph: {
    title,
    description,
    url: previewPath,
    siteName: siteConfig.name,
    locale: siteConfig.locale,
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title,
    description,
  },
}

export default function PreviewHome() {
  return (
    <main id="main">
      <HandymanHero />
      <Services />
      <RecentWork />
      <WorkingWithMe />
      <Contact />
    </main>
  )
}
