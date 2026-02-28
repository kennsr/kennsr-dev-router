import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Instagram Assets - Do Not Index",
  robots: {
    index: false,
    follow: false,
    nocache: true,
  },
};

export default function InstagramLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div
      id="story-wrapper"
      className="min-h-screen bg-black flex items-center justify-center p-0 md:p-8"
    >
      {/* 
        Strict 9:16 Aspect Ratio Container
        This mimics mobile resolution (1080x1920 logical)
      */}
      <div
        id="story-container"
        className="relative w-full h-[100dvh] md:w-[414px] md:h-[736px] bg-[#030303] overflow-hidden md:rounded-[40px] md:shadow-2xl md:shadow-white/5 md:border-[8px] md:border-neutral-900 mx-auto"
      >
        {children}
      </div>
    </div>
  );
}
