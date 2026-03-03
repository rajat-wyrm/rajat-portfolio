"use client"

import { useEffect, useRef } from "react"

type Node = {
  x: number
  y: number
  vx: number
  vy: number
}

export default function TechConstellation() {

  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {

    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    let width = window.innerWidth
    let height = window.innerHeight

    canvas.width = width
    canvas.height = height

    const NODE_COUNT = 40
    const MAX_DISTANCE = 140

    const nodes: Node[] = []

    for (let i = 0; i < NODE_COUNT; i++) {
      nodes.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
      })
    }

    const resize = () => {
      width = window.innerWidth
      height = window.innerHeight
      canvas.width = width
      canvas.height = height
    }

    window.addEventListener("resize", resize)

    const draw = () => {

      ctx.clearRect(0, 0, width, height)

      /* Move nodes */

      nodes.forEach((node) => {

        node.x += node.vx
        node.y += node.vy

        if (node.x < 0 || node.x > width) node.vx *= -1
        if (node.y < 0 || node.y > height) node.vy *= -1

        /* Draw node */

        ctx.beginPath()
        ctx.arc(node.x, node.y, 2, 0, Math.PI * 2)
        ctx.fillStyle = "rgba(120,140,255,0.9)"
        ctx.fill()

      })

      /* Draw connections */

      for (let i = 0; i < nodes.length; i++) {

        for (let j = i + 1; j < nodes.length; j++) {

          const dx = nodes[i].x - nodes[j].x
          const dy = nodes[i].y - nodes[j].y
          const dist = Math.sqrt(dx * dx + dy * dy)

          if (dist < MAX_DISTANCE) {

            const opacity = 1 - dist / MAX_DISTANCE

            ctx.beginPath()
            ctx.moveTo(nodes[i].x, nodes[i].y)
            ctx.lineTo(nodes[j].x, nodes[j].y)

            ctx.strokeStyle = `rgba(120,140,255,${opacity * 0.5})`
            ctx.lineWidth = 1
            ctx.stroke()

          }
        }
      }

      requestAnimationFrame(draw)
    }

    draw()

    return () => {
      window.removeEventListener("resize", resize)
    }

  }, [])

  return (

    <canvas
      ref={canvasRef}
      className="fixed inset-0 -z-20 pointer-events-none opacity-40"
    />

  )
}