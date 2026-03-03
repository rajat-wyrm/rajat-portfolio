"use client"

import { useEffect, useRef, useState } from "react"

const expertise = [
  {
    title: "Backend Systems Engineering",
    text: "Designing and implementing scalable backend architectures capable of handling complex business logic, data processing workflows, and secure API communication. Focused on Java and Spring Boot based systems with clean architecture principles.",
  },
  {
    title: "REST API Architecture",
    text: "Designing RESTful APIs that support reliable communication between distributed services and frontend applications. Implementing structured routing, validation layers, and service-based logic separation.",
  },
  {
    title: "Microservices Architecture",
    text: "Developing modular microservices capable of handling independent system responsibilities. Emphasis on service isolation, messaging workflows, event-driven communication, and scalable deployment models.",
  },
  {
    title: "AI Application Development",
    text: "Integrating artificial intelligence capabilities into modern applications including code analysis tools, developer assistants, intelligent automation workflows, and data-driven recommendation systems.",
  },
  {
    title: "Database Engineering",
    text: "Designing relational and NoSQL database schemas that support scalable applications. Experience working with PostgreSQL, MySQL, and MongoDB to manage structured and semi-structured data efficiently.",
  },
  {
    title: "Secure System Design",
    text: "Implementing authentication and authorization workflows including JWT-based security, encrypted credential handling, session management, and secure API request validation.",
  },
]

export default function Expertise() {

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

      {/* SECTION TITLE */}

      <div className="max-w-3xl mb-20">

        <h2 className="mb-6">
          Core Engineering Expertise
        </h2>

        <p>
          My technical expertise focuses on building scalable backend systems,
          designing well-structured APIs, and integrating intelligent
          capabilities into modern software platforms. I approach software
          engineering with an emphasis on architecture clarity, system
          performance, and long-term maintainability.
        </p>

      </div>

      {/* EXPERTISE GRID */}

      <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">

        {expertise.map((item, index) => (

          <div
            key={index}
            className={`glass-card p-8 transition-all duration-700 ${
              visible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-12"
            }`}
          >

            <h3 className="mb-4 text-xl">
              {item.title}
            </h3>

            <p className="text-sm leading-relaxed">
              {item.text}
            </p>

          </div>

        ))}

      </div>

    </div>

  )
}