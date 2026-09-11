import type { Metadata, Viewport } from 'next'
import { DM_Sans, Fraunces } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import JsonLd from '@/components/JsonLd'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import SiteBackground from '@/components/SiteBackground'
import { PersonaProvider } from '@/components/PersonaProvider'
import { siteJsonLd } from '@/lib/seo'
import { siteConfig, siteUrl, isPreviewDeployment } from '@/lib/site'
import './globals.css'

const sans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
})

const serif = Fraunces({
  subsets: ['latin'],
  variable: '--font-serif',
  display: 'swap',
})

export const viewport: Viewport = {
  themeColor: '#0c0c0c',
  width: 'device-width',
  initialScale: 1,
}

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
  category: 'Technology',
  robots: isPreviewDeployment
    ? { index: false, follow: false }
    : {
        index: true,
        follow: true,
        googleBot: {
          index: true,
          follow: true,
          'max-image-preview': 'large',
          'max-snippet': -1,
          'max-video-preview': -1,
        },
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
      <body className="font-sans antialiased bg-paper text-ink">
        <JsonLd data={siteJsonLd()} />
        <a href="#main" className="skip-link">
          Skip to content
        </a>
        <PersonaProvider>
          <SiteBackground />
          <Nav />
          {children}
          <Footer />
        </PersonaProvider>
        <Analytics />
      </body>
    </html>
  )
}
