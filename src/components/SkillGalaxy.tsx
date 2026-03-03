"use client"

import { useEffect, useRef } from "react"
import * as THREE from "three"

export default function SkillGalaxy() {

  const mountRef = useRef<HTMLDivElement>(null)

  useEffect(() => {

    const scene = new THREE.Scene()

    const camera = new THREE.PerspectiveCamera(
      70,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    )

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
    })

    renderer.setSize(window.innerWidth, window.innerHeight)

    mountRef.current?.appendChild(renderer.domElement)

    camera.position.z = 120

    const tech = [
      "Java",
      "Spring",
      "React",
      "Node",
      "TypeScript",
      "MongoDB",
      "PostgreSQL",
      "Python",
      "AI",
      "Docker",
    ]

    const objects: THREE.Mesh[] = []

    const geometry = new THREE.SphereGeometry(2, 32, 32)

    tech.forEach((_, i) => {

      const material = new THREE.MeshBasicMaterial({
        color: 0x6366f1,
      })

      const mesh = new THREE.Mesh(geometry, material)

      const angle = (i / tech.length) * Math.PI * 2

      mesh.position.x = Math.cos(angle) * 40
      mesh.position.y = Math.sin(angle) * 40

      scene.add(mesh)

      objects.push(mesh)

    })

    const centerGeometry = new THREE.SphereGeometry(5, 32, 32)

    const centerMaterial = new THREE.MeshBasicMaterial({
      color: 0xffffff,
    })

    const center = new THREE.Mesh(centerGeometry, centerMaterial)

    scene.add(center)

    const animate = () => {

      requestAnimationFrame(animate)

      objects.forEach((obj, i) => {

        const angle = Date.now() * 0.0003 + i

        obj.position.x = Math.cos(angle) * 40
        obj.position.y = Math.sin(angle) * 40

      })

      renderer.render(scene, camera)

    }

    animate()

    const handleResize = () => {

      camera.aspect = window.innerWidth / window.innerHeight
      camera.updateProjectionMatrix()

      renderer.setSize(window.innerWidth, window.innerHeight)

    }

    window.addEventListener("resize", handleResize)

    return () => {

      window.removeEventListener("resize", handleResize)

      mountRef.current?.removeChild(renderer.domElement)

    }

  }, [])

  return (
    <div
      ref={mountRef}
      className="fixed inset-0 -z-30 opacity-40 pointer-events-none"
    />
  )
}