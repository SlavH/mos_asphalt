"use client"

import Image from "next/image"
import { useLanguage } from "@/lib/language-context"
import { useInView } from "@/hooks/use-in-view"

export function ComparisonSection() {
  const { t } = useLanguage()
  const { ref, isInView } = useInView({ threshold: 0.3 })

  return (
    <section id="comparison" className="py-24 bg-card/30">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-3xl md:text-4xl font-black text-center mb-4">{t("comp_title")}</h2>
        <div className="w-16 h-1 bg-gradient-to-r from-primary via-yellow-400 to-primary rounded mb-4 mx-auto" />
        <p className="text-muted-foreground text-center mb-16 text-lg">{t("comp_subtitle")}</p>

        <div
          ref={ref}
          className={`comparison-container relative max-w-3xl mx-auto rounded-2xl overflow-hidden cursor-pointer ${
            isInView ? "visible" : ""
          }`}
        >
          <Image
            src="/before-after-1.jpg"
            alt="Before"
            width={800}
            height={500}
            className="w-full h-auto"
          />
          <div className="after absolute top-0 left-0 h-full overflow-hidden z-10">
            <Image
              src="/before-after-2.jpg"
              alt="After"
              width={800}
              height={500}
              className="w-[200%] h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
