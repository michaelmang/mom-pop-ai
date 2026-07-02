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
          alignItems: 'center',
          justifyContent: 'center',
          background: '#0B0E14',
          padding: 10,
        }}
      >
        <div
          style={{
            width: '100%',
            height: '100%',
            display: 'flex',
            background: 'linear-gradient(135deg, #A78BFA 0%, #7C3AED 50%, #2DD4BF 100%)',
            borderRadius: 24,
            padding: 5,
          }}
        >
          <div
            style={{
              width: '100%',
              height: '100%',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              background: '#0B0E14',
              borderRadius: 20,
              padding: '64px 72px',
              position: 'relative',
            }}
          >
            <div
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                height: 220,
                background:
                  'radial-gradient(ellipse 80% 60% at 50% 0%, rgba(124,58,237,0.22) 0%, transparent 70%)',
              }}
            />

            <div
              style={{
                display: 'flex',
                fontSize: 22,
                fontWeight: 600,
                letterSpacing: '0.16em',
                textTransform: 'uppercase',
                color: '#2DD4BF',
                marginBottom: 28,
              }}
            >
              Local AI Consulting · Roanoke &amp; NRV, VA
            </div>

            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                fontSize: 72,
                fontWeight: 800,
                lineHeight: 1.05,
                color: '#F8FAFC',
                letterSpacing: '-0.03em',
                maxWidth: 900,
              }}
            >
              <span>Don&apos;t Learn AI.</span>
              <span
                style={{
                  background: 'linear-gradient(135deg, #C4B5FD 0%, #2DD4BF 100%)',
                  backgroundClip: 'text',
                  color: 'transparent',
                }}
              >
                Delegate It.
              </span>
            </div>

            <div
              style={{
                display: 'flex',
                marginTop: 32,
                fontSize: 28,
                lineHeight: 1.4,
                color: '#94A3B8',
                maxWidth: 820,
              }}
            >
              Done-for-you AI setup and automation for small businesses in Virginia.
            </div>

            <div
              style={{
                display: 'flex',
                marginTop: 40,
                fontSize: 22,
                fontWeight: 600,
                color: '#E2E8F0',
              }}
            >
              Michael Mangialardi
            </div>
          </div>
        </div>
      </div>
    ),
    { ...size },
  )
}
