'use client'

import { useState, useEffect } from 'react'

const links = [
  { label: 'Work', href: '#work' },
  { label: 'Approach', href: '#approach' },
  { label: 'About', href: '#about' },
]

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-200 ${
        scrolled ? 'bg-paper/95 backdrop-blur-sm border-b border-line' : 'bg-transparent'
      }`}
    >
      <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#" className="font-serif text-[17px] text-ink tracking-tight">
          Michael Mangialardi
        </a>

        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-[15px] text-mute hover:text-ink transition-colors"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contact"
            className="text-[15px] font-semibold text-white bg-navy hover:bg-navy-hover px-4 py-2 rounded-md transition-colors"
          >
            Contact
          </a>
        </div>

        <a
          href="#contact"
          className="md:hidden text-[15px] font-semibold text-navy"
        >
          Contact
        </a>
      </div>
    </nav>
  )
}
