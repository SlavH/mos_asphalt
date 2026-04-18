"use client"

import { useEffect, useState } from "react"
import { useLanguage } from "@/lib/language-context"
import { useInView } from "@/hooks/use-in-view"

const stats = [
  { target: 15, key: "stat_years" },
  { target: 250, key: "stat_projects" },
  { target: 50, key: "stat_team" },
  { target: 30, key: "stat_machines" },
] as const

function AnimatedCounter({ target, isInView }: { target: number; isInView: boolean }) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!isInView) return

    let start = 0
    const duration = 2000
    const increment = target / (duration / 16)

    const timer = setInterval(() => {
      start += increment
      if (start >= target) {
        setCount(target)
        clearInterval(timer)
      } else {
        setCount(Math.floor(start))
      }
    }, 16)

    return () => clearInterval(timer)
  }, [target, isInView])

  return <span>{count}</span>
}

export function StatsSection() {
  const { t } = useLanguage()
  const { ref, isInView } = useInView({ threshold: 0.2 })

  return (
    <section id="stats" className="py-20 relative z-20 -mt-10">
      <div ref={ref} className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {stats.map((stat, index) => (
            <div
              key={stat.key}
              className={`bg-card/80 backdrop-blur-md border border-border rounded-3xl p-6 md:p-8 flex flex-col items-center justify-center shadow-2xl transition-all duration-500 hover:-translate-y-2 hover:border-primary/50 group ${
                isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="text-4xl md:text-5xl lg:text-6xl font-black text-primary mb-2 group-hover:scale-110 transition-transform">
                <AnimatedCounter target={stat.target} isInView={isInView} />
                {stat.key === "stat_years" && "+"}
                {stat.key === "stat_projects" && "+"}
                {stat.key === "stat_team" && "+"}
                {stat.key === "stat_machines" && "+"}
              </div>
              <div className="text-muted-foreground font-medium uppercase tracking-wider text-xs md:text-sm text-center">
                {t(stat.key)}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
