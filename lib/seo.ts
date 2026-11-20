import { buildServices, everydayServices, type Service } from '@/lib/services'
import { projects, siteConfig, siteUrl, type Project } from '@/lib/site'

const personId = `${siteUrl}/#person`
const businessId = `${siteUrl}/#business`
const allServices = [...everydayServices, ...buildServices]

function serviceCatalog(name: string, services: Service[]) {
  return {
    '@type': 'OfferCatalog',
    name,
    itemListElement: services.map((service) => ({
      '@type': 'Offer',
      itemOffered: {
        '@type': 'Service',
        name: service.name,
        description: service.description,
      },
    })),
  }
}

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
    knowsAbout: allServices.map((service) => service.name),
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
    areaServed: siteConfig.areaServed.map((place) => {
      if (place === 'United States') {
        return { '@type': 'Country', name: place }
      }
      if (place === 'Virginia') {
        return { '@type': 'State', name: place }
      }
      if (place === 'New River Valley') {
        return {
          '@type': 'AdministrativeArea',
          name: place,
          containedInPlace: { '@type': 'State', name: 'Virginia' },
        }
      }
      return {
        '@type': 'City',
        name: place,
        containedInPlace: {
          '@type': 'State',
          name: 'Virginia',
        },
      }
    }),
    knowsAbout: allServices.map((service) => service.name),
    serviceType: allServices.map((service) => service.name),
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Services',
      itemListElement: [
        serviceCatalog('Everyday digital work', everydayServices),
        serviceCatalog('Bigger builds', buildServices),
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
    '@id': `${siteUrl}/#${project.slug}`,
    name: project.name,
    description: project.seoDescription,
    applicationCategory: project.applicationCategory,
    operatingSystem: project.operatingSystem,
    image: `${siteUrl}${project.screenshot}`,
    url: `${siteUrl}/#work`,
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

export function siteJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@graph': [websiteJsonLd(), personJsonLd(), organizationJsonLd()],
  }
}

export function homeJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@graph': projects.map(softwareJsonLd),
  }
}

