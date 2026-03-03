"use client"

import { useEffect, useRef, useState } from "react"

type FormState = {
  name: string
  email: string
  subject: string
  message: string
}

export default function Contact() {

  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)

  const [form, setForm] = useState<FormState>({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle")

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

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    setStatus("sending")

    try {

      const res = await fetch("https://formspree.io/f/mnqegwzz", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      })

      if (res.ok) {
        setStatus("sent")
        setForm({
          name: "",
          email: "",
          subject: "",
          message: "",
        })
      }

    } catch {
      setStatus("idle")
    }
  }

  return (

    <div ref={ref} className="container-custom">

      {/* TITLE */}

      <div className="max-w-3xl mb-20">

        <h2 className="mb-6">
          Contact & Collaboration
        </h2>

        <p>
          I'm always open to connecting with engineers, recruiters, founders,
          and technology enthusiasts. If you are interested in collaboration,
          discussing engineering opportunities, or exploring new ideas in
          software development, feel free to reach out through the channels
          below or send a message directly from this website.
        </p>

      </div>

      <div className="grid lg:grid-cols-2 gap-16">

        {/* LEFT SIDE */}

        <div
          className={`space-y-10 transition-all duration-700 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
          }`}
        >

          {/* CONTACT INFO */}

          <div className="glass-card p-8">

            <h3 className="mb-6">Direct Contact</h3>

            <div className="space-y-4 text-sm">

              <p>
                <span className="text-zinc-400">Email</span><br />
                <a
                  href="mailto:rajatkumar7861813@gmail.com"
                  className="hover:text-indigo-400 transition"
                >
                  rajatkumar7861813@gmail.com
                </a>
              </p>

              <p>
                <span className="text-zinc-400">Phone</span><br />
                <a
                  href="tel:+918899994263"
                  className="hover:text-indigo-400 transition"
                >
                  +91 8899994263
                </a>
              </p>

              <p>
                <span className="text-zinc-400">Location</span><br />
                Jammu & Kashmir, India
              </p>

            </div>

          </div>

          {/* SOCIAL LINKS */}

          <div className="glass-card p-8">

            <h3 className="mb-6">
              Professional Profiles
            </h3>

            <div className="grid grid-cols-2 gap-4">

              <a
                href="https://github.com/rajat-wyrm"
                target="_blank"
                className="glass px-5 py-3 rounded-xl text-center hover:bg-white/10 transition"
              >
                GitHub
              </a>

              <a
                href="https://linkedin.com/in/rajat-kumar-94a63a3ab"
                target="_blank"
                className="glass px-5 py-3 rounded-xl text-center hover:bg-white/10 transition"
              >
                LinkedIn
              </a>

              <a
                href="https://twitter.com/"
                target="_blank"
                className="glass px-5 py-3 rounded-xl text-center hover:bg-white/10 transition"
              >
                Twitter
              </a>

              <a
                href="https://leetcode.com/"
                target="_blank"
                className="glass px-5 py-3 rounded-xl text-center hover:bg-white/10 transition"
              >
                LeetCode
              </a>

              <a
                href="https://stackoverflow.com/"
                target="_blank"
                className="glass px-5 py-3 rounded-xl text-center hover:bg-white/10 transition"
              >
                StackOverflow
              </a>

              <a
                href="/Rajat_Kumar_Resume.pdf"
                target="_blank"
                className="btn-primary text-center"
              >
                Download Resume
              </a>

            </div>

          </div>

        </div>

        {/* RIGHT SIDE FORM */}

        <div
          className={`glass-card p-10 transition-all duration-700 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
          }`}
        >

          <h3 className="mb-6">
            Send Message
          </h3>

          <form onSubmit={handleSubmit} className="space-y-6">

            <input
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Your Name"
              required
              className="w-full glass px-4 py-3 rounded-xl outline-none focus:ring-2 focus:ring-indigo-500"
            />

            <input
              name="email"
              type="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Your Email"
              required
              className="w-full glass px-4 py-3 rounded-xl outline-none focus:ring-2 focus:ring-indigo-500"
            />

            <input
              name="subject"
              value={form.subject}
              onChange={handleChange}
              placeholder="Subject"
              required
              className="w-full glass px-4 py-3 rounded-xl outline-none focus:ring-2 focus:ring-indigo-500"
            />

            <textarea
              name="message"
              rows={6}
              value={form.message}
              onChange={handleChange}
              placeholder="Write your message..."
              required
              className="w-full glass px-4 py-3 rounded-xl outline-none focus:ring-2 focus:ring-indigo-500"
            />

            <button
              type="submit"
              className="btn-primary w-full"
            >
              {status === "sending"
                ? "Sending..."
                : status === "sent"
                ? "Message Sent ✓"
                : "Send Message"}
            </button>

          </form>

        </div>

      </div>

    </div>
  )
}