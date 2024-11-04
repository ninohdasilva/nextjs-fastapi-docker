/** @type {import('next').NextConfig} */
const nextConfig = {
    // Required for Docker setup
    output: 'standalone',
    // Required because we're running behind a proxy
    experimental: {
      serverActions: true,
    },
}

export default nextConfig;
