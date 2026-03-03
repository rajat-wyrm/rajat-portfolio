"use client"

import { useEffect, useRef } from "react"

export default function useParallax(speed: number = 0.2) {

  const ref = useRef<HTMLDivElement | null>(null)

  useEffect(() => {

    const element = ref.current
    if (!element) return

    const handleScroll = () => {

      const offset = window.scrollY * speed
      element.style.transform = `translateY(${offset}px)`

    }

    window.addEventListener("scroll", handleScroll)

    return () => window.removeEventListener("scroll", handleScroll)

  }, [speed])

  return ref
}