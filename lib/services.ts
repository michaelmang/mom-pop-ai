export type Service = {
  name: string
  description: string
}

export const everydayServices: Service[] = [
  { name: 'Websites', description: 'New sites, redesigns, and updates' },
  {
    name: 'Google listings and SEO',
    description: 'Organically draw visitors to your business and website',
  },
  { name: 'Google Ads', description: 'Target your audience to bring in calls and visits' },
  {
    name: 'Cybersecurity',
    description:
      "I’ll protect your small business and customers by securing your devices, software, and accounts",
  },
  {
    name: 'Flyers and print',
    description: "I provide hand-made designs that’ll set you apart from AI-generated ones",
  },
  {
    name: 'Everything else digital',
    description: 'I can solve any other digital problem',
  },
]

export const buildServices: Service[] = [
  {
    name: 'Software applications',
    description:
      'Web and desktop applications to sell as a product or automate your business processes',
  },
  {
    name: 'Mobile apps',
    description: 'iOS and Android apps to create mobile products for customers',
  },
  {
    name: 'Business automation',
    description:
      'I can slash your costs, remove your bottlenecks, and give you time back to advance your business through software integrations',
  },
  {
    name: 'AI integrations (MCP servers)',
    description:
      'I can integrate secure AI workflows that scale your business without complicating coordination',
  },
  {
    name: 'Custom search engines',
    description:
      'I build search engines that find relevant information across your documents and other files, eliminating the scavenger hunt in your business processes',
  },
]
