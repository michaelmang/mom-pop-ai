const background = [
  'Software engineering and management, 10+ years',
  'Shipped iOS and Android apps used by readers worldwide',
  'Cloud systems and long-lived products, including work on a platform doing over $1B in annual revenue',
  'Based in the Roanoke and New River Valleys',
]

export default function About() {
  return (
    <section id="about" className="px-6 py-24 border-t border-line">
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-14 items-start">
        <div>
          <p className="text-[13px] font-semibold tracking-[0.14em] uppercase text-mute mb-3">
            About
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl tracking-tight text-ink mb-6">
            A local person who ships real software.
          </h2>
          <p className="text-[17px] leading-relaxed text-mute mb-5">
            I&apos;ve spent a decade in software engineering and management. That
            includes helping run software and teams for a cloud product used at
            a large scale. I now build independently—mostly mobile apps, and the
            product work that makes them last.
          </p>
          <p className="text-[17px] leading-relaxed text-mute">
            Recent work has been with publishers and ministries that needed
            library apps for their readers. I am not selling a method or a
            platform. I am available to build the thing that needs to exist.
          </p>
        </div>

        <div className="bg-white border border-line rounded-lg p-8">
          <p className="text-[13px] font-semibold tracking-[0.14em] uppercase text-mute mb-5">
            Background
          </p>
          <ul className="space-y-4">
            {background.map((item) => (
              <li key={item} className="flex gap-3 text-[15px] leading-relaxed text-ink/90">
                <span className="mt-2 h-1 w-1 rounded-full bg-navy shrink-0" aria-hidden />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
