"use client"

import { useEffect, useRef, useState } from "react"

export default function Leadership() {

  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true)
      },
      { threshold: 0.25 }
    )

    if (ref.current) observer.observe(ref.current)

    return () => observer.disconnect()

  }, [])

  return (

    <div ref={ref} className="container-custom">

      {/* TITLE */}

      <div className="max-w-3xl mb-20">

        <h2 className="mb-6">
          Leadership & Discipline
        </h2>

        <p>
          Beyond software engineering, leadership and discipline play a major
          role in shaping how I approach challenges. My experience as a Cadet
          Warrant Officer in the National Cadet Corps has helped me develop
          strong execution ability, decision-making skills, and the capability
          to lead teams effectively in demanding environments.
        </p>

      </div>

      {/* MAIN CARD */}

      <div
        className={`glass-card p-10 transition-all duration-700 ${
          visible
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-10"
        }`}
      >

        <h3 className="text-xl mb-4">
          Cadet Warrant Officer — NCC Air Wing
        </h3>

        <p className="text-sm mb-6 leading-relaxed">
          Served as a Cadet Warrant Officer responsible for mentoring,
          coordinating, and leading a group of more than 80 cadets in training
          activities, leadership exercises, and operational preparations.
          The role required strong discipline, accountability, and effective
          communication while maintaining high standards of teamwork and
          performance.
        </p>

        <ul className="space-y-3 text-sm text-zinc-300">

          <li className="flex gap-3">
            <span className="text-indigo-400">•</span>
            Led and coordinated training activities for large cadet groups
            during drills, camps, and operational preparation programs.
          </li>

          <li className="flex gap-3">
            <span className="text-indigo-400">•</span>
            Developed leadership, strategic thinking, and execution discipline
            through structured NCC leadership responsibilities.
          </li>

          <li className="flex gap-3">
            <span className="text-indigo-400">•</span>
            Selected for prestigious NCC camps including national-level
            training and leadership programs.
          </li>

          <li className="flex gap-3">
            <span className="text-indigo-400">•</span>
            Earned NCC C Certificate demonstrating commitment, leadership
            capability, and national-level cadet training completion.
          </li>

        </ul>

      </div>

      {/* STATS */}

      <div className="grid md:grid-cols-3 gap-6 mt-14">

        <div className="glass-card p-8 text-center">
          <h3 className="text-3xl mb-2 text-indigo-500">80+</h3>
          <p className="text-sm text-zinc-400">
            Cadets Led
          </p>
        </div>

        <div className="glass-card p-8 text-center">
          <h3 className="text-3xl mb-2 text-indigo-500">NCC</h3>
          <p className="text-sm text-zinc-400">
            C Certificate
          </p>
        </div>

        <div className="glass-card p-8 text-center">
          <h3 className="text-3xl mb-2 text-indigo-500">National</h3>
          <p className="text-sm text-zinc-400">
            Camp Selection
          </p>
        </div>

      </div>

    </div>
  )
}