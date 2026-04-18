"use client"

import { Quote, Star } from "lucide-react"
import { useLanguage } from "@/lib/language-context"

const testimonials = [
  {
    textKey: "testim_1_text",
    authorKey: "testim_1_author",
    roleKey: "testim_1_role",
    initial: "Գ",
    gradient: "from-primary to-orange-500",
  },
  {
    textKey: "testim_2_text",
    authorKey: "testim_2_author",
    roleKey: "testim_2_role",
    initial: "Ս",
    gradient: "from-blue-500 to-indigo-500",
  },
] as const

export function TestimonialsSection() {
  const { t } = useLanguage()

  return (
    <section id="testimonials" className="py-24 bg-secondary/30 overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-black mb-2">{t("testimonials_title")}</h2>
        <div className="w-16 h-1 bg-gradient-to-r from-primary via-yellow-400 to-primary rounded mx-auto mb-4" />
        <p className="text-muted-foreground text-lg">{t("testimonials_subtitle")}</p>
      </div>

      <div
        className="relative w-full"
        style={{
          maskImage: "linear-gradient(to right, transparent, black 15%, black 85%, transparent)",
          WebkitMaskImage: "linear-gradient(to right, transparent, black 15%, black 85%, transparent)",
        }}
      >
        <div className="flex w-max gap-6 animate-scroll hover:[animation-play-state:paused] py-4 px-6">
          {[...testimonials, ...testimonials, ...testimonials].map((testimonial, index) => (
            <div
              key={index}
              className="bg-card border border-border rounded-xl p-6 relative w-[350px] md:w-[400px] shrink-0 overflow-hidden group hover:-translate-y-2 transition-all duration-300"
            >
              <Quote className="absolute -bottom-4 -right-4 w-24 h-24 opacity-5 text-primary group-hover:scale-110 transition-transform duration-500" />
              <div className="flex text-primary text-sm gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
              </div>
              <p className="text-lg italic mb-6 relative z-10">{t(testimonial.textKey)}</p>
              <div className="flex items-center gap-4 relative z-10">
                <div
                  className={`w-14 h-14 rounded-full bg-gradient-to-tr ${testimonial.gradient} text-foreground flex items-center justify-center font-bold text-xl shadow-lg`}
                >
                  {testimonial.initial}
                </div>
                <div>
                  <strong className="block text-lg">{t(testimonial.authorKey)}</strong>
                  <div className="text-sm text-muted-foreground">{t(testimonial.roleKey)}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
