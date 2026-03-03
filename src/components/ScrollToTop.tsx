"use client"

import { useEffect, useState } from "react"

export default function ScrollToTop() {

  const [visible, setVisible] = useState(false)

  useEffect(() => {

    const handleScroll = () => {
      setVisible(window.scrollY > 500)
    }

    window.addEventListener("scroll", handleScroll)

    return () => window.removeEventListener("scroll", handleScroll)

  }, [])

  const scrollTop = () => {

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })

  }

  if (!visible) return null

  return (

    <button
      onClick={scrollTop}
      className="fixed bottom-8 right-8 glass px-4 py-3 rounded-xl hover:bg-white/10 transition z-50"
    >
      ↑
    </button>

  )
}