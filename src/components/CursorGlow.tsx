"use client"

import { useEffect, useRef } from "react"

export default function CursorGlow() {

  const glowRef = useRef<HTMLDivElement>(null)

  useEffect(() => {

    if (window.innerWidth < 768) return

    let mouseX = 0
    let mouseY = 0

    let currentX = 0
    let currentY = 0

    const speed = 0.15

    const moveMouse = (e: MouseEvent) => {

      mouseX = e.clientX
      mouseY = e.clientY
    }

    const animate = () => {

      currentX += (mouseX - currentX) * speed
      currentY += (mouseY - currentY) * speed

      if (glowRef.current) {

        glowRef.current.style.transform =
          `translate(${currentX}px, ${currentY}px) translate(-50%, -50%)`
      }

      requestAnimationFrame(animate)
    }

    window.addEventListener("mousemove", moveMouse)

    animate()

    return () => {
      window.removeEventListener("mousemove", moveMouse)
    }

  }, [])

  return (

    <div
      ref={glowRef}
      className="pointer-events-none fixed z-0 w-[500px] h-[500px] rounded-full opacity-40 blur-[120px]"
      style={{
        background:
          "radial-gradient(circle, rgba(99,102,241,0.35), transparent 70%)",
      }}
    />

  )
}