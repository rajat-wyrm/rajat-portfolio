"use client"

import { useEffect, useState } from "react"

export default function ScrollProgress() {

  const [progress, setProgress] = useState(0)

  useEffect(() => {

    const updateProgress = () => {

      const scrollTop = window.scrollY

      const height =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight

      const scrolled = (scrollTop / height) * 100

      setProgress(scrolled)
    }

    updateProgress()

    window.addEventListener("scroll", updateProgress)
    window.addEventListener("resize", updateProgress)

    return () => {
      window.removeEventListener("scroll", updateProgress)
      window.removeEventListener("resize", updateProgress)
    }

  }, [])

  return (

    <div className="fixed top-0 left-0 w-full h-[3px] z-[9999]">

      <div
        className="h-full bg-gradient-to-r from-indigo-500 via-purple-500 to-blue-500 transition-all duration-150"
        style={{ width: `${progress}%` }}
      />

    </div>

  )
}