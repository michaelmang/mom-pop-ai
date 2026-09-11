import type { MetadataRoute } from 'next'
import { siteConfig } from '@/lib/site'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: siteConfig.name,
    short_name: 'Mangialardi',
    description: siteConfig.description,
    start_url: '/',
    display: 'standalone',
    background_color: '#0c0c0c',
    theme_color: '#0c0c0c',
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
