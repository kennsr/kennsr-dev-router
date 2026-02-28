"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

export default function PricingStory() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = 3;

  // Auto advance slides (optional, standard IG story duration is ~15s for static)
  // useEffect(() => {
  //   const timer = setInterval(() => {
  //     setCurrentSlide((prev) => (prev + 1) % totalSlides);
  //   }, 15000);
  //   return () => clearInterval(timer);
  // }, []);

  const handleNext = () => {
    if (currentSlide < totalSlides - 1) setCurrentSlide(currentSlide + 1);
  };

  const handlePrev = () => {
    if (currentSlide > 0) setCurrentSlide(currentSlide - 1);
  };

  return (
    <div className="w-full h-full relative flex flex-col items-center justify-between py-16 px-8 text-white overflow-hidden selection:bg-white/20">
      {/* IG Story Progress Bars */}
      <div className="absolute top-4 left-4 right-4 flex gap-2 z-50">
        {Array.from({ length: totalSlides }).map((_, i) => (
          <div
            key={i}
            className="h-1 flex-1 bg-white/30 rounded-full overflow-hidden"
          >
            <div
              className={[
                "h-full bg-white transition-all duration-300",
                i < currentSlide
                  ? "w-full"
                  : i === currentSlide
                    ? "w-full animate-[progress_15s_linear_forwards]"
                    : "w-0",
              ]
                .filter(Boolean)
                .join(" ")}
              style={{
                width:
                  i < currentSlide ? "100%" : i > currentSlide ? "0%" : "100%",
                // Use a simple CSS animation if we want it to auto fill, or static for screenshots
                // animationPlayState: i === currentSlide ? 'running' : 'paused'
              }}
            ></div>
          </div>
        ))}
      </div>

      {/* Invisible tappable zones for navigation */}
      <div
        className="absolute inset-y-0 left-0 w-1/3 z-40 cursor-pointer"
        onClick={handlePrev}
      ></div>
      <div
        className="absolute inset-y-0 right-0 w-2/3 z-40 cursor-pointer"
        onClick={handleNext}
      ></div>

      {/* Abstract Background for Story */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute inset-0 bg-[#030303]"></div>
        {/* Subtle grid base */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px] opacity-40"></div>

        {/* Dynamic Orbs based on slide */}
        <div
          className={[
            "absolute -top-32 -left-32 w-96 h-96 rounded-full blur-[120px] transition-colors duration-1000 animate-blob",
            currentSlide === 0
              ? "bg-fuchsia-600/50"
              : currentSlide === 1
                ? "bg-orange-500/40"
                : "bg-emerald-500/40",
          ].join(" ")}
        ></div>
        <div
          className={[
            "absolute bottom-1/4 -right-32 w-80 h-80 rounded-full blur-[100px] transition-colors duration-1000 animate-blob-bounce",
            currentSlide === 0
              ? "bg-violet-600/50"
              : currentSlide === 1
                ? "bg-rose-500/40"
                : "bg-teal-500/40",
          ].join(" ")}
        ></div>
        <div
          className={[
            "absolute top-1/4 right-0 w-64 h-64 rounded-full blur-[90px] transition-colors duration-1000 animate-pulse",
            currentSlide === 0
              ? "bg-indigo-500/30"
              : currentSlide === 1
                ? "bg-yellow-500/20"
                : "bg-cyan-500/30",
          ].join(" ")}
        ></div>

        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-radial from-transparent via-[#030303]/90 to-[#030303]"></div>
        {/* Noise overlay for texture */}
        <div className="absolute inset-0 bg-[url('/noise.png')] opacity-[0.04] mix-blend-overlay"></div>
      </div>

      {/* Top Brand Header */}
      <div className="absolute top-12 left-0 right-0 flex justify-center items-center z-10">
        <div className="px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/10 flex items-center gap-2">
          <Image
            src="/site-icon.png"
            width={16}
            height={16}
            alt="Icon"
            className="rounded-md"
          />
          <span className="text-xs font-semibold tracking-wider text-neutral-300">
            BERLANDING
          </span>
        </div>
      </div>

      {/* Main Content Area - Transitions based on currentSlide */}
      <div className="relative z-10 w-full flex-1 flex flex-col justify-center items-center h-full mt-8">
        {/* SLIDE 1: The Hook */}
        <div
          className={[
            "absolute inset-0 flex flex-col justify-center items-center transition-all duration-700 ease-out",
            currentSlide === 0
              ? "opacity-100 translate-x-0 scale-100"
              : "opacity-0 -translate-x-1/4 scale-95 pointer-events-none",
          ].join(" ")}
        >
          <div className="space-y-4 text-center px-4 md:px-6 w-full max-w-sm">
            <div
              className={`inline-block px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-neutral-300 text-xs font-semibold tracking-[0.2em] mb-2 ${currentSlide === 0 ? "animate-fade-down" : "opacity-0"}`}
            >
              WEBSITE AGENCY
            </div>
            <h2
              className={`text-xl md:text-4xl font-sans font-black text-neutral-300 tracking-wide uppercase ${currentSlide === 0 ? "animate-fade-up" : "opacity-0"}`}
              style={{ animationDelay: "100ms" }}
            >
              Professional
              <br />
              Websites.
            </h2>
            <div className="mx-auto w-full pt-2">
              <div
                className={`text-[2.8rem] leading-[1.05] md:text-[5rem] font-sans font-black uppercase tracking-tight bg-clip-text text-transparent bg-linear-to-br from-violet-300 via-fuchsia-400 to-rose-400 filter drop-shadow-[0_0_20px_rgba(192,132,252,0.6)] ${currentSlide === 0 ? "animate-fade-up" : "opacity-0"}`}
                style={{ animationDelay: "200ms" }}
              >
                AFFORDABLE
                <br />
                STARTING
                <br />
                NOW.
              </div>
            </div>
            <p
              className={`text-base text-neutral-400 mt-10 font-medium tracking-wide ${currentSlide === 0 ? "animate-fade-in" : "opacity-0"}`}
              style={{ animationDelay: "500ms" }}
            >
              Tap to see pricing 👉
            </p>
          </div>
        </div>

        {/* SLIDE 2: The Core Product Offer */}
        <div
          className={[
            "absolute inset-0 flex flex-col justify-center transition-all duration-700 ease-out",
            currentSlide === 1
              ? "opacity-100 translate-x-0 scale-100"
              : currentSlide < 1
                ? "opacity-0 translate-x-1/4 scale-95 pointer-events-none"
                : "opacity-0 -translate-x-1/4 scale-95 pointer-events-none",
          ].join(" ")}
        >
          <div
            className={`text-center mb-10 ${currentSlide === 1 ? "animate-fade-up" : "opacity-0"}`}
            style={{ animationDelay: "100ms" }}
          >
            <h2 className="text-3xl font-sans font-black uppercase text-white mb-2 tracking-wide">
              Landing Page Starter
            </h2>
            <p className="text-neutral-400 text-sm tracking-wider uppercase font-semibold">
              Perfect for new businesses
            </p>
          </div>

          <div
            className={`relative group mx-6 ${currentSlide === 1 ? "animate-fade-up" : "opacity-0"}`}
            style={{ animationDelay: "200ms" }}
          >
            <div className="animate-float">
              {/* Multi-layered glow for depth */}
              <div className="absolute -inset-1 bg-gradient-to-br from-orange-500 via-rose-500 to-purple-600 rounded-[2.5rem] blur-xl opacity-40 group-hover:opacity-60 transition duration-1000 animate-pulse"></div>
              <div className="absolute -inset-0.5 bg-gradient-to-br from-orange-400/50 to-rose-600/50 rounded-[2.5rem] blur opacity-60"></div>

              <div className="relative backdrop-blur-2xl bg-[#0a0a0a]/80 border border-white/20 rounded-[2.5rem] p-8 text-center flex flex-col items-center justify-center min-h-[320px] shadow-[0_20px_50px_rgba(0,0,0,0.5)] overflow-hidden">
                {/* Internal gleam */}
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent"></div>

                <div className="absolute -top-10 -right-10 w-32 h-32 bg-orange-500/20 blur-[30px] rounded-full"></div>
                <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-purple-500/20 blur-[30px] rounded-full"></div>

                <span className="text-neutral-300 font-medium mb-4 text-base tracking-widest uppercase relative z-10">
                  Mulai dari
                </span>
                <div className="flex items-start justify-center gap-1 relative z-10">
                  <span className="text-2xl font-bold text-neutral-400 mt-2">
                    Rp
                  </span>
                  <span className="text-6xl font-black text-transparent bg-clip-text bg-gradient-to-br from-white via-neutral-100 to-neutral-500 tracking-tighter drop-shadow-md">
                    500<span className="text-5xl">k</span>
                  </span>
                </div>
                <div className="mt-8 relative z-10 p-3 rounded-2xl bg-white/5 border border-white/10 w-full">
                  <p className="text-neutral-300 text-sm leading-relaxed font-medium">
                    Launch your custom, high-converting landing page in{" "}
                    <span className="text-rose-400 font-bold">
                      less than a week
                    </span>
                    .
                  </p>
                </div>
              </div>
            </div>
          </div>
          <p className="text-center text-neutral-400 mt-8 font-medium">
            What&apos;s included? 👉
          </p>
        </div>

        {/* SLIDE 3: Features / What's Included */}
        <div
          className={[
            "absolute inset-0 flex flex-col justify-center transition-all duration-700 ease-out",
            currentSlide === 2
              ? "opacity-100 translate-x-0 scale-100"
              : "opacity-0 translate-x-1/4 scale-95 pointer-events-none",
          ].join(" ")}
        >
          <div
            className={`text-center mb-10 ${currentSlide === 2 ? "animate-fade-up" : "opacity-0"}`}
            style={{ animationDelay: "100ms" }}
          >
            <h2 className="text-4xl md:text-5xl font-sans font-black uppercase text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 to-teal-500 drop-shadow-[0_0_10px_rgba(52,211,153,0.4)]">
              What You Get
            </h2>
          </div>

          <div className="mx-6 space-y-4">
            {[
              { title: "Custom Premium Design", desc: "No cheap templates" },
              { title: "Lightning Fast Load", desc: "Built with Next.js" },
              { title: "Mobile Optimized", desc: "Looks perfect everywhere" },
              { title: "SEO Ready", desc: "Rank higher on Google" },
            ].map((feature, i) => (
              <div
                key={i}
                className={`flex gap-4 items-center bg-gradient-to-r from-white/[0.08] to-white/[0.02] backdrop-blur-xl border border-white/10 rounded-2xl p-4 shadow-[0_8px_30px_rgba(0,0,0,0.2)] ${currentSlide === 2 ? "animate-fade-up" : "opacity-0"}`}
                style={{ animationDelay: `${150 + i * 100}ms` }}
              >
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-emerald-400/30 to-teal-400/10 flex items-center justify-center shrink-0 border border-emerald-500/40 shadow-[inset_0_0_10px_rgba(52,211,153,0.2)]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2.5}
                    stroke="currentColor"
                    className="w-5 h-5 text-emerald-300 drop-shadow-[0_0_5px_rgba(52,211,153,0.8)]"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4.5 12.75l6 6 9-13.5"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-base text-white tracking-wide">
                    {feature.title}
                  </h3>
                  <p className="text-neutral-400 text-sm mt-0.5">
                    {feature.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Swipe up indicator (Only visible on last slide ideally, or all) */}
      <div
        className={[
          "relative z-10 w-full flex flex-col items-center gap-4 mt-8 transition-opacity duration-500",
          currentSlide === 2 ? "opacity-100" : "opacity-30",
        ].join(" ")}
      >
        <p className="text-xs font-bold tracking-[0.2em] text-white uppercase bg-white/10 px-8 py-3 rounded-full backdrop-blur-xl border border-white/20 shadow-[0_0_20px_rgba(255,255,255,0.1)]">
          DM US TO START
        </p>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={3}
          stroke="currentColor"
          className="w-6 h-6 animate-bounce text-white drop-shadow-md"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19.5 8.25l-7.5 7.5-7.5-7.5"
          />
        </svg>
      </div>
    </div>
  );
}
