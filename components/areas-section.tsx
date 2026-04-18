"use client"

import { useLanguage } from "@/lib/language-context"
import { useInView } from "@/hooks/use-in-view"

const areas = ["area_yerevan", "area_shirak", "area_lori", "area_kotayk"] as const

export function AreasSection() {
  const { t } = useLanguage()
  const { ref, isInView } = useInView({ threshold: 0.1 })

  return (
    <section id="service-areas" className="py-20 bg-secondary/30">
      <div
        ref={ref}
        className={`max-w-5xl mx-auto px-4 md:px-6 bg-foreground/5 border border-foreground/10 rounded-xl p-8 md:p-12 backdrop-blur-md transition-all duration-700 ${
          isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <h2 className="text-3xl md:text-4xl font-black mb-2">{t("service_areas_title")}</h2>
        <div className="w-16 h-1 bg-gradient-to-r from-primary via-yellow-400 to-primary rounded mb-4" />
        <p className="text-muted-foreground text-lg mb-10">{t("service_areas_subtitle")}</p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {areas.map((area, index) => (
            <div
              key={area}
              className={`bg-card border border-border rounded-xl p-6 text-center transition-all duration-500 hover:border-primary/45 hover:shadow-lg ${
                isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
              style={{ transitionDelay: `${index * 100 + 200}ms` }}
            >
              <div className="font-bold">{t(area)}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
