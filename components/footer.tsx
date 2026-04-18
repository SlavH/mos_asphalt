"use client"

import Image from "next/image"
import Link from "next/link"
import { useLanguage } from "@/lib/language-context"

export function Footer() {
  const { t } = useLanguage()

  return (
    <footer className="border-t border-primary/15 py-12">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
          {/* Brand */}
          <div className="text-center sm:text-left">
            <Image src="/logo.png" alt="MOS ASPHALT" width={40} height={40} className="h-10 w-auto mb-4 mx-auto sm:mx-0" />
            <h4 className="text-primary font-bold mb-2">MOS ASPHALT</h4>
            <p className="text-muted-foreground text-sm">{t("footer_desc")}</p>
          </div>

          {/* Links */}
          <div className="text-center sm:text-left">
            <h4 className="text-primary font-bold mb-4">{t("footer_links")}</h4>
            <div className="flex flex-col gap-2">
              <Link href="#about" className="text-muted-foreground hover:text-foreground text-sm transition-colors">
                {t("nav_about")}
              </Link>
              <Link href="#services" className="text-muted-foreground hover:text-foreground text-sm transition-colors">
                {t("nav_services")}
              </Link>
              <Link href="#projects" className="text-muted-foreground hover:text-foreground text-sm transition-colors">
                {t("nav_projects")}
              </Link>
              <Link href="#contact" className="text-muted-foreground hover:text-foreground text-sm transition-colors">
                {t("nav_contact")}
              </Link>
            </div>
          </div>

          {/* Services */}
          <div className="text-center sm:text-left">
            <h4 className="text-primary font-bold mb-4">{t("footer_services")}</h4>
            <div className="flex flex-col gap-2">
              <Link href="#services" className="text-muted-foreground hover:text-foreground text-sm transition-colors">
                {t("footer_asphalt")}
              </Link>
              <Link href="#services" className="text-muted-foreground hover:text-foreground text-sm transition-colors">
                {t("footer_const")}
              </Link>
              <Link href="#services" className="text-muted-foreground hover:text-foreground text-sm transition-colors">
                {t("footer_rent")}
              </Link>
            </div>
          </div>

          {/* Contact */}
          <div className="text-center sm:text-left">
            <h4 className="text-primary font-bold mb-4">{t("footer_contact")}</h4>
            <div className="flex flex-col gap-2">
              <a href="tel:+37410123456" className="text-muted-foreground hover:text-foreground text-sm transition-colors">
                +374 10 123 456
              </a>
              <a
                href="mailto:info@mosasphalt.am"
                className="text-muted-foreground hover:text-foreground text-sm transition-colors"
              >
                info@mosasphalt.am
              </a>
            </div>
          </div>
        </div>

        <div className="text-center text-muted-foreground mt-8 pt-4 border-t border-primary/15">
          &copy; 2026 MOS ASPHALT. {t("footer_rights")}
        </div>
      </div>
    </footer>
  )
}
