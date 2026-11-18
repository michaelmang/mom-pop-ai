const points = [
  {
    title: '10 years in software',
    body: 'Engineering experience enriched by organizational leadership, product management, and entrepreneurial zeal.',
  },
  {
    title: 'Straight to me',
    body: 'You work directly with me, not an account manager.',
  },
  {
    title: 'Fast turnaround',
    body: 'Quick replies and quick delivery.',
  },
]

export default function WorkingWithMe() {
  return (
    <section className="px-6 pb-16">
      <div className="max-w-5xl mx-auto w-full">
        <div className="glass-soft rounded-3xl px-7 py-9 sm:px-10 sm:py-10 w-full text-center">
          <h2 className="font-serif text-3xl sm:text-4xl text-ink">Working with me</h2>
          <div className="mt-8 grid sm:grid-cols-3 gap-8 sm:gap-10">
            {points.map((point) => (
              <div key={point.title}>
                <h3 className="font-serif text-xl text-[#C4A574]">{point.title}</h3>
                <p className="mt-2 text-[15px] leading-relaxed text-mute">{point.body}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
