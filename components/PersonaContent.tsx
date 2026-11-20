'use client'

import HandymanHero from '@/components/HandymanHero'
import Services from '@/components/Services'
import ConsultingWork from '@/components/ConsultingWork'
import WorkingWithMe from '@/components/WorkingWithMe'
import Contact from '@/components/Contact'
import Research from '@/components/Research'
import Studio from '@/components/Studio'
import { usePersona } from '@/components/PersonaProvider'

export default function PersonaContent() {
  const { persona } = usePersona()

  if (persona === 'consulting') {
    return (
      <>
        <HandymanHero />
        <Services />
        <ConsultingWork />
        <WorkingWithMe />
        <Contact />
      </>
    )
  }

  if (persona === 'research') return <Research />
  return <Studio />
}
