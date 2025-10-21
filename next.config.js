/** @type {import('next').NextConfig} */
const nextConfig = {
  async headers() {
    return [{
      source: '/:path*',
      headers: [
        { key: 'Content-Security-Policy',
          value: 'frame-ancestors https://sites.google.com https://*.google.com https://*.googleusercontent.com;' }
      ]
    }]
  }
}
module.exports = nextConfig
