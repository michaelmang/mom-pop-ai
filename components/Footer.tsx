import Link from 'next/link'
import { siteConfig } from '@/lib/site'

export default function Footer() {
  return (
    <footer className="border-t border-line py-10 px-6">
      <div className="max-w-5xl mx-auto flex flex-col gap-8 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <p className="font-serif text-[17px] text-ink mb-2">{siteConfig.name}</p>
          <p className="text-sm text-mute max-w-xs">
            Independent software developer in Roanoke, Virginia. Websites, apps, and automation.
          </p>
        </div>
        <nav aria-label="Footer" className="flex flex-wrap gap-x-6 gap-y-2 text-sm">
          <Link href="/work" className="text-mute hover:text-ink transition-colors">
            Work
          </Link>
          <Link href="/#approach" className="text-mute hover:text-ink transition-colors">
            Approach
          </Link>
          <Link href="/#about" className="text-mute hover:text-ink transition-colors">
            About
          </Link>
          <Link href="/#contact" className="text-mute hover:text-ink transition-colors">
            Contact
          </Link>
        </nav>
        <div className="text-sm text-mute space-y-1">
          <p>Roanoke, VA</p>
          <a href={`tel:${siteConfig.phoneE164}`} className="block hover:text-ink transition-colors">
            {siteConfig.phone}
          </a>
          <a href={`mailto:${siteConfig.email}`} className="block hover:text-ink transition-colors">
            {siteConfig.email}
          </a>
          <p className="pt-2">© {new Date().getFullYear()}</p>
        </div>
      </div>
    </footer>
  )
}
