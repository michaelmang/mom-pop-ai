function getSiteUrl() {
  if (process.env.NEXT_PUBLIC_SITE_URL) {
    return process.env.NEXT_PUBLIC_SITE_URL.replace(/\/$/, '')
  }
  if (process.env.VERCEL_URL) {
    return `https://${process.env.VERCEL_URL}`
  }
  return 'http://localhost:3000'
}

export const siteUrl = getSiteUrl()

export const siteConfig = {
  name: 'Michael Mangialardi AI Consulting',
  shortName: 'Michael Mangialardi',
  title: "Don't Learn AI, Delegate It | Small Business AI Consulting",
  description:
    'Done-for-you AI consulting for small businesses in Roanoke and the New River Valley, Virginia. Michael Mangialardi sets up AI tools and automation so you save time without the learning curve.',
  locale: 'en_US',
  phone: '540-835-4896',
  email: 'mikemangialardi94@gmail.com',
  areaServed: [
    'Roanoke',
    'Christiansburg',
    'Blacksburg',
    'New River Valley',
    'Salem',
    'Cave Spring',
    'Virginia',
  ],
  keywords: [
    'AI consulting small business Roanoke',
    'AI consultant New River Valley Virginia',
    'delegate AI setup small business',
    'done for you AI consulting Virginia',
    'AI automation Roanoke VA',
    'ChatGPT setup small business',
    'AI tools for small business Blacksburg',
    'AI integration Christiansburg',
    'local AI expert Virginia',
  ],
}
