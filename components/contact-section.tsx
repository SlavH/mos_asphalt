"use client"

import { useState } from "react"
import { MapPin, Phone, Mail, Clock, Send, Check, Loader2 } from "lucide-react"
import { useLanguage } from "@/lib/language-context"
import { useInView } from "@/hooks/use-in-view"

const contactInfo = [
  { icon: MapPin, titleKey: "contact_addr_title", valueKey: "contact_addr_val" },
  { icon: Phone, titleKey: "contact_phone_title", valueKey: "contact_phone_val" },
  { icon: Mail, titleKey: "contact_email_title", valueKey: "contact_email_val" },
  { icon: Clock, titleKey: "contact_hours_title", valueKey: "contact_hours_val" },
] as const

export function ContactSection() {
  const { t } = useLanguage()
  const { ref, isInView } = useInView({ threshold: 0.1 })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [errors, setErrors] = useState<Record<string, boolean>>({})

  const validateForm = (formData: FormData) => {
    const newErrors: Record<string, boolean> = {}
    const name = formData.get("name") as string
    const email = formData.get("email") as string
    const message = formData.get("message") as string

    if (!name?.trim()) newErrors.name = true
    if (!email?.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) newErrors.email = true
    if (!message?.trim()) newErrors.message = true

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)

    if (!validateForm(formData)) return

    setIsSubmitting(true)

    try {
      const response = await fetch("https://formspree.io/f/mreowyrk", {
        method: "POST",
        body: formData,
        headers: { Accept: "application/json" },
      })

      if (response.ok) {
        setIsSuccess(true)
      } else {
        alert("Error sending message. Please try again.")
      }
    } catch {
      alert("Error sending message. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="py-24">
      <div ref={ref} className="container mx-auto px-4 md:px-6 max-w-6xl">
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-black mb-4 uppercase tracking-tight">{t("contact_title")}</h2>
          <div className="w-20 h-2 bg-primary mb-6" />
          <p className="text-xl text-muted-foreground">{t("contact_subtitle")}</p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 md:gap-24">
          {/* Contact Info */}
          <div className="space-y-8">
            {contactInfo.map((item, index) => (
              <div
                key={item.titleKey}
                className={`flex items-start gap-6 group transition-all duration-500 ${
                  isInView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="w-16 h-16 rounded-2xl bg-card border border-border flex items-center justify-center text-primary text-2xl group-hover:scale-110 group-hover:border-primary/50 transition-all duration-300 shadow-xl">
                  <item.icon className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-1">{t(item.titleKey)}</h4>
                  <p className="text-muted-foreground text-lg">{t(item.valueKey)}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Form */}
          <div
            className={`bg-card/80 backdrop-blur-xl border border-border rounded-3xl p-8 md:p-10 shadow-2xl relative transition-all duration-700 ${
              isInView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
            }`}
          >
            {isSuccess ? (
              <div className="absolute inset-0 bg-card rounded-3xl flex flex-col items-center justify-center p-8 text-center backdrop-blur-xl border border-primary/20">
                <Check className="w-16 h-16 text-primary mb-6 animate-bounce" />
                <h3 className="text-3xl font-black mb-2">{t("form_success_title")}</h3>
                <p className="text-muted-foreground text-lg">{t("form_success_msg")}</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="relative">
                  <input
                    type="text"
                    name="name"
                    className={`w-full py-3.5 bg-transparent border-0 border-b-2 text-lg focus:outline-none focus:ring-0 transition-colors peer placeholder:text-transparent ${
                      errors.name ? "border-destructive" : "border-border focus:border-primary"
                    }`}
                    placeholder={t("form_name_label")}
                    onChange={() => setErrors((prev) => ({ ...prev, name: false }))}
                  />
                  <label className="absolute left-0 top-3.5 text-muted-foreground text-lg transition-all duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-primary peer-[:not(:placeholder-shown)]:-translate-y-6 peer-[:not(:placeholder-shown)]:scale-75">
                    {t("form_name_label")}
                  </label>
                </div>

                <div className="relative">
                  <input
                    type="email"
                    name="email"
                    className={`w-full py-3.5 bg-transparent border-0 border-b-2 text-lg focus:outline-none focus:ring-0 transition-colors peer placeholder:text-transparent ${
                      errors.email ? "border-destructive" : "border-border focus:border-primary"
                    }`}
                    placeholder={t("form_email_label")}
                    onChange={() => setErrors((prev) => ({ ...prev, email: false }))}
                  />
                  <label className="absolute left-0 top-3.5 text-muted-foreground text-lg transition-all duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-primary peer-[:not(:placeholder-shown)]:-translate-y-6 peer-[:not(:placeholder-shown)]:scale-75">
                    {t("form_email_label")}
                  </label>
                </div>

                <div className="relative">
                  <input
                    type="tel"
                    name="phone"
                    className="w-full py-3.5 bg-transparent border-0 border-b-2 border-border text-lg focus:outline-none focus:ring-0 focus:border-primary transition-colors peer placeholder:text-transparent"
                    placeholder={t("form_phone_label")}
                  />
                  <label className="absolute left-0 top-3.5 text-muted-foreground text-lg transition-all duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-primary peer-[:not(:placeholder-shown)]:-translate-y-6 peer-[:not(:placeholder-shown)]:scale-75">
                    {t("form_phone_label")}
                  </label>
                </div>

                <div className="relative">
                  <textarea
                    name="message"
                    rows={4}
                    className={`w-full py-3.5 bg-transparent border-0 border-b-2 text-lg focus:outline-none focus:ring-0 transition-colors resize-none peer placeholder:text-transparent ${
                      errors.message ? "border-destructive" : "border-border focus:border-primary"
                    }`}
                    placeholder={t("form_msg_label")}
                    onChange={() => setErrors((prev) => ({ ...prev, message: false }))}
                  />
                  <label className="absolute left-0 top-3.5 text-muted-foreground text-lg transition-all duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-primary peer-[:not(:placeholder-shown)]:-translate-y-6 peer-[:not(:placeholder-shown)]:scale-75">
                    {t("form_msg_label")}
                  </label>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-primary text-primary-foreground hover:bg-primary/90 focus:ring-4 focus:outline-none focus:ring-primary/50 font-bold rounded-2xl text-lg px-5 py-4 transition-all duration-300 transform hover:-translate-y-1 shadow-[0_10px_20px_rgba(255,211,61,0.2)] disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      <span>{t("form_btn")}</span>
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
