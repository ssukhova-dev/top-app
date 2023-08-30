/** @type {import('next').NextConfig} */

module.exports = {
  images: { 
    domains: ['courses-top.ru'],
    unoptimized: true,
  },
  webpack: (config) => {
    config.module.rules.push({
      test: /\.svg$/i,
      use: ['@svgr/webpack'],
    });
    return config;
  },
};
