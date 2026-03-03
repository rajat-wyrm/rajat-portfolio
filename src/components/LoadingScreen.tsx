"use client"

import { useEffect, useState } from "react"

export default function LoadingScreen() {

  const [mounted, setMounted] = useState(false)
  const [loading, setLoading] = useState(true)

  useEffect(() => {

    setMounted(true)

    const timer = setTimeout(() => {
      setLoading(false)
    }, 1000)

    return () => clearTimeout(timer)

  }, [])

  if (!mounted || !loading) return null

  return (

    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-[var(--bg-primary)]">

      <div className="flex flex-col items-center gap-6">

        <h1 className="text-2xl font-semibold bg-gradient-to-r from-indigo-500 via-purple-500 to-blue-500 bg-clip-text text-transparent animate-pulse">
          Rajat Kumar
        </h1>

        <div className="w-48 h-[3px] bg-zinc-800 overflow-hidden rounded">

          <div className="h-full w-full bg-gradient-to-r from-indigo-500 via-purple-500 to-blue-500 animate-pulse" />

        </div>

      </div>

    </div>

  )
}