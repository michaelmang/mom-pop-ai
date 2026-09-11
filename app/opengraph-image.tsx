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
          background: '#161616',
          padding: '72px 80px',
        }}
      >
        <div
          style={{
            display: 'flex',
            fontSize: 58,
            fontWeight: 600,
            lineHeight: 1.25,
            color: '#EDEAE6',
            letterSpacing: '-0.02em',
            maxWidth: 980,
          }}
        >
          Michael crafts software applications for mobile and web.
        </div>

        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            marginTop: 36,
            fontSize: 24,
            lineHeight: 1.45,
            color: '#A09B95',
            maxWidth: 820,
          }}
        >
          <div style={{ display: 'flex' }}>Designer, engineer, and digital hummingbird</div>
          <div style={{ display: 'flex', marginTop: 8 }}>
            Currently exploring mobile ebook readers and corpus-wide passage retrieval
          </div>
        </div>

        <div
          style={{
            display: 'flex',
            marginTop: 48,
            fontSize: 22,
            fontWeight: 600,
            color: '#E25A9A',
          }}
        >
          Michael Mangialardi
        </div>
      </div>
    ),
    { ...size },
  )
}
