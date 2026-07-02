'use client'

import { useState } from 'react'

export default function Contact() {
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setLoading(true)
    const form = e.currentTarget
    const data = new FormData(form)

    // Replace YOUR_FORM_ID with your Formspree form ID (formspree.io)
    const res = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
      method: 'POST',
      body: data,
      headers: { Accept: 'application/json' },
    })

    setLoading(false)
    if (res.ok) {
      setSubmitted(true)
      form.reset()
    }
  }

  return (
    <section id="contact" className="py-28 px-6 border-t border-white/[0.05]">
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-14 items-start">
        {/* Left */}
        <div>
          <p className="font-mono text-xs font-semibold tracking-[0.15em] text-teal-400 uppercase mb-4">
            Get in touch
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">
            Let&apos;s talk about your business
          </h2>
          <p className="text-slate-400 text-base leading-relaxed mb-8">
            Fill out the form and I&apos;ll get back to you within one business day. Or reach out directly:
          </p>
          <div className="space-y-3 font-mono text-sm">
            <a href="tel:5408354896" className="flex items-center gap-3 text-slate-300 hover:text-teal-400 transition-colors">
              <span className="text-teal-600">›</span> 540-835-4896
            </a>
            <a href="mailto:mikemangialardi94@gmail.com" className="flex items-center gap-3 text-slate-300 hover:text-teal-400 transition-colors">
              <span className="text-teal-600">›</span> mikemangialardi94@gmail.com
            </a>
            <p className="flex items-center gap-3 text-slate-500">
              <span className="text-slate-700">›</span> Serving Roanoke &amp; New River Valley
            </p>
          </div>
        </div>

        {/* Form */}
        <div className="glass-card rounded-xl p-7">
          {submitted ? (
            <div className="py-8 text-center">
              <div className="text-3xl mb-4">✓</div>
              <p className="text-white font-semibold mb-2">Message sent</p>
              <p className="text-slate-400 text-sm">I&apos;ll be in touch within one business day.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">
                  Name
                </label>
                <input
                  name="name"
                  type="text"
                  required
                  placeholder="Jane Smith"
                  className="form-input"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">
                  Email
                </label>
                <input
                  name="email"
                  type="email"
                  required
                  placeholder="jane@yourbusiness.com"
                  className="form-input"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">
                  Business type
                </label>
                <input
                  name="business"
                  type="text"
                  placeholder="e.g. retail shop, law office, restaurant…"
                  className="form-input"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">
                  What would you like help with?
                </label>
                <textarea
                  name="message"
                  required
                  rows={4}
                  placeholder="Tell me a little about your situation. Even a sentence or two is helpful."
                  className="form-input resize-none"
                />
              </div>
              <button
                type="submit"
                disabled={loading}
                className="w-full py-3 rounded-lg bg-purple-600 hover:bg-purple-500 disabled:opacity-60 text-white font-semibold text-sm transition-colors shadow-lg shadow-purple-900/30"
              >
                {loading ? 'Sending…' : 'Send Message →'}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
