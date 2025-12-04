import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-neutral-200 flex flex-col items-center justify-center p-8 font-sans">
      <div className="max-w-2xl w-full space-y-12">
        <header className="text-center space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight bg-gradient-to-r from-yellow-400 to-amber-500 bg-clip-text text-transparent">
            dev.kennsr.com
          </h1>
          <p className="text-neutral-400 text-lg">
            Development Directory & Router
          </p>
        </header>

        <section className="grid gap-6">
          <div className="group relative">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-yellow-500 to-amber-500 rounded-xl opacity-20 group-hover:opacity-40 transition duration-500 blur"></div>
            <Link 
              href="/mitraagungsejati"
              className="relative block bg-neutral-900 rounded-xl p-6 border border-neutral-800 hover:border-yellow-500/30 transition duration-300"
            >
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-xl font-semibold text-white mb-2 group-hover:text-yellow-400 transition-colors">
                    Mitra Agung Sejati
                  </h2>
                  <p className="text-neutral-400 text-sm">
                    Client Project • Construction & Engineering
                  </p>
                </div>
                <div className="text-neutral-500 group-hover:text-yellow-400 transition-transform group-hover:translate-x-1">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </div>
              </div>
            </Link>
          </div>

          {/* Placeholder for future projects */}
          {/* 
          <div className="p-6 rounded-xl border border-neutral-800 border-dashed text-center text-neutral-600">
            More projects coming soon...
          </div> 
          */}
        </section>

        <footer className="text-center text-neutral-600 text-sm pt-12">
          <p>&copy; {new Date().getFullYear()} KennSr Development</p>
        </footer>
      </div>
    </main>
  );
}
