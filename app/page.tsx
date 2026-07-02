import type { Metadata } from 'next'
import { siteConfig } from '@/lib/site'
import Nav from '@/components/Nav'
import Hero from '@/components/Hero'
import Services from '@/components/Services'
import HowItWorks from '@/components/HowItWorks'
import About from '@/components/About'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import StarField from '@/components/StarField'

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
    <main className="relative">
      <StarField />
      <div className="relative z-10">
        <Nav />
        <Hero />
        <Services />
        <HowItWorks />
        <About />
        <Contact />
        <Footer />
      </div>
    </main>
  )
}
