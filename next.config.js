/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
    domains: ['pbs.twimg.com', 'i.redd.it', 'imgur.com'],
  },
}

module.exports = nextConfig
