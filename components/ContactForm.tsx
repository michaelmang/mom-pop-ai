'use client'

import { useState, type FormEvent } from 'react'
import { buildServices, everydayServices } from '@/lib/services'

type Status = 'idle' | 'sending' | 'sent' | 'error'

const fallbackError = 'Failed to send message. Please try again.'
const labelClass = 'block text-[13px] font-medium text-ink/90 mb-1.5'
const fieldClass =
  'w-full rounded-xl bg-white/[0.06] border border-white/15 px-4 py-3 text-[16px] text-ink placeholder:text-mute/50 focus:outline-none focus:border-[#C4A574]/70 focus:bg-white/[0.09] transition-colors'

export default function ContactForm() {
  const [status, setStatus] = useState<Status>('idle')
  const [error, setError] = useState('')

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const form = event.currentTarget
    setStatus('sending')
    setError('')

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(Object.fromEntries(new FormData(form))),
      })
      const data = await response.json().catch(() => ({}))
      if (!response.ok) throw new Error(data.error || fallbackError)
      form.reset()
      setStatus('sent')
    } catch (err) {
      setError(err instanceof Error ? err.message : fallbackError)
      setStatus('error')
    }
  }

  if (status === 'sent') {
    return (
      <div
        role="status"
        className="flex flex-col items-center justify-center text-center rounded-2xl border border-white/10 bg-white/[0.04] px-6 py-12"
      >
        <p className="font-serif text-2xl text-ink">Thanks, your message is on its way.</p>
        <p className="mt-2 text-[15px] text-mute">I&apos;ll get back to you soon.</p>
        <button
          type="button"
          onClick={() => setStatus('idle')}
          className="mt-6 text-[15px] font-medium text-[#C4A574] hover:text-[#D8BC8E] transition-colors"
        >
          Send another
        </button>
      </div>
    )
  }

  return (
    <form onSubmit={onSubmit} className="space-y-4">
      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="contact-name" className={labelClass}>
            Name
          </label>
          <input
            id="contact-name"
            name="name"
            required
            autoComplete="name"
            className={fieldClass}
          />
        </div>
        <div>
          <label htmlFor="contact-email" className={labelClass}>
            Email
          </label>
          <input
            id="contact-email"
            name="email"
            type="email"
            required
            autoComplete="email"
            className={fieldClass}
          />
        </div>
      </div>

      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="contact-business" className={labelClass}>
            Business <span className="text-mute font-normal">(optional)</span>
          </label>
          <input
            id="contact-business"
            name="business"
            autoComplete="organization"
            className={fieldClass}
          />
        </div>
        <div>
          <label htmlFor="contact-service" className={labelClass}>
            What do you need?
          </label>
          <div className="relative">
            <select
              id="contact-service"
              name="service"
              defaultValue=""
              className={`${fieldClass} appearance-none pr-10 [color-scheme:dark]`}
            >
              <option value="">Not sure yet</option>
              <optgroup label="Everyday digital work">
                {everydayServices.map((service) => (
                  <option key={service.name}>{service.name}</option>
                ))}
              </optgroup>
              <optgroup label="Bigger builds">
                {buildServices.map((service) => (
                  <option key={service.name}>{service.name}</option>
                ))}
              </optgroup>
            </select>
            <svg
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="none"
              aria-hidden
              className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-mute"
            >
              <path
                d="M2.5 4.5L6 8l3.5-3.5"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>
      </div>

      <div>
        <label htmlFor="contact-message" className={labelClass}>
          Message
        </label>
        <textarea
          id="contact-message"
          name="message"
          required
          rows={5}
          placeholder="A sentence or two about the project is plenty."
          className={`${fieldClass} resize-y`}
        />
      </div>

      {/* Honeypot: hidden from people, ticked by bots. */}
      <input
        type="checkbox"
        name="contact_me_by_fax_only"
        value="1"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden
        className="absolute -left-[9999px] h-px w-px opacity-0"
      />

      {status === 'error' && (
        <p role="alert" className="text-[15px] text-rose-soft">
          {error}
        </p>
      )}

      <button type="submit" disabled={status === 'sending'} className="btn-gold w-full sm:w-auto">
        {status === 'sending' ? 'Sending…' : 'Send message'}
      </button>
    </form>
  )
}
