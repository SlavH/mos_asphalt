"use client"

import { useLanguage } from "@/lib/language-context"
import { useInView } from "@/hooks/use-in-view"

const steps = [
  { step: 1, titleKey: "process_1_title", textKey: "process_1_text" },
  { step: 2, titleKey: "process_2_title", textKey: "process_2_text" },
  { step: 3, titleKey: "process_3_title", textKey: "process_3_text" },
  { step: 4, titleKey: "process_4_title", textKey: "process_4_text" },
] as const

export function ProcessSection() {
  const { t } = useLanguage()
  const { ref, isInView } = useInView({ threshold: 0.1 })

  return (
    <section id="process" className="py-20 bg-secondary/30">
      <div
        ref={ref}
        className={`max-w-5xl mx-auto px-4 md:px-6 bg-foreground/5 border border-foreground/10 rounded-xl p-8 md:p-12 backdrop-blur-md transition-all duration-700 ${
          isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <h2 className="text-3xl md:text-4xl font-black mb-2">{t("process_title")}</h2>
        <div className="w-16 h-1 bg-gradient-to-r from-primary via-yellow-400 to-primary rounded mb-4" />
        <p className="text-muted-foreground text-lg mb-10">{t("process_subtitle")}</p>

        <div className="grid md:grid-cols-2 gap-4">
          {steps.map((step, index) => (
            <div
              key={step.step}
              className={`relative pl-16 py-5 pr-5 rounded-lg transition-all duration-500 ${
                isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
              style={{ transitionDelay: `${index * 100 + 200}ms` }}
            >
              <div className="absolute left-0 top-5 w-10 h-10 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-black text-lg">
                {step.step}
              </div>
              <h3 className="font-bold text-lg mb-2">{t(step.titleKey)}</h3>
              <p className="text-muted-foreground">{t(step.textKey)}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
