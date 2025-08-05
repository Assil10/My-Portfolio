"use client"

import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import { Calendar, Code, Brain, Rocket } from "lucide-react"

const timelineEvents = [
  {
    year: "2018",
    title: "The Beginning",
    description: "Started my journey into programming with Python and web development",
    icon: Code,
    color: "from-blue-500 to-cyan-500",
  },
  {
    year: "2020",
    title: "AI Awakening",
    description: "Discovered machine learning and began exploring neural networks",
    icon: Brain,
    color: "from-purple-500 to-pink-500",
  },
  {
    year: "2022",
    title: "Full Stack Mastery",
    description: "Mastered modern web technologies and cloud architecture",
    icon: Rocket,
    color: "from-green-500 to-emerald-500",
  },
  {
    year: "2024",
    title: "AI Innovation",
    description: "Leading AI-powered projects and building the future",
    icon: Brain,
    color: "from-red-500 to-orange-500",
  },
]

export default function TimelineSection() {
  return (
    <section className="py-20 px-4 relative">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-8">
            <span className="text-red-500">旅</span> Journey
          </h2>
          <div className="w-20 h-1 bg-red-500 mx-auto mb-8"></div>
          <p className="dark:text-gray-400 text-gray-600 text-lg">The path of continuous learning and growth</p>
        </motion.div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-red-500 via-red-400 to-red-300"></div>

          {timelineEvents.map((event, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className={`relative flex items-center mb-12 ${index % 2 === 0 ? "flex-row" : "flex-row-reverse"}`}
            >
              {/* Timeline Node */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-red-500 rounded-full border-4 border-background z-10"></div>

              {/* Content Card */}
              <div className={`w-5/12 ${index % 2 === 0 ? "pr-8" : "pl-8"}`}>
                <Card className="p-6 dark:bg-gray-900/50 bg-white/80 backdrop-blur-sm border-red-500/20 hover:border-red-500/40 transition-all duration-300 group">
                  <div className="flex items-center mb-4">
                    <div
                      className={`w-12 h-12 rounded-full bg-gradient-to-r ${event.color} flex items-center justify-center mr-4`}
                    >
                      <event.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <Calendar className="w-4 h-4 text-red-500" />
                        <span className="text-red-400 font-mono font-semibold">{event.year}</span>
                      </div>
                      <h3 className="text-xl font-bold group-hover:text-red-400 transition-colors">{event.title}</h3>
                    </div>
                  </div>
                  <p className="dark:text-gray-400 text-gray-600">{event.description}</p>
                </Card>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Philosophical Quote */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 1 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p className="text-red-400 text-lg font-mono mb-2">千里の道も一歩から</p>
          <p className="dark:text-gray-500 text-gray-600 text-sm">
            "A journey of a thousand miles begins with a single step"
          </p>
        </motion.div>
      </div>
    </section>
  )
}
