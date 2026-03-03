"use client"

import { useEffect, useState, useRef } from "react"

type Repo = {
  name: string
  description: string
  html_url: string
  stargazers_count: number
  language: string
}

export default function GitHubActivity() {

  const [repos, setRepos] = useState<Repo[]>([])
  const [loading, setLoading] = useState(true)

  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true)
      },
      { threshold: 0.2 }
    )

    if (ref.current) observer.observe(ref.current)

    return () => observer.disconnect()

  }, [])

  useEffect(() => {

    const fetchRepos = async () => {

      try {

        const res = await fetch(
          "https://api.github.com/users/rajat-wyrm/repos?sort=updated"
        )

        const data = await res.json()

        setRepos(data.slice(0, 6))

      } catch (error) {

        console.error(error)

      } finally {

        setLoading(false)

      }
    }

    fetchRepos()

  }, [])

  return (

    <div ref={ref} className="container-custom">

      {/* TITLE */}

      <div className="max-w-3xl mb-20">

        <h2 className="mb-6">
          GitHub Activity
        </h2>

        <p>
          My GitHub repositories showcase my hands-on work across backend
          systems, developer tools, automation projects, and experimental
          engineering ideas. This section dynamically loads my latest
          repositories directly from GitHub.
        </p>

      </div>

      {loading && (
        <p className="text-zinc-400">Loading repositories...</p>
      )}

      {/* REPOSITORY GRID */}

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

        {repos.map((repo, index) => (

          <a
            key={repo.name}
            href={repo.html_url}
            target="_blank"
            className={`glass-card p-8 transition-all duration-700 hover:-translate-y-1 ${
              visible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-12"
            }`}
            style={{ transitionDelay: `${index * 120}ms` }}
          >

            <h3 className="text-lg mb-2">
              {repo.name}
            </h3>

            <p className="text-sm text-zinc-400 mb-4">
              {repo.description || "Repository project"}
            </p>

            <div className="flex justify-between text-xs text-zinc-500">

              <span>{repo.language || "Code"}</span>

              <span>⭐ {repo.stargazers_count}</span>

            </div>

          </a>

        ))}

      </div>

    </div>

  )
}