"use client"

import { Command } from "cmdk"
import { useEffect, useState } from "react"

const sections = [
  { name: "Home", id: "hero" },
  { name: "About", id: "about" },
  { name: "Expertise", id: "expertise" },
  { name: "Stack", id: "stack" },
  { name: "Skills", id: "skills" },
  { name: "Experience", id: "experience" },
  { name: "Projects", id: "projects" },
  { name: "Leadership", id: "leadership" },
  { name: "Certifications", id: "certifications" },
  { name: "Contact", id: "contact" },
]

export default function CommandPalette() {

  const [open, setOpen] = useState(false)

  useEffect(() => {

    const down = (e: KeyboardEvent) => {

      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault()
        setOpen((o) => !o)
      }

    }

    document.addEventListener("keydown", down)

    return () => document.removeEventListener("keydown", down)

  }, [])

  const navigate = (id: string) => {

    const el = document.getElementById(id)

    if (el) {
      el.scrollIntoView({ behavior: "smooth" })
    }

    setOpen(false)

  }

  return (

    <Command.Dialog
      open={open}
      onOpenChange={setOpen}
      className="fixed inset-0 z-[9999] flex items-start justify-center pt-32 bg-black/50 backdrop-blur"
    >

      <Command.Input
        placeholder="Search sections..."
        className="w-full max-w-xl glass-card p-4 text-sm outline-none"
      />

      <Command.List className="w-full max-w-xl glass-card mt-2">

        {sections.map((s) => (

          <Command.Item
            key={s.id}
            onSelect={() => navigate(s.id)}
            className="px-4 py-3 cursor-pointer hover:bg-white/10"
          >
            {s.name}
          </Command.Item>

        ))}

      </Command.List>

    </Command.Dialog>

  )
}