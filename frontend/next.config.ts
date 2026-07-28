import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'localhost',
        port: '8000',
        pathname: '/media/**',
      },
      // Alternative: allow any localhost port
      {
        protocol: 'http',
        hostname: 'localhost',
        port: '',
        pathname: '/media/**',
      },
      // For production
      // {
      //   protocol: 'https',
      //   hostname: 'your-domain.com',
      //   port: '',
      //   pathname: '/media/**',
      // },
    ],
  },
};

export default nextConfig;
