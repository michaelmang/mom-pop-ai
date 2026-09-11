export default function Hero() {
  return (
    <section className="min-h-[72vh] flex flex-col justify-center px-6 pt-28 pb-16">
      <div className="max-w-5xl mx-auto w-full">
        <div className="glass rounded-3xl px-7 py-9 sm:px-10 sm:py-12 w-full text-center animate-fade-up">
          <h1 className="font-serif text-[2.2rem] sm:text-5xl lg:text-[3.4rem] leading-[1.22] tracking-[-0.01em] text-ink mb-8 mx-auto max-w-3xl">
            Michael crafts software applications for mobile and web.
          </h1>
          <div className="space-y-2 mx-auto max-w-2xl">
            <p className="text-[17px] sm:text-lg leading-relaxed text-mute">
              Designer, engineer, and digital hummingbird
            </p>
            <p className="text-[17px] sm:text-lg leading-relaxed text-mute">
              Currently exploring mobile ebook readers and corpus-wide passage
              retrieval
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
