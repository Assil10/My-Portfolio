"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card } from "@/components/ui/card"
import { MessageCircle, X, Send, User, Minimize2, Maximize2 } from "lucide-react"
import { useAudio } from "@/components/audio-provider"

interface Message {
  id: number
  text: string
  sender: "user" | "bot"
  timestamp: Date
  typing?: boolean
}

const botPersonality = {
  greeting: [
    "Greetings, fellow warrior. I am Sensei Assil's digital spirit. How may I guide you on your path?",
    "Welcome to my digital dojo. I sense you seek knowledge about the way of code. What wisdom do you require?",
    "Ah, a visitor approaches my virtual shrine. I am here to share the teachings of Assil-san. What brings you to this path?",
  ],
  about: [
    "Assil-san walks the path of the warrior-developer, where discipline meets innovation. Like a ronin between worlds, he crafts digital solutions with the precision of a master swordsmith.",
    "Master Assil follows the way of 心技体 (shin-gi-tai) - mind, technique, and body in harmony. His code reflects the samurai principles of honor, precision, and continuous improvement.",
    "In the tradition of ancient craftsmen, Assil-san approaches each project as a work of art, balancing Eastern philosophy with Western technology.",
  ],
  skills: [
    "The master has honed his skills across many disciplines: React-jutsu, AI-do, and the sacred art of Full-Stack-fu. Each technology is like a different sword style - mastered through dedicated practice.",
    "Assil-san's arsenal includes the ancient arts of frontend development, the mystical powers of artificial intelligence, and the cloud techniques of modern digital warfare.",
    "Like a samurai who masters multiple weapons, our sensei has achieved proficiency in React, Python, AI/ML, blockchain, and cloud architecture. Each skill sharpened through years of disciplined practice.",
  ],
  projects: [
    "Each of Master Assil's projects is forged like a katana - with patience, precision, and purpose. From AI dashboards to blockchain platforms, every creation reflects the samurai principle of perfection through practice.",
    "The master's portfolio showcases the harmony between functionality and beauty. His AI-powered dashboards cut through data complexity like a sharp blade through silk.",
    "Assil-san's projects are not mere code, but digital poetry - each line written with intention, each interface designed with the user's journey in mind.",
  ],
  philosophy: [
    "The way of the code samurai teaches us that true mastery comes not from knowing all techniques, but from understanding when and how to apply them with wisdom.",
    "As the ancient saying goes: '継続は力なり' (Continuity is strength). Master Assil believes that consistent practice and continuous learning are the foundations of excellence.",
    "In the digital realm, as in the way of the sword, one must maintain balance between innovation and tradition, speed and precision, complexity and simplicity.",
  ],
  contact: [
    "To forge a partnership with Master Assil, one must demonstrate honor and clear purpose. Scroll to the contact section below, where you may present your quest.",
    "The master welcomes worthy collaborations. Approach with respect and clarity of purpose, and you shall find a dedicated ally in your digital endeavors.",
  ],
  farewell: [
    "May your code compile without errors, and your deployments be swift as the wind. Until we meet again, fellow warrior.",
    "Go forth with the wisdom of the ancients and the tools of the future. The path of continuous learning awaits you.",
    "Remember: 道は歩くことによって作られる (The path is made by walking). Honor and good fortune on your journey.",
  ],
}

export default function SamuraiChatbot() {
  const [isOpen, setIsOpen] = useState(false)
  const [isMinimized, setIsMinimized] = useState(false)
  const [messages, setMessages] = useState<Message[]>([])
  const [inputValue, setInputValue] = useState("")
  const [isTyping, setIsTyping] = useState(false)
  const [botMood, setBotMood] = useState<"calm" | "thinking" | "pleased">("calm")
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const { playSound } = useAudio()

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  useEffect(() => {
    if (isOpen && messages.length === 0) {
      setTimeout(() => {
        addBotMessage(getRandomResponse("greeting"))
      }, 800)
    }
  }, [isOpen])

  const getRandomResponse = (category: keyof typeof botPersonality) => {
    const responses = botPersonality[category]
    return responses[Math.floor(Math.random() * responses.length)]
  }

  const analyzeMessage = (message: string): keyof typeof botPersonality => {
    const msg = message.toLowerCase()

    if (msg.includes("hello") || msg.includes("hi") || msg.includes("hey") || msg.includes("greetings")) {
      return "greeting"
    } else if (msg.includes("about") || msg.includes("who") || msg.includes("assil")) {
      return "about"
    } else if (
      msg.includes("skill") ||
      msg.includes("technology") ||
      msg.includes("tech") ||
      msg.includes("programming")
    ) {
      return "skills"
    } else if (
      msg.includes("project") ||
      msg.includes("work") ||
      msg.includes("portfolio") ||
      msg.includes("experience")
    ) {
      return "projects"
    } else if (
      msg.includes("philosophy") ||
      msg.includes("wisdom") ||
      msg.includes("advice") ||
      msg.includes("principle")
    ) {
      return "philosophy"
    } else if (
      msg.includes("contact") ||
      msg.includes("hire") ||
      msg.includes("collaborate") ||
      msg.includes("work together")
    ) {
      return "contact"
    } else if (msg.includes("bye") || msg.includes("goodbye") || msg.includes("farewell") || msg.includes("thanks")) {
      return "farewell"
    } else {
      return "philosophy" // Default to philosophical response
    }
  }

  const addBotMessage = (text: string) => {
    setIsTyping(true)
    setBotMood("thinking")

    setTimeout(
      () => {
        setMessages((prev) => [
          ...prev,
          {
            id: Date.now(),
            text,
            sender: "bot",
            timestamp: new Date(),
          },
        ])
        setIsTyping(false)
        setBotMood("pleased")
        playSound("hover")

        // Return to calm after a moment
        setTimeout(() => setBotMood("calm"), 2000)
      },
      1200 + Math.random() * 800,
    )
  }

  const handleSendMessage = () => {
    if (!inputValue.trim()) return

    const userMessage = {
      id: Date.now(),
      text: inputValue,
      sender: "user" as const,
      timestamp: new Date(),
    }

    setMessages((prev) => [...prev, userMessage])
    playSound("click")

    const responseCategory = analyzeMessage(inputValue)
    const response = getRandomResponse(responseCategory)
    addBotMessage(response)

    setInputValue("")
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault()
      handleSendMessage()
    }
  }

  return (
    <>
      {/* Chat Toggle Button */}
      <motion.div
        className="fixed bottom-8 left-8 z-50"
        initial={{ scale: 0, rotate: -180 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{ delay: 3, type: "spring", stiffness: 200 }}
      >
        <Button
          onClick={() => {
            setIsOpen(!isOpen)
            playSound("click")
          }}
          className="w-16 h-16 rounded-full bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white shadow-2xl hover:shadow-red-500/25 transition-all duration-300 group relative overflow-hidden border-2 border-red-400/30"
        >
          {/* Pulsing aura */}
          <motion.div
            className="absolute inset-0 rounded-full bg-gradient-radial from-red-400/40 to-transparent"
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.4, 0.7, 0.4],
            }}
            transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
          />

          <AnimatePresence mode="wait">
            {isOpen ? (
              <motion.div
                key="close"
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <X className="w-6 h-6" />
              </motion.div>
            ) : (
              <motion.div
                key="open"
                initial={{ rotate: 90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: -90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <MessageCircle className="w-6 h-6" />
              </motion.div>
            )}
          </AnimatePresence>
        </Button>
      </motion.div>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className={`fixed bottom-28 left-8 z-50 transition-all duration-300 ${
              isMinimized ? "w-80 h-16" : "w-96 h-[500px]"
            }`}
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            transition={{ duration: 0.3, type: "spring" }}
          >
            <Card className="h-full dark:bg-gray-900/95 bg-white/95 backdrop-blur-md border-red-500/30 shadow-2xl shadow-red-500/10 flex flex-col overflow-hidden border-2">
              {/* Header */}
              <div className="p-4 border-b dark:border-gray-700/50 border-gray-200/50 bg-gradient-to-r from-red-500/10 via-orange-500/5 to-red-500/10">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <motion.div
                      className="w-12 h-12 rounded-full bg-gradient-to-r from-red-500 to-red-600 flex items-center justify-center text-white text-xl border-2 border-red-400/50 shadow-lg"
                      animate={{
                        scale: botMood === "thinking" ? [1, 1.1, 1] : 1,
                        rotate: botMood === "pleased" ? [0, 5, -5, 0] : 0,
                      }}
                      transition={{ duration: 0.5 }}
                    >
                      S
                    </motion.div>
                    <div>
                      <h3 className="font-bold text-lg">Sensei Assil</h3>
                      <p className="text-xs dark:text-gray-400 text-gray-600 flex items-center gap-1">
                        <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                        Digital Ronin Guide
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-2">
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => setIsMinimized(!isMinimized)}
                      className="w-8 h-8 p-0 hover:bg-red-500/10"
                    >
                      {isMinimized ? <Maximize2 className="w-4 h-4" /> : <Minimize2 className="w-4 h-4" />}
                    </Button>
                  </div>
                </div>
              </div>

              {!isMinimized && (
                <>
                  {/* Messages */}
                  <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gradient-to-b from-transparent to-red-500/5">
                    {messages.map((message) => (
                      <motion.div
                        key={message.id}
                        initial={{ opacity: 0, y: 10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        className={`flex ${message.sender === "user" ? "justify-end" : "justify-start"}`}
                      >
                        <div
                          className={`flex items-start gap-3 max-w-[85%] ${
                            message.sender === "user" ? "flex-row-reverse" : ""
                          }`}
                        >
                          <div
                            className={`w-8 h-8 rounded-full flex items-center justify-center text-sm flex-shrink-0 ${
                              message.sender === "user"
                                ? "bg-blue-500 text-white"
                                : "bg-gradient-to-r from-red-500 to-red-600 text-white border border-red-400/50"
                            }`}
                          >
                            {message.sender === "user" ? <User className="w-4 h-4" /> : "S"}
                          </div>
                          <div
                            className={`p-4 rounded-2xl text-sm leading-relaxed shadow-lg ${
                              message.sender === "user"
                                ? "bg-blue-500 text-white rounded-br-md"
                                : "dark:bg-gray-800/90 bg-gray-100/90 dark:text-gray-200 text-gray-800 rounded-bl-md border border-red-500/20"
                            }`}
                          >
                            {message.text}
                            <div
                              className={`text-xs mt-2 opacity-70 ${
                                message.sender === "user" ? "text-blue-100" : "dark:text-gray-400 text-gray-500"
                              }`}
                            >
                              {message.timestamp.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    ))}

                    {/* Typing Indicator */}
                    {isTyping && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="flex justify-start"
                      >
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 rounded-full bg-gradient-to-r from-red-500 to-red-600 flex items-center justify-center text-sm text-white border border-red-400/50">
                            S
                          </div>
                          <div className="dark:bg-gray-800/90 bg-gray-100/90 p-4 rounded-2xl rounded-bl-md border border-red-500/20">
                            <div className="flex space-x-2">
                              {[0, 1, 2].map((i) => (
                                <motion.div
                                  key={i}
                                  className="w-2 h-2 bg-red-500 rounded-full"
                                  animate={{
                                    scale: [1, 1.5, 1],
                                    opacity: [0.4, 1, 0.4],
                                  }}
                                  transition={{
                                    duration: 1,
                                    repeat: Number.POSITIVE_INFINITY,
                                    delay: i * 0.2,
                                  }}
                                />
                              ))}
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    )}

                    <div ref={messagesEndRef} />
                  </div>

                  {/* Input */}
                  <div className="p-4 border-t dark:border-gray-700/50 border-gray-200/50 bg-gradient-to-r from-red-500/5 to-transparent">
                    <div className="flex gap-3">
                      <Input
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}
                        onKeyPress={handleKeyPress}
                        placeholder="Ask the sensei for wisdom..."
                        className="flex-1 dark:bg-gray-800/50 dark:border-gray-600/50 bg-white/80 border-gray-300/50 focus:border-red-500 text-sm rounded-xl backdrop-blur-sm"
                        disabled={isTyping}
                      />
                      <Button
                        onClick={handleSendMessage}
                        disabled={!inputValue.trim() || isTyping}
                        className="bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white px-4 rounded-xl shadow-lg hover:shadow-red-500/25 transition-all duration-200"
                      >
                        <Send className="w-4 h-4" />
                      </Button>
                    </div>

                    {/* Quick Actions */}
                    <div className="flex gap-2 mt-3">
                      {["About Assil", "Skills", "Projects", "Philosophy"].map((topic) => (
                        <Button
                          key={topic}
                          variant="outline"
                          size="sm"
                          onClick={() => {
                            setInputValue(topic)
                            setTimeout(handleSendMessage, 100)
                          }}
                          className="text-xs border-red-500/30 text-red-600 hover:bg-red-500/10 rounded-full px-3 py-1"
                          disabled={isTyping}
                        >
                          {topic}
                        </Button>
                      ))}
                    </div>
                  </div>
                </>
              )}
            </Card>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
