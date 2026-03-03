"use client"

import { useRef } from "react"

type Props = {
  children: React.ReactNode
  className?: string
  onClick?: () => void
}

export default function MagneticButton({ children, className, onClick }: Props) {

  const ref = useRef<HTMLButtonElement>(null)

  const handleMouseMove = (e: React.MouseEvent) => {

    const button = ref.current
    if (!button) return

    const rect = button.getBoundingClientRect()

    const x = e.clientX - rect.left
    const y = e.clientY - rect.top

    const moveX = (x - rect.width / 2) * 0.25
    const moveY = (y - rect.height / 2) * 0.25

    button.style.transform = `translate(${moveX}px, ${moveY}px)`
  }

  const handleMouseLeave = () => {

    const button = ref.current
    if (!button) return

    button.style.transform = "translate(0px,0px)"
  }

  return (

    <button
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
      className={`transition-transform duration-200 ${className}`}
    >

      {children}

    </button>

  )
}