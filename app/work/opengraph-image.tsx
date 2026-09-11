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
          background: '#161616',
          padding: '72px 80px',
        }}
      >
        <div
          style={{
            display: 'flex',
            fontSize: 64,
            fontWeight: 600,
            lineHeight: 1.25,
            color: '#EDEAE6',
            letterSpacing: '-0.02em',
            maxWidth: 980,
          }}
        >
          Work
        </div>
        <div
          style={{
            display: 'flex',
            marginTop: 36,
            fontSize: 26,
            color: '#A09B95',
          }}
        >
          Monergism eBook Library and Kalam
        </div>
        <div
          style={{
            display: 'flex',
            marginTop: 40,
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
