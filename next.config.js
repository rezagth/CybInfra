/** @type {import('next').NextConfig} */
const nextConfig = {
  // output: 'export', // Commented out to enable Image Optimization
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.pexels.com',
        port: '',
        pathname: '/photos/**',
      },
    ],
  },
};

module.exports = nextConfig;
