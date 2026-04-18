"use client"

import { LanguageProvider } from "@/lib/language-context"
import { ThemeProvider } from "@/lib/theme-context"
import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { StatsSection } from "@/components/stats-section"
import { ServicesSection } from "@/components/services-section"
import { ProjectsSection } from "@/components/projects-section"
import { ComparisonSection } from "@/components/comparison-section"
import { ProcessSection } from "@/components/process-section"
import { TeamSection } from "@/components/team-section"
import { AreasSection } from "@/components/areas-section"
import { EquipmentSection } from "@/components/equipment-section"
import { FaqSection } from "@/components/faq-section"
import { CertificationsSection } from "@/components/certifications-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"
import { BackToTop } from "@/components/back-to-top"

export default function Home() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <Header />
        <main>
          <HeroSection />
          <AboutSection />
          <StatsSection />
          <ServicesSection />
          <ProjectsSection />
          <ComparisonSection />
          <ProcessSection />
          <TeamSection />
          <AreasSection />
          <EquipmentSection />
          <FaqSection />
          <CertificationsSection />
          <TestimonialsSection />
          <ContactSection />
        </main>
        <Footer />
        <BackToTop />
      </LanguageProvider>
    </ThemeProvider>
  )
}
