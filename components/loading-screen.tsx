"use client"

import { motion } from "framer-motion"
import { useEffect, useState } from "react"
import { Progress } from "@/components/ui/progress"

export default function LoadingScreen() {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        const newProgress = prev + 4.5
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
       

        {/* Simple brand name */}
        <h1 className="text-3xl font-bold text-white mb-2">
          ASSIL <span className="text-red-500">KHALDI</span>
        </h1>
        <p className="text-red-400 text-sm mb-8">Full Stack Developer</p>

        {/* Simple progress bar */}
        <div className="w-full max-w-xs mx-auto">
          <Progress value={progress} className="h-1 bg-gray-800" />
          <div className="flex justify-between items-center mt-2 text-sm">
            
            
          </div>
        </div>
      </div>
    </div>
  )
}
