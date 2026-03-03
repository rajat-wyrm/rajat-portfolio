"use client";

import { useEffect, useState } from "react";
import Reveal from "../Reveal";

type Repo = {
  name: string;
  description: string;
  stars: number;
  url: string;
};

export default function GitHubSection() {
  const [repos, setRepos] = useState<Repo[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/github")
      .then((res) => res.json())
      .then((data) => {
        setRepos(data);
        setLoading(false);
      })
      .catch(() => {
        setLoading(false);
      });
  }, []);

  return (
    <section
      id="github"
      className="py-40 px-6 max-w-7xl mx-auto"
    >
      {/* Heading */}
      <Reveal>
        <h2 className="text-5xl font-bold mb-24">
          Live GitHub Projects
        </h2>
      </Reveal>

      {/* Loading State */}
      {loading && (
        <div className="text-center text-gray-400">
          Fetching repositories...
        </div>
      )}

      {/* Repo Grid */}
      {!loading && (
        <div className="grid md:grid-cols-2 gap-12">
          {repos.length > 0 ? (
            repos.map((repo, index) => (
              <Reveal key={index}>
                <a
                  href={repo.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block bg-[#141414] border border-white/5 rounded-3xl p-10 card-hover shimmer-card"
                >
                  <div className="flex justify-between items-start mb-6">
                    <h3 className="text-2xl font-semibold">
                      {repo.name}
                    </h3>
                    <span className="text-indigo-400 text-sm">
                      ⭐ {repo.stars}
                    </span>
                  </div>

                  <p className="text-gray-400 leading-relaxed text-sm">
                    {repo.description || "No description provided."}
                  </p>
                </a>
              </Reveal>
            ))
          ) : (
            <div className="text-center text-gray-500 col-span-2">
              No repositories found.
            </div>
          )}
        </div>
      )}

      {/* Extra Depth Text */}
      <Reveal>
        <div className="mt-32 max-w-4xl text-gray-400 leading-relaxed">
          <h3 className="text-3xl font-semibold mb-6 text-white">
            Continuous Learning & Contribution
          </h3>
          <p>
            My GitHub reflects ongoing experimentation with scalable
            architecture, backend design patterns, AI integrations,
            and performance-focused frontend systems.
          </p>
        </div>
      </Reveal>
    </section>
  );
}