/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: [],
  },
  async redirects() {
    return [
      // Redirect common typos or old URLs to correct pages
      {
        source: '/tool/:slug',
        destination: '/tools/:slug',
        permanent: true,
      },
      {
        source: '/json',
        destination: '/tools/json-formatter',
        permanent: true,
      },
      {
        source: '/regex',
        destination: '/tools/regex-tester',
        permanent: true,
      },
      {
        source: '/base64',
        destination: '/tools/base64-encoder',
        permanent: true,
      },
      {
        source: '/jwt',
        destination: '/tools/jwt-decoder',
        permanent: true,
      },
      {
        source: '/url',
        destination: '/tools/url-encoder',
        permanent: true,
      },
      {
        source: '/timestamp',
        destination: '/tools/timestamp-converter',
        permanent: true,
      },
    ];
  },
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          {
            key: "X-DNS-Prefetch-Control",
            value: "on"
          },
          {
            key: "X-Frame-Options",
            value: "SAMEORIGIN"
          },
          {
            key: "X-Content-Type-Options",
            value: "nosniff"
          },
          {
            key: "X-XSS-Protection",
            value: "1; mode=block"
          },
          {
            key: "Referrer-Policy",
            value: "origin-when-cross-origin"
          },
        ],
      },
    ];
  },
};

module.exports = nextConfig;
