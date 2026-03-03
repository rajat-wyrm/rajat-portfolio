"use client"

import { useEffect, useRef, useState } from "react"

type Stat = {
  label: string
  value: number
}

const stats: Stat[] = [
  { label: "Projects Built", value: 12 },
  { label: "Technologies Used", value: 20 },
  { label: "Repositories", value: 25 },
  { label: "Coding Hours", value: 1500 },
]

export default function Stats() {

  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)

  const [counts, setCounts] = useState(stats.map(() => 0))

  useEffect(() => {

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
        }
      },
      { threshold: 0.3 }
    )

    if (ref.current) observer.observe(ref.current)

    return () => observer.disconnect()

  }, [])

  useEffect(() => {

    if (!visible) return

    const duration = 1200
    const frameRate = 30
    const totalFrames = duration / frameRate

    let frame = 0

    const interval = setInterval(() => {

      frame++

      setCounts(
        stats.map((stat) =>
          Math.min(
            stat.value,
            Math.floor((stat.value / totalFrames) * frame)
          )
        )
      )

      if (frame >= totalFrames) clearInterval(interval)

    }, frameRate)

    return () => clearInterval(interval)

  }, [visible])

  return (

    <div ref={ref} className="container-custom">

      {/* TITLE */}

      <div className="max-w-3xl mb-20">

        <h2 className="mb-6">
          Engineering Metrics
        </h2>

        <p>
          These metrics reflect my hands-on engineering journey including
          software projects, technologies explored, and development hours
          invested in building modern applications and systems.
        </p>

      </div>

      {/* STATS GRID */}

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">

        {stats.map((stat, index) => (

          <div
            key={stat.label}
            className="glass-card p-10 text-center transition hover:-translate-y-1"
          >

            <h3 className="text-4xl font-bold mb-3 text-indigo-500">
              {counts[index]}+
            </h3>

            <p className="text-sm text-zinc-400">
              {stat.label}
            </p>

          </div>

        ))}

      </div>

    </div>

  )
}