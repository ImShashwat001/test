/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    appDir: true
  },
  images: {

    domains: ["cdn.sanity.io"],
    // remotePatterns: [
    //   {
    //     // protocol: 'https',
    //     // hostname: 'sanity.io',
    //     // port: '3000',
    //     // pathname: '/',
        
    //   }
    // ]
  }
}

module.exports = nextConfig
