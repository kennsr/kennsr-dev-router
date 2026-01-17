/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: "/mitraagungsejati",
        destination:
          "https://mitra-catalyst-redesign.vercel.app/mitraagungsejati",
      },
      {
        source: "/mitraagungsejati/:path*",
        destination:
          "https://mitra-catalyst-redesign.vercel.app/mitraagungsejati/:path*",
      },
      {
        source: "/jagoanhelm",
        destination: "https://jagoan-helm.vercel.app/jagoanhelm",
      },
      {
        source: "/jagoanhelm/:path*",
        destination: "https://jagoan-helm.vercel.app/jagoanhelm/:path*",
      },
      {
        source: "/auraglassos",
        destination: "https://aura-glass-os.vercel.app/",
      },
      {
        source: "/auraglassos/:path*",
        destination: "https://aura-glass-os.vercel.app/:path*",
      },
    ];
  },
};

export default nextConfig;
