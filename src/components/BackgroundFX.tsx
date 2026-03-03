"use client"

import { useEffect, useRef } from "react"

export default function BackgroundFX() {

  const orb1 = useRef<HTMLDivElement>(null)
  const orb2 = useRef<HTMLDivElement>(null)
  const orb3 = useRef<HTMLDivElement>(null)

  useEffect(() => {

    let mouseX = 0
    let mouseY = 0

    const handleMouse = (e: MouseEvent) => {
      mouseX = e.clientX / window.innerWidth - 0.5
      mouseY = e.clientY / window.innerHeight - 0.5
    }

    window.addEventListener("mousemove", handleMouse)

    const animate = () => {

      if (orb1.current) {
        orb1.current.style.transform =
          `translate(${mouseX * 40}px, ${mouseY * 40}px)`
      }

      if (orb2.current) {
        orb2.current.style.transform =
          `translate(${mouseX * -60}px, ${mouseY * -60}px)`
      }

      if (orb3.current) {
        orb3.current.style.transform =
          `translate(${mouseX * 25}px, ${mouseY * -25}px)`
      }

      requestAnimationFrame(animate)
    }

    animate()

    return () => window.removeEventListener("mousemove", handleMouse)

  }, [])

return (
  <div className="fixed inset-0 -z-10 pointer-events-none">

    {/* BASE GRID */}
    <div className="absolute inset-0 grid-bg opacity-40" />

    {/* ORB 1 */}
    <div
      ref={orb1}
      className="absolute top-[10%] left-[15%] w-[600px] h-[600px]"
      style={{
        background:
          "radial-gradient(circle, rgba(99,102,241,0.35), transparent 70%)",
        filter: "blur(120px)",
      }}
    />

    {/* ORB 2 */}
    <div
      ref={orb2}
      className="absolute bottom-[10%] right-[10%] w-[500px] h-[500px]"
      style={{
        background:
          "radial-gradient(circle, rgba(139,92,246,0.35), transparent 70%)",
        filter: "blur(120px)",
      }}
    />

    {/* ORB 3 */}
    <div
      ref={orb3}
      className="absolute top-[45%] left-[45%] w-[450px] h-[450px]"
      style={{
        background:
          "radial-gradient(circle, rgba(59,130,246,0.30), transparent 70%)",
        filter: "blur(120px)",
      }}
    />

  </div>
)
}