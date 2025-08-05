"use client"

import { motion } from "framer-motion"
import { useEffect, useState } from "react"
import { Progress } from "@/components/ui/progress"

export default function LoadingScreen() {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        const newProgress = prev + 1.5
        if (newProgress >= 100) {
          clearInterval(timer)
          return 100
        }
        return newProgress
      })
    }, 40)

    return () => clearInterval(timer)
  }, [])

  return (
    <div className="fixed inset-0 bg-black flex items-center justify-center z-50">
      {/* Simple centered content */}
      <div className="text-center max-w-md mx-auto px-4">
        {/* Simple logo */}
        <motion.div
          className="w-16 h-16 mx-auto mb-8 rounded-full bg-gradient-to-r from-red-500 to-red-600 flex items-center justify-center"
          animate={{
            boxShadow: [
              "0 0 20px rgba(239, 68, 68, 0.3)",
              "0 0 40px rgba(239, 68, 68, 0.6)",
              "0 0 20px rgba(239, 68, 68, 0.3)",
            ],
          }}
          transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
        >
          <span className="text-white font-bold text-xl">侍</span>
        </motion.div>

        {/* Simple brand name */}
        <h1 className="text-3xl font-bold text-white mb-2">
          ASSIL <span className="text-red-500">KHALDI</span>
        </h1>
        <p className="text-red-400 text-sm mb-8">Creative Developer</p>

        {/* Simple progress bar */}
        <div className="w-full max-w-xs mx-auto">
          <Progress value={progress} className="h-1 bg-gray-800" />
          <div className="flex justify-between items-center mt-2 text-sm">
            <span className="text-gray-400">Loading...</span>
            <span className="text-red-400 font-mono">{Math.round(progress)}%</span>
          </div>
        </div>
      </div>
    </div>
  )
}
