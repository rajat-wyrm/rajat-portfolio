"use client"

import { useEffect, useState } from "react"

const navLinks = [
  { label: "Home", href: "#hero" },
  { label: "About", href: "#about" },
  { label: "Expertise", href: "#expertise" },
  { label: "Stack", href: "#stack" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Leadership", href: "#leadership" },
  { label: "Certifications", href: "#certifications" },
  { label: "Contact", href: "#contact" },
]

const socials = [
  {
    name: "GitHub",
    url: "https://github.com/rajat-wyrm",
  },
  {
    name: "LinkedIn",
    url: "https://linkedin.com/in/rajat-kumar-94a63a3ab",
  },
  {
    name: "Email",
    url: "mailto:rajatkumar7861813@gmail.com",
  },
]

export default function Footer() {
  const [showTop, setShowTop] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setShowTop(window.scrollY > 600)
    }

    window.addEventListener("scroll", handleScroll)

    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  return (
    <footer className="mt-32 border-t border-white/10">

      <div className="container-custom py-16">

        {/* GRID */}

        <div className="grid md:grid-cols-3 gap-10 mb-12">

          {/* ABOUT */}

          <div>

            <h3 className="text-lg mb-4">
              Rajat Kumar
            </h3>

            <p className="text-sm text-zinc-400 leading-relaxed">
              Software Development Engineer focused on backend architecture,
              scalable systems, and AI-integrated applications. Passionate
              about building high-performance software systems and modern
              developer platforms.
            </p>

          </div>

          {/* NAVIGATION */}

          <div>

            <h3 className="text-lg mb-4">
              Navigation
            </h3>

            <div className="grid grid-cols-2 gap-3 text-sm">

              {navLinks.map((link) => (

                <a
                  key={link.href}
                  href={link.href}
                  className="text-zinc-400 hover:text-white transition"
                >
                  {link.label}
                </a>

              ))}

            </div>

          </div>

          {/* SOCIAL */}

          <div>

            <h3 className="text-lg mb-4">
              Connect
            </h3>

            <div className="flex flex-col gap-3 text-sm">

              {socials.map((s) => (

                <a
                  key={s.name}
                  href={s.url}
                  target="_blank"
                  className="text-zinc-400 hover:text-white transition"
                >
                  {s.name}
                </a>

              ))}

              <a
                href="/Rajat_Kumar_Resume.pdf"
                className="btn-primary w-fit mt-2"
              >
                Download Resume
              </a>

            </div>

          </div>

        </div>

        {/* BOTTOM */}

        <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-8 border-t border-white/10 text-sm text-zinc-500">

          <p>
            © {new Date().getFullYear()} Rajat Kumar. All rights reserved.
          </p>

          <p>
            Built with Next.js • TypeScript • Tailwind
          </p>

        </div>

      </div>

      {/* SCROLL TO TOP BUTTON */}

      {showTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 glass px-4 py-3 rounded-xl hover:bg-white/10 transition"
        >
          ↑
        </button>
      )}

    </footer>
  )
}