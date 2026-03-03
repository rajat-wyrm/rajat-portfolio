import dynamic from "next/dynamic"
import { Suspense } from "react"

/* =====================================================
   DYNAMIC SECTION IMPORTS (PERFORMANCE OPTIMIZED)
===================================================== */

const Hero = dynamic(() => import("@/components/sections/Hero"))
const About = dynamic(() => import("@/components/sections/About"))
const Expertise = dynamic(() => import("@/components/sections/Expertise"))
const Stack = dynamic(() => import("@/components/sections/Stack"))
const Skills = dynamic(() => import("@/components/sections/Skills"))
const Experience = dynamic(() => import("@/components/sections/Experience"))
const Architecture = dynamic(() => import("@/components/sections/Architecture"))
const Projects = dynamic(() => import("@/components/sections/Projects"))
const Leadership = dynamic(() => import("@/components/sections/Leadership"))
const Certifications = dynamic(() => import("@/components/sections/Certifications"))
const Contact = dynamic(() => import("@/components/sections/Contact"))

/* =====================================================
   PAGE COMPONENT
===================================================== */

export default function HomePage() {
  return (
    <main className="relative">

      {/* HERO */}

      <section id="hero" className="min-h-screen">
        <Suspense fallback={null}>
          <Hero />
        </Suspense>
      </section>

      {/* PROFESSIONAL SUMMARY */}

      <section id="about" className="section-padding">
        <Suspense fallback={null}>
          <About />
        </Suspense>
      </section>

      {/* CORE EXPERTISE */}

      <section id="expertise" className="section-padding">
        <Suspense fallback={null}>
          <Expertise />
        </Suspense>
      </section>

      {/* TECH STACK */}

      <section id="stack" className="section-padding">
        <Suspense fallback={null}>
          <Stack />
        </Suspense>
      </section>

      {/* SKILL BARS */}

      <section id="skills" className="section-padding">
        <Suspense fallback={null}>
          <Skills />
        </Suspense>
      </section>

      {/* EXPERIENCE */}

      <section id="experience" className="section-padding">
        <Suspense fallback={null}>
          <Experience />
        </Suspense>
      </section>

      {/* ENGINEERING ARCHITECTURE */}

      <section id="architecture" className="section-padding">
        <Suspense fallback={null}>
          <Architecture />
        </Suspense>
      </section>

      {/* PROJECTS */}

      <section id="projects" className="section-padding">
        <Suspense fallback={null}>
          <Projects />
        </Suspense>
      </section>

      {/* LEADERSHIP */}

      <section id="leadership" className="section-padding">
        <Suspense fallback={null}>
          <Leadership />
        </Suspense>
      </section>

      {/* CERTIFICATIONS */}

      <section id="certifications" className="section-padding">
        <Suspense fallback={null}>
          <Certifications />
        </Suspense>
      </section>

      {/* CONTACT */}

      <section id="contact" className="section-padding">
        <Suspense fallback={null}>
          <Contact />
        </Suspense>
      </section>

    </main>
  )
}