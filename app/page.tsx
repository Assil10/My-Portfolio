"use client"
import { useEffect, useState } from "react"
import LoadingScreen from "@/components/loading-screen"
import HeroSection from "@/components/sections/hero-section"
import TimelineSection from "@/components/sections/timeline-section"
import TrophyRoom from "@/components/trophy-room"
import TestimonialsSection from "@/components/sections/testimonials-section"
import BlogSection from "@/components/sections/blog-section"
import ScrollToTop from "@/components/scroll-to-top"
import ThemeToggle from "@/components/theme-toggle"
import AudioToggle from "@/components/audio-toggle"
import CherryBlossoms from "@/components/cherry-blossoms"
import Navigation from "@/components/navigation"
import SamuraiChatbot from "@/components/samurai-chatbot"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import {
  Github,
  ExternalLink,
  Mail,
  MapPin,
  Phone,
  Code2,
  Palette,
  Database,
  Cloud,
  Smartphone,
  Shield,
} from "lucide-react"

export default function SamuraiPortfolioV7() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 2000)

    return () => clearTimeout(timer)
  }, [])

  if (isLoading) {
    return <LoadingScreen />
  }

  return (
    <div className="min-h-screen bg-background text-foreground transition-colors duration-500">
      {/* Navigation */}
      <Navigation />

      {/* Fixed UI Elements */}
      <div className="fixed top-4 right-4 z-50 flex gap-2">
        <AudioToggle />
        <ThemeToggle />
      </div>

      {/* Cherry Blossoms */}
      <CherryBlossoms />

      {/* Samurai Chatbot */}
      <SamuraiChatbot />

      {/* Main Content */}
      <main>
        <HeroSection />
        <AboutSection />
        <TimelineSection />
        <ProjectsSection />
        <SkillsSection />
        <TrophyRoom />
        <TestimonialsSection />
        <ContactSection />
        <Footer />
      </main>

      {/* Scroll to Top */}
      <ScrollToTop />
    </div>
  )
}

// About Section Component with improved color blending
function AboutSection() {
  return (
    <section
      id="about"
      className="py-20 px-4 relative overflow-hidden bg-gradient-to-b from-transparent via-red-500/5 to-transparent"
    >
      {/* Floating geometric shapes with smoother colors */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute top-20 left-10 w-20 h-20 border border-red-500/20 rotate-45 bg-gradient-to-br from-red-500/10 to-orange-500/10 backdrop-blur-sm"
          animate={{ rotate: [45, 405], scale: [1, 1.1, 1] }}
          transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY }}
        />
        <motion.div
          className="absolute bottom-32 right-16 w-16 h-16 bg-gradient-to-br from-red-500/20 via-orange-500/15 to-yellow-500/10 rounded-full backdrop-blur-sm"
          animate={{ y: [0, -20, 0], opacity: [0.3, 0.7, 0.3] }}
          transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY }}
        />
      </div>

      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-8 font-serif">
            <span className="text-red-500">道</span> The Way
          </h2>
          <motion.div
            className="w-20 h-1 bg-gradient-to-r from-red-500 via-orange-500 to-yellow-500 mx-auto mb-8 rounded-full shadow-lg shadow-red-500/30"
            initial={{ width: 0 }}
            whileInView={{ width: 80 }}
            transition={{ duration: 1, delay: 0.5 }}
          />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <motion.p
              className="text-lg dark:text-gray-300 text-gray-700 leading-relaxed"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
            >
              Like a samurai perfects their craft through discipline and dedication, I approach development as an art
              form. Every line of code is written with precision, every interface designed with purpose.
            </motion.p>
            <motion.p
              className="text-lg dark:text-gray-300 text-gray-700 leading-relaxed"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
            >
              My journey spans the realms of artificial intelligence, blockchain technology, and immersive user
              experiences. I believe in the harmony between functionality and beauty.
            </motion.p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            {[
              { kanji: "創造性", english: "Creativity", desc: "Innovation through artistic vision" },
              { kanji: "規律", english: "Discipline", desc: "Mastery through consistent practice" },
              { kanji: "洞察", english: "Vision", desc: "Seeing beyond the present possibilities" },
            ].map((item, index) => (
              <motion.div
                key={index}
                className="border-l-4 border-red-500 pl-6 group cursor-pointer bg-gradient-to-r from-red-500/5 via-orange-500/3 to-transparent rounded-r-lg p-4 hover:from-red-500/10 hover:via-orange-500/5 hover:to-yellow-500/5 transition-all duration-300 backdrop-blur-sm"
                whileHover={{ x: 10, borderLeftWidth: 6 }}
                transition={{ duration: 0.3 }}
              >
                <h3 className="text-xl font-semibold text-red-400 mb-2 group-hover:text-red-300 transition-colors">
                  {item.kanji} - {item.english}
                </h3>
                <p className="dark:text-gray-400 text-gray-600 group-hover:text-gray-500 dark:group-hover:text-gray-300 transition-colors">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Philosophical Quote */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 1 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <motion.p className="text-red-400 text-lg font-mono mb-2" whileHover={{ scale: 1.05 }}>
            心技体
          </motion.p>
          <p className="dark:text-gray-500 text-gray-600 text-sm">"Mind, technique, and body in harmony"</p>
        </motion.div>
      </div>
    </section>
  )
}

// Projects Section Component with improved color blending
function ProjectsSection() {
  const projects = [
    {
      title: "Korpor app",
      description: "Korpor is a mobile application that helps users manage and grow their investments through AI-driven insights and secure blockchain integration. It offers portfolio management, personalized recommendations, and an AI chatbot for user assistance. Built with Node.js, MongoDB, and Solidity, Korpor ensures transparency, security, and a seamless investment experience.",
      tech: ["React", "node.js", "MySql", "solidity" ,"Python","React Native","tailwind css","typescript","web3"],
      image: "/korpor.jpeg",
      featured: true,
      github: "https://github.com/Assil10/Korpor_PFE", // 🧠 Add this
     demo: "https://ai-dashboard-demo.vercel.app", 
    },
    {
      title: "Chess analyzer",
      description: "A Python tool for analyzing chess PGN games, highlighting brilliant moves, blunders, and providing performance insights",
      tech: ["Python"],
      image: "/chess analyzer.png",
      featured: false,
      github: "https://github.com/Assil10/chess-analyzer", // 🧠 Add this
    demo: "https://ai-dashboard-demo.vercel.app", 
    },
    {
      title: "Neural Network Visualizer",
      description: "Interactive tool for understanding deep learning models and neural architectures",
      tech: ["Vue.js", "Three.js", "Python", "FastAPI"],
      image: "/placeholder.svg?height=300&width=500",
      featured: false,
      github: "https://github.com/yourusername/ai-dashboard", // 🧠 Add this
    demo: "https://ai-dashboard-demo.vercel.app", 
    },
    {
      title: "LumaSkin",
      description: "LumaSkin is a skincare tracking app with AI-powered analysis. Built with Next.js, MongoDB authentication, and Cloudinary image uploads. Users can track their skincare journey, analyze skin conditions, and receive personalized recommendations through a modern interface.",
      tech: ["Nextjs", "Python","typescript"],
      image: "/lumaskin 2.png",
      featured: true,
      github: "https://github.com/Assil10/LumaSkin", // 🧠 Add this
    demo: "https://ai-dashboard-demo.vercel.app", 
    },
  ]

  return (
    <section
      id="projects"
      className="py-20 px-4 dark:bg-gradient-to-b dark:from-black/50 dark:via-gray-900/30 dark:to-black/50 bg-gradient-to-b from-orange-50/80 via-amber-100/60 to-orange-50/80 relative overflow-hidden"
    >
      {/* Enhanced animated background grid with smoother blending */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `linear-gradient(rgba(239, 68, 68, 0.1) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(239, 68, 68, 0.1) 1px, transparent 1px)`,
            backgroundSize: "50px 50px",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-red-500/5 via-orange-500/3 to-yellow-500/5" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-8 font-serif">
            <span className="text-red-500">作品</span> Projects
          </h2>
          <motion.div
            className="w-20 h-1 bg-gradient-to-r from-red-500 via-orange-500 to-yellow-500 mx-auto mb-8 rounded-full shadow-lg shadow-red-500/30"
            initial={{ width: 0 }}
            whileInView={{ width: 80 }}
            transition={{ duration: 1, delay: 0.5 }}
          />
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className={project.featured ? "md:col-span-2 lg:col-span-2" : ""}
            >
              <Card className="dark:bg-gray-900/60 bg-white/90 backdrop-blur-sm border-red-500/20 hover:border-red-500/60 transition-all duration-500 group overflow-hidden h-full hover:shadow-2xl hover:shadow-red-500/20">
                <div className="relative overflow-hidden">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className={"w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-red-500/30 via-orange-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                  {/* Enhanced glitch effect overlay */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-red-500/20 via-orange-500/15 to-red-500/20 opacity-0 group-hover:opacity-100"
                    animate={{
                      x: [0, 2, -2, 0],
                      opacity: [0, 0.3, 0, 0.3, 0],
                    }}
                    transition={{ duration: 0.5, repeat: Number.POSITIVE_INFINITY, repeatDelay: 2 }}
                  />
                </div>
                <div className="p-6">
                  <motion.h3
                    className="text-xl font-semibold mb-3 group-hover:text-red-400 transition-colors font-serif"
                    whileHover={{ x: 5 }}
                  >
                    {project.title}
                  </motion.h3>
                  <p className="dark:text-gray-400 text-gray-600 mb-4 leading-relaxed">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, techIndex) => (
                      <motion.span
                        key={techIndex}
                        className="px-3 py-1 bg-gradient-to-r from-red-500/20 via-orange-500/15 to-red-500/20 text-red-400 text-sm rounded-full border border-red-500/30 hover:from-red-500/30 hover:via-orange-500/25 hover:to-red-500/30 transition-all cursor-default"
                        whileHover={{ scale: 1.05 }}
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                  <div className="flex gap-3">
  {project.github && (
    <a href={project.github} target="_blank" rel="noopener noreferrer">
      <Button
        size="sm"
        variant="outline"
        className="border-red-500 text-red-500 hover:bg-gradient-to-r hover:from-red-500 hover:to-orange-500 hover:text-white dark:hover:text-black bg-transparent group/btn"
      >
        <Github className="w-4 h-4 mr-2 group-hover/btn:rotate-12 transition-transform" />
        Code
      </Button>
    </a>
  )}

  {project.demo && (
    <a href={project.demo} target="_blank" rel="noopener noreferrer">
      <Button
        size="sm"
        className="bg-gradient-to-r from-red-500 to-orange-500 hover:from-red-600 hover:to-orange-600 text-white group/btn"
      >
        <ExternalLink className="w-4 h-4 mr-2 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
        Live Demo
      </Button>
    </a>
  )}
</div>
                </div>
              </Card>
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
          <motion.p className="text-red-400 text-lg font-mono mb-2" whileHover={{ scale: 1.05 }}>
            匠の心
          </motion.p>
          <p className="dark:text-gray-500 text-gray-600 text-sm">"The heart of a craftsman"</p>
        </motion.div>
      </div>
    </section>
  )
}

// Enhanced Skills Section with smoother color transitions
function SkillsSection() {
  const skills = [
    { name: "Frontend Development", level: 95, icon: Code2, color: "from-blue-500 via-cyan-400 to-blue-600" },
    { name: "Backend Architecture", level: 88, icon: Database, color: "from-green-500 via-emerald-400 to-green-600" },
    { name: "AI/Machine Learning", level: 82, icon: Palette, color: "from-purple-500 via-pink-400 to-purple-600" },
    { name: "DevOps & Cloud", level: 78, icon: Cloud, color: "from-orange-500 via-red-400 to-orange-600" },
    { name: "Mobile Development", level: 85, icon: Smartphone, color: "from-indigo-500 via-blue-400 to-indigo-600" },
    { name: "Cybersecurity", level: 75, icon: Shield, color: "from-red-500 via-pink-400 to-red-600" },
  ]

  return (
    <section
      id="skills"
      className="py-20 px-4 relative overflow-hidden bg-gradient-to-b from-transparent via-red-500/5 to-transparent"
    >
      {/* Enhanced animated circuit pattern */}
      <div className="absolute inset-0 opacity-5">
        <svg className="w-full h-full" viewBox="0 0 100 100">
          <defs>
            <pattern id="circuit" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
              <path d="M 0 10 L 10 10 L 10 0 M 10 10 L 20 10" stroke="currentColor" strokeWidth="0.5" fill="none" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#circuit)" />
        </svg>
        <div className="absolute inset-0 bg-gradient-to-br from-red-500/5 via-orange-500/3 to-yellow-500/5" />
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-8 font-serif">
            <span className="text-red-500">技</span> Skills
          </h2>
          <motion.div
            className="w-20 h-1 bg-gradient-to-r from-red-500 via-orange-500 to-yellow-500 mx-auto mb-8 rounded-full shadow-lg shadow-red-500/30"
            initial={{ width: 0 }}
            whileInView={{ width: 80 }}
            transition={{ duration: 1, delay: 0.5 }}
          />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="space-y-3 p-4 rounded-lg hover:bg-gradient-to-r hover:from-red-500/5 hover:via-orange-500/3 hover:to-transparent transition-all duration-300 backdrop-blur-sm">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <motion.div
                      className={`w-10 h-10 rounded-full bg-gradient-to-r ${skill.color} flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg`}
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.5 }}
                    >
                      <skill.icon className="w-5 h-5 text-white" />
                    </motion.div>
                    <span className="text-lg font-semibold group-hover:text-red-400 transition-colors">
                      {skill.name}
                    </span>
                  </div>
                  <motion.span className="text-red-400 font-mono font-bold" whileHover={{ scale: 1.1 }}>
                    {skill.level}%
                  </motion.span>
                </div>
                <div className="relative">
                  <Progress value={skill.level} className="h-3 bg-gray-200 dark:bg-gray-800" />
                  <motion.div
                    className="absolute top-0 left-0 h-3 bg-gradient-to-r from-red-500 via-orange-500 to-yellow-500 rounded-full shadow-lg shadow-red-500/30"
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    transition={{ duration: 1.5, delay: index * 0.2 }}
                  />
                </div>
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
          <motion.p className="text-red-400 text-lg font-mono mb-2" whileHover={{ scale: 1.05 }}>
            継続は力なり
          </motion.p>
          <p className="dark:text-gray-500 text-gray-600 text-sm">"Continuity is strength"</p>
        </motion.div>
      </div>
    </section>
  )
}

// Enhanced Contact Section with improved gradients
function ContactSection() {
  return (
    <section
      id="contact"
      className="py-20 px-4 dark:bg-gradient-to-b dark:from-gray-900/50 dark:via-black/30 dark:to-gray-900/50 bg-gradient-to-b from-orange-100/80 via-amber-50/60 to-orange-100/80 relative overflow-hidden"
    >
      {/* Enhanced Animated Particles with better blending */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-gradient-to-r from-red-500/60 via-orange-500/40 to-yellow-500/60 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -100, 0],
              x: [0, Math.sin(i) * 50, 0],
              opacity: [0, 1, 0],
              scale: [0.5, 1.5, 0.5],
            }}
            transition={{
              duration: 4 + Math.random() * 3,
              repeat: Number.POSITIVE_INFINITY,
              delay: Math.random() * 3,
            }}
          />
        ))}
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-8 font-serif">
            <span className="text-red-500">連絡</span> Contact
          </h2>
          <motion.div
            className="w-20 h-1 bg-gradient-to-r from-red-500 via-orange-500 to-yellow-500 mx-auto mb-8 rounded-full shadow-lg shadow-red-500/30"
            initial={{ width: 0 }}
            whileInView={{ width: 80 }}
            transition={{ duration: 1, delay: 0.5 }}
          />
          <p className="dark:text-gray-400 text-gray-600 text-lg">Ready to forge something extraordinary together?</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {[
              { icon: Mail, title: "Email", info: "khaldi.assil40@gmail.com" },
              { icon: MapPin, title: "Location", info: "Tunisia - Gafsa" },
              { icon: Phone, title: "Phone", info: "+216 58868269" },
            ].map((contact, index) => (
              <motion.div
                key={index}
                className="flex items-center gap-4 group cursor-pointer p-4 rounded-lg hover:bg-gradient-to-r hover:from-red-500/10 hover:via-orange-500/5 hover:to-transparent transition-all duration-300"
                whileHover={{ x: 10, scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <motion.div
                  className="w-12 h-12 bg-gradient-to-r from-red-500/20 via-orange-500/15 to-red-500/20 rounded-full flex items-center justify-center group-hover:from-red-500/30 group-hover:via-orange-500/25 group-hover:to-red-500/30 transition-all shadow-lg"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                >
                  <contact.icon className="w-6 h-6 text-red-400" />
                </motion.div>
                <div>
                  <h3 className="text-lg font-semibold group-hover:text-red-400 transition-colors">{contact.title}</h3>
                  <p className="dark:text-gray-400 text-gray-600">{contact.info}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.form
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <motion.div whileHover={{ scale: 1.02 }} transition={{ duration: 0.2 }}>
              <Input
                placeholder="Your Name"
                className="dark:bg-gray-900/80 dark:border-gray-700 bg-white/90 border-gray-300 focus:border-red-500 placeholder-gray-500 h-12 backdrop-blur-sm"
              />
            </motion.div>
            <motion.div whileHover={{ scale: 1.02 }} transition={{ duration: 0.2 }}>
              <Input
                type="email"
                placeholder="Your Email"
                className="dark:bg-gray-900/80 dark:border-gray-700 bg-white/90 border-gray-300 focus:border-red-500 placeholder-gray-500 h-12 backdrop-blur-sm"
              />
            </motion.div>
            <motion.div whileHover={{ scale: 1.02 }} transition={{ duration: 0.2 }}>
              <Textarea
                placeholder="Your Message"
                rows={5}
                className="dark:bg-gray-900/80 dark:border-gray-700 bg-white/90 border-gray-300 focus:border-red-500 placeholder-gray-500 resize-none backdrop-blur-sm"
              />
            </motion.div>
            <Button className="w-full bg-gradient-to-r from-red-500 via-orange-500 to-red-600 hover:from-red-600 hover:via-orange-600 hover:to-red-700 text-white font-semibold py-3 h-12 group relative overflow-hidden shadow-lg hover:shadow-red-500/25 transition-all duration-300">
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-red-400 via-orange-400 to-red-500 opacity-0 group-hover:opacity-100 transition-opacity"
                whileHover={{ scale: 1.05 }}
              />
              <span className="relative z-10 group-hover:animate-pulse">Send Message</span>
              <motion.span className="ml-2 inline-block relative z-10" whileHover={{ scale: 1.2, rotate: 15 }}>
                送信
              </motion.span>
            </Button>
          </motion.form>
        </div>

        {/* Philosophical Quote */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 1 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <motion.p className="text-red-400 text-lg font-mono mb-2" whileHover={{ scale: 1.05 }}>
            出会いは人生の宝
          </motion.p>
          <p className="dark:text-gray-500 text-gray-600 text-sm">"Encounters are life's treasures"</p>
        </motion.div>
      </div>
    </section>
  )
}

// Footer Component
function Footer() {
  return (
    <footer className="py-12 px-4 border-t dark:border-gray-800 border-gray-200 bg-gradient-to-r from-transparent via-red-500/5 to-transparent">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.p className="text-red-400 text-lg mb-2 font-mono" whileHover={{ scale: 1.05 }}>
            七転び八起き
          </motion.p>
          <p className="dark:text-gray-500 text-gray-600 text-sm">
            "Fall seven times, rise eight times" 
          </p>
          <p className="dark:text-gray-600 text-gray-500 text-xs mt-4">
            © 2025 Assil Khaldi. Crafted with discipline and passion.
          </p>
        </motion.div>
      </div>
    </footer>
  )
}
