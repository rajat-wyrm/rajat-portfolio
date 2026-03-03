"use client"

import { useEffect, useRef, useState } from "react"

type Achievement = {
  title: string
  description: string
  year?: string
}

const achievements: Achievement[] = [
  {
    title: "Cadet Warrant Officer – NCC Air Wing",
    year: "2025",
    description:
      "Served as Cadet Warrant Officer responsible for mentoring and managing over 80 cadets during training, drills, and national camp preparations. Developed leadership, discipline, and operational planning capabilities.",
  },
  {
    title: "NCC C Certificate Holder",
    year: "2025",
    description:
      "Successfully completed the highest certification level in the National Cadet Corps demonstrating leadership ability, discipline, and commitment to national training programs.",
  },
  {
    title: "Selected for National Level NCC Camps",
    year: "2025",
    description:
      "Selected for prestigious NCC camps including leadership and national-level training programs where advanced leadership and operational skills were evaluated.",
  },
  {
    title: "AICTE PMSSS Scholarship Recipient",
    year: "2023",
    description:
      "Awarded the Government of India PMSSS merit-based scholarship recognizing academic excellence and national-level competitive selection.",
  },
]

export default function Achievements() {

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
          Achievements & Recognition
        </h2>

        <p>
          Alongside software engineering development, I have participated in
          leadership programs and national-level activities that have helped
          build discipline, strategic thinking, and execution ability. These
          achievements reflect my commitment to continuous improvement both
          technically and personally.
        </p>

      </div>

      {/* ACHIEVEMENT GRID */}

      <div className="grid md:grid-cols-2 gap-10">

        {achievements.map((item, index) => (

          <div
            key={item.title}
            className={`glass-card p-10 transition-all duration-700 hover:-translate-y-1 ${
              visible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-12"
            }`}
            style={{ transitionDelay: `${index * 120}ms` }}
          >

            <div className="flex justify-between items-start mb-4">

              <h3 className="text-xl">
                {item.title}
              </h3>

              {item.year && (
                <span className="text-sm text-zinc-500">
                  {item.year}
                </span>
              )}

            </div>

            <p className="text-sm leading-relaxed text-zinc-300">
              {item.description}
            </p>

          </div>

        ))}

      </div>

    </div>

  )
}