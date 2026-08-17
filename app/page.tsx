import type { Metadata } from 'next'
import { siteConfig } from '@/lib/site'
import Nav from '@/components/Nav'
import Hero from '@/components/Hero'
import Work from '@/components/Work'
import Approach from '@/components/Approach'
import About from '@/components/About'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: siteConfig.title,
  description: siteConfig.description,
  openGraph: {
    title: siteConfig.title,
    description: siteConfig.description,
  },
}

export default function Home() {
  return (
    <main>
      <Nav />
      <Hero />
      <Work />
      <Approach />
      <About />
      <Contact />
      <Footer />
    </main>
  )
}
