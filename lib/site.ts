function getSiteUrl() {
  if (process.env.NEXT_PUBLIC_SITE_URL) {
    return process.env.NEXT_PUBLIC_SITE_URL.replace(/\/$/, '')
  }
  if (process.env.VERCEL_PROJECT_PRODUCTION_URL) {
    return `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
  }
  if (process.env.VERCEL_URL) {
    return `https://${process.env.VERCEL_URL}`
  }
  return 'http://localhost:3000'
}

export const siteUrl = getSiteUrl()

export const siteConfig = {
  name: 'Michael Mangialardi',
  shortName: 'Michael Mangialardi',
  title: 'Michael Mangialardi, independent developer',
  description:
    'Independent developer in Roanoke, Virginia. I build websites, apps, and automations. You work with me directly.',
  locale: 'en_US',
  phone: '540-835-4896',
  email: 'mikemangialardi94@gmail.com',
  areaServed: [
    'Roanoke',
    'Christiansburg',
    'Blacksburg',
    'New River Valley',
    'Salem',
    'Virginia',
  ],
  keywords: [
    'independent software developer',
    'website development Virginia',
    'mobile app developer Roanoke',
    'process automation',
    'custom software',
    'iOS and Android apps',
  ],
}

export const projects = [
  {
    name: 'Monergism eBook Library',
    client: 'Christian Publication Resource Foundation',
    platforms: 'iOS',
    summary:
      'A free iOS library of 1,700+ classic Reformed and biblical works. Readers can browse, download, highlight, and listen.',
    details:
      'Search by author or title, pick up where you left off, keep notes, and download books for offline use. Audio is available for selected works.',
    icon: '/work/monergism-icon.png',
    screenshot: '/work/monergism-home.jpg',
    screenshotAlt: 'Monergism eBook Library home screen',
    links: [
      {
        label: 'App Store',
        href: 'https://apps.apple.com/gh/app/monergism-ebook-library/id6448814913',
      },
    ],
  },
  {
    name: 'Kalam',
    client: 'Gratia Tech',
    platforms: 'iOS, Android, and web',
    summary:
      'An Arabic library app for reading and listening. Daily plans, saved progress, offline access, and audio.',
    details:
      'Built for Arabic from the start. The website and the apps are the same product.',
    icon: '/work/kalam-icon.png',
    screenshot: '/work/kalam-home.jpg',
    screenshotAlt: 'Kalam app home screen',
    links: [
      { label: 'kalam.app', href: 'https://kalam.app/en/' },
      {
        label: 'App Store',
        href: 'https://apps.apple.com/app/id6777661165',
      },
      {
        label: 'Google Play',
        href: 'https://play.google.com/store/apps/details?id=com.gratiatech.kalam',
      },
    ],
  },
]
