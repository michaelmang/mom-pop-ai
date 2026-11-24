'use client'

import { useEffect, useRef, useState, type ReactNode } from 'react'

type RevealProps = {
  children: ReactNode
  /** Rendered element. The fade runs on this element itself, not a wrapper,
   *  because an ancestor with opacity below 1 stops a glass card's
   *  backdrop-filter from blurring the page behind it. */
  as?: 'div' | 'article'
  className?: string
  /** Milliseconds to wait after entering view, for staggering siblings. */
  delay?: number
}

/**
 * Fades its content up the first time it scrolls into view. Content renders
 * visible on the server and is only hidden after mounting below the fold, so
 * crawlers, visitors without JavaScript, and reduced-motion users always see it.
 */
export default function Reveal({ children, as: Tag = 'div', className = '', delay = 0 }: RevealProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [state, setState] = useState<'static' | 'waiting' | 'shown'>('static')

  useEffect(() => {
    const element = ref.current
    if (!element) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    if (element.getBoundingClientRect().top < window.innerHeight) return

    setState('waiting')
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return
        setState('shown')
        observer.disconnect()
      },
      { rootMargin: '0px 0px -12% 0px' },
    )
    observer.observe(element)
    return () => observer.disconnect()
  }, [])

  const stateClass = state === 'waiting' ? 'reveal-waiting' : state === 'shown' ? 'reveal-shown' : ''

  return (
    <Tag
      ref={ref}
      className={`${className} ${stateClass}`}
      style={state === 'shown' && delay ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </Tag>
  )
}
