'use client'

import { useState } from 'react'
import { siteConfig } from '@/lib/site'

export default function Contact() {
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setLoading(true)
    setError('')

    const form = e.currentTarget
    const data = new FormData(form)

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: data.get('name'),
          email: data.get('email'),
          business: data.get('business'),
          message: data.get('message'),
        }),
      })

      const result = await res.json()

      if (!res.ok) {
        setError(result.error || 'Something went wrong. Please try again or email me directly.')
        return
      }

      setSubmitted(true)
      form.reset()
    } catch {
      setError('Something went wrong. Please try again or email me directly.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="contact" className="px-6 py-24 border-t border-line">
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-14 items-start">
        <div>
          <p className="text-[13px] font-semibold tracking-[0.14em] uppercase text-mute mb-3">
            Contact
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl tracking-tight text-ink mb-4">
            Get in touch.
          </h2>
          <p className="text-[17px] leading-relaxed text-mute mb-8">
            I reply within one business day. Call or email if that is easier.
          </p>
          <address className="space-y-3 text-[15px] not-italic">
            <a href={`tel:${siteConfig.phoneE164}`} className="block text-ink hover:text-navy transition-colors">
              {siteConfig.phone}
            </a>
            <a
              href={`mailto:${siteConfig.email}`}
              className="block text-ink hover:text-navy transition-colors"
            >
              {siteConfig.email}
            </a>
            <p className="text-mute">Blacksburg, Virginia</p>
            <p className="text-mute">Near Roanoke. Remote is fine.</p>
          </address>
        </div>

        <div className="bg-white border border-line rounded-lg p-8">
          {submitted ? (
            <div className="py-10 text-center">
              <p className="font-serif text-xl text-ink mb-2">Message sent</p>
              <p className="text-mute text-[15px]">I&apos;ll be in touch within one business day.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-ink mb-2">
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  placeholder="Jane Smith"
                  className="form-input"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-ink mb-2">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  placeholder="jane@example.com"
                  className="form-input"
                />
              </div>
              <div>
                <label htmlFor="business" className="block text-sm font-semibold text-ink mb-2">
                  Organization
                </label>
                <input
                  id="business"
                  name="business"
                  type="text"
                  placeholder="Company or organization"
                  className="form-input"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-ink mb-2">
                  What are you working on?
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={4}
                  placeholder="A sentence or two is enough."
                  className="form-input resize-none"
                />
              </div>
              {error && <p className="text-red-700 text-sm">{error}</p>}
              <button
                type="submit"
                disabled={loading}
                className="w-full py-3 rounded-md bg-navy hover:bg-navy-hover disabled:opacity-60 text-white font-semibold text-[15px] transition-colors"
              >
                {loading ? 'Sending…' : 'Send message'}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
