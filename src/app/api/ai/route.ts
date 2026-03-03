import { NextResponse } from "next/server"

export async function POST(req: Request) {

  const { question } = await req.json()

  const context = `
  Rajat Kumar is a Software Development Engineer focused on backend systems,
  AI integrations, Java Spring Boot, and scalable architectures.
  He has internships with JPMorgan and SoftNexis and leadership as NCC Cadet Warrant Officer.
  `

  const answer = `
  Based on Rajat's profile: ${question}.
  Rajat specializes in backend development, AI-driven applications,
  and scalable system architecture.
  `

  return NextResponse.json({ answer })

}