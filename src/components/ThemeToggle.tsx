"use client"

import { useEffect, useState } from "react"

export default function ThemeToggle() {

  const [dark, setDark] = useState(true)

  useEffect(() => {

    const stored = localStorage.getItem("theme")

    if (stored === "light") {
      document.documentElement.classList.remove("dark")
      setDark(false)
    } else {
      document.documentElement.classList.add("dark")
      setDark(true)
    }

  }, [])

  const toggleTheme = () => {

    if (dark) {

      document.documentElement.classList.remove("dark")
      localStorage.setItem("theme", "light")
      setDark(false)

    } else {

      document.documentElement.classList.add("dark")
      localStorage.setItem("theme", "dark")
      setDark(true)

    }

  }

  return (

    <button
      onClick={toggleTheme}
      className="glass px-4 py-2 rounded-xl text-sm hover:bg-white/10 transition"
      aria-label="Toggle theme"
    >

      {dark ? "🌙 Dark" : "☀️ Light"}

    </button>

  )
}