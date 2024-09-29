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
    // unoptimized: true, // 当为true时，源图像将按原样提供，而不会更改质量、大小或格式
    domains: [
      'tuantuan-shop.s3.ap-northeast-1.amazonaws.com',
      'tuantuan-station.s3.ap-northeast-1.amazonaws.com',
    ],
    formats: ['image/webp'],
  },
};

module.exports = nextConfig;
