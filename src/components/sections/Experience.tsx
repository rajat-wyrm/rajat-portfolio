"use client"

import { useEffect, useRef, useState } from "react"

type Experience = {
  company: string
  role: string
  duration: string
  description: string[]
}

const experiences: Experience[] = [
  {
    company: "SoftNexis Technologies",
    role: "Full Stack Development Intern",
    duration: "2026 – Present",
    description: [
      "Working on modern full-stack web application development using React, backend APIs, and scalable database architectures.",
      "Developing modular application components following clean code practices and maintainable project structure.",
      "Implementing REST API communication between frontend interfaces and backend services.",
      "Participating in real-world software development workflows including Git version control, feature iteration, and debugging production-like systems.",
      "Collaborating on performance optimization, UI responsiveness, and application architecture improvements.",
    ],
  },
  {
    company: "JPMorgan Chase & Co.",
    role: "Software Engineering Virtual Intern",
    duration: "Feb 2026",
    description: [
      "Integrated Kafka messaging into a Spring Boot microservice to process high-volume financial transaction messages.",
      "Implemented transaction validation and persistence using Spring Data JPA with an H2 relational database.",
      "Connected backend service with an external REST Incentive API using RestTemplate to handle transaction rewards.",
      "Developed REST endpoints to query user balances using a controller-service-repository architecture.",
      "Tested system reliability using Maven test suites and debugger inspection across message ingestion and database workflows.",
    ],
  },
  {
    company: "Deloitte Australia (Forage)",
    role: "Technology Job Simulation",
    duration: "Feb 2026",
    description: [
      "Completed Deloitte technology simulation involving enterprise-scale system design and software architecture planning.",
      "Designed a conceptual architecture for a real-time manufacturing monitoring dashboard.",
      "Defined backend services, telemetry data ingestion pipelines, and authentication workflows.",
      "Prepared structured documentation outlining development phases, project milestones, and deployment strategies.",
      "Demonstrated understanding of enterprise development planning and software lifecycle processes.",
    ],
  },
]

export default function Experience() {
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
          Engineering Experience
        </h2>

        <p>
          My professional development includes hands-on engineering experience
          through internships and technical simulations focused on backend
          system architecture, API integration, and scalable software
          development workflows.
        </p>

      </div>

      {/* TIMELINE */}

      <div className="relative border-l border-white/10 pl-10 space-y-14">

        {experiences.map((exp, index) => (

          <div
            key={exp.company}
            className={`transition-all duration-700 ${
              visible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
            style={{ transitionDelay: `${index * 200}ms` }}
          >

            {/* DOT */}

            <div className="absolute -left-[6px] w-3 h-3 bg-indigo-500 rounded-full" />

            {/* CARD */}

            <div className="glass-card p-8">

              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">

                <div>
                  <h3 className="text-xl mb-1">
                    {exp.role}
                  </h3>

                  <p className="text-sm text-zinc-400">
                    {exp.company}
                  </p>
                </div>

                <span className="text-sm text-zinc-500 mt-2 md:mt-0">
                  {exp.duration}
                </span>

              </div>

              {/* DESCRIPTION */}

              <ul className="space-y-3 text-sm text-zinc-300">

                {exp.description.map((point, i) => (
                  <li key={i} className="flex gap-3">
                    <span className="text-indigo-400">•</span>
                    <span>{point}</span>
                  </li>
                ))}

              </ul>

            </div>

          </div>

        ))}

      </div>

    </div>
  )
}