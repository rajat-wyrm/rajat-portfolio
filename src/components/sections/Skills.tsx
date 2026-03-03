"use client"

import { useEffect, useRef, useState } from "react"

type Skill = {
  name: string
  value: number
  category: string
}

const skills: Skill[] = [
  { name: "Java", value: 90, category: "Backend" },
  { name: "Spring Boot", value: 85, category: "Backend" },
  { name: "REST API Development", value: 88, category: "Backend" },
  { name: "Microservices Architecture", value: 82, category: "Backend" },

  { name: "React", value: 80, category: "Frontend" },
  { name: "JavaScript / TypeScript", value: 83, category: "Frontend" },

  { name: "PostgreSQL", value: 85, category: "Database" },
  { name: "MongoDB", value: 82, category: "Database" },
  { name: "MySQL", value: 84, category: "Database" },

  { name: "System Design", value: 80, category: "Architecture" },
  { name: "AI Integration", value: 78, category: "Architecture" },
  { name: "Secure Authentication", value: 85, category: "Architecture" },
]

export default function Skills() {

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
          Technical Proficiency
        </h2>

        <p>
          My technical proficiency spans backend engineering, full-stack
          application development, database architecture, and AI-integrated
          software systems. The following metrics reflect my hands-on
          experience building production-oriented applications and scalable
          system components.
        </p>

      </div>

      {/* SKILLS GRID */}

      <div className="grid lg:grid-cols-2 gap-10">

        {skills.map((skill, index) => (

          <div
            key={skill.name}
            className="glass-card p-6"
          >

            <div className="flex justify-between mb-3">

              <span className="text-sm font-medium">
                {skill.name}
              </span>

              <span className="text-sm text-zinc-400">
                {skill.value}%
              </span>

            </div>

            {/* PROGRESS BAR */}

            <div className="w-full h-[10px] bg-zinc-800 rounded-full overflow-hidden">

              <div
                className="h-full bg-gradient-to-r from-indigo-500 via-purple-500 to-blue-500 transition-all duration-[1200ms] ease-out"
                style={{
                  width: visible ? `${skill.value}%` : "0%",
                  transitionDelay: `${index * 120}ms`
                }}
              />

            </div>

          </div>

        ))}

      </div>

    </div>

  )
}