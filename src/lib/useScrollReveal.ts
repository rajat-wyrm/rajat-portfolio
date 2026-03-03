"use client"

import { useEffect, useRef, useState } from "react"

export default function useScrollReveal<T extends HTMLElement>(
  threshold: number = 0.2
) {

  const ref = useRef<T | null>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {

    const element = ref.current
    if (!element) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.unobserve(entry.target)
        }
      },
      { threshold }
    )

    observer.observe(element)

    return () => observer.disconnect()

  }, [threshold])

  return { ref, visible }
}