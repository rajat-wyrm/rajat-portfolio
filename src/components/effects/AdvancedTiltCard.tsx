"use client"

import { useRef } from "react"

type Props = {
  children: React.ReactNode
}

export default function AdvancedTiltCard({ children }: Props) {

  const ref = useRef<HTMLDivElement>(null)

  const handleMove = (e: React.MouseEvent) => {

    const el = ref.current
    if (!el) return

    const rect = el.getBoundingClientRect()

    const x = e.clientX - rect.left
    const y = e.clientY - rect.top

    const centerX = rect.width / 2
    const centerY = rect.height / 2

    const rotateX = -(y - centerY) / 15
    const rotateY = (x - centerX) / 15

    el.style.transform = `
      perspective(1000px)
      rotateX(${rotateX}deg)
      rotateY(${rotateY}deg)
      scale3d(1.03,1.03,1.03)
    `

    el.style.setProperty(
      "--spot-x",
      `${(x / rect.width) * 100}%`
    )

    el.style.setProperty(
      "--spot-y",
      `${(y / rect.height) * 100}%`
    )
  }

  const reset = () => {

    const el = ref.current
    if (!el) return

    el.style.transform =
      "perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)"

  }

  return (

    <div
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={reset}
      className="relative transition-transform duration-300"
      style={{
        transformStyle: "preserve-3d",
      }}
    >
      {children}
    </div>

  )
}