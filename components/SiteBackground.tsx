'use client'

import Image from 'next/image'
import { usePersona } from '@/components/PersonaProvider'

export default function SiteBackground() {
  const { persona } = usePersona()
  const consulting = persona === 'consulting'

  if (!consulting) {
    return <div className="fixed inset-0 -z-10 bg-[#0a0a0a]" aria-hidden />
  }

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden" aria-hidden>
      <Image
        src="/bg/landscape.jpg"
        alt=""
        fill
        priority
        sizes="100vw"
        className="object-cover object-center scale-[1.02]"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/35 to-black/70" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,transparent_0%,rgba(0,0,0,0.35)_70%)]" />
    </div>
  )
}
