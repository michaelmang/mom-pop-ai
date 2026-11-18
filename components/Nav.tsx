'use client'

import { useEffect, useMemo, useRef, useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import Logo from '@/components/Logo'
import { getVisiblePersonas } from '@/lib/personas'
import { previewPath } from '@/lib/preview'
import { usePersona } from '@/components/PersonaProvider'
import { siteConfig } from '@/lib/site'

const previewLinks = [
  { label: 'Services', href: '#services' },
  { label: 'Work', href: '#work' },
  { label: 'Contact', href: '#contact' },
]

function PreviewLinks() {
  return (
    <>
      <div className="hidden md:flex items-center gap-7">
        {previewLinks.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className="text-[15px] text-ink/80 hover:text-[#C4A574] transition-colors"
          >
            {link.label}
          </a>
        ))}
      </div>
      <a href={`tel:${siteConfig.phoneE164}`} className="btn-gold px-4 py-2 text-[14px]">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden>
          <path
            d="M6.6 10.8a15.1 15.1 0 0 0 6.6 6.6l2.2-2.2a1 1 0 0 1 1-.25 11.4 11.4 0 0 0 3.6.57 1 1 0 0 1 1 1V20a1 1 0 0 1-1 1A17 17 0 0 1 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.25.2 2.45.57 3.57a1 1 0 0 1-.25 1L6.6 10.8Z"
            fill="currentColor"
          />
        </svg>
        <span className="sm:hidden">Call</span>
        <span className="hidden sm:inline">{siteConfig.phone}</span>
      </a>
    </>
  )
}

export default function Nav() {
  const isPreview = usePathname() === previewPath
  const { persona, setPersona } = usePersona()
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const menuRef = useRef<HTMLDivElement>(null)
  const visiblePersonas = useMemo(() => getVisiblePersonas(), [])
  const active = visiblePersonas.find((p) => p.id === persona) ?? visiblePersonas[0]
  const showPersonaMenu = visiblePersonas.length > 1

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const onPointer = (event: MouseEvent) => {
      if (!menuRef.current?.contains(event.target as Node)) setOpen(false)
    }
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setOpen(false)
    }
    document.addEventListener('mousedown', onPointer)
    document.addEventListener('keydown', onKey)
    return () => {
      document.removeEventListener('mousedown', onPointer)
      document.removeEventListener('keydown', onKey)
    }
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
        scrolled ? 'bg-[#0c0c0c]/90 backdrop-blur-md border-b border-white/10' : 'bg-transparent'
      }`}
      aria-label="Primary"
    >
      <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between gap-4">
        <Link
          href={isPreview ? previewPath : '/'}
          className="flex items-center min-w-0 group animate-fade-in"
          aria-label="Michael Mangialardi home"
        >
          <Logo className="transition-opacity duration-300 group-hover:opacity-85 truncate" />
        </Link>

        <div className="flex items-center gap-6 md:gap-8 animate-fade-in [animation-delay:120ms] shrink-0">
          {isPreview && <PreviewLinks />}

          {showPersonaMenu && !isPreview && (
            <div className="relative" ref={menuRef}>
              <button
                type="button"
                aria-haspopup="listbox"
                aria-expanded={open}
                onClick={() => setOpen((v) => !v)}
                className="inline-flex items-center gap-2 text-[15px] text-ink/90 hover:text-ink transition-colors"
              >
                {active.label}
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 12 12"
                  fill="none"
                  aria-hidden
                  className={`transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
                >
                  <path
                    d="M2.5 4.5L6 8l3.5-3.5"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>

              {open && (
                <ul
                  role="listbox"
                  aria-label="Personas"
                  className="absolute right-0 mt-3 min-w-[11rem] rounded-xl overflow-hidden border border-white/10 bg-[#1a1714] shadow-[0_18px_40px_rgba(0,0,0,0.55)] py-1.5"
                >
                  {visiblePersonas.map((item) => (
                    <li key={item.id} role="option" aria-selected={item.id === persona}>
                      <button
                        type="button"
                        onClick={() => {
                          setPersona(item.id)
                          setOpen(false)
                        }}
                        className={`w-full text-left px-4 py-2.5 text-[15px] transition-colors ${
                          item.id === persona
                            ? 'text-[#C4A574] bg-white/[0.08]'
                            : 'text-ink/90 hover:bg-white/[0.06] hover:text-ink'
                        }`}
                      >
                        {item.label}
                      </button>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          )}

          {!isPreview && (
            <a
              href={`mailto:${siteConfig.email}`}
              className="hidden sm:inline text-[15px] text-ink/80 hover:text-[#C4A574] transition-colors"
            >
              Email
            </a>
          )}
        </div>
      </div>
    </nav>
  )
}
