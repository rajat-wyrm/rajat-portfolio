import type { Metadata, Viewport } from "next"
import "./globals.css"

import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import SkillGalaxy from "@/components/SkillGalaxy"
import TechUniverse from "@/components/TechUniverse"
import BackgroundFX from "@/components/BackgroundFX"
import CursorGlow from "@/components/CursorGlow"
import TechConstellation from "@/components/TechConstellation"
import ScrollProgress from "@/components/ScrollProgress"

import ScrollToTop from "@/components/ScrollToTop"
import LoadingScreen from "@/components/LoadingScreen"

import CommandPalette from "@/components/CommandPalette"
import AIAssistant from "@/components/AIAssistant"

export const metadata: Metadata = {
  title: {
    default: "Rajat Kumar | Software Development Engineer",
    template: "%s | Rajat Kumar",
  },

  description:
    "Rajat Kumar — Software Development Engineer specializing in backend systems, MERN stack development, TypeScript applications, and AI-powered software platforms.",

  keywords: [
    "Rajat Kumar",
    "Software Engineer",
    "Backend Engineer",
    "MERN Stack Developer",
    "TypeScript Developer",
    "Java Developer",
    "AI Developer",
    "Full Stack Developer",
  ],

  authors: [{ name: "Rajat Kumar" }],
  creator: "Rajat Kumar",

  openGraph: {
    title: "Rajat Kumar | Software Development Engineer",
    description:
      "Modern engineering portfolio showcasing backend systems, AI-driven applications, and scalable software architecture.",
    url: "https://rajatkumar.dev",
    siteName: "Rajat Kumar Portfolio",
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Rajat Kumar | Software Development Engineer",
    description:
      "Software engineering portfolio showcasing backend systems and AI-driven applications.",
  },

  robots: {
    index: true,
    follow: true,
  },
}

export const viewport: Viewport = {
  themeColor: "#0a0a0a",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  return (

    <html lang="en" suppressHydrationWarning>

      <body
        className="
        relative
        bg-[var(--bg-primary)]
        text-white
        antialiased
        selection:bg-indigo-500/40
        scroll-smooth
        "
      >

        {/* =====================================================
           GLOBAL VISUAL SYSTEMS
        ===================================================== */}
<SkillGalaxy />
<TechUniverse />
        <BackgroundFX />

        <TechConstellation />

        <CursorGlow />

        <ScrollProgress />

        {/* =====================================================
           GLOBAL UX SYSTEMS
        ===================================================== */}

        <LoadingScreen />

        <ScrollToTop />

        <CommandPalette />

        <AIAssistant />

        {/* =====================================================
           MAIN SITE STRUCTURE
        ===================================================== */}

        <Navbar />

        <main className="relative z-10 min-h-screen">

          {children}

        </main>

        <Footer />

      </body>

    </html>

  )
}