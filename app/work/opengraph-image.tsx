import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const alt = 'Work by Michael Mangialardi'
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
          Selected work · Roanoke, Virginia
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
          Products I have built.
        </div>
        <div
          style={{
            display: 'flex',
            marginTop: 36,
            fontSize: 26,
            color: '#57534E',
          }}
        >
          Monergism eBook Library and Kalam
        </div>
      </div>
    ),
    { ...size },
  )
}
