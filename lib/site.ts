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
  title: 'Michael Mangialardi | Digital Handyman in the New River Valley',
  description:
    'Websites, Google listings, ads, cybersecurity, and print for New River Valley businesses, plus custom apps, automation, and AI integrations for clients anywhere.',
  locale: 'en_US',
  phone: '540-835-4896',
  phoneE164: '+15408354896',
  email: 'mikemangialardi94@gmail.com',
  jobTitle: 'Digital handyman and software engineer',
  location: {
    locality: 'Blacksburg',
    region: 'VA',
    regionName: 'Virginia',
    country: 'US',
  },
  sameAs: ['https://github.com/michaelmang'],
  // Matches the service area on the Google Business Profile, plus remote builds.
  areaServed: [
    'Radford',
    'Christiansburg',
    'Blacksburg',
    'New River Valley',
    'Virginia',
    'United States',
  ],
  keywords: [
    'digital handyman New River Valley',
    'website design Radford VA',
    'website design Christiansburg',
    'Google Business Profile help Blacksburg',
    'SEO New River Valley',
    'Google Ads management Virginia',
    'small business cybersecurity Virginia',
    'flyer design Radford',
    'custom software developer Virginia',
    'mobile app developer Blacksburg',
    'business automation',
    'MCP server developer',
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
