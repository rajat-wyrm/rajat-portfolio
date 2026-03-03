"use client";

import { useState } from "react";
import Reveal from "../Reveal";

export default function AISection() {
  const [messages, setMessages] = useState<
    { role: string; text: string }[]
  >([
    {
      role: "ai",
      text: "Hi, I'm Rajat's AI assistant. Ask me about his skills or projects.",
    },
  ]);

  const responses: Record<string, string> = {
    skills:
      "Rajat specializes in MERN stack, TypeScript, scalable backend APIs, and AI integration systems.",
    projects:
      "He has built AI Copilot platforms, secure authentication systems, and full-stack scalable web applications.",
    experience:
      "Currently a Full Stack Development Intern at Soft Nexis, with experience in JPMorgan and Deloitte simulations.",
  };

  const handleAsk = (type: string) => {
    const userMsg = { role: "user", text: type };
    const aiMsg = {
      role: "ai",
      text: responses[type],
    };

    setMessages((prev) => [...prev, userMsg, aiMsg]);
  };

  return (
    <section
      id="ai"
      className="py-40 px-6 max-w-6xl mx-auto"
    >
      {/* Section Title */}
      <Reveal>
        <h2 className="text-5xl font-bold mb-24">
          AI Assistant Demo
        </h2>
      </Reveal>

      <Reveal>
        <div className="bg-[#141414] border border-white/5 rounded-3xl p-12 card-hover">

          {/* Chat Window */}
          <div className="space-y-6 mb-12 max-h-[400px] overflow-y-auto pr-4">

            {messages.map((msg, i) => (
              <div
                key={i}
                className={`flex ${
                  msg.role === "user"
                    ? "justify-end"
                    : "justify-start"
                }`}
              >
                <div
                  className={`px-6 py-4 rounded-2xl max-w-md text-sm transition-all ${
                    msg.role === "user"
                      ? "bg-indigo-500 text-white"
                      : "bg-white/5 text-gray-300"
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}

          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap gap-4">
            <button
              onClick={() => handleAsk("skills")}
              className="px-6 py-3 bg-indigo-500 hover:bg-indigo-600 rounded-xl text-sm"
            >
              Ask about Skills
            </button>

            <button
              onClick={() => handleAsk("projects")}
              className="px-6 py-3 bg-indigo-500 hover:bg-indigo-600 rounded-xl text-sm"
            >
              Ask about Projects
            </button>

            <button
              onClick={() => handleAsk("experience")}
              className="px-6 py-3 bg-indigo-500 hover:bg-indigo-600 rounded-xl text-sm"
            >
              Ask about Experience
            </button>
          </div>

        </div>
      </Reveal>

      {/* Extra Depth Section */}
      <Reveal>
        <div className="mt-32 text-gray-400 leading-relaxed max-w-4xl">
          <h3 className="text-3xl font-semibold mb-6 text-white">
            AI-Driven Future Focus
          </h3>

          <p>
            Rajat integrates AI APIs into production-ready web systems,
            focusing on automation, intelligent workflows, and scalable
            backend logic to future-proof applications.
          </p>
        </div>
      </Reveal>

    </section>
  );
}