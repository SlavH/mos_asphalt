"use client"

import { useLanguage } from "@/lib/language-context"
import { useInView } from "@/hooks/use-in-view"

export function AboutSection() {
  const { t } = useLanguage()
  const { ref, isInView } = useInView({ threshold: 0.1 })

  return (
    <section id="about" className="py-20">
      <div
        ref={ref}
        className={`max-w-5xl mx-auto px-4 md:px-6 bg-foreground/5 border border-foreground/10 rounded-xl p-8 md:p-12 backdrop-blur-md transition-all duration-700 ${
          isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <h2 className="text-3xl md:text-4xl font-black mb-2">{t("about_title")}</h2>
        <div className="w-16 h-1 bg-gradient-to-r from-primary via-yellow-400 to-primary rounded mb-4" />
        <p className="text-muted-foreground text-lg mb-10">{t("about_subtitle")}</p>

        <div className="grid md:grid-cols-2 gap-8">
          <p className="text-muted-foreground text-lg leading-relaxed">{t("about_text1")}</p>
          <p className="text-muted-foreground text-lg leading-relaxed">{t("about_text2")}</p>
        </div>
      </div>
    </section>
  )
}
