"use client"

import Head from "next/head"

type Props = {
  title?: string
  description?: string
  url?: string
}

export default function SEO({
  title = "Rajat Kumar | Software Development Engineer",
  description = "Portfolio of Rajat Kumar — Backend Engineer, MERN Stack Developer, and AI-integrated systems builder.",
  url = "https://rajatkumar.dev",
}: Props) {
  return (
    <Head>
      <title>{title}</title>

      <meta name="description" content={description} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />

      {/* Open Graph */}

      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />

      {/* Twitter */}

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />

      {/* SEO Keywords */}

      <meta
        name="keywords"
        content="Rajat Kumar, Software Engineer, Backend Developer, MERN Stack Developer, Java Developer, Spring Boot, AI Developer"
      />

      {/* Canonical */}

      <link rel="canonical" href={url} />

      {/* Favicon */}

      <link rel="icon" href="/favicon.ico" />
    </Head>
  )
}