"use client"

import { useEffect, useState } from "react"

export default function useCountUp(target: number, duration = 1200) {

  const [count, setCount] = useState(0)

  useEffect(() => {

    let start = 0
    const increment = target / (duration / 16)

    const counter = setInterval(() => {

      start += increment

      if (start >= target) {
        setCount(target)
        clearInterval(counter)
      } else {
        setCount(Math.floor(start))
      }

    }, 16)

    return () => clearInterval(counter)

  }, [target, duration])

  return count
}