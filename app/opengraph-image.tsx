import { ImageResponse } from 'next/og'
import { siteConfig } from '@/lib/site'

export const runtime = 'edge'
export const alt = siteConfig.title
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          background: '#F7F4EE',
          padding: '72px 80px',
        }}
      >
        <div
          style={{
            display: 'flex',
            fontSize: 20,
            fontWeight: 600,
            letterSpacing: '0.14em',
            textTransform: 'uppercase',
            color: '#57534E',
            marginBottom: 28,
          }}
        >
          Independent developer · Blacksburg, Virginia
        </div>

        <div
          style={{
            display: 'flex',
            fontSize: 64,
            fontWeight: 600,
            lineHeight: 1.4,
            color: '#1C1917',
            letterSpacing: '-0.02em',
            maxWidth: 980,
          }}
        >
          I build websites, apps, and automations.
        </div>

        <div
          style={{
            display: 'flex',
            marginTop: 36,
            fontSize: 26,
            lineHeight: 1.4,
            color: '#57534E',
            maxWidth: 820,
          }}
        >
          Direct work. Open communication. Fast development.
        </div>

        <div
          style={{
            display: 'flex',
            marginTop: 48,
            fontSize: 22,
            fontWeight: 600,
            color: '#1E3A5F',
          }}
        >
          Michael Mangialardi
        </div>
      </div>
    ),
    { ...size },
  )
}
