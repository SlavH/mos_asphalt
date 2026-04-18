"use client"

import { useState } from "react"
import { Plus } from "lucide-react"
import { useLanguage } from "@/lib/language-context"
import { useInView } from "@/hooks/use-in-view"

const faqs = [
  { qKey: "faq_1_q", aKey: "faq_1_a" },
  { qKey: "faq_2_q", aKey: "faq_2_a" },
  { qKey: "faq_3_q", aKey: "faq_3_a" },
  { qKey: "faq_4_q", aKey: "faq_4_a" },
] as const

export function FaqSection() {
  const { t } = useLanguage()
  const { ref, isInView } = useInView({ threshold: 0.1 })
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section id="faq" className="py-24 bg-card/30">
      <div ref={ref} className="container mx-auto px-4 md:px-6 max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black mb-4 uppercase tracking-tight">{t("faq_title")}</h2>
          <div className="w-20 h-2 bg-primary mx-auto mb-6" />
          <p className="text-xl text-muted-foreground">{t("faq_subtitle")}</p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={faq.qKey}
              className={`bg-card/50 backdrop-blur-sm border border-border rounded-2xl overflow-hidden transition-all duration-300 hover:border-foreground/20 ${
                openIndex === index ? "border-primary/30" : ""
              } ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full p-6 text-left font-bold text-lg flex justify-between items-center focus:outline-none hover:text-primary transition-colors"
                aria-expanded={openIndex === index}
              >
                <span>{t(faq.qKey)}</span>
                <span
                  className={`w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 flex-shrink-0 ${
                    openIndex === index ? "bg-primary text-primary-foreground rotate-45" : "bg-foreground/5 text-primary"
                  }`}
                >
                  <Plus className="w-4 h-4" />
                </span>
              </button>
              <div
                className={`px-6 text-muted-foreground transition-all duration-500 ease-in-out overflow-hidden ${
                  openIndex === index ? "pb-6 opacity-100 max-h-96" : "pb-0 opacity-0 max-h-0"
                }`}
              >
                {t(faq.aKey)}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
