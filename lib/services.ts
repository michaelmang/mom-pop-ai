export type Service = {
  name: string
  description: string
}

/** Matches the service area on the Google Business Profile. */
export const serviceArea = 'Radford, Christiansburg, Blacksburg, and the New River Valley'

export const everydayServices: Service[] = [
  { name: 'Websites', description: 'New sites, redesigns, and updates.' },
  {
    name: 'Google Business Profile',
    description: 'Setup, verification, photos, and upkeep.',
  },
  { name: 'SEO', description: 'So nearby customers can find you.' },
  { name: 'Google Ads', description: 'Campaigns set up and managed.' },
  {
    name: 'Flyers and print',
    description: 'Designed by hand, with no AI-generated art.',
  },
  {
    name: 'Everything else digital',
    description: 'Domains, email, and whatever broke.',
  },
]

export const buildServices: Service[] = [
  {
    name: 'Software applications',
    description: 'Web apps and internal tools built around how you work.',
  },
  {
    name: 'Mobile apps',
    description: 'iOS and Android apps, published to the App Store and Google Play.',
  },
  {
    name: 'Business automation',
    description: 'Getting the tools you already pay for to work together.',
  },
  {
    name: 'AI integrations',
    description:
      'MCP servers that let ChatGPT, Claude, and other assistants work with your data and tools.',
  },
  {
    name: 'Search engines',
    description: 'Search across your catalog, documents, or archive.',
  },
]
