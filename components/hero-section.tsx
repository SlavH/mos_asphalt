"use client"

import Link from "next/link"
import { useLanguage } from "@/lib/language-context"

export function HeroSection() {
  const { t } = useLanguage()

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
        style={{ filter: "saturate(1.1)" }}
      >
        <source src="/mos_asphalt.mp4" type="video/mp4" />
      </video>

      <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-background/30 to-background pointer-events-none" />

      <div
        className="relative z-10 container mx-auto px-4 md:px-6 flex flex-col items-center justify-center text-center max-w-5xl animate-fade-in-up opacity-0"
        style={{ animationDelay: "0.2s", animationFillMode: "forwards" }}
      >
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-foreground/5 border border-foreground/10 backdrop-blur-xl mb-8">
          <span className="flex h-2.5 w-2.5 rounded-full bg-primary animate-pulse shadow-[0_0_10px_hsl(var(--primary))]" />
          <span className="text-xs sm:text-sm font-semibold tracking-widest uppercase text-foreground/90">
            {t("hero_badge")}
          </span>
        </div>

        <h1 className="font-heading text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-black tracking-tighter text-foreground drop-shadow-2xl mb-6 relative group">
          <span className="absolute inset-0 blur-3xl opacity-20 bg-primary group-hover:opacity-40 transition duration-1000" />
          <span className="relative z-10">
            MOS <span className="text-orange-500 brightness-125">ASPHALT</span>
          </span>
        </h1>

        <p className="text-xl sm:text-2xl md:text-3xl text-foreground/70 max-w-3xl font-light leading-relaxed mb-10">
          {t("hero_sub")}
        </p>

        <div className="flex flex-col sm:flex-row gap-6 w-full sm:w-auto justify-center">
          <Link
            href="#contact"
            className="inline-flex items-center justify-center px-10 py-5 text-lg font-bold rounded-full bg-primary text-primary-foreground hover:bg-primary/90 shadow-[0_0_40px_rgba(255,211,61,0.3)] hover:shadow-[0_0_60px_rgba(255,211,61,0.5)] transition-all duration-300 transform hover:-translate-y-1"
          >
            {t("btn_order")}
          </Link>
          <Link
            href="#about"
            className="inline-flex items-center justify-center px-10 py-5 text-lg font-bold rounded-full bg-foreground/5 border border-foreground/10 text-foreground hover:bg-foreground/10 backdrop-blur-md transition-all duration-300 transform hover:-translate-y-1"
          >
            {t("btn_read")}
          </Link>
        </div>
      </div>
    </section>
  )
}
