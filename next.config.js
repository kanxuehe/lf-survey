/** @type {import('next').NextConfig} */
const nextConfig = {
  // output: 'export',
  output: 'standalone',
  env: {},
  reactStrictMode: true,
  swcMinify: true,
  eslint: {
    dirs: ['app'],
  },
  images: {
    unoptimized: true,
    // domains: ['static.wixstatic.com', 'assets.zyrosite.com'],
    formats: ['image/webp'],
  },
};

module.exports = nextConfig;
