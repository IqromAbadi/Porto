/** @type {import('next').NextConfig} */
const repoName = 'Porto.git';

const nextConfig = {
  output: 'export',

  images: {
    unoptimized: true,
    formats: ['image/avif', 'image/webp'],
  },

  basePath:
    process.env.NODE_ENV === 'production'
      ? `/${repoName}`
      : '',

  assetPrefix:
    process.env.NODE_ENV === 'production'
      ? `/${repoName}/`
      : '',
};

module.exports = nextConfig;