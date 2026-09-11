export type PersonaId = 'consulting' | 'research' | 'studio'

export type Persona = {
  id: PersonaId
  label: string
  description: string
  /** When true, only shown in development builds. */
  devOnly?: boolean
}

export const personas: Persona[] = [
  {
    id: 'consulting',
    label: 'Consulting',
    description: 'Client products and shipping work',
  },
  {
    id: 'research',
    label: 'Research',
    description: 'Corpus retrieval and exploratory builds',
    devOnly: true,
  },
  {
    id: 'studio',
    label: 'Studio',
    description: 'Personal craft and experiments',
    devOnly: true,
  },
]

export const defaultPersona: PersonaId = 'consulting'

export const isDevPersonasEnabled = process.env.NODE_ENV === 'development'

export function getVisiblePersonas() {
  return personas.filter((persona) => !persona.devOnly || isDevPersonasEnabled)
}

export function isPersonaId(value: string | null | undefined): value is PersonaId {
  return value === 'consulting' || value === 'research' || value === 'studio'
}

export function isPersonaAllowed(id: PersonaId) {
  const persona = personas.find((item) => item.id === id)
  if (!persona) return false
  return !persona.devOnly || isDevPersonasEnabled
}
