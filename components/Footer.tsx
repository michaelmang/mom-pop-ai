import { siteConfig } from '@/lib/site'

export default function Footer() {
  return (
    <footer className="px-6 pb-12">
      <div className="max-w-5xl mx-auto w-full">
        <div className="glass-soft rounded-2xl px-6 py-6 sm:px-8 w-full text-center">
          <p className="font-serif text-[17px] text-ink">{siteConfig.name}</p>
          <p className="text-sm text-mute mt-1">
            Digital handyman and experienced software engineer in Virginia&rsquo;s New
            River Valley serving small businesses
          </p>
          <p className="mt-3 flex flex-col sm:flex-row items-center justify-center gap-1 sm:gap-2 text-sm text-mute whitespace-nowrap">
            <a href={`tel:${siteConfig.phoneE164}`} className="hover:text-ink transition-colors">
              {siteConfig.phone}
            </a>
            <span className="hidden sm:inline" aria-hidden>
              ·
            </span>
            <a href={`mailto:${siteConfig.email}`} className="hover:text-ink transition-colors">
              {siteConfig.email}
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
