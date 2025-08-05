"use client"

import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Award, Trophy, Star, Target, Zap, Crown, Download, ExternalLink, Calendar, MapPin } from "lucide-react"
import { useState } from "react"

const achievements = [
  {
    id: 1,
    icon: Trophy,
    title: "AI Innovation Award",
    description: "Best AI Project 2024",
    date: "2024-03-15",
    category: "Legendary",
    rarity: "legendary" as const,
    glowColor: "shadow-yellow-500/50",
    certificate: "/certificates/ai-innovation.pdf",
    details:
      "Recognized for groundbreaking work in neural network visualization and interactive AI education tools. This project revolutionized how developers understand complex AI architectures.",
    issuer: "Tech Innovation Council",
    skills: ["AI/ML", "Data Visualization", "React", "Python"],
  },
  {
    id: 2,
    icon: Star,
    title: "Full Stack Master",
    description: "10+ Technologies Mastered",
    date: "2023-12-01",
    category: "Epic",
    rarity: "epic" as const,
    glowColor: "shadow-blue-500/50",
    certificate: "/certificates/fullstack-master.pdf",
    details:
      "Demonstrated exceptional expertise across frontend, backend, database, and cloud technologies. Completed comprehensive certification program with 98% score.",
    issuer: "Developer Certification Board",
    skills: ["React", "Node.js", "PostgreSQL", "AWS", "Docker"],
  },
  {
    id: 3,
    icon: Target,
    title: "Project Excellence",
    description: "50+ Successful Projects",
    date: "2023-10-20",
    category: "Rare",
    rarity: "rare" as const,
    glowColor: "shadow-green-500/50",
    certificate: "/certificates/project-excellence.pdf",
    details:
      "Consistently delivered high-quality projects on time and within budget. Maintained 100% client satisfaction rate across all engagements.",
    issuer: "Project Management Institute",
    skills: ["Project Management", "Agile", "Leadership", "Communication"],
  },
  {
    id: 4,
    icon: Zap,
    title: "Performance Expert",
    description: "99.9% Uptime Achievement",
    date: "2023-08-10",
    category: "Epic",
    rarity: "epic" as const,
    glowColor: "shadow-purple-500/50",
    certificate: "/certificates/performance-expert.pdf",
    details:
      "Maintained exceptional system reliability and performance optimization across multiple production environments. Reduced load times by 75% on average.",
    issuer: "Performance Engineering Society",
    skills: ["Performance Optimization", "DevOps", "Monitoring", "Scaling"],
  },
  {
    id: 5,
    icon: Crown,
    title: "Team Leadership",
    description: "Led 5+ Development Teams",
    date: "2023-06-05",
    category: "Legendary",
    rarity: "legendary" as const,
    glowColor: "shadow-red-500/50",
    certificate: "/certificates/team-leadership.pdf",
    details:
      "Successfully guided multiple development teams to project success. Mentored 20+ junior developers and improved team productivity by 40%.",
    issuer: "Leadership Excellence Institute",
    skills: ["Team Leadership", "Mentoring", "Strategic Planning", "Communication"],
  },
  {
    id: 6,
    icon: Award,
    title: "Open Source Champion",
    description: "1000+ GitHub Stars",
    date: "2023-04-12",
    category: "Rare",
    rarity: "rare" as const,
    glowColor: "shadow-orange-500/50",
    certificate: "/certificates/open-source.pdf",
    details:
      "Contributed valuable open-source projects that gained significant community recognition. Projects used by developers worldwide.",
    issuer: "Open Source Foundation",
    skills: ["Open Source", "Community Building", "Documentation", "Collaboration"],
  },
]

const rarityColors = {
  legendary: "from-yellow-500 via-orange-500 to-red-500",
  epic: "from-purple-500 via-pink-500 to-purple-600",
  rare: "from-blue-500 via-cyan-500 to-blue-600",
}

const rarityGlow = {
  legendary: "shadow-yellow-500/30",
  epic: "shadow-purple-500/30",
  rare: "shadow-blue-500/30",
}

export default function TrophyRoom() {
  const [selectedAchievement, setSelectedAchievement] = useState<number | null>(null)
  const [hoveredAchievement, setHoveredAchievement] = useState<number | null>(null)

  const downloadCertificate = (certificate: string, title: string) => {
    // Simulate certificate download
    const link = document.createElement("a")
    link.href = certificate
    link.download = `${title.replace(/\s+/g, "-").toLowerCase()}-certificate.pdf`
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  const selectedAch = achievements.find((a) => a.id === selectedAchievement)

  return (
    <section
      id="achievements"
      className="py-20 px-4 dark:bg-gradient-to-b dark:from-gray-900/50 dark:to-black/50 bg-gradient-to-b from-amber-50/80 to-orange-100/80 relative overflow-hidden"
    >
      {/* Enhanced Background Effects */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            background: `
              radial-gradient(circle at 20% 20%, rgba(239, 68, 68, 0.15) 0%, transparent 50%),
              radial-gradient(circle at 80% 80%, rgba(245, 158, 11, 0.15) 0%, transparent 50%),
              radial-gradient(circle at 40% 60%, rgba(168, 85, 247, 0.15) 0%, transparent 50%)
            `,
            backgroundSize: "100px 100px",
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-8 font-serif">
            <span className="text-red-500">栄誉</span> Trophy Room
          </h2>
          <motion.div
            className="w-20 h-1 bg-gradient-to-r from-red-500 via-orange-500 to-yellow-500 mx-auto mb-8 rounded-full"
            initial={{ width: 0 }}
            whileInView={{ width: 80 }}
            transition={{ duration: 1, delay: 0.5 }}
          />
          <p className="dark:text-gray-400 text-gray-600 text-lg">Milestones on the path to mastery</p>
        </motion.div>

        {/* 3D Trophy Display */}
        <div className="relative perspective-1000 mb-12">
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 transform-gpu"
            style={{ transformStyle: "preserve-3d" }}
            initial={{ rotateX: 15 }}
            whileInView={{ rotateX: 0 }}
            transition={{ duration: 1.2, type: "spring" }}
            viewport={{ once: true }}
          >
            {achievements.map((achievement, index) => (
              <motion.div
                key={achievement.id}
                initial={{ opacity: 0, y: 100, rotateY: -20 }}
                whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
                transition={{ duration: 0.8, delay: index * 0.15 }}
                viewport={{ once: true }}
                whileHover={{
                  scale: 1.05,
                  rotateY: 8,
                  z: 50,
                }}
                className="group cursor-pointer transform-gpu"
                style={{ transformStyle: "preserve-3d" }}
                onClick={() => setSelectedAchievement(selectedAchievement === achievement.id ? null : achievement.id)}
                onMouseEnter={() => setHoveredAchievement(achievement.id)}
                onMouseLeave={() => setHoveredAchievement(null)}
              >
                <Card
                  className={`relative p-8 dark:bg-gray-800/70 bg-white/90 backdrop-blur-sm border-2 border-red-500/20 hover:border-red-500/60 transition-all duration-500 text-center hover:shadow-2xl ${achievement.glowColor} group-hover:shadow-2xl overflow-hidden h-full flex flex-col justify-between min-h-[280px]`}
                >
                  {/* Rarity Background Glow */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${rarityColors[achievement.rarity]} opacity-0 group-hover:opacity-5 transition-opacity duration-500 rounded-lg`}
                  />

                  {/* Top Icon */}
                  <div className="flex flex-col items-center">
                    <motion.div
                      className={`w-16 h-16 mb-6 rounded-full bg-gradient-to-br ${rarityColors[achievement.rarity]} flex items-center justify-center relative shadow-lg`}
                      whileHover={{
                        rotate: [0, -5, 5, 0],
                        scale: 1.1,
                      }}
                      transition={{ duration: 0.6 }}
                    >
                      {achievement.rarity === "legendary" ? (
                        <Crown className="w-8 h-8 text-white drop-shadow-lg" />
                      ) : achievement.rarity === "epic" ? (
                        <Star className="w-8 h-8 text-white drop-shadow-lg" />
                      ) : (
                        <Award className="w-8 h-8 text-white drop-shadow-lg" />
                      )}

                      {/* Sparkle Effects */}
                      {hoveredAchievement === achievement.id && (
                        <>
                          {[...Array(6)].map((_, i) => (
                            <motion.div
                              key={i}
                              className="absolute w-1 h-1 bg-white rounded-full"
                              style={{
                                top: `${20 + Math.random() * 60}%`,
                                left: `${20 + Math.random() * 60}%`,
                              }}
                              animate={{
                                scale: [0, 1, 0],
                                opacity: [0, 1, 0],
                              }}
                              transition={{
                                duration: 1,
                                delay: i * 0.1,
                                repeat: Number.POSITIVE_INFINITY,
                                repeatDelay: 2,
                              }}
                            />
                          ))}
                        </>
                      )}
                    </motion.div>

                    {/* Title and Description */}
                    <h3 className="text-xl font-bold mb-3 group-hover:text-red-400 transition-colors">
                      {achievement.title}
                    </h3>
                    <p className="text-sm dark:text-gray-400 text-gray-600 mb-6">{achievement.description}</p>
                  </div>

                  {/* Center - Rarity Badge */}
                  <div className="flex justify-center mb-6">
                    <motion.div
                      className={`px-4 py-2 rounded-full text-sm font-bold text-white bg-gradient-to-r ${rarityColors[achievement.rarity]} ${rarityGlow[achievement.rarity]} shadow-lg`}
                      whileHover={{ scale: 1.05 }}
                    >
                      {achievement.rarity.toUpperCase()}
                    </motion.div>
                  </div>

                  {/* Bottom - Date */}
                  <div className="text-xs dark:text-gray-500 text-gray-500">
                    {new Date(achievement.date).toLocaleDateString()}
                  </div>

                  {/* Hover Light Trail */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 pointer-events-none"
                    style={{ transform: "skewX(-20deg)" }}
                  />
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Detailed Achievement Modal */}
        {selectedAch && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
            onClick={() => setSelectedAchievement(null)}
          >
            <motion.div className="max-w-2xl w-full max-h-[90vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
              <Card className="p-8 dark:bg-gray-900/95 bg-white/95 backdrop-blur-md border-2 border-red-500/30 shadow-2xl">
                <div className="text-center mb-6">
                  <div
                    className={`w-24 h-24 mx-auto mb-4 rounded-full bg-gradient-to-br ${rarityColors[selectedAch.rarity]} flex items-center justify-center shadow-xl`}
                  >
                    {selectedAch.rarity === "legendary" ? (
                      <Crown className="w-12 h-12 text-white" />
                    ) : selectedAch.rarity === "epic" ? (
                      <Star className="w-12 h-12 text-white" />
                    ) : (
                      <Award className="w-12 h-12 text-white" />
                    )}
                  </div>
                  <h3 className="text-2xl font-bold mb-2">{selectedAch.title}</h3>
                  <p className="text-lg dark:text-gray-400 text-gray-600 mb-4">{selectedAch.description}</p>
                  <div
                    className={`inline-block px-4 py-2 rounded-full text-sm font-bold text-white bg-gradient-to-r ${rarityColors[selectedAch.rarity]} shadow-lg`}
                  >
                    {selectedAch.rarity.toUpperCase()} ACHIEVEMENT
                  </div>
                </div>

                <div className="space-y-6">
                  <div>
                    <h4 className="font-semibold mb-2 text-red-400">Description</h4>
                    <p className="dark:text-gray-300 text-gray-700 leading-relaxed">{selectedAch.details}</p>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold mb-2 text-red-400 flex items-center gap-2">
                        <MapPin className="w-4 h-4" />
                        Issued By
                      </h4>
                      <p className="dark:text-gray-300 text-gray-700">{selectedAch.issuer}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2 text-red-400 flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        Date Earned
                      </h4>
                      <p className="dark:text-gray-300 text-gray-700">
                        {new Date(selectedAch.date).toLocaleDateString()}
                      </p>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-3 text-red-400">Related Skills</h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedAch.skills.map((skill, index) => (
                        <span
                          key={index}
                          className="px-3 py-1 bg-red-500/20 text-red-400 text-sm rounded-full border border-red-500/30"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex gap-4 pt-4">
                    <Button
                      onClick={() => downloadCertificate(selectedAch.certificate, selectedAch.title)}
                      className="flex-1 bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white"
                    >
                      <Download className="w-4 h-4 mr-2" />
                      Download Certificate
                    </Button>
                    <Button
                      variant="outline"
                      className="border-red-500 text-red-500 hover:bg-red-500 hover:text-white dark:hover:text-black bg-transparent"
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Verify
                    </Button>
                  </div>
                </div>
              </Card>
            </motion.div>
          </motion.div>
        )}

        {/* Achievement Statistics */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16"
        >
          {[
            { label: "Total Achievements", value: achievements.length, color: "text-red-500", icon: Trophy },
            {
              label: "Legendary",
              value: achievements.filter((a) => a.rarity === "legendary").length,
              color: "text-yellow-500",
              icon: Crown,
            },
            {
              label: "Epic",
              value: achievements.filter((a) => a.rarity === "epic").length,
              color: "text-purple-500",
              icon: Star,
            },
            {
              label: "Rare",
              value: achievements.filter((a) => a.rarity === "rare").length,
              color: "text-blue-500",
              icon: Award,
            },
          ].map((stat, index) => (
            <motion.div
              key={index}
              className="text-center p-4 rounded-lg dark:bg-gray-800/30 bg-white/50 backdrop-blur-sm border border-red-500/20 hover:border-red-500/40 transition-all duration-300"
              whileHover={{ scale: 1.05, y: -5 }}
            >
              <stat.icon className={`w-8 h-8 mx-auto mb-2 ${stat.color}`} />
              <div className={`text-3xl font-bold ${stat.color} mb-2`}>{stat.value}</div>
              <div className="text-sm dark:text-gray-400 text-gray-600">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Philosophical Quote */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <motion.p className="text-red-400 text-lg font-mono mb-2" whileHover={{ scale: 1.05 }}>
            実るほど頭を垂れる稲穂かな
          </motion.p>
          <p className="dark:text-gray-500 text-gray-600 text-sm">"The more rice grows, the lower it bows its head"</p>
        </motion.div>
      </div>
    </section>
  )
}
