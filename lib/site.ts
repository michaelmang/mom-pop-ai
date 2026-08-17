export const productionSiteUrl = 'https://www.michaelmang.com'

function getSiteUrl() {
  if (process.env.NEXT_PUBLIC_SITE_URL) {
    return process.env.NEXT_PUBLIC_SITE_URL.replace(/\/$/, '')
  }
  if (process.env.VERCEL) {
    return productionSiteUrl
  }
  return 'http://localhost:3000'
}

export const siteUrl = getSiteUrl()
export const isPreviewDeployment = process.env.VERCEL_ENV === 'preview'

export const siteConfig = {
  name: 'Michael Mangialardi',
  shortName: 'Michael Mangialardi',
  title: 'Michael Mangialardi | Websites, Apps, and Automation',
  description:
    'Independent software developer in Blacksburg, Virginia, near Roanoke. I build websites, iOS and Android apps, and process automations. Local and remote.',
  locale: 'en_US',
  phone: '540-835-4896',
  phoneE164: '+15408354896',
  email: 'mikemangialardi94@gmail.com',
  jobTitle: 'Independent software developer',
  location: {
    locality: 'Blacksburg',
    region: 'VA',
    regionName: 'Virginia',
    country: 'US',
  },
  sameAs: ['https://github.com/michaelmang'],
  areaServed: [
    'Blacksburg',
    'Christiansburg',
    'Roanoke',
    'Salem',
    'Virginia',
    'United States',
  ],
  keywords: [
    'software developer Blacksburg VA',
    'website developer Christiansburg',
    'iOS app developer Virginia',
    'Android app developer',
    'process automation Virginia',
    'remote software developer',
    'custom website development Roanoke',
    'mobile app developer Blacksburg',
    'freelance developer Christiansburg',
  ],
}

export type ProjectLink = {
  label: string
  href: string
}

export type Project = {
  slug: string
  name: string
  client: string
  platforms: string
  operatingSystem: string
  applicationCategory: string
  summary: string
  details: string
  features: string[]
  seoTitle: string
  seoDescription: string
  icon: string
  screenshot: string
  screenshotAlt: string
  screenshotWidth: number
  screenshotHeight: number
  links: ProjectLink[]
}

export const projects: Project[] = [
  {
    slug: 'monergism-ebook-library',
    name: 'Monergism eBook Library',
    client: 'Christian Publication Resource Foundation',
    platforms: 'iOS',
    operatingSystem: 'iOS',
    applicationCategory: 'LifestyleApplication',
    summary:
      'A free iOS library of 1,700+ classic Reformed and biblical works. Readers can browse, download, highlight, and listen.',
    details:
      'The Monergism eBook Library is on the App Store as a reading app for pastors, students, and anyone who wants this catalog on a phone. I built the iOS app for the Christian Publication Resource Foundation.',
    features: [
      'Browse and search by author, category, or title',
      'Download books for offline reading',
      'Notes and highlights',
      'Audio for selected works',
      'Resume reading from the last place you stopped',
    ],
    seoTitle: 'Monergism eBook Library | iOS App by Michael Mangialardi',
    seoDescription:
      'iOS app for the Monergism eBook Library: 1,700+ classic Reformed and biblical works, with offline reading, notes, highlights, and audio. Built by Michael Mangialardi.',
    icon: '/work/monergism-icon.png',
    screenshot: '/work/monergism-home.jpg',
    screenshotAlt:
      'Monergism eBook Library iOS home screen showing Continue reading, New Releases, and an audio player',
    screenshotWidth: 1284,
    screenshotHeight: 2778,
    links: [
      {
        label: 'App Store',
        href: 'https://apps.apple.com/gh/app/monergism-ebook-library/id6448814913',
      },
    ],
  },
  {
    slug: 'kalam',
    name: 'Kalam',
    client: 'Gratia Tech',
    platforms: 'iOS, Android, and web',
    operatingSystem: 'iOS, Android',
    applicationCategory: 'LifestyleApplication',
    summary:
      'An Arabic library app for reading and listening. Daily plans, saved progress, offline access, and audio.',
    details:
      'Kalam is a library product for Arabic readers. The iOS app, Android app, and website at kalam.app are one product. I built them for Gratia Tech.',
    features: [
      'Reading and listening in Arabic',
      'Daily plans and saved progress',
      'Offline access',
      'Audio playback',
      'Website and apps that share the same library',
    ],
    seoTitle: 'Kalam | Arabic Library App by Michael Mangialardi',
    seoDescription:
      'Kalam is an Arabic library app for reading and listening, on iOS, Android, and the web. Daily plans, offline access, and audio. Built by Michael Mangialardi.',
    icon: '/work/kalam-icon.png',
    screenshot: '/work/kalam-home.jpg',
    screenshotAlt: 'Kalam iOS home screen with an Arabic library, daily goal, and continue reading',
    screenshotWidth: 1284,
    screenshotHeight: 2778,
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

export const faqs = [
  {
    question: 'What kind of work do you take on?',
    answer:
      'Websites, iOS and Android apps, and automations that connect software to daily processes. Recent work includes library apps on the App Store and Google Play.',
  },
  {
    question: 'Where are you based?',
    answer:
      'Blacksburg and Christiansburg, Virginia, near Roanoke. I work with people nearby and with remote clients.',
  },
  {
    question: 'Do I work with you or with an agency?',
    answer:
      'You work with me directly. There is no account manager and no agency layer between you and the build.',
  },
  {
    question: 'How do projects move?',
    answer:
      'I keep communication open and ship in short cycles, so you can see something working early and give feedback as we go.',
  },
]

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug)
}
