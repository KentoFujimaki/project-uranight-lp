/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
}

/** @type {import('next').NextConfig} */
const config = {
  ...nextConfig,
  images: {
    ...(nextConfig?.images || {}),
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
