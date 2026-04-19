import type { Metadata, Viewport } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

export const metadata: Metadata = {
  title: "MOS ASPHALT - Road Construction in Armenia",
  description:
    "MOS ASPHALT - Road construction in Armenia. Asphalt paving, road construction, equipment rental.",
  icons: {
    icon: "/favicon.ico",
  },
}

export const viewport: Viewport = {
  themeColor: "#0a0a0a",
  width: "device-width",
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="hy" className="bg-background">
      <body className={`${inter.variable} font-sans antialiased`}>{children}</body>
    </html>
  )
}
