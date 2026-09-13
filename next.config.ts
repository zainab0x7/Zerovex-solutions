import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  // Enable React strict mode for better code quality
  reactStrictMode: true,

<<<<<<< HEAD
  // Ignore ESLint during builds due to ESLint 10 CLI options change
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },

=======
>>>>>>> 7c80b813b6ef61376b55c62a47cf9333c9fbe11e
  // Fix workspace root warning
  outputFileTracingRoot: __dirname,

  // Enable image optimization
  images: {
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**.firebaseapp.com',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },

  // SEO: Enable trailing slashes for cleaner URLs
  trailingSlash: false,

  // Production optimizations
  poweredByHeader: false,

  // Headers for security and performance
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'Referrer-Policy',
            value: 'origin-when-cross-origin',
          },
        ],
      },
    ];
  },

  // Redirects for SEO (if needed)
  async redirects() {
    return [
      {
        source: '/home',
        destination: '/',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
