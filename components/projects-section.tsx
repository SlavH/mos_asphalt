"use client"

import Image from "next/image"
import { useLanguage } from "@/lib/language-context"
import { useInView } from "@/hooks/use-in-view"

const projects = [
  {
    image: "/card9.jpg",
    titleKey: "proj_1_title",
    textKey: "proj_1_text",
  },
  {
    image: "/card10.jpg",
    titleKey: "proj_2_title",
    textKey: "proj_2_text",
  },
] as const

export function ProjectsSection() {
  const { t } = useLanguage()
  const { ref, isInView } = useInView({ threshold: 0.1 })

  return (
    <section id="projects" className="py-24 bg-secondary/50">
      <div ref={ref} className="container mx-auto px-4 md:px-6">
        <div className="mb-16 text-center">
          <h2 className="text-4xl md:text-5xl font-black mb-4 uppercase tracking-tight">{t("projects_title")}</h2>
          <div className="w-20 h-2 bg-primary mx-auto mb-6" />
          <p className="text-xl text-muted-foreground">{t("projects_subtitle")}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <div
              key={project.titleKey}
              className={`bg-card border border-border rounded-xl overflow-hidden group transition-all duration-500 hover:scale-105 hover:border-primary/45 hover:shadow-2xl ${
                isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="relative h-56 overflow-hidden">
                <Image
                  src={project.image}
                  alt={t(project.titleKey)}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="font-bold text-2xl mb-3">{t(project.titleKey)}</h3>
                <p className="text-muted-foreground">{t(project.textKey)}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
