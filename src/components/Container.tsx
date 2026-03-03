"use client"

type Props = {
  children: React.ReactNode
}

export default function Container({ children }: Props) {
  return (
    <div className="max-w-[1280px] mx-auto px-6 lg:px-10">
      {children}
    </div>
  )
}