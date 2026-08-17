import type { MetadataRoute } from 'next'
import { siteConfig } from '@/lib/site'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: siteConfig.name,
    short_name: 'Mangialardi',
    description: siteConfig.description,
    start_url: '/',
    display: 'standalone',
    background_color: '#F7F4EE',
    theme_color: '#F7F4EE',
    lang: 'en-US',
    icons: [
      {
        src: '/icon.svg',
        sizes: 'any',
        type: 'image/svg+xml',
      },
    ],
  }
}
