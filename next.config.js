/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  trailingSlash: true,
  images: {
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'claude.ai',
      },
    ],
  },
  async redirects() {
    return [
      {
        source: '/servicios',
        destination: '/transporte-de-liquidos',
        permanent: true,
      },
      {
        source: '/servicios/',
        destination: '/transporte-de-liquidos/',
        permanent: true,
      },
      {
        source: '/sobre',
        destination: '/sobre-nosotros',
        permanent: true,
      },
      {
        source: '/sobre/',
        destination: '/sobre-nosotros/',
        permanent: true,
      },
      {
        source: '/cisternas-alimentarias-valencia',
        destination: '/',
        permanent: true,
      },
      // 301 Redirects from old URLs to new -valencia URLs
      {
        source: '/transporte-agua-potable',
        destination: '/transporte-agua-potable-valencia',
        permanent: true,
      },
      {
        source: '/transporte-leche-cisterna',
        destination: '/transporte-leche-cisterna-valencia',
        permanent: true,
      },
      {
        source: '/transporte-aceite-granel',
        destination: '/transporte-aceite-granel-valencia',
        permanent: true,
      },
      {
        source: '/transporte-vino-mosto-granel',
        destination: '/transporte-vino-mosto-valencia',
        permanent: true,
      },
      {
        source: '/transporte-zumos-horchata-jarabes',
        destination: '/transporte-zumos-horchata-valencia',
        permanent: true,
      },
      {
        source: '/transporte-cisterna-isotermica-atp',
        destination: '/transporte-cisterna-isotermica-valencia',
        permanent: true,
      },
      {
        source: '/lavado-cisternas-alimentarias',
        destination: '/lavado-cisternas-alimentarias-valencia',
        permanent: true,
      },
      {
        source: '/llenado-piscinas-camion-cisterna',
        destination: '/llenado-piscinas-camion-cisterna-valencia',
        permanent: true,
      },
      {
        source: '/transporte-liquidos-alimentarios',
        destination: '/transporte-liquidos-alimentarios-valencia',
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
