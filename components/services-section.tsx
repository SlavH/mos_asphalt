"use client"

import Image from "next/image"
import { Construction, Recycle, Truck } from "lucide-react"
import { useLanguage } from "@/lib/language-context"
import { useInView } from "@/hooks/use-in-view"

const services = [
  {
    image: "/card6.jpg",
    icon: Truck,
    titleKey: "srv_asphalt_title",
    textKey: "srv_asphalt_text",
  },
  {
    image: "/card7.jpg",
    icon: Construction,
    titleKey: "srv_construction_title",
    textKey: "srv_construction_text",
  },
  {
    image: "/card8.jpg",
    icon: Recycle,
    titleKey: "srv_recycle_title",
    textKey: "srv_recycle_text",
  },
] as const

export function ServicesSection() {
  const { t } = useLanguage()
  const { ref, isInView } = useInView({ threshold: 0.1 })

  return (
    <section id="services" className="py-24">
      <div ref={ref} className="container mx-auto px-4 md:px-6">
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-black mb-4 uppercase tracking-tight">{t("services_title")}</h2>
          <div className="w-20 h-2 bg-primary mb-6" />
          <p className="text-xl text-muted-foreground">{t("services_subtitle")}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={service.titleKey}
              className={`bg-card border border-border rounded-xl overflow-hidden group transition-all duration-500 hover:scale-105 hover:border-primary/45 hover:shadow-2xl ${
                isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="relative h-56 overflow-hidden">
                <Image
                  src={service.image}
                  alt={t(service.titleKey)}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <div className="w-14 h-14 bg-foreground/5 rounded-2xl flex items-center justify-center border border-border text-primary text-2xl mb-4 group-hover:scale-110 transition-transform duration-500">
                  <service.icon className="w-6 h-6" />
                </div>
                <h3 className="font-bold text-2xl mb-3">{t(service.titleKey)}</h3>
                <p className="text-muted-foreground">{t(service.textKey)}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
