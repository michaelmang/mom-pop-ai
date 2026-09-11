import Image from 'next/image'

const projects = [
  {
    title: 'Pixelated game that teaches musical composition',
    image: '/studio/music-game.jpg',
    alt: 'Pixel art characters including musicians and a knight',
  },
  {
    title: 'Pixelated world where you triage your email like its real mail',
    image: '/studio/email-mail.jpg',
    alt: 'Pixel art homestead with a mailbox and Press E to check post prompt',
  },
  {
    title: "3D, digital version of Jefferson's revolving bookstand for reading digital papers",
    image: '/studio/jefferson-bookstand.jpg',
    alt: "Jefferson's Revolving Bookstand web app with a 3D bookstand",
  },
]

const notes = [
  'Learning to play freestyle guitar and draw',
  'Writing a high fantasy novel based on frequently-requested bedtime stories about two Christmas elves, Chadwick and Finwick, who finding themselves protecting the Polar North Pole after escaping Father Christmas\' workshop.',
  'Role-playing Pokemon Blue and Gold, with some accepted detours, with my children',
]

export default function Studio() {
  return (
    <section className="px-6 pt-28 pb-20">
      <div className="max-w-5xl mx-auto w-full space-y-8">
        <div className="glass rounded-3xl px-7 py-10 sm:px-10 sm:py-12 w-full text-center">
          <h2 className="font-serif text-4xl sm:text-5xl tracking-tight text-ink mb-6">
            Studio
          </h2>
          <p className="text-[17px] leading-relaxed text-mute mx-auto max-w-3xl">
            Besides caring for my wife and two young boys, gardens, and small
            animals, I am using my leisure time to pursue the following
            projects:
          </p>
        </div>

        <div className="grid md:grid-cols-1 gap-8">
          {projects.map((project) => (
            <article
              key={project.title}
              className="glass rounded-3xl overflow-hidden w-full"
            >
              <div className="relative w-full aspect-[16/10] bg-black/40">
                <Image
                  src={project.image}
                  alt={project.alt}
                  fill
                  sizes="(max-width: 1024px) 100vw, 64rem"
                  className="object-cover object-center"
                />
              </div>
              <div className="px-6 py-6 sm:px-8 text-center">
                <h3 className="font-serif text-2xl text-ink leading-snug mx-auto max-w-2xl">
                  {project.title}
                </h3>
              </div>
            </article>
          ))}
        </div>

        <div className="glass rounded-3xl px-7 py-9 sm:px-10 w-full text-center">
          <ul className="space-y-5 text-[17px] leading-relaxed text-mute mx-auto max-w-3xl">
            {notes.map((note) => (
              <li key={note}>{note}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
