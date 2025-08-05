"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"

interface Petal {
  id: number
  x: number
  y: number
  delay: number
  duration: number
  size: number
  rotation: number
  opacity: number
  drift: number
}

export default function CherryBlossoms() {
  const [petals, setPetals] = useState<Petal[]>([])

  useEffect(() => {
    const newPetals = Array.from({ length: 25 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: -10 - Math.random() * 20,
      delay: Math.random() * 10,
      duration: 15 + Math.random() * 10,
      size: 0.3 + Math.random() * 0.4, // Much smaller
      rotation: Math.random() * 360,
      opacity: 0.3 + Math.random() * 0.3,
      drift: (Math.random() - 0.5) * 150,
    }))
    setPetals(newPetals)
  }, [])

  return (
    <div className="fixed inset-0 pointer-events-none z-10 overflow-hidden">
      {petals.map((petal) => (
        <motion.div
          key={petal.id}
          className="absolute"
          style={{
            left: `${petal.x}%`,
            transform: `scale(${petal.size})`,
            opacity: petal.opacity,
          }}
          animate={{
            y: ["0vh", "110vh"],
            x: [
              0,
              Math.sin(petal.id * 0.5) * 60 + petal.drift * 0.3,
              Math.cos(petal.id * 0.3) * 40 + petal.drift * 0.6,
              petal.drift,
            ],
            rotate: [petal.rotation, petal.rotation + 360 + Math.sin(petal.id) * 90],
            opacity: [0, petal.opacity, petal.opacity * 0.8, petal.opacity * 0.6, 0],
          }}
          transition={{
            duration: petal.duration,
            delay: petal.delay,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
            times: [0, 0.2, 0.5, 0.8, 1],
          }}
        >
          {/* Realistic 5-petal cherry blossom */}
          <svg
            width="12"
            height="12"
            viewBox="0 0 24 24"
            className="fill-pink-300/70 dark:fill-pink-200/50 drop-shadow-sm"
          >
            {/* 5 petals forming a cherry blossom */}
            <path d="M12 2L13.5 6.5L18 5L15 9L20 12L15 15L18 19L13.5 17.5L12 22L10.5 17.5L6 19L9 15L4 12L9 9L6 5L10.5 6.5Z" />
            {/* Center of the flower */}
            <circle cx="12" cy="12" r="2" className="fill-yellow-200/80" />
          </svg>
        </motion.div>
      ))}
    </div>
  )
}
