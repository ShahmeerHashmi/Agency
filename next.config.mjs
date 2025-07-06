import { withPayload } from '@payloadcms/next/withPayload'

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['images.unsplash.com', 'res.cloudinary.com'],
  },
  // Your Next.js config here
}

export default withPayload(nextConfig, { devBundleServerPackages: false })
