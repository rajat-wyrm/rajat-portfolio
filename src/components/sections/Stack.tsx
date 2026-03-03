"use client"

import { useEffect, useRef, useState } from "react"

type StackItem = {
  name: string
  category: string
}

const stack: StackItem[] = [
  { name: "Java", category: "Languages" },
  { name: "Python", category: "Languages" },
  { name: "C", category: "Languages" },
  { name: "C++", category: "Languages" },
  { name: "JavaScript", category: "Languages" },
  { name: "SQL", category: "Languages" },

  { name: "Spring Boot", category: "Frameworks" },
  { name: "React", category: "Frameworks" },
  { name: "Node.js", category: "Frameworks" },
  { name: "Express", category: "Frameworks" },

  { name: "PostgreSQL", category: "Databases" },
  { name: "MySQL", category: "Databases" },
  { name: "MongoDB", category: "Databases" },

  { name: "Git", category: "Tools" },
  { name: "GitHub", category: "Tools" },
  { name: "Linux", category: "Tools" },
  { name: "Postman", category: "Tools" },

  { name: "REST APIs", category: "Concepts" },
  { name: "Microservices", category: "Concepts" },
  { name: "System Design", category: "Concepts" },
  { name: "AI Integration", category: "Concepts" },
]

const categories = [
  "Languages",
  "Frameworks",
  "Databases",
  "Tools",
  "Concepts",
]

export default function Stack() {

  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)
  const [active, setActive] = useState("Languages")

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

  const filtered = stack.filter(s => s.category === active)

  return (

    <div ref={ref} className="container-custom">

      <div className="max-w-3xl mb-16">

        <h2 className="mb-6">
          Technical Stack
        </h2>

        <p>
          My development stack focuses on building scalable backend systems,
          modern full-stack applications, and intelligent developer platforms.
          I work primarily with Java-based backend architectures, modern web
          frameworks, and scalable database technologies.
        </p>

      </div>

      {/* CATEGORY TABS */}

      <div className="flex flex-wrap gap-4 mb-12">

        {categories.map((cat) => (

          <button
            key={cat}
            onClick={() => setActive(cat)}
            className={`px-5 py-2 rounded-xl text-sm transition ${
              active === cat
                ? "bg-indigo-600 text-white"
                : "glass text-zinc-400 hover:text-white"
            }`}
          >
            {cat}
          </button>

        ))}

      </div>

      {/* STACK GRID */}

      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">

        {filtered.map((tech, index) => (

          <div
            key={tech.name}
            className={`glass-card p-6 flex items-center justify-center text-center transition-all duration-700 ${
              visible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-12"
            }`}
            style={{ transitionDelay: `${index * 80}ms` }}
          >

            <span className="text-lg font-medium">
              {tech.name}
            </span>

          </div>

        ))}

      </div>

    </div>

  )
}