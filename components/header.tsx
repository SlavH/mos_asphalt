"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { Menu, X, Sun, Moon } from "lucide-react"
import { useLanguage } from "@/lib/language-context"
import { useTheme } from "@/lib/theme-context"

const navItems = [
  { href: "#hero", key: "nav_home" },
  { href: "#about", key: "nav_about" },
  { href: "#services", key: "nav_services" },
  { href: "#process", key: "nav_process" },
  { href: "#projects", key: "nav_projects" },
  { href: "#contact", key: "nav_contact" },
] as const

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("hero")
  const { lang, setLang, t } = useLanguage()
  const { theme, toggleTheme } = useTheme()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    const observerOptions = {
      root: null,
      rootMargin: "-20% 0px -20% 0px",
      threshold: 0,
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id)
        }
      })
    }, observerOptions)

    const sections = document.querySelectorAll("section[id]")
    sections.forEach((section) => observer.observe(section))

    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
      observer.disconnect()
    }
  }, [])

  const toggleLanguage = () => {
    setLang(lang === "hy" ? "en" : "hy")
  }

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 h-[72px] flex items-center justify-between px-4 md:px-6 z-50 transition-all duration-300 border-b border-primary/35 ${
          isScrolled
            ? "bg-background/95 backdrop-blur-md shadow-lg"
            : "bg-background/75 backdrop-blur-sm"
        }`}
      >
        <Link href="#hero" className="flex items-center gap-2 md:gap-3">
          <Image src="/logo.png" alt="MOS ASPHALT" width={42} height={42} className="h-8 md:h-[42px] w-auto" />
          <span className="hidden md:inline font-bold text-foreground">MOS ASPHALT</span>
        </Link>

        <nav className="hidden md:flex items-center gap-6" aria-label="Main navigation">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`text-sm font-bold transition-colors relative ${
                activeSection === item.href.slice(1)
                  ? "text-primary"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {t(item.key)}
              {activeSection === item.href.slice(1) && (
                <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary" />
              )}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <button
            onClick={toggleLanguage}
            className="px-3 py-1.5 text-xs font-semibold rounded-lg bg-secondary/50 border border-border hover:bg-secondary hover:border-primary hover:text-primary transition-all"
          >
            {lang === "hy" ? "ARM" : "ENG"}
          </button>
          <button
            onClick={toggleTheme}
            className="p-2 rounded-lg bg-secondary/50 border border-border hover:bg-secondary hover:border-primary hover:text-primary transition-all"
            aria-label="Toggle theme"
          >
            {theme === "dark" ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          </button>
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 rounded-lg bg-secondary/50 border border-border"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      <div
        className={`fixed top-[72px] left-0 right-0 bg-background/98 backdrop-blur-lg z-40 border-b border-primary/15 transition-all duration-300 md:hidden ${
          isMobileMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        <nav className="flex flex-col p-4 gap-2">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className={`px-4 py-3 rounded-lg font-bold transition-colors ${
                activeSection === item.href.slice(1)
                  ? "bg-primary/10 text-primary"
                  : "text-muted-foreground hover:bg-secondary"
              }`}
            >
              {t(item.key)}
            </Link>
          ))}
        </nav>
      </div>
    </>
  )
}
