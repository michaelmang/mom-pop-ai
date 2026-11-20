/** @type {import('next').NextConfig} */
// The project pages under /work were retired; send old links to the homepage's
// work section. Listed one by one so /work/*.png screenshots keep serving.
const retiredWorkPaths = [
  '/work',
  '/work/monergism-ebook-library',
  '/work/theology-witness',
  '/work/kalam',
]

const nextConfig = {
  async redirects() {
    return retiredWorkPaths.map((source) => ({
      source,
      destination: '/#work',
      permanent: true,
    }))
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'covers.openlibrary.org',
        pathname: '/b/**',
      },
    ],
  },
}

export default nextConfig
