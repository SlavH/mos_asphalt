"use client"

import { Award, Shield, HardHat, Medal, BadgeCheck } from "lucide-react"
import { useLanguage } from "@/lib/language-context"

const certifications = [
  { icon: BadgeCheck, name: "ISO 9001" },
  { icon: Shield, name: "ISO 14001" },
  { icon: HardHat, name: "ISO 45001" },
  { icon: Award, name: "GOST R" },
  { icon: Medal, name: "Premium Quality" },
]

export function CertificationsSection() {
  const { t } = useLanguage()

  return (
    <section id="certifications" className="py-16 bg-secondary/30 overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 md:px-6 text-center mb-8">
        <h2 className="text-3xl md:text-4xl font-black mb-2">{t("certifications_title")}</h2>
        <div className="w-16 h-1 bg-gradient-to-r from-primary via-yellow-400 to-primary rounded mx-auto" />
      </div>

      <div
        className="relative w-full overflow-hidden"
        style={{
          maskImage: "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
          WebkitMaskImage: "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
        }}
      >
        <div className="flex w-max animate-marquee hover:[animation-play-state:paused] whitespace-nowrap">
          {[...certifications, ...certifications].map((cert, index) => (
            <div
              key={index}
              className="flex items-center gap-3 text-lg sm:text-3xl font-bold text-muted-foreground/50 grayscale hover:grayscale-0 transition duration-300 px-8"
            >
              <cert.icon className="text-primary w-6 h-6 sm:w-8 sm:h-8" />
              <span>{cert.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
