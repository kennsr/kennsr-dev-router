import Link from "next/link";
import Image from "next/image";
import Script from "next/script";

const projects = [
  {
    name: "Mitra Cahaya Agung",
    description: "Client Project • Construction & Engineering",
    href: "/mitracahayaagung",
    accentFrom: "from-blue-600",
    accentTo: "to-cyan-400",
    image: "/sites/mitra-cahaya-agung.png",
  },
  {
    name: "Jagoan Helm Jakarta",
    description: "Client Project • Helmet Retail",
    href: "/jagoanhelm",
    accentFrom: "from-orange-500",
    accentTo: "to-red-500",
    image: "/sites/helm-hero.png",
  },
  {
    name: "Aura Glass OS",
    description: "Personal Project • UI/UX Experiment",
    href: "/auraglassos",
    accentFrom: "from-violet-500",
    accentTo: "to-fuchsia-500",
    image: "/sites/aura-glass.png",
  },
  {
    name: "Lavantgarde",
    description: "Client Project • Fashion & Lifestyle",
    href: "/lavantgarde",
    accentFrom: "from-rose-400",
    accentTo: "to-pink-600",
    image: "/sites/lavant-garde.png",
  },
  {
    name: "Lumina Mind Wellness",
    description: "Client Project • Health & Wellness",
    href: "/lumina-mind-wellness",
    accentFrom: "from-emerald-400",
    accentTo: "to-teal-500",
    image: "/sites/lumina-mind-wellness.png",
  },
  {
    name: "Zenith Vista",
    description: "Client Project • Business & Technology",
    href: "/zenith-vista",
    accentFrom: "from-indigo-500",
    accentTo: "to-blue-600",
    image: "/sites/zenith-vista.png",
  },
];

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Berlanding",
    url: "https://berlanding.vercel.app",
    logo: "https://berlanding.vercel.app/site-icon.png",
    description:
      "Affordable, high-conversion landing page solutions crafted for modern brands.",
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "customer service",
      url: "https://instagram.com/landing.murah",
    },
    sameAs: ["https://instagram.com/landing.murah"],
  };

  return (
    <>
      <Script
        id="organization-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <main className="min-h-screen bg-[#030303] text-neutral-200 flex flex-col items-center px-6 py-12 md:px-12 md:py-20 font-sans relative overflow-hidden selection:bg-white/20">
        {/* Dynamic Abstract Background Layer */}
        <div className="fixed inset-0 w-full h-full pointer-events-none z-0">
          {/* Subtle grid base */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_0%,#000_70%,transparent_100%)] opacity-30"></div>

          {/* Animated Orbs */}
          <div className="absolute top-[-20%] left-[-10%] w-[800px] h-[800px] bg-gradient-to-br from-indigo-900/20 to-transparent rounded-full filter blur-[100px] animate-blob"></div>
          <div className="absolute top-[10%] right-[-15%] w-[600px] h-[600px] bg-gradient-to-bl from-purple-900/20 to-transparent rounded-full filter blur-[100px] animate-blob-bounce animation-delay-2000"></div>
          <div className="absolute bottom-[-30%] left-[20%] w-[700px] h-[700px] bg-gradient-to-tr from-cyan-900/10 to-transparent rounded-full filter blur-[120px] animate-blob animation-delay-4000"></div>

          {/* Center ambient glow */}
          <div className="absolute top-[30%] left-[50%] -translate-x-1/2 w-[1000px] h-[1000px] bg-gradient-radial from-violet-900/10 via-transparent to-transparent rounded-full filter blur-[150px] animate-glow-pulse"></div>

          {/* Noise overlay for texture */}
          <div className="absolute inset-0 bg-[url('/noise.png')] opacity-[0.02] mix-blend-overlay"></div>
        </div>

        <div className="max-w-[1400px] w-full space-y-24 md:space-y-32 relative z-10">
          {/* HERO SECTION */}
          <header className="text-center space-y-10 pt-16 md:pt-24 min-h-[70vh] flex flex-col items-center justify-center animate-fade-in relative">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-radial from-purple-500/5 via-transparent to-transparent -z-10"></div>

            <div className="relative group inline-block animate-slide-up">
              <div className="absolute -inset-1 bg-gradient-to-r from-violet-600 to-fuchsia-600 rounded-[2rem] blur-xl opacity-30 group-hover:opacity-60 transition duration-700"></div>
              <Image
                src="/site-icon.png"
                alt="Berlanding Logo"
                width={120}
                height={120}
                className="relative rounded-3xl shadow-2xl shadow-black/80 ring-1 ring-white/10"
                priority
              />
            </div>

            <div className="space-y-6 max-w-4xl mx-auto animate-slide-up animation-delay-2000">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-neutral-300 mb-4 backdrop-blur-md">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                Available for new projects
              </div>
              <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold tracking-tighter text-white">
                Berlanding
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-fuchsia-400">
                  .
                </span>
              </h1>
              <p className="text-neutral-400 text-xl md:text-2xl font-light tracking-wide max-w-2xl mx-auto leading-relaxed">
                Elevate your digital presence with premium, high-conversion
                landing page solutions.
              </p>
            </div>

            {/* Metrics */}
            <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16 pt-10 animate-slide-up animation-delay-4000">
              <div className="flex flex-col items-center group">
                <div className="text-3xl md:text-4xl font-bold bg-gradient-to-br from-white to-neutral-500 bg-clip-text text-transparent group-hover:scale-110 transition-transform">
                  {projects.length}+
                </div>
                <div className="text-xs text-neutral-500 uppercase tracking-[0.2em] mt-2 font-medium">
                  Projects
                </div>
              </div>
              <div className="w-px h-12 bg-gradient-to-b from-transparent via-white/10 to-transparent"></div>
              <div className="flex flex-col items-center group">
                <div className="text-3xl md:text-4xl font-bold bg-gradient-to-br from-white to-neutral-500 bg-clip-text text-transparent group-hover:scale-110 transition-transform">
                  100<span className="text-violet-400 text-2xl">%</span>
                </div>
                <div className="text-xs text-neutral-500 uppercase tracking-[0.2em] mt-2 font-medium">
                  Satisfaction
                </div>
              </div>
              <div className="w-px h-12 bg-gradient-to-b from-transparent via-white/10 to-transparent hidden md:block"></div>
              <div className="flex flex-col items-center group hidden md:flex">
                <div className="text-3xl md:text-4xl font-bold bg-gradient-to-br from-white to-neutral-500 bg-clip-text text-transparent group-hover:scale-110 transition-transform">
                  ⚡️
                </div>
                <div className="text-xs text-neutral-500 uppercase tracking-[0.2em] mt-2 font-medium">
                  Lightning Fast
                </div>
              </div>
            </div>

            {/* Scroll Indicator */}
            <div className="absolute -bottom-20 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50 animate-bounce">
              <span className="text-[10px] uppercase tracking-widest text-neutral-400">
                Scroll
              </span>
              <div className="w-px h-8 bg-gradient-to-b from-white to-transparent"></div>
            </div>
          </header>

          {/* PORTFOLIO SECTION */}
          <section className="space-y-16 relative">
            {/* Section Divider */}
            <div className="flex items-center gap-6 opacity-80">
              <div className="h-px flex-1 bg-gradient-to-r from-transparent via-white/10 to-white/5"></div>
              <h2 className="text-sm font-medium text-white uppercase tracking-[0.3em] flex items-center gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-violet-500"></span>
                Selected Work
              </h2>
              <div className="h-px flex-1 bg-gradient-to-l from-transparent via-white/10 to-white/5"></div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
              {projects.map((project, index) => (
                <Link
                  key={project.href}
                  href={project.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative block animate-slide-up"
                  style={{
                    animationDelay: `${index * 150}ms`,
                    animationFillMode: "both",
                  }}
                >
                  <div className="absolute -inset-0.5 bg-gradient-to-br from-white/10 to-white/0 rounded-[2.5rem] opacity-0 group-hover:opacity-100 transition duration-700 blur-sm mix-blend-overlay"></div>

                  <div className="glass-card rounded-[2.5rem] p-2 relative transition-all duration-700 overflow-hidden transform group-hover:-translate-y-2">
                    {/* Visual Mockup Container replacing iframe */}
                    <div className="relative w-full aspect-[16/10] bg-neutral-950 rounded-[2rem] overflow-hidden">
                      {/* Real site image */}
                      <div className="absolute inset-0 bg-neutral-900">
                        <Image
                          src={project.image}
                          alt={`${project.name} Preview`}
                          fill
                          className="object-cover object-top opacity-70 group-hover:opacity-100 transition-all duration-700 group-hover:scale-105"
                        />
                      </div>

                      {/* Dark overlay for better text contrast/blend */}
                      <div className="absolute inset-0 bg-neutral-900/20 group-hover:bg-transparent transition-colors duration-500"></div>

                      {/* Hover Overlay Content */}
                      <div className="absolute inset-0 bg-black/40 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center pointer-events-none">
                        <div className="translate-y-8 group-hover:translate-y-0 transition-all duration-500 ease-out">
                          <div className="px-8 py-4 bg-white text-black rounded-full font-bold tracking-wide text-sm flex items-center gap-3 shadow-2xl">
                            Explore Case
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                              className="w-4 h-4"
                            >
                              <path
                                fillRule="evenodd"
                                d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                                clipRule="evenodd"
                              />
                            </svg>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Meta Info */}
                    <div className="px-6 py-8 flex justify-between items-end relative z-10">
                      <div className="space-y-3 relative">
                        {/* Accent detail line */}
                        <div
                          className={`h-0.5 w-12 rounded-full bg-gradient-to-r ${project.accentFrom} ${project.accentTo} group-hover:w-24 transition-all duration-500`}
                        ></div>
                        <h3 className="text-2xl font-bold text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-white/50 transition-all">
                          {project.name}
                        </h3>
                        <p className="text-neutral-500 text-sm font-medium tracking-wide">
                          {project.description}
                        </p>
                      </div>

                      <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-white group-hover:border-transparent group-hover:text-black transition-all duration-500 rotate-0 group-hover:rotate-45">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={2}
                          stroke="currentColor"
                          className="w-5 h-5"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </section>

          {/* CTA SECTION */}
          <section className="relative py-24 px-6 md:px-12 rounded-[3rem] overflow-hidden border border-white/5 bg-white/[0.02]">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-violet-900/10"></div>
            <div className="absolute top-0 right-0 w-96 h-96 bg-fuchsia-600/10 blur-[120px] rounded-full"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-violet-600/10 blur-[120px] rounded-full"></div>

            <div className="relative z-10 text-center max-w-3xl mx-auto space-y-10">
              <div className="space-y-6">
                <h3 className="text-4xl md:text-6xl font-bold text-white tracking-tight">
                  Stop blending in.
                  <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-fuchsia-400">
                    Start converting.
                  </span>
                </h3>
                <p className="text-neutral-400 text-lg md:text-xl font-light">
                  Let&apos;s craft an unforgettable digital experience for your
                  brand. Reach out for a complimentary consultation.
                </p>
              </div>

              <a
                href="https://instagram.com/landing.murah"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative inline-flex items-center gap-4 px-10 py-5 bg-white text-black rounded-full font-bold text-lg overflow-hidden transition-transform hover:scale-105"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-neutral-200 to-white opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="absolute inset-0 bg-[linear-gradient(110deg,transparent,45%,rgba(255,255,255,0.8),55%,transparent)] bg-[length:200%_100%] animate-[shine_2s_infinite] opacity-0 group-hover:opacity-100"></div>

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-6 h-6 relative z-10 text-violet-600 group-hover:scale-110 transition-transform"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                </svg>
                <span className="relative z-10 tracking-wide">
                  Connect on Instagram
                </span>
              </a>
            </div>
          </section>

          {/* FOOTER */}
          <footer className="flex flex-col md:flex-row items-center justify-between py-8 border-t border-white/5 text-sm text-neutral-500 font-medium">
            <p>&copy; {new Date().getFullYear()} Berlanding Solutions.</p>
            <div className="flex gap-6 mt-4 md:mt-0">
              <Link href="#" className="hover:text-white transition-colors">
                Privacy
              </Link>
              <Link href="#" className="hover:text-white transition-colors">
                Terms
              </Link>
              <Link href="#" className="hover:text-white transition-colors">
                Contact
              </Link>
            </div>
          </footer>
        </div>
      </main>
    </>
  );
}
