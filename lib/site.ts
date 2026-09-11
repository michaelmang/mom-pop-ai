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
  title: 'Michael Mangialardi | Software for mobile and web',
  description:
    'Michael crafts software applications for mobile and web. Designer, engineer, and digital hummingbird exploring mobile ebook readers and corpus-wide passage retrieval from Virginia.',
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
  upcoming?: boolean
}

export const projects: Project[] = [
  {
    slug: 'monergism-ebook-library',
    name: 'Monergism eBook Library',
    client: 'Christian Publication Resource Foundation',
    platforms: 'iOS and Android',
    operatingSystem: 'iOS, Android',
    applicationCategory: 'LifestyleApplication',
    summary:
      'A free library of 1,700+ classic Reformed and biblical works on iOS and Android. Readers can browse, download, highlight, and listen.',
    details:
      'The Monergism eBook Library is on the App Store and Google Play as a reading app for pastors, students, and anyone who wants this catalog on a phone. I built the apps for the Christian Publication Resource Foundation.',
    features: [
      'Browse and search by author, category, or title',
      'Download books for offline reading',
      'Notes and highlights',
      'Audio for selected works',
      'Resume reading from the last place you stopped',
    ],
    seoTitle: 'Monergism eBook Library | iOS & Android by Michael Mangialardi',
    seoDescription:
      'iOS and Android app for the Monergism eBook Library: 1,700+ classic Reformed and biblical works, with offline reading, notes, highlights, and audio. Built by Michael Mangialardi.',
    icon: '/work/monergism-icon.png',
    screenshot: '/work/monergism-home.jpg',
    screenshotAlt:
      'Monergism eBook Library home screen showing Continue reading, New Releases, and an audio player',
    screenshotWidth: 1284,
    screenshotHeight: 2778,
    links: [
      {
        label: 'App Store',
        href: 'https://apps.apple.com/gh/app/monergism-ebook-library/id6448814913',
      },
      {
        label: 'Google Play',
        href: 'https://play.google.com/store/apps/details?id=com.cprf.monergism.ebooks.reader&hl=en_US',
      },
    ],
  },
  {
    slug: 'theology-witness',
    name: 'Theology Witness',
    client: '',
    platforms: '',
    operatingSystem: 'Web',
    applicationCategory: 'LifestyleApplication',
    summary:
      'Sophisticated semantic search on top of the Monergism corpus. Returns passages from original sources to witness to strong theological content without AI admixture.',
    details:
      'Theology Witness is an upcoming product for corpus-wide passage retrieval over the Monergism library. It surfaces original-source passages rather than generated summaries.',
    features: [
      'Semantic search across the Monergism corpus',
      'Passages returned from original sources',
      'Witness-mode retrieval without AI admixture',
    ],
    seoTitle: 'Theology Witness | Upcoming product by Michael Mangialardi',
    seoDescription:
      'Theology Witness — semantic search over the Monergism corpus that returns original-source passages without AI admixture. Built by Michael Mangialardi.',
    icon: '/work/theology-witness-icon.png',
    screenshot: '/work/theology-witness-home.jpg',
    screenshotAlt:
      'Theology Witness search for What did the Puritans teach about assurance, powered by Monergism',
    screenshotWidth: 1400,
    screenshotHeight: 687,
    links: [],
    upcoming: true,
  },
  {
    slug: 'kalam',
    name: 'Kalam',
    client: 'Gratia Tech',
    platforms: 'iOS, Android, and web',
    operatingSystem: 'iOS, Android',
    applicationCategory: 'LifestyleApplication',
    summary:
      'An Arabic library app for reading and listening. Readers can browse, download, highlight, and listen.',
    details:
      'Kalam is a library product for Arabic readers on iOS, Android, and the web. I built them for Gratia Tech.',
    features: [
      'Reading and listening in Arabic',
      'Browse, download, highlight, and listen',
      'Offline access',
      'Audio playback',
    ],
    seoTitle: 'Kalam | Arabic Library App by Michael Mangialardi',
    seoDescription:
      'Kalam is an Arabic library app for reading and listening. Readers can browse, download, highlight, and listen. Built by Michael Mangialardi.',
    icon: '/work/kalam-icon.png',
    screenshot: '/work/kalam-home.png',
    screenshotAlt: 'Kalam Library screen with Arabic and English book covers',
    screenshotWidth: 415,
    screenshotHeight: 900,
    links: [
      {
        label: 'App Store',
        href: 'https://apps.apple.com/us/app/kalam-app-%D9%85%D9%83%D8%AA%D8%A8%D8%A9-%D9%83%D9%84%D8%A7%D9%85/id6777661165',
      },
      {
        label: 'Google Play',
        href: 'https://play.google.com/store/apps/details?id=com.gratiatech.kalam',
      },
    ],
  },
]

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug)
}
