'use client'

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from 'react'
import {
  defaultPersona,
  isPersonaAllowed,
  isPersonaId,
  type PersonaId,
} from '@/lib/personas'

type PersonaContextValue = {
  persona: PersonaId
  setPersona: (id: PersonaId) => void
}

const PersonaContext = createContext<PersonaContextValue | null>(null)

export function PersonaProvider({ children }: { children: ReactNode }) {
  const [persona, setPersonaState] = useState<PersonaId>(defaultPersona)

  useEffect(() => {
    const params = new URLSearchParams(window.location.search)
    const fromQuery = params.get('persona')
    if (isPersonaId(fromQuery) && isPersonaAllowed(fromQuery)) {
      setPersonaState(fromQuery)
      return
    }
    const stored = window.localStorage.getItem('persona')
    if (isPersonaId(stored) && isPersonaAllowed(stored)) {
      setPersonaState(stored)
      return
    }
    setPersonaState(defaultPersona)
  }, [])

  const setPersona = useCallback((id: PersonaId) => {
    if (!isPersonaAllowed(id)) return
    setPersonaState(id)
    window.localStorage.setItem('persona', id)
    const url = new URL(window.location.href)
    url.searchParams.set('persona', id)
    window.history.replaceState({}, '', url.toString())
  }, [])

  const value = useMemo(() => ({ persona, setPersona }), [persona, setPersona])

  return <PersonaContext.Provider value={value}>{children}</PersonaContext.Provider>
}

export function usePersona() {
  const ctx = useContext(PersonaContext)
  if (!ctx) throw new Error('usePersona must be used within PersonaProvider')
  return ctx
}
