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
  title: 'Michael Mangialardi — Mobile apps and digital products',
  description:
    'Independent developer in Roanoke, Virginia. I design and ship mobile apps and digital products for organizations that need software people actually use.',
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
    'mobile app developer Virginia',
    'iOS developer Roanoke',
    'Android app developer',
    'custom mobile apps',
    'independent software developer',
    'app developer New River Valley',
    'digital product development',
  ],
}

export const projects = [
  {
    name: 'Monergism eBook Library',
    client: 'Christian Publication Resource Foundation',
    platforms: 'iOS',
    summary:
      'A free library of 1,500+ classic Reformed and biblical works. Pastors, students, and readers can browse, download, highlight, and listen—without an account wall in the way.',
    details:
      'The product is a quiet reading app: search by author or title, pick up where you left off, keep notes and highlights, and download books for offline use. Audio is available for selected works.',
    icon: '/work/monergism-icon.png',
    screenshot: '/work/monergism-home.png',
    screenshotAlt: 'Monergism eBook Library home screen on iPhone',
    links: [
      {
        label: 'App Store',
        href: 'https://apps.apple.com/app/monergism-ebook-library/id6448814913',
      },
    ],
  },
  {
    name: 'Kalam',
    client: 'Gratia Tech',
    platforms: 'iOS, Android, and web',
    summary:
      "An Arabic-first Christian library. Readers can read or listen to trusted books, follow daily plans, and keep a personal library—with publishing partners who needed their catalog in people's pockets.",
    details:
      'Kalam is built for Arabic from the start: comfortable reading, saved progress, offline access, and audio with playback controls. The public site and the apps are one product, not a brochure for something else.',
    icon: '/work/kalam-icon.png',
    screenshot: '/work/kalam-home.jpg',
    screenshotAlt: 'Kalam app screens showing the Arabic Christian library',
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
