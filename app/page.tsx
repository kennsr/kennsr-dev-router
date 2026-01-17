import Link from "next/link";
import Image from "next/image";

const projects = [
  {
    name: "Mitra Agung Sejati",
    description: "Client Project • Construction & Engineering",
    href: "/mitraagungsejati",
    previewUrl: "https://mitra-catalyst-redesign.vercel.app/mitraagungsejati",
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
];

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-neutral-200 flex flex-col items-center p-8 font-sans">
      <div className="max-w-6xl w-full space-y-12">
        <header className="text-center space-y-6 pt-8">
          <div className="flex justify-center">
            <Image
              src="/site-icon.jpg"
              alt="Landing Murah Logo"
              width={120}
              height={120}
              className="rounded-xl"
            />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-white">
            Landing Murah
          </h1>
          <p className="text-neutral-400 text-lg">
            Affordable Landing Page Solutions
          </p>
        </header>

        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div key={project.href} className="group relative">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-white/10 to-neutral-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition duration-500 blur"></div>
              <div className="relative bg-neutral-900 rounded-2xl border border-neutral-800 group-hover:border-white/20 transition duration-300 overflow-hidden">
                {/* Iframe Preview */}
                <div className="relative w-full aspect-[16/10] bg-neutral-950 overflow-hidden">
                  <iframe
                    src={project.previewUrl}
                    className="w-[400%] h-[400%] origin-top-left scale-[0.25] pointer-events-none"
                    title={`${project.name} Preview`}
                    loading="lazy"
                  />
                  {/* Overlay for click */}
                  <Link
                    href={project.href}
                    className="absolute inset-0 bg-transparent hover:bg-white/5 transition-colors flex items-center justify-center"
                  >
                    <span className="opacity-0 group-hover:opacity-100 transition-opacity bg-white text-black px-4 py-2 rounded-full text-sm font-medium">
                      View Project →
                    </span>
                  </Link>
                </div>

                {/* Project Info */}
                <div className="p-5">
                  <h2 className="text-lg font-semibold text-white mb-1 group-hover:text-neutral-300 transition-colors">
                    {project.name}
                  </h2>
                  <p className="text-neutral-500 text-sm">
                    {project.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </section>

        <footer className="text-center text-neutral-600 text-sm pt-12 pb-8">
          <p>&copy; {new Date().getFullYear()} Landing Murah</p>
        </footer>
      </div>
    </main>
  );
}
