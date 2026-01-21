/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: "/mitracahayaagung",
        destination:
          "https://mitra-catalyst-redesign.vercel.app/mitracahayaagung",
      },
      {
        source: "/mitracahayaagung/:path*",
        destination:
          "https://mitra-catalyst-redesign.vercel.app/mitracahayaagung/:path*",
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
      {
        source: "/lavantgarde",
        destination: "https://heritage-future-luxury.vercel.app/lavantgarde",
      },
      {
        source: "/lavantgarde/:path*",
        destination:
          "https://heritage-future-luxury.vercel.app/lavantgarde/:path*",
      },
      {
        source: "/lumina-mind-wellness",
        destination:
          "https://lumina-mind-wellness.vercel.app/lumina-mind-wellness",
      },
      {
        source: "/lumina-mind-wellness/:path*",
        destination:
          "https://lumina-mind-wellness.vercel.app/lumina-mind-wellness/:path*",
      },
      {
        source: "/zenith-vista",
        destination: "https://zenith-vista.vercel.app/",
      },
      {
        source: "/zenith-vista/:path*",
        destination: "https://zenith-vista.vercel.app/:path*",
      },
    ];
  },
};

export default nextConfig;
