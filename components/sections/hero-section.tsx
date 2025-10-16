"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { useAudio } from "@/components/audio-provider"
import { useTheme } from "next-themes"
import { Linkedin, Github } from "lucide-react"

export default function HeroSection() {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  })
  const { playSound } = useAudio()
  const { theme } = useTheme()

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"])
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0])

  return (
    <section id="hero" ref={ref} className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Dynamic Background */}
      <div
        className={`absolute inset-0 transition-all duration-1000 ${
          theme === "dark" ? "bg-black" : "bg-gradient-to-br from-orange-200 via-amber-100 to-yellow-200"
        }`}
      />

      {/* Aura Effects */}
      <motion.div
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
        style={{ y, opacity }}
      >
        {theme === "dark" ? (
          // Dark mode: Red glowing aura
          <>
            <motion.div
              className="w-96 h-96 rounded-full bg-gradient-radial from-red-600/40 via-red-800/20 to-transparent"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.6, 0.3],
              }}
              transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY }}
            />
            <motion.div
              className="absolute inset-0 w-96 h-96 rounded-full bg-gradient-radial from-red-500/30 via-transparent to-transparent"
              animate={{
                scale: [1.2, 1, 1.2],
                opacity: [0.2, 0.4, 0.2],
              }}
              transition={{ duration: 6, repeat: Number.POSITIVE_INFINITY }}
            />
          </>
        ) : (
          // Light mode: Sunrise colors
          <>
            <motion.div
              className="w-96 h-96 rounded-full bg-gradient-radial from-orange-400/50 via-yellow-300/30 to-transparent"
              animate={{
                scale: [1, 1.3, 1],
                opacity: [0.4, 0.7, 0.4],
              }}
              transition={{ duration: 5, repeat: Number.POSITIVE_INFINITY }}
            />
            <motion.div
              className="absolute inset-0 w-96 h-96 rounded-full bg-gradient-radial from-red-400/40 via-orange-300/20 to-transparent"
              animate={{
                scale: [1.3, 1, 1.3],
                opacity: [0.3, 0.5, 0.3],
              }}
              transition={{ duration: 7, repeat: Number.POSITIVE_INFINITY }}
            />
          </>
        )}
      </motion.div>

      {/* Katana Silhouette with enhanced effects */}
      <motion.div
        className="absolute right-20 top-1/2 transform -translate-y-1/2"
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 0.3, x: 0 }}
        transition={{ duration: 2, delay: 1 }}
      >
        <motion.div
          className={`w-2 h-80 bg-gradient-to-b ${
            theme === "dark" ? "from-red-400 via-gray-300 to-red-500" : "from-orange-600 via-yellow-400 to-red-600"
          } rotate-45 shadow-lg`}
          animate={{
            boxShadow:
              theme === "dark"
                ? [
                    "0 0 20px rgba(239, 68, 68, 0.3)",
                    "0 0 40px rgba(239, 68, 68, 0.6)",
                    "0 0 20px rgba(239, 68, 68, 0.3)",
                  ]
                : [
                    "0 0 20px rgba(251, 146, 60, 0.3)",
                    "0 0 40px rgba(251, 146, 60, 0.6)",
                    "0 0 20px rgba(251, 146, 60, 0.3)",
                  ],
          }}
          transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
        />
      </motion.div>

      {/* Main Content with enhanced typography */}
      <div className="text-center z-10 px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="mb-8"
        >
          <motion.h1
            className={`text-6xl md:text-8xl font-bold mb-4 tracking-wider font-serif ${
              theme === "dark" ? "text-white" : "text-gray-900"
            }`}
            animate={{
              textShadow:
                theme === "dark"
                  ? [
                      "0 0 20px rgba(239, 68, 68, 0.5)",
                      "0 0 40px rgba(239, 68, 68, 0.8)",
                      "0 0 20px rgba(239, 68, 68, 0.5)",
                    ]
                  : [
                      "0 0 20px rgba(251, 146, 60, 0.3)",
                      "0 0 30px rgba(251, 146, 60, 0.5)",
                      "0 0 20px rgba(251, 146, 60, 0.3)",
                    ],
            }}
            transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY }}
          >
            <motion.span whileHover={{ scale: 1.05 }} transition={{ duration: 0.2 }}>
              ASSIL
            </motion.span>
            <br />
            <motion.span className="text-red-500" whileHover={{ scale: 1.05 }} transition={{ duration: 0.2 }}>
              KHALDI
            </motion.span>
          </motion.h1>

          <motion.div
            className="text-red-400 text-xl md:text-2xl mb-2 font-mono"
            animate={{
              opacity: [0.7, 1, 0.7],
              scale: [1, 1.02, 1],
            }}
            transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
          >
            創造的開発者
          </motion.div>

          <motion.p
            className={`text-lg md:text-xl font-light ${theme === "dark" ? "text-gray-300" : "text-gray-700"}`}
            whileHover={{ scale: 1.02 }}
          >
            Full Stack Developer & AI Enthusiast
          </motion.p>

          {/* Profile Image - Commented out until you add your image */}
          {/* 
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-8 mb-6"
          >
            <div className="relative">
              <Image
                src="/your-profile-image.jpg" // Add your image to public folder
                alt="Samurai Developer"
                width={200}
                height={200}
                className="rounded-full border-4 border-red-500/30 shadow-2xl shadow-red-500/20"
                priority
              />
              <motion.div
                className="absolute inset-0 rounded-full bg-gradient-to-r from-red-500/20 via-orange-500/10 to-red-500/20"
                animate={{
                  scale: [1, 1.1, 1],
                  opacity: [0.3, 0.6, 0.3],
                }}
                transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
              />
            </div>
          </motion.div>
          */}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="flex flex-col items-center gap-6"
        >
          <Button
            className={`bg-transparent border-2 border-red-500 text-red-500 hover:bg-red-500 ${
              theme === "dark" ? "hover:text-black" : "hover:text-white"
            } px-8 py-3 text-lg font-semibold transition-all duration-300 group relative overflow-hidden`}
            onClick={() => {
              playSound("click")
              document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })
            }}
            onMouseEnter={() => playSound("hover")}
          >
            <motion.div
              className="absolute inset-0 bg-red-500 opacity-0 group-hover:opacity-100 transition-opacity"
              whileHover={{ scale: 1.05 }}
            />
            <span className="relative z-10 group-hover:animate-pulse">Enter the Portfolio</span>
            <motion.span
              className="ml-2 inline-block relative z-10"
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
            >
              →
            </motion.span>
          </Button>

          {/* Social Links - Centered under button */}
          <motion.div
            className="flex gap-4 justify-center items-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1 }}
          >
            <motion.a
              href="www.linkedin.com/in/assilkhaldi"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full border-2 border-red-500/30 bg-background/80 backdrop-blur-sm flex items-center justify-center hover:border-red-500 hover:bg-red-500/10 transition-all duration-300 group"
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => playSound("click")}
              onMouseEnter={() => playSound("hover")}
            >
              <Linkedin className="w-5 h-5 text-red-500 group-hover:text-red-400" />
            </motion.a>

            <motion.a
              href="https://github.com/Assil10"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full border-2 border-red-500/30 bg-background/80 backdrop-blur-sm flex items-center justify-center hover:border-red-500 hover:bg-red-500/10 transition-all duration-300 group"
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => playSound("click")}
              onMouseEnter={() => playSound("hover")}
            >
              <Github className="w-5 h-5 text-red-500 group-hover:text-red-400" />
            </motion.a>
          </motion.div>
        </motion.div>
      </div>

      {/* Enhanced Scroll Indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
      >
        <div className="w-6 h-10 border-2 border-red-500 rounded-full flex justify-center relative">
          <motion.div
            className="w-1 h-3 bg-red-500 rounded-full mt-2"
            animate={{ opacity: [1, 0.3, 1] }}
            transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
          />
        </div>
      </motion.div>

      {/* Philosophical Quote with enhanced positioning */}
      <motion.div
        className="absolute bottom-20 right-8 text-right"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 2, duration: 1 }}
      >
        <motion.p className="text-red-400 text-sm font-mono mb-1" whileHover={{ scale: 1.05 }}>
          始まりは半分
        </motion.p>
        <p className={`text-xs ${theme === "dark" ? "text-gray-500" : "text-gray-600"}`}>"Well begun is half done"</p>
      </motion.div>
    </section>
  )
}
