'use client'

import { useEffect, useRef } from 'react'

interface Star {
  x: number
  y: number
  r: number
  opacity: number
  speed: number
  color: string
  phase: number
}

export default function StarField() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const starsRef = useRef<Star[]>([])
  const rafRef = useRef<number>(0)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const createStars = (w: number, h: number): Star[] => {
      const stars: Star[] = []
      const count = Math.floor((w * h) / 5000)

      for (let i = 0; i < count; i++) {
        const isTeal = Math.random() < 0.06
        stars.push({
          x: Math.random() * w,
          y: Math.random() * h,
          r: isTeal ? Math.random() * 1.4 + 0.6 : Math.random() * 1.0 + 0.2,
          opacity: Math.random() * 0.6 + 0.15,
          speed: Math.random() * 0.015 + 0.003,
          color: isTeal ? '#2DD4BF' : '#ffffff',
          phase: Math.random() * Math.PI * 2,
        })
      }
      return stars
    }

    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = document.documentElement.scrollHeight
      starsRef.current = createStars(canvas.width, canvas.height)
    }

    let t = 0

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      t += 1

      for (const s of starsRef.current) {
        const alpha = s.opacity * (0.4 + 0.6 * Math.abs(Math.sin(s.speed * t + s.phase)))
        ctx.beginPath()
        ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2)
        ctx.fillStyle =
          s.color === '#ffffff'
            ? `rgba(255,255,255,${alpha})`
            : `rgba(45,212,191,${alpha})`
        ctx.fill()
      }

      rafRef.current = requestAnimationFrame(draw)
    }

    resize()
    draw()

    const ro = new ResizeObserver(resize)
    ro.observe(document.documentElement)

    return () => {
      cancelAnimationFrame(rafRef.current)
      ro.disconnect()
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full pointer-events-none z-0"
      aria-hidden="true"
    />
  )
}
