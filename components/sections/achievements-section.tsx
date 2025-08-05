"use client"

import { motion } from "framer-motion"
import { Award, Trophy, Star, Target, Zap, Crown } from "lucide-react"

const achievements = [
  {
    icon: Trophy,
    title: "AI Innovation Award",
    description: "Best AI Project 2024",
    glow: "shadow-yellow-500/50",
  },
  {
    icon: Star,
    title: "Full Stack Master",
    description: "10+ Technologies Mastered",
    glow: "shadow-blue-500/50",
  },
  {
    icon: Target,
    title: "Project Completion",
    description: "50+ Successful Projects",
    glow: "shadow-green-500/50",
  },
  {
    icon: Zap,
    title: "Performance Expert",
    description: "99% Uptime Achievement",
    glow: "shadow-purple-500/50",
  },
  {
    icon: Crown,
    title: "Team Leadership",
    description: "Led 5+ Development Teams",
    glow: "shadow-red-500/50",
  },
  {
    icon: Award,
    title: "Open Source",
    description: "1000+ GitHub Stars",
    glow: "shadow-orange-500/50",
  },
]

export default function AchievementsSection() {
  return (
    <section className="py-20 px-4 dark:bg-gray-900/30 bg-amber-50/30">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-8">
            <span className="text-red-500">栄誉</span> Achievements
          </h2>
          <div className="w-20 h-1 bg-red-500 mx-auto mb-8"></div>
          <p className="dark:text-gray-400 text-gray-600 text-lg">Milestones on the path to mastery</p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {achievements.map((achievement, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="group cursor-pointer"
            >
              <div
                className={`relative p-6 rounded-xl dark:bg-gray-800/50 bg-white/80 backdrop-blur-sm border border-red-500/20 hover:border-red-500/40 transition-all duration-300 text-center hover:shadow-lg ${achievement.glow} hover:shadow-lg`}
              >
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-red-500 to-red-600 flex items-center justify-center group-hover:animate-pulse">
                  <achievement.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-semibold mb-2 group-hover:text-red-400 transition-colors">{achievement.title}</h3>
                <p className="text-sm dark:text-gray-400 text-gray-600">{achievement.description}</p>

                {/* Glow effect */}
                <div className="absolute inset-0 rounded-xl bg-red-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
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
          <p className="text-red-400 text-lg font-mono mb-2">実るほど頭を垂れる稲穂かな</p>
          <p className="dark:text-gray-500 text-gray-600 text-sm">"The more rice grows, the lower it bows its head"</p>
        </motion.div>
      </div>
    </section>
  )
}
