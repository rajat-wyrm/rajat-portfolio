"use client";

import { useEffect, useRef, useState } from "react";

const skills = [
  { name: "TypeScript", level: 92 },
  { name: "React", level: 90 },
  { name: "Node.js", level: 87 },
  { name: "MongoDB", level: 85 },
  { name: "AI Systems", level: 88 },
  { name: "System Design", level: 86 },
];

export default function Stack() {
  const ref = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(false);
  const [progress, setProgress] = useState(
    skills.map(() => 0)
  );

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setActive(true);
          observer.disconnect();
        }
      },
      { threshold: 0.4 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!active) return;

    skills.forEach((skill, i) => {
      const duration = 1600;
      const start = performance.now();

      const animate = (time: number) => {
        const elapsed = time - start;
        const ratio = Math.min(elapsed / duration, 1);
        const eased = 1 - Math.pow(1 - ratio, 4);

        setProgress((prev) => {
          const updated = [...prev];
          updated[i] = Math.floor(
            eased * skill.level
          );
          return updated;
        });

        if (ratio < 1) requestAnimationFrame(animate);
      };

      requestAnimationFrame(animate);
    });
  }, [active]);

  return (
    <section
      ref={ref}
      className="py-44 px-6"
    >
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-5xl font-bold mb-24">
          Intelligence Matrix
        </h2>

        <div className="grid md:grid-cols-3 gap-16">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="relative group p-10 rounded-3xl bg-white/5 backdrop-blur-lg border border-white/10 hover:border-indigo-500/40 transition-all duration-500"
            >
              <div className="text-4xl font-bold text-indigo-400 mb-4">
                {progress[index]}%
              </div>

              <div className="text-lg font-semibold mb-6">
                {skill.name}
              </div>

              <div className="relative h-2 bg-white/10 rounded-full overflow-hidden">
                <div
                  className="absolute inset-y-0 left-0 bg-gradient-to-r from-indigo-500 to-purple-500 transition-all duration-700"
                  style={{
                    width: `${progress[index]}%`,
                  }}
                />

                <div
                  className="absolute top-0 h-full w-16 bg-white/40 blur-lg opacity-40"
                  style={{
                    left: `${progress[index] - 10}%`,
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}