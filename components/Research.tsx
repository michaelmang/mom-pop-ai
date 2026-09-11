'use client'

import Image from 'next/image'
import { useMemo, useState } from 'react'
import readingLists from '@/lib/reading-lists.json'

type Book = {
  title: string
  section?: string | null
  author?: string | null
  cover?: string | null
}

type ReadingYear = keyof typeof readingLists

const PAPER_URL =
  'https://michaelmangialardi.substack.com/p/beyond-and-below-conceptual-spaces'

const years = Object.keys(readingLists).sort() as ReadingYear[]

const coverPalette = [
  'from-[#3a2a1d] to-[#1a1410]',
  'from-[#2c3340] to-[#151820]',
  'from-[#3d2a32] to-[#1a1216]',
  'from-[#24352c] to-[#101814]',
  'from-[#3a3220] to-[#19160f]',
]

function BookCard({ book, index }: { book: Book; index: number }) {
  const [failed, setFailed] = useState(false)
  const showCover = Boolean(book.cover) && !failed
  const tone = coverPalette[index % coverPalette.length]

  return (
    <article className="group">
      <div className="relative aspect-[2/3] overflow-hidden rounded-md bg-[#151515] ring-1 ring-white/10 shadow-[0_12px_28px_rgba(0,0,0,0.35)]">
        {showCover ? (
          <Image
            src={book.cover!}
            alt=""
            fill
            sizes="(max-width: 640px) 50vw, (max-width: 1024px) 25vw, 20vw"
            className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
            onError={() => setFailed(true)}
          />
        ) : (
          <div
            className={`absolute inset-0 bg-gradient-to-br ${tone} p-4 flex flex-col justify-end`}
          >
            <p className="font-serif text-[15px] leading-snug text-ink/95">{book.title}</p>
          </div>
        )}
      </div>
      <h4 className="mt-3 text-[14px] font-semibold leading-snug text-ink">{book.title}</h4>
      {book.author && <p className="mt-1 text-[13px] text-mute">{book.author}</p>}
    </article>
  )
}

export default function Research() {
  const [activeYear, setActiveYear] = useState<ReadingYear>('2024')
  const books = useMemo(() => readingLists[activeYear] as Book[], [activeYear])

  return (
    <section className="px-6 pt-28 pb-20">
      <div className="max-w-5xl mx-auto w-full space-y-10">
        <div className="glass rounded-3xl px-7 py-10 sm:px-10 sm:py-12 w-full text-center">
          <h2 className="font-serif text-4xl sm:text-5xl tracking-tight text-ink mb-6">
            Research
          </h2>
          <div className="space-y-5 text-[17px] leading-relaxed text-mute mx-auto max-w-3xl">
            <p>
              I am graduate student at Davenant Hall finalizing my Master of
              Studies in Classical Protestantism. My research largely focuses on
              tracing the value of applying what CS Lewis coined &ldquo;the
              discarded image&rdquo; (the insights of ancient and medieval
              philosophy and theology) to contemporary discourse around
              character, culture, and technology. I enjoy living a life full of
              Christian imagination and spreading it to others.
            </p>
            <p>
              Recent Paper:{' '}
              <a
                href={PAPER_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#C4A574] hover:text-[#D8BC8E] transition-colors underline underline-offset-4 decoration-[#C4A574]/40"
              >
                Beyond and Below Conceptual Spaces
              </a>
            </p>
          </div>
        </div>

        <div className="w-full">
          <div className="text-center mb-8">
            <h3 className="font-serif text-3xl sm:text-4xl tracking-tight text-ink mb-3">
              Reading lists
            </h3>
            <p className="text-[17px] leading-relaxed text-mute mx-auto max-w-2xl">
              Here are books I&apos;ve read since I got serious about tracking in
              2024
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-2 mb-10">
            {years.map((year) => (
              <button
                key={year}
                type="button"
                onClick={() => setActiveYear(year)}
                className={`px-4 py-2 rounded-full text-[14px] transition-colors ${
                  activeYear === year
                    ? 'bg-[#C4A574] text-[#1a1410] font-semibold'
                    : 'bg-white/5 text-mute hover:text-ink hover:bg-white/10'
                }`}
              >
                {year}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-5 gap-y-10">
            {books.map((book, index) => (
              <BookCard key={`${activeYear}-${book.title}`} book={book} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
