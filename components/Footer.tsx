import { siteConfig } from '@/lib/site'

export default function Footer() {
  return (
    <footer className="px-6 pb-12">
      <div className="max-w-5xl mx-auto w-full">
        <div className="glass-soft rounded-2xl px-6 py-6 sm:px-8 w-full text-center">
          <p className="font-serif text-[17px] text-ink">{siteConfig.name}</p>
          <p className="text-sm text-mute mt-1">
            Designer, engineer, and digital hummingbird in Virginia.
          </p>
          <a
            href={`mailto:${siteConfig.email}`}
            className="inline-block mt-3 text-sm text-mute hover:text-ink transition-colors"
          >
            {siteConfig.email}
          </a>
        </div>
      </div>
    </footer>
  )
}
