"use client"

import { useEffect, useState } from "react"

const roles = [
  "Software Development Engineer",
  "Backend Systems Engineer",
  "MERN Stack Developer",
  "AI-Integrated Application Builder",
]

const techStack = [
  "Java",
  "Spring Boot",
  "React",
  "TypeScript",
  "Node.js",
  "PostgreSQL",
  "MongoDB",
  "Microservices",
  "REST APIs",
]

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % roles.length)
    }, 3000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="container-custom relative flex flex-col justify-center min-h-screen">

      {/* HEADLINE */}

      <div className="max-w-4xl">

        <h1 className="mb-6">
          <span className="block text-zinc-400 text-xl mb-2">
            Hello, I'm
          </span>

          <span className="bg-gradient-to-r from-indigo-500 via-purple-500 to-blue-500 bg-clip-text text-transparent">
            Rajat Kumar
          </span>
        </h1>

        {/* ROLE ANIMATION */}

        <div className="text-2xl md:text-3xl font-semibold mb-6 h-[40px]">
          <span className="text-white transition-all duration-500">
            {roles[roleIndex]}
          </span>
        </div>

        {/* DESCRIPTION */}

        <p className="max-w-2xl mb-10">
          Computer Science Engineering student focused on building scalable
          backend systems, microservices architectures, and AI-integrated
          developer platforms. Passionate about high-performance engineering,
          system design, and modern web technologies.
        </p>

        {/* CTA BUTTONS */}

        <div className="flex flex-wrap gap-4">

          <a
            href="#projects"
            className="btn-primary"
          >
            View Projects
          </a>

          <a
            href="#contact"
            className="glass px-6 py-3 rounded-xl text-sm font-medium hover:bg-white/10 transition"
          >
            Contact Me
          </a>

        </div>

      </div>

      {/* FLOATING TECH TAGS */}

      <div className="mt-16 flex flex-wrap gap-3 max-w-3xl">

        {techStack.map((tech) => (
          <span
            key={tech}
            className="glass px-4 py-2 text-sm text-zinc-300 hover:text-white transition"
          >
            {tech}
          </span>
        ))}

      </div>

      {/* SCROLL INDICATOR */}

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center">

        <span className="text-xs text-zinc-400 mb-2">
          Scroll
        </span>

        <div className="w-[2px] h-12 bg-gradient-to-b from-indigo-500 to-transparent animate-pulse" />

      </div>

    </div>
  )
}