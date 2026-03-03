"use client"

import { useEffect, useRef, useState } from "react"
import ProjectModal from "@/components/ProjectModal"

type Project = {
  title: string
  description: string
  tech: string[]
  github?: string
  demo?: string
}

const projects: Project[] = [
  {
    title: "AI Developer Copilot",
    description:
      "AI-powered platform assisting developers with automated code review, resume analysis, and interview preparation using intelligent AI APIs.",
    tech: ["Java", "Spring Boot", "React", "PostgreSQL", "AI APIs"],
    github: "#",
  },
  {
    title: "BrainBox – Smart Revision Assistant",
    description:
      "Cloud-based productivity platform generating flashcards automatically and optimizing revision scheduling.",
    tech: ["React", "Firebase", "Cloud"],
    github: "#",
  },
  {
    title: "Secure Authentication System",
    description:
      "Enterprise authentication platform implementing JWT security, encrypted login workflows, and role-based authorization.",
    tech: ["Python", "MongoDB", "JWT"],
    github: "#",
  },
  {
    title: "Traffic Optimization AI",
    description:
      "Computer vision system dynamically adjusting traffic signals based on congestion detection.",
    tech: ["Python", "OpenCV", "Machine Learning"],
  },
]

export default function Projects() {

  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)

  const [selected, setSelected] = useState<Project | null>(null)

  useEffect(() => {

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true)
      },
      { threshold: 0.2 }
    )

    if (ref.current) observer.observe(ref.current)

    return () => observer.disconnect()

  }, [])

  return (

    <div ref={ref} className="container-custom">

      <div className="max-w-3xl mb-20">

        <h2 className="mb-6">
          Featured Engineering Projects
        </h2>

        <p>
          A selection of engineering projects demonstrating backend systems,
          AI applications, and scalable software architecture.
        </p>

      </div>

      <div className="grid lg:grid-cols-2 gap-10">

        {projects.map((project, index) => (

          <div
            key={project.title}
            onClick={() => setSelected(project)}
            className={`group cursor-pointer glass-card p-10
            transition-all duration-700 hover:-translate-y-2
            hover:shadow-[0_0_40px_rgba(99,102,241,0.3)]
            ${
              visible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-12"
            }`}
            style={{ transitionDelay: `${index * 150}ms` }}
          >

            <h3 className="text-xl mb-4 group-hover:text-indigo-400 transition">
              {project.title}
            </h3>

            <p className="text-sm mb-6 text-zinc-400">
              {project.description}
            </p>

            <div className="flex flex-wrap gap-2">

              {project.tech.map((t) => (

                <span
                  key={t}
                  className="glass px-3 py-1 text-xs rounded-lg"
                >
                  {t}
                </span>

              ))}

            </div>

          </div>

        ))}

      </div>

      <ProjectModal
        project={selected}
        onClose={() => setSelected(null)}
      />

    </div>

  )
}