import type { Metadata } from 'next'
import { Source_Sans_3, Source_Serif_4 } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import JsonLd from '@/components/JsonLd'
import { siteConfig, siteUrl } from '@/lib/site'
import './globals.css'

const sans = Source_Sans_3({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
})

const serif = Source_Serif_4({
  subsets: ['latin'],
  variable: '--font-serif',
  display: 'swap',
})

const structuredData = [
  {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: siteConfig.name,
    url: siteUrl,
    description: siteConfig.description,
    inLanguage: 'en-US',
  },
  {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    '@id': `${siteUrl}/#business`,
    name: siteConfig.name,
    description: siteConfig.description,
    url: siteUrl,
    telephone: siteConfig.phone,
    email: siteConfig.email,
    priceRange: '$$',
    areaServed: siteConfig.areaServed.map((city) => ({
      '@type': 'City',
      name: city,
      containedInPlace: {
        '@type': 'State',
        name: 'Virginia',
      },
    })),
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Roanoke',
      addressRegion: 'VA',
      addressCountry: 'US',
    },
    knowsAbout: [
      'Website development',
      'Mobile app development',
      'Process automation',
      'iOS apps',
      'Android apps',
      'Custom software',
    ],
    serviceType: [
      'Website development',
      'Mobile app development',
      'Process automation',
      'Custom software development',
    ],
  },
]

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: siteConfig.title,
    template: `%s | ${siteConfig.shortName}`,
  },
  description: siteConfig.description,
  keywords: siteConfig.keywords,
  authors: [{ name: siteConfig.shortName, url: siteUrl }],
  creator: siteConfig.shortName,
  publisher: siteConfig.shortName,
  category: 'Business',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: siteConfig.locale,
    url: siteUrl,
    siteName: siteConfig.name,
    title: siteConfig.title,
    description: siteConfig.description,
  },
  twitter: {
    card: 'summary_large_image',
    title: siteConfig.title,
    description: siteConfig.description,
  },
  formatDetection: {
    telephone: true,
    email: true,
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${sans.variable} ${serif.variable}`}>
      <head>
        <JsonLd data={structuredData} />
      </head>
      <body className="font-sans antialiased bg-paper text-ink">
        {children}
        <Analytics />
      </body>
    </html>
  )
}
