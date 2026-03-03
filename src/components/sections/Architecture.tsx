"use client"

import { useEffect, useRef, useState } from "react"

type ArchBlock = {
  title: string
  description: string
  items: string[]
}

const architecture: ArchBlock[] = [
  {
    title: "Backend Architecture",
    description:
      "Modern backend systems are built with modular layered architecture to ensure maintainability, scalability, and performance. My backend engineering approach focuses on separating business logic, API communication, and database access into well-structured service layers.",
    items: [
      "Controller → Service → Repository architecture",
      "REST API based communication",
      "Spring Boot backend services",
      "Modular backend microservices",
      "Database abstraction layers",
    ],
  },
  {
    title: "API Design Strategy",
    description:
      "Well-designed APIs form the foundation of modern distributed applications. I focus on creating predictable, well-documented API interfaces that enable seamless communication between services and frontend systems.",
    items: [
      "RESTful API design principles",
      "JSON structured responses",
      "Error handling architecture",
      "Authentication middleware",
      "External API integration",
    ],
  },
  {
    title: "Database Engineering",
    description:
      "Reliable applications require well-designed data models. I design relational and NoSQL schemas that support scalability, data integrity, and high-performance querying.",
    items: [
      "PostgreSQL relational schema design",
      "MongoDB document modeling",
      "Query performance optimization",
      "Indexing strategies",
      "Secure database access",
    ],
  },
  {
    title: "AI Integrated Systems",
    description:
      "Modern software increasingly integrates artificial intelligence capabilities. My engineering focus includes building platforms where AI services assist developers and automate workflows.",
    items: [
      "AI-powered developer tools",
      "Code analysis systems",
      "Automated interview preparation tools",
      "AI-based recommendation engines",
      "Developer productivity analytics",
    ],
  },
]

export default function Architecture() {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)

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

      {/* TITLE */}

      <div className="max-w-3xl mb-20">

        <h2 className="mb-6">
          Engineering Architecture Approach
        </h2>

        <p>
          My approach to software engineering focuses on designing structured,
          scalable systems that follow clean architecture principles. I aim to
          build backend services and developer platforms that remain maintainable,
          efficient, and extensible as applications grow in complexity.
        </p>

      </div>

      {/* ARCHITECTURE GRID */}

      <div className="grid lg:grid-cols-2 gap-10">

        {architecture.map((block, index) => (

          <div
            key={block.title}
            className={`glass-card p-10 transition-all duration-700 ${
              visible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-12"
            }`}
            style={{ transitionDelay: `${index * 150}ms` }}
          >

            <h3 className="text-xl mb-4">
              {block.title}
            </h3>

            <p className="text-sm mb-6 leading-relaxed">
              {block.description}
            </p>

            <ul className="space-y-2 text-sm text-zinc-300">

              {block.items.map((item, i) => (

                <li key={i} className="flex gap-3">
                  <span className="text-indigo-400">•</span>
                  <span>{item}</span>
                </li>

              ))}

            </ul>

          </div>

        ))}

      </div>

    </div>
  )
}