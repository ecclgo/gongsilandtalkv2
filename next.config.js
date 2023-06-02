const withImages = require('next-images');

/** @type {import('next').NextConfig} */
const nextConfig = {
  compiler: {
    styledComponents: true,
  },
  images: {
    domains: ['m.post.naver.com', 'm.blog.naver.com', 'i2.ruliweb.com'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'm.post.naver.com'
      }
    ]
  },
  webpack: (config) => {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack']
    });
    return config;
  },
  // reactStrictMode: true,
};

module.exports = nextConfig

module.exports = nextConfig
