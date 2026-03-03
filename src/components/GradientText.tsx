"use client"

type Props = {
  children: React.ReactNode
}

export default function GradientText({ children }: Props) {
  return (
    <span className="bg-gradient-to-r from-indigo-500 via-purple-500 to-blue-500 bg-clip-text text-transparent">
      {children}
    </span>
  )
}