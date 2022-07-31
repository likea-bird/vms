/** @type {import('next').NextConfig} */
const withPWA = require('next-pwa')

const nextConfig = withPWA({
  reactStrictMode: true,
  pwa: {
    dest: 'public',
    disable: false,
  }
})

module.exports = nextConfig
