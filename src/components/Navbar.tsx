"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"

const navItems = [
  { name: "Home", id: "hero" },
  { name: "About", id: "about" },
  { name: "Skills", id: "skills" },
  { name: "Stack", id: "stack" },
  { name: "Experience", id: "experience" },
  { name: "Projects", id: "projects" },
  { name: "Leadership", id: "leadership" },
  { name: "Contact", id: "contact" },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("hero")

  /* Detect scroll */

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)

      const sections = navItems.map((item) => item.id)

      sections.forEach((section) => {
        const el = document.getElementById(section)
        if (!el) return

        const rect = el.getBoundingClientRect()

        if (rect.top <= 200 && rect.bottom >= 200) {
          setActiveSection(section)
        }
      })
    }

    window.addEventListener("scroll", handleScroll)

    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <>
      <nav
        className={`fixed w-full z-50 transition-all duration-300 ${
          scrolled
            ? "backdrop-blur-xl bg-black/40 border-b border-white/10"
            : "bg-transparent"
        }`}
      >
        <div className="container-custom flex items-center justify-between h-[72px]">

          {/* LOGO */}

          <Link href="/" className="text-xl font-bold tracking-wide">
            <span className="bg-gradient-to-r from-indigo-500 via-purple-500 to-blue-500 bg-clip-text text-transparent">
              Rajat Kumar
            </span>
          </Link>

          {/* DESKTOP NAV */}

          <div className="hidden md:flex items-center gap-10">

            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className={`relative text-sm font-medium transition-colors duration-200
                ${
                  activeSection === item.id
                    ? "text-white"
                    : "text-zinc-400 hover:text-white"
                }`}
              >
                {item.name}

                {/* ACTIVE UNDERLINE */}

                <span
                  className={`absolute left-0 -bottom-1 h-[2px] w-full bg-indigo-500 transition-transform duration-300 origin-left ${
                    activeSection === item.id
                      ? "scale-x-100"
                      : "scale-x-0"
                  }`}
                />
              </a>
            ))}

          </div>

          {/* MOBILE BUTTON */}

          <button
            className="md:hidden text-white"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </nav>

      {/* MOBILE MENU */}

      <div
        className={`fixed inset-0 bg-black/90 backdrop-blur-lg z-40 transition-all duration-300 ${
          mobileOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        <div className="flex flex-col items-center justify-center h-full gap-10">

          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={() => setMobileOpen(false)}
              className="text-2xl font-semibold text-zinc-300 hover:text-white transition"
            >
              {item.name}
            </a>
          ))}
        </div>
      </div>
    </>
  )
}