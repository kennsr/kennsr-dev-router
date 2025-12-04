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
    ];
  },
};

export default nextConfig;
