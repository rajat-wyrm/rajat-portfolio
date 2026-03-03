export type Project = {
  title: string
  description: string
  category: "ai" | "backend" | "fullstack" | "security"
  tech: string[]
  github?: string
  demo?: string
}

export const projects: Project[] = [
  {
    title: "AI Developer Copilot",
    description:
      "AI developer platform providing automated code analysis, interview preparation tools, resume intelligence, and engineering productivity analytics.",
    category: "ai",
    tech: ["Java", "Spring Boot", "React", "PostgreSQL", "AI APIs"],
  },
  {
    title: "BrainBox Smart Revision System",
    description:
      "Cloud-based academic productivity platform generating automated flashcards and intelligent revision scheduling.",
    category: "fullstack",
    tech: ["React", "Firebase", "Cloud Sync"],
  },
  {
    title: "Secure Authentication System",
    description:
      "Enterprise-level authentication service implementing encrypted login, JWT authorization, and role-based security.",
    category: "security",
    tech: ["Python", "MongoDB", "JWT"],
  },
  {
    title: "Traffic Flow Optimization AI",
    description:
      "Computer vision system dynamically adjusting traffic signals using machine learning congestion detection.",
    category: "ai",
    tech: ["Python", "OpenCV", "Machine Learning"],
  },
]