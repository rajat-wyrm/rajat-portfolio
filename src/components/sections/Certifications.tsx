"use client"

import { useEffect, useRef, useState } from "react"

type Certification = {
  title: string
  issuer: string
  description: string
  year: string
}

const certifications: Certification[] = [
  {
    title: "Postman API Fundamentals Student Expert",
    issuer: "Postman",
    year: "2026",
    description:
      "Demonstrated proficiency in designing, testing, and documenting REST APIs using Postman tools and modern API development practices.",
  },
  {
    title: "AWS Educate Cloud Foundations",
    issuer: "Amazon Web Services",
    year: "2025",
    description:
      "Gained foundational knowledge of cloud computing, infrastructure services, storage systems, and scalable cloud architecture design.",
  },
  {
    title: "Google Cloud Skills Boost – Cloud Foundations",
    issuer: "Google Cloud",
    year: "2025",
    description:
      "Learned fundamental concepts of cloud infrastructure, deployment models, cloud storage systems, and application scaling strategies.",
  },
  {
    title: "Deloitte Technology Job Simulation",
    issuer: "Deloitte Australia (Forage)",
    year: "2026",
    description:
      "Completed hands-on enterprise software engineering simulation involving system design planning, architecture documentation, and solution development strategy.",
  },
]

export default function Certifications() {

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
          Certifications & Professional Learning
        </h2>

        <p>
          Continuous learning is an essential part of my engineering journey.
          These certifications represent my commitment to strengthening my
          understanding of modern software engineering practices, API
          development, and cloud computing technologies.
        </p>

      </div>

      {/* CERTIFICATION GRID */}

      <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-10">

        {certifications.map((cert, index) => (

          <div
            key={cert.title}
            className={`glass-card p-10 transition-all duration-700 hover:-translate-y-2 ${
              visible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-12"
            }`}
            style={{ transitionDelay: `${index * 150}ms` }}
          >

            <div className="flex justify-between items-start mb-4">

              <h3 className="text-xl">
                {cert.title}
              </h3>

              <span className="text-sm text-zinc-500">
                {cert.year}
              </span>

            </div>

            <p className="text-sm text-zinc-400 mb-3">
              {cert.issuer}
            </p>

            <p className="text-sm leading-relaxed">
              {cert.description}
            </p>

          </div>

        ))}

      </div>

    </div>
  )
}