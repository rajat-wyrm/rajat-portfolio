"use client"

import { useEffect, useRef, useState } from "react"

type Interest = {
  title: string
  description: string
}

const interests: Interest[] = [
  {
    title: "Software Engineering",
    description:
      "Exploring scalable system architectures, backend engineering patterns, and modern development frameworks. I enjoy learning about distributed systems, microservices architecture, and building developer-focused tools.",
  },
  {
    title: "Artificial Intelligence Systems",
    description:
      "Interested in how artificial intelligence can enhance developer productivity and automation. I actively explore AI integrations for code analysis, recommendation systems, and intelligent developer assistants.",
  },
  {
    title: "Aviation Technology",
    description:
      "With my background in NCC Air Wing, I have a strong interest in aviation systems, aerospace engineering concepts, and modern technological innovations in flight systems.",
  },
  {
    title: "Fitness & Combat Sports",
    description:
      "Regular gym training and combat sports help maintain discipline, endurance, and mental resilience. Physical training complements my focus on structured thinking and performance.",
  },
  {
    title: "Science & Technology Research",
    description:
      "Passionate about exploring emerging technologies, scientific discoveries, and futuristic innovations that shape the next generation of engineering solutions.",
  },
  {
    title: "Problem Solving & Algorithms",
    description:
      "I enjoy solving algorithmic challenges and improving problem-solving ability through coding practice and technical exploration.",
  },
]

export default function Interests() {

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
          Interests & Exploration
        </h2>

        <p>
          Beyond professional development, I actively explore fields that
          expand my understanding of technology, science, and personal
          discipline. These interests contribute to my long-term growth as an
          engineer and problem solver.
        </p>

      </div>

      {/* GRID */}

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">

        {interests.map((interest, index) => (

          <div
            key={interest.title}
            className={`glass-card p-8 transition-all duration-700 hover:-translate-y-1 ${
              visible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-12"
            }`}
            style={{ transitionDelay: `${index * 120}ms` }}
          >

            <h3 className="text-lg mb-3">
              {interest.title}
            </h3>

            <p className="text-sm leading-relaxed text-zinc-300">
              {interest.description}
            </p>

          </div>

        ))}

      </div>

    </div>
  )
}