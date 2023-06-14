/** @type {import('next').NextConfig} */
module.exports = {
  experimental: {
    appDir: false,
  },
  images: {
    unoptimized: true,
  },
  // other configuration
  output: 'standalone',

  trailingSlash: true,
};
