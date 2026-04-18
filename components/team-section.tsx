"use client"

import { useLanguage } from "@/lib/language-context"
import { useInView } from "@/hooks/use-in-view"

const team = [
  { initial: "Ա", nameKey: "team_1_name", roleKey: "team_1_role" },
  { initial: "Ն", nameKey: "team_2_name", roleKey: "team_2_role" },
  { initial: "Հ", nameKey: "team_3_name", roleKey: "team_3_role" },
] as const

export function TeamSection() {
  const { t } = useLanguage()
  const { ref, isInView } = useInView({ threshold: 0.1 })

  return (
    <section id="team" className="py-20">
      <div
        ref={ref}
        className={`max-w-5xl mx-auto px-4 md:px-6 bg-foreground/5 border border-foreground/10 rounded-xl p-8 md:p-12 backdrop-blur-md transition-all duration-700 ${
          isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <h2 className="text-3xl md:text-4xl font-black mb-2">{t("team_title")}</h2>
        <div className="w-16 h-1 bg-gradient-to-r from-primary via-yellow-400 to-primary rounded mb-4" />
        <p className="text-muted-foreground text-lg mb-10">{t("team_subtitle")}</p>

        <div className="grid md:grid-cols-3 gap-8">
          {team.map((member, index) => (
            <div
              key={member.nameKey}
              className={`bg-card border border-border rounded-xl p-6 text-center transition-all duration-500 hover:border-primary/45 hover:shadow-xl hover:-translate-y-2 ${
                isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
              style={{ transitionDelay: `${index * 100 + 200}ms` }}
            >
              <div className="w-24 h-24 rounded-full bg-primary/10 border-2 border-primary/25 mx-auto mb-4 flex items-center justify-center text-primary text-4xl font-bold">
                {member.initial}
              </div>
              <div className="font-bold text-lg">{t(member.nameKey)}</div>
              <div className="text-muted-foreground text-sm">{t(member.roleKey)}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
