"use client"

import Image from "next/image"
import { Truck, Cog, Factory } from "lucide-react"
import { useLanguage } from "@/lib/language-context"
import { useInView } from "@/hooks/use-in-view"

const equipment = [
  { image: "/card1.png", icon: Truck, titleKey: "equip_1_title" as const, textKey: "equip_1_text" as const },
  { image: "/card2.png", icon: Cog, titleKey: "equip_2_title" as const, textKey: "equip_2_text" as const },
  { image: "/card3.png", icon: Factory, titleKey: "equip_3_title" as const, textKey: "equip_3_text" as const },
  { image: "/card4.jpg", icon: Truck, titleKey: "equip_1_title" as const, textKey: "equip_1_text" as const },
]

export function EquipmentSection() {
  const { t } = useLanguage()
  const { ref, isInView } = useInView({ threshold: 0.1 })

  return (
    <section id="equipment" className="py-20">
      <div
        ref={ref}
        className={`max-w-5xl mx-auto px-4 md:px-6 bg-foreground/5 border border-foreground/10 rounded-xl p-8 md:p-12 backdrop-blur-md transition-all duration-700 ${
          isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <h2 className="text-3xl md:text-4xl font-black mb-2">{t("equipment_title")}</h2>
        <div className="w-16 h-1 bg-gradient-to-r from-primary via-yellow-400 to-primary rounded mb-4" />
        <p className="text-muted-foreground text-lg mb-10">{t("equipment_subtitle")}</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {equipment.map((item, index) => (
            <div
              key={index}
              className={`bg-card border border-border rounded-xl overflow-hidden group transition-all duration-500 hover:scale-105 hover:border-primary/45 hover:shadow-xl ${
                isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
              style={{ transitionDelay: `${index * 100 + 200}ms` }}
            >
              <div className="relative h-64 overflow-hidden bg-secondary">
                <Image
                  src={item.image}
                  alt={t(item.titleKey)}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-4">
                <item.icon className="text-primary w-6 h-6 mb-3" />
                <h3 className="font-bold mb-2">{t(item.titleKey)}</h3>
                <p className="text-muted-foreground text-xs">{t(item.textKey)}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
