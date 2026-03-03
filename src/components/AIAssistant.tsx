"use client"

import { useState } from "react"

export default function AIAssistant() {

  const [open, setOpen] = useState(false)
  const [messages, setMessages] = useState<string[]>([])
  const [input, setInput] = useState("")

  const ask = async () => {

    if (!input) return

    const user = input
    setMessages((m) => [...m, "You: " + user])
    setInput("")

    const res = await fetch("/api/ai", {
      method: "POST",
      body: JSON.stringify({ question: user }),
    })

    const data = await res.json()

    setMessages((m) => [...m, "AI: " + data.answer])

  }

  return (

    <div className="fixed bottom-6 right-6 z-50">

      {/* Floating Button */}

      {!open && (

        <button
          onClick={() => setOpen(true)}
          className="glass px-4 py-2 rounded-full text-sm hover:bg-white/10 transition"
        >
          Ask AI
        </button>

      )}

      {/* Chat Window */}

      {open && (

        <div className="w-72 glass-card p-4 rounded-xl">

          <div className="flex justify-between mb-3">

            <h4 className="text-sm">
              Ask about Rajat
            </h4>

            <button
              onClick={() => setOpen(false)}
              className="text-xs opacity-70 hover:opacity-100"
            >
              ✕
            </button>

          </div>

          <div className="h-32 overflow-y-auto text-xs mb-3 space-y-2">

            {messages.map((m, i) => (
              <p key={i}>{m}</p>
            ))}

          </div>

          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Ask something..."
            className="w-full glass px-3 py-2 text-xs mb-2"
          />

          <button
            onClick={ask}
            className="btn-primary w-full text-xs"
          >
            Ask
          </button>

        </div>

      )}

    </div>

  )
}