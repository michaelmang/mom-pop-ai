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
            padding: '72px 90px',
            background: 'rgba(12, 11, 10, 0.68)',
          }}
        >
          <div
            style={{
              display: 'flex',
              fontSize: 22,
              fontWeight: 600,
              letterSpacing: '0.16em',
              textTransform: 'uppercase',
              color: '#C4A574',
            }}
          >
            Digital Handyman · New River Valley, Virginia
          </div>
          <div
            style={{
              display: 'flex',
              marginTop: 30,
              fontSize: 66,
              fontWeight: 600,
              lineHeight: 1.18,
              letterSpacing: '-0.02em',
              color: '#F4F0E8',
            }}
          >
            From quick fixes to custom software.
          </div>
          <div
            style={{
              display: 'flex',
              marginTop: 30,
              fontSize: 26,
              lineHeight: 1.45,
              color: 'rgba(244, 240, 232, 0.78)',
              maxWidth: 940,
            }}
          >
            Websites, Google listings, SEO, ads, and print for local businesses, plus custom
            apps, automation, and AI integrations for clients anywhere.
          </div>
          <div
            style={{
              display: 'flex',
              marginTop: 44,
              fontSize: 24,
              fontWeight: 600,
              color: '#C4A574',
            }}
          >
            {siteConfig.name} · {siteConfig.phone}
          </div>
        </div>
      </div>
    ),
    { ...size },
  )
}
