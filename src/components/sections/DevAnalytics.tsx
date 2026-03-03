"use client"

import { useEffect, useState } from "react"

export default function DevAnalytics() {

  const [repos, setRepos] = useState(0)
  const [followers, setFollowers] = useState(0)

  useEffect(() => {

    fetch("https://api.github.com/users/rajat-wyrm")
      .then((res) => res.json())
      .then((data) => {

        setRepos(data.public_repos)
        setFollowers(data.followers)

      })

  }, [])

  return (

    <div className="container-custom">

      <div className="max-w-3xl mb-20">

        <h2 className="mb-6">
          Developer Analytics
        </h2>

        <p>
          Real-time statistics reflecting my open-source
          contributions and development activity.
        </p>

      </div>

      <div className="grid md:grid-cols-3 gap-10">

        <div className="glass-card p-10 text-center">

          <h3 className="text-4xl text-indigo-500 mb-3">
            {repos}
          </h3>

          <p className="text-sm text-zinc-400">
            GitHub Repositories
          </p>

        </div>

        <div className="glass-card p-10 text-center">

          <h3 className="text-4xl text-indigo-500 mb-3">
            {followers}
          </h3>

          <p className="text-sm text-zinc-400">
            GitHub Followers
          </p>

        </div>

        <div className="glass-card p-10 text-center">

          <h3 className="text-4xl text-indigo-500 mb-3">
            1000+
          </h3>

          <p className="text-sm text-zinc-400">
            Coding Hours
          </p>

        </div>

      </div>

    </div>

  )
}