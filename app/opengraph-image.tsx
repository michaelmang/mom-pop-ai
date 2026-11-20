import { ImageResponse } from 'next/og'
import { siteConfig, siteUrl } from '@/lib/site'

export const runtime = 'edge'
export const alt = 'Michael Mangialardi, Digital Handyman in the New River Valley'
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
          position: 'relative',
          background: '#161616',
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={`${siteUrl}/bg/landscape.jpg`}
          alt=""
          width={1200}
          height={630}
          style={{ position: 'absolute', top: 0, left: 0, objectFit: 'cover' }}
        />
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'center',
            padding: '72px 110px',
            background: 'rgba(12, 11, 10, 0.66)',
          }}
        >
          <div
            style={{
              display: 'flex',
              fontSize: 76,
              fontWeight: 600,
              letterSpacing: '-0.01em',
              color: '#F4F0E8',
            }}
          >
            {siteConfig.name}
          </div>
          <div
            style={{
              display: 'flex',
              marginTop: 28,
              width: 420,
              height: 3,
              background: 'rgba(244, 240, 232, 0.85)',
            }}
          />
          <div
            style={{
              display: 'flex',
              marginTop: 28,
              fontSize: 32,
              lineHeight: 1.35,
              color: '#F4F0E8',
              maxWidth: 900,
            }}
          >
            Digital handyman and experienced software engineer in Virginia&rsquo;s New River
            Valley
          </div>
          <div
            style={{
              display: 'flex',
              marginTop: 32,
              fontSize: 26,
              color: 'rgba(244, 240, 232, 0.8)',
            }}
          >
            {siteConfig.phone} · michaelmang.com
          </div>
        </div>
      </div>
    ),
    { ...size },
  )
}
