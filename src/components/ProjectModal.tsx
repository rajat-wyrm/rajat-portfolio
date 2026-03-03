"use client"

import { useEffect } from "react"

type Project = {
  title: string
  description: string
  tech: string[]
  github?: string
  demo?: string
}

type Props = {
  project: Project | null
  onClose: () => void
}

export default function ProjectModal({ project, onClose }: Props) {

  useEffect(() => {

    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose()
    }

    window.addEventListener("keydown", handleKey)

    document.body.style.overflow = "hidden"

    return () => {
      window.removeEventListener("keydown", handleKey)
      document.body.style.overflow = "auto"
    }

  }, [onClose])

  if (!project) return null

  return (

    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center
      bg-black/70 backdrop-blur-md p-6"
      onClick={onClose}
    >

      <div
        onClick={(e) => e.stopPropagation()}
        className="max-w-3xl w-full glass-card p-10 animate-[fadeIn_0.3s]"
      >

        <h3 className="text-2xl mb-4">
          {project.title}
        </h3>

        <p className="text-zinc-400 mb-6 leading-relaxed">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2 mb-8">

          {project.tech.map((t) => (

            <span
              key={t}
              className="glass px-3 py-1 text-xs rounded-lg"
            >
              {t}
            </span>

          ))}

        </div>

        <div className="flex gap-4">

          {project.github && (
            <a
              href={project.github}
              target="_blank"
              className="glass px-4 py-2 rounded-lg hover:bg-indigo-500/20 transition"
            >
              View Code
            </a>
          )}

          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              className="btn-primary"
            >
              Live Demo
            </a>
          )}

        </div>

      </div>

    </div>
  )
}