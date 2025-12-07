/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: '/mitraagungsejati',
        destination: 'https://mitra-catalyst-redesign.vercel.app/mitraagungsejati',
      },
      {
        source: '/mitraagungsejati/:path*',
        destination: 'https://mitra-catalyst-redesign.vercel.app/mitraagungsejati/:path*',
      },
      {
        source: '/jagoanhelm',
        destination: 'https://jagoan-helm.vercel.app/jagoanhelm',
      },
      {
        source: '/jagoanhelm/:path*',
        destination: 'https://jagoan-helm.vercel.app/jagoanhelm/:path*',
      },
    ];
  },
};

export default nextConfig;
