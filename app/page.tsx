import Link from "next/link";
import Image from "next/image";

const projects = [
  {
    name: "Mitra Cahaya Agung",
    description: "Client Project • Construction & Engineering",
    href: "/mitracahayaagung",
    previewUrl: "https://mitra-catalyst-redesign.vercel.app/mitracahayaagung",
  },
  {
    name: "Jagoan Helm Jakarta",
    description: "Client Project • Helmet Retail",
    href: "/jagoanhelm",
    previewUrl: "https://jagoan-helm.vercel.app/jagoanhelm",
  },
  {
    name: "Aura Glass OS",
    description: "Personal Project • UI/UX Experiment",
    href: "/auraglassos",
    previewUrl: "/auraglassos",
  },
  {
    name: "Lavantgarde",
    description: "Client Project • Fashion & Lifestyle",
    href: "/lavantgarde",
    previewUrl: "/lavantgarde",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-neutral-200 flex flex-col items-center px-6 py-12 md:px-12 md:py-16 font-sans relative overflow-hidden">
      {/* Cinematic Background */}
      <div className="fixed inset-0 w-full h-full pointer-events-none">
        {/* Gradient orbs */}
        <div className="absolute top-[-20%] left-[-10%] w-[800px] h-[800px] bg-gradient-to-br from-neutral-800/40 to-transparent rounded-full filter blur-[120px] animate-blob"></div>
        <div className="absolute top-[10%] right-[-15%] w-[600px] h-[600px] bg-gradient-to-bl from-neutral-700/30 to-transparent rounded-full filter blur-[100px] animate-blob-bounce animation-delay-2000"></div>
        <div className="absolute bottom-[-30%] left-[20%] w-[700px] h-[700px] bg-gradient-to-tr from-neutral-800/30 to-transparent rounded-full filter blur-[120px] animate-blob animation-delay-4000"></div>
        <div className="absolute top-[40%] left-[50%] -translate-x-1/2 w-[1000px] h-[1000px] bg-gradient-radial from-neutral-900/50 to-transparent rounded-full filter blur-[150px] animate-blob-bounce animation-delay-6000"></div>

        {/* Subtle grid overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:60px_60px]"></div>

        {/* Noise texture */}
        <div className="absolute inset-0 bg-[url('/noise.png')] opacity-[0.03] mix-blend-overlay"></div>

        {/* Top fade gradient */}
        <div className="absolute top-0 left-0 right-0 h-40 bg-gradient-to-b from-black via-black/80 to-transparent"></div>
      </div>

      <div className="max-w-7xl w-full space-y-16 relative z-10">
        {/* Header */}
        <header className="text-center space-y-8 pt-8 md:pt-12">
          <div className="flex justify-center">
            <div className="relative group">
              {/* Glow effect */}
              <div className="absolute -inset-4 bg-white/10 rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              <Image
                src="/site-icon.png"
                alt="Landing Murah Logo"
                width={140}
                height={140}
                className="relative rounded-2xl shadow-2xl shadow-black/50 ring-1 ring-white/10"
              />
            </div>
          </div>

          <div className="space-y-4">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white">
              Landing Murah
            </h1>
            <p className="text-neutral-400 text-lg md:text-xl font-light tracking-wide max-w-md mx-auto">
              Affordable Landing Page Solutions
            </p>
          </div>

          {/* Stats/Trust badges */}
          <div className="flex items-center justify-center gap-8 pt-4">
            <div className="text-center">
              <div className="text-2xl font-bold text-white">
                {projects.length}+
              </div>
              <div className="text-xs text-neutral-500 uppercase tracking-widest">
                Projects
              </div>
            </div>
            <div className="w-px h-8 bg-neutral-800"></div>
            <div className="text-center">
              <div className="text-2xl font-bold text-white">100%</div>
              <div className="text-xs text-neutral-500 uppercase tracking-widest">
                Satisfaction
              </div>
            </div>
            <div className="w-px h-8 bg-neutral-800"></div>
            <div className="text-center">
              <div className="text-2xl font-bold text-white">Fast</div>
              <div className="text-xs text-neutral-500 uppercase tracking-widest">
                Delivery
              </div>
            </div>
          </div>
        </header>

        {/* Section Title */}
        <div className="flex items-center gap-4">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-neutral-800 to-transparent"></div>
          <h2 className="text-sm font-medium text-neutral-500 uppercase tracking-[0.2em]">
            Our Work
          </h2>
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-neutral-800 to-transparent"></div>
        </div>

        {/* Projects Grid */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {projects.map((project, index) => (
            <Link
              key={project.href}
              href={project.href}
              className="group relative block"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Card glow on hover */}
              <div className="absolute -inset-px bg-gradient-to-r from-white/20 via-white/5 to-white/20 rounded-3xl opacity-0 group-hover:opacity-100 transition-all duration-500 blur-sm"></div>

              {/* Card */}
              <div className="relative bg-neutral-900/80 backdrop-blur-xl rounded-3xl border border-neutral-800/80 group-hover:border-neutral-700/80 transition-all duration-500 overflow-hidden">
                {/* Preview Container */}
                <div className="relative w-full aspect-[16/9] bg-neutral-950 overflow-hidden">
                  {/* Iframe */}
                  <iframe
                    src={project.previewUrl}
                    className="w-[400%] h-[400%] origin-top-left scale-[0.25] pointer-events-none"
                    title={`${project.name} Preview`}
                    loading="lazy"
                  />

                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 via-transparent to-transparent opacity-60"></div>

                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                    <div className="opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                      <span className="inline-flex items-center gap-2 bg-white text-black px-6 py-3 rounded-full text-sm font-semibold shadow-xl">
                        View Project
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={2.5}
                          stroke="currentColor"
                          className="w-4 h-4"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"
                          />
                        </svg>
                      </span>
                    </div>
                  </div>
                </div>

                {/* Project Info */}
                <div className="p-6 space-y-2">
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl font-semibold text-white group-hover:text-neutral-100 transition-colors">
                      {project.name}
                    </h3>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={2}
                      stroke="currentColor"
                      className="w-5 h-5 text-neutral-600 group-hover:text-white group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
                      />
                    </svg>
                  </div>
                  <p className="text-neutral-500 text-sm font-medium">
                    {project.description}
                  </p>
                </div>

                {/* Bottom accent line */}
                <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
            </Link>
          ))}
        </section>

        {/* CTA Section */}
        <section className="text-center py-12 space-y-8">
          <div className="space-y-4">
            <h3 className="text-2xl md:text-3xl font-bold text-white">
              Ready to start your project?
            </h3>
            <p className="text-neutral-400 max-w-md mx-auto">
              Get in touch with us on Instagram for a free consultation.
            </p>
          </div>

          <a
            href="https://instagram.com/landing.murah"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-3 px-8 py-4 bg-white text-black rounded-full font-semibold text-lg hover:bg-neutral-100 hover:scale-105 active:scale-100 transition-all duration-300 shadow-xl shadow-white/10"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-6 h-6"
            >
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
            </svg>
            <span>@landing.murah</span>
            <span className="text-neutral-400 group-hover:translate-x-1 transition-transform">
              →
            </span>
          </a>
        </section>

        {/* Footer */}
        <footer className="text-center text-neutral-600 text-sm py-8 border-t border-neutral-900">
          <p>
            &copy; {new Date().getFullYear()} Landing Murah. All rights
            reserved.
          </p>
        </footer>
      </div>
    </main>
  );
}
