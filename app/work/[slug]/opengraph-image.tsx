import { ImageResponse } from 'next/og'
import { getProject } from '@/lib/site'

export const runtime = 'edge'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default async function Image({ params }: { params: { slug: string } }) {
  const project = getProject(params.slug)
  const title = project?.name ?? 'Work'
  const subtitle = project?.platforms ?? 'Michael Mangialardi'

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
            fontSize: 20,
            fontWeight: 600,
            letterSpacing: '0.14em',
            textTransform: 'uppercase',
            color: '#A09B95',
            marginBottom: 28,
          }}
        >
          {subtitle}
        </div>
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
          {title}
        </div>
        <div
          style={{
            display: 'flex',
            marginTop: 36,
            fontSize: 22,
            color: '#E25A9A',
            fontWeight: 600,
          }}
        >
          Michael Mangialardi
        </div>
      </div>
    ),
    { ...size },
  )
}
