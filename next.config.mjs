/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: false,
  },
}

/** @type {import('next').NextConfig} */
const config = {
  ...nextConfig,
  images: {
    ...(nextConfig?.images || {}),
    unoptimized: false,
    remotePatterns: [
      ...((nextConfig?.images?.remotePatterns) || []),
      {
        protocol: 'https',
        hostname: 'scdn.line-apps.com'
      }
    ]
  }
}

export default config
