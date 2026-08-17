import { faqs, projects, siteConfig, siteUrl, type Project } from '@/lib/site'

const personId = `${siteUrl}/#person`
const businessId = `${siteUrl}/#business`

export function personJsonLd() {
  return {
    '@type': 'Person',
    '@id': personId,
    name: siteConfig.name,
    url: siteUrl,
    email: siteConfig.email,
    telephone: siteConfig.phoneE164,
    jobTitle: siteConfig.jobTitle,
    image: `${siteUrl}/opengraph-image`,
    sameAs: siteConfig.sameAs,
    address: {
      '@type': 'PostalAddress',
      addressLocality: siteConfig.location.locality,
      addressRegion: siteConfig.location.region,
      addressCountry: siteConfig.location.country,
    },
    knowsAbout: [
      'Website development',
      'iOS app development',
      'Android app development',
      'Process automation',
      'Custom software',
    ],
  }
}

export function organizationJsonLd() {
  return {
    '@type': 'ProfessionalService',
    '@id': businessId,
    name: siteConfig.name,
    url: siteUrl,
    image: `${siteUrl}/opengraph-image`,
    description: siteConfig.description,
    telephone: siteConfig.phoneE164,
    email: siteConfig.email,
    priceRange: '$$',
    founder: { '@id': personId },
    employee: { '@id': personId },
    address: {
      '@type': 'PostalAddress',
      addressLocality: siteConfig.location.locality,
      addressRegion: siteConfig.location.region,
      addressCountry: siteConfig.location.country,
    },
    areaServed: siteConfig.areaServed.map((place) =>
      place === 'Virginia' || place === 'New River Valley'
        ? {
            '@type': place === 'Virginia' ? 'State' : 'AdministrativeArea',
            name: place,
          }
        : {
            '@type': 'City',
            name: place,
            containedInPlace: {
              '@type': 'State',
              name: 'Virginia',
            },
          },
    ),
    knowsAbout: [
      'Website development',
      'Mobile app development',
      'Process automation',
      'iOS apps',
      'Android apps',
      'Custom software',
    ],
    serviceType: [
      'Website development',
      'Mobile app development',
      'Process automation',
      'Custom software development',
    ],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Software work',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Website development',
            description: 'Public sites, product sites, and the pieces that sit behind them.',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'App development',
            description: 'iOS, Android, and web apps.',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Process automation',
            description: 'Connecting websites, apps, and day-to-day processes.',
          },
        },
      ],
    },
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: siteConfig.phoneE164,
      email: siteConfig.email,
      contactType: 'customer support',
      availableLanguage: 'English',
      areaServed: 'US',
    },
  }
}

export function websiteJsonLd() {
  return {
    '@type': 'WebSite',
    '@id': `${siteUrl}/#website`,
    name: siteConfig.name,
    url: siteUrl,
    description: siteConfig.description,
    inLanguage: 'en-US',
    publisher: { '@id': personId },
  }
}

export function softwareJsonLd(project: Project) {
  const appStore = project.links.find((link) => link.label === 'App Store')

  return {
    '@type': 'SoftwareApplication',
    '@id': `${siteUrl}/work/${project.slug}#app`,
    name: project.name,
    description: project.seoDescription,
    applicationCategory: project.applicationCategory,
    operatingSystem: project.operatingSystem,
    image: `${siteUrl}${project.screenshot}`,
    url: `${siteUrl}/work/${project.slug}`,
    author: { '@id': personId },
    creator: { '@id': personId },
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD',
    },
    sameAs: project.links.map((link) => link.href),
    ...(appStore ? { installUrl: appStore.href } : {}),
  }
}

export function faqJsonLd() {
  return {
    '@type': 'FAQPage',
    '@id': `${siteUrl}/#faq`,
    mainEntity: faqs.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  }
}

export function breadcrumbJsonLd(items: { name: string; path: string }[]) {
  return {
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: `${siteUrl}${item.path}`,
    })),
  }
}

export function siteJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@graph': [websiteJsonLd(), personJsonLd(), organizationJsonLd()],
  }
}

export function homeJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@graph': [faqJsonLd(), ...projects.map(softwareJsonLd)],
  }
}

export function workIndexJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@graph': [
      personJsonLd(),
      breadcrumbJsonLd([
        { name: 'Home', path: '/' },
        { name: 'Work', path: '/work' },
      ]),
      {
        '@type': 'CollectionPage',
        '@id': `${siteUrl}/work#page`,
        name: 'Work',
        url: `${siteUrl}/work`,
        description: 'Websites, iOS apps, and Android apps I have built.',
        mainEntity: {
          '@type': 'ItemList',
          itemListElement: projects.map((project, index) => ({
            '@type': 'ListItem',
            position: index + 1,
            url: `${siteUrl}/work/${project.slug}`,
            name: project.name,
          })),
        },
      },
    ],
  }
}

export function projectJsonLd(project: Project) {
  return {
    '@context': 'https://schema.org',
    '@graph': [
      personJsonLd(),
      softwareJsonLd(project),
      breadcrumbJsonLd([
        { name: 'Home', path: '/' },
        { name: 'Work', path: '/work' },
        { name: project.name, path: `/work/${project.slug}` },
      ]),
    ],
  }
}
