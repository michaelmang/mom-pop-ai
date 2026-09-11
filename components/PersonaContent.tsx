'use client'

import Hero from '@/components/Hero'
import ConsultingWork from '@/components/ConsultingWork'
import Research from '@/components/Research'
import Studio from '@/components/Studio'
import Closing from '@/components/Closing'
import { usePersona } from '@/components/PersonaProvider'

export default function PersonaContent() {
  const { persona } = usePersona()

  if (persona === 'consulting') {
    return (
      <>
        <Hero />
        <ConsultingWork />
        <Closing />
      </>
    )
  }

  if (persona === 'research') return <Research />
  return <Studio />
}
