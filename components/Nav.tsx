'use client'

import { useState, useEffect } from 'react'

const links = [
  { label: 'Services', href: '#services' },
  { label: 'How It Works', href: '#how' },
  { label: 'About', href: '#about' },
]

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#0B0E14]/90 backdrop-blur-md border-b border-white/[0.06]'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-5xl mx-auto px-6 h-14 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#"
          className="font-mono text-sm font-semibold text-white tracking-tight hover:text-teal-400 transition-colors"
        >
          Michael Mangialardi
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-slate-400 hover:text-white transition-colors"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contact"
            className="text-sm font-semibold px-4 py-2 rounded-md border border-purple-500/60 text-purple-300 hover:bg-purple-500/10 transition-colors"
          >
            Contact
          </a>
        </div>

        {/* Mobile CTA */}
        <a
          href="#contact"
          className="md:hidden text-sm font-semibold px-3 py-1.5 rounded border border-purple-500/60 text-purple-300"
        >
          Contact
        </a>
      </div>
    </nav>
  )
}
