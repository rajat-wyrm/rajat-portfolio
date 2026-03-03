"use client"

import { useEffect, useRef } from "react"
import * as THREE from "three"

export default function TechUniverse() {

  const mountRef = useRef<HTMLDivElement>(null)

  useEffect(() => {

    const scene = new THREE.Scene()

    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    )

    const renderer = new THREE.WebGLRenderer({ alpha: true })
    renderer.setSize(window.innerWidth, window.innerHeight)

    if (mountRef.current) {
      mountRef.current.appendChild(renderer.domElement)
    }

    const geometry = new THREE.BufferGeometry()
    const vertices = []

    for (let i = 0; i < 1000; i++) {

      vertices.push(
        (Math.random() - 0.5) * 2000,
        (Math.random() - 0.5) * 2000,
        (Math.random() - 0.5) * 2000
      )

    }

    geometry.setAttribute(
      "position",
      new THREE.Float32BufferAttribute(vertices, 3)
    )

    const material = new THREE.PointsMaterial({
      color: 0x6366f1,
      size: 2,
    })

    const stars = new THREE.Points(geometry, material)

    scene.add(stars)

    camera.position.z = 5

    const animate = () => {

      requestAnimationFrame(animate)

      stars.rotation.y += 0.0005
      stars.rotation.x += 0.0002

      renderer.render(scene, camera)

    }

    animate()

    return () => {

      if (mountRef.current) {
        mountRef.current.removeChild(renderer.domElement)
      }

    }

  }, [])

  return (
    <div
      ref={mountRef}
      className="fixed inset-0 -z-20 opacity-40 pointer-events-none"
    />
  )
}