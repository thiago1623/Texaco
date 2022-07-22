/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  env: {
    customKey: 'https://1jn3kg5xe5.execute-api.us-east-1.amazonaws.com/dev',
  },
}

module.exports = nextConfig
