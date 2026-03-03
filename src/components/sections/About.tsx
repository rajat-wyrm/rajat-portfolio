"use client"

import { useEffect, useRef, useState } from "react"

const highlights = [
  {
    title: "Backend Engineering",
    text: "Building scalable backend services using Java, Spring Boot, REST APIs, and database-driven architectures.",
  },
  {
    title: "AI-Integrated Systems",
    text: "Designing intelligent developer tools and AI-assisted platforms integrating modern APIs and automation.",
  },
  {
    title: "Microservice Architecture",
    text: "Developing modular systems with clean architecture principles, layered services, and scalable API communication.",
  },
  {
    title: "Database Engineering",
    text: "Designing optimized relational and NoSQL schemas using PostgreSQL, MySQL, and MongoDB.",
  },
  {
    title: "Secure Systems",
    text: "Implementing authentication workflows, JWT authorization, and secure request pipelines.",
  },
  {
    title: "Performance Optimization",
    text: "Improving system performance through optimized queries, efficient APIs, and asynchronous workflows.",
  },
]

export default function About() {

  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
        }
      },
      { threshold: 0.25 }
    )

    if (ref.current) observer.observe(ref.current)

    return () => observer.disconnect()

  }, [])

  return (

    <div ref={ref} className="container-custom">

      {/* TITLE */}

      <div className="max-w-4xl mb-20">

        <h2 className="mb-6">
          Engineering Background
        </h2>

        <p className="mb-6">
          I am a Computer Science Engineering student focused on building
          modern backend systems, scalable APIs, and intelligent software
          platforms. My engineering interests revolve around designing
          high-performance backend architectures that support real-world
          applications, automation tools, and AI-driven systems.
        </p>

        <p className="mb-6">
          My development experience includes working with technologies such as
          Java, Spring Boot, Python, React, and modern database systems to
          create reliable and maintainable software solutions. I enjoy
          designing system architecture, structuring APIs, and building backend
          services capable of handling complex workflows and data processing.
        </p>

        <p className="mb-6">
          During my software engineering experience programs and internships,
          I have worked on real-world engineering scenarios including message
          processing pipelines, transactional systems, RESTful APIs, and
          distributed backend services. These experiences helped me understand
          how large-scale systems are designed, tested, and deployed in
          professional environments.
        </p>

        <p>
          My long-term goal is to become a Software Development Engineer
          specializing in backend architecture, system scalability, and
          AI-powered developer tools. I aim to build software systems that are
          not only functional but also efficient, secure, and maintainable at
          scale.
        </p>

      </div>

      {/* ENGINEERING PHILOSOPHY */}

      <div className="grid lg:grid-cols-2 gap-14 mb-20">

        <div
          className={`space-y-6 transition-all duration-700 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >

          <h3>Engineering Philosophy</h3>

          <p>
            My approach to software engineering focuses on building systems
            that are cleanly structured, scalable, and maintainable. I believe
            good software architecture should simplify complexity rather than
            increase it. Clear module boundaries, structured APIs, and well
            designed data models form the foundation of reliable systems.
          </p>

          <p>
            I prefer designing backend systems using layered architectures
            where controllers, services, and data layers are clearly separated.
            This approach improves code maintainability, testability, and
            long-term scalability as projects evolve.
          </p>

          <p>
            In addition to traditional backend systems, I am increasingly
            exploring the integration of AI capabilities into developer tools,
            productivity platforms, and intelligent automation systems. The
            combination of software engineering and AI creates powerful
            opportunities to build next-generation applications.
          </p>

        </div>

        {/* EDUCATION */}

        <div className="glass-card p-8">

          <h3 className="mb-6">Education</h3>

          <p className="mb-4">
            Bachelor of Engineering in Computer Science
          </p>

          <p className="mb-4 text-sm text-zinc-400">
            Sri Venkateswara College of Engineering
          </p>

          <p className="mb-4">
            Expected Graduation: 2027
          </p>

          <p>
            AICTE PMSSS Scholarship Recipient — Government of India merit-based
            scholarship awarded for academic performance and national level
            selection.
          </p>

        </div>

      </div>

      {/* CAPABILITY GRID */}

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">

        {highlights.map((item, index) => (

          <div
            key={index}
            className="glass-card p-6"
          >

            <h3 className="mb-3 text-lg">
              {item.title}
            </h3>

            <p className="text-sm">
              {item.text}
            </p>

          </div>

        ))}

      </div>

    </div>

  )
}