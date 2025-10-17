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
    "Hello! I’m Assil’s digital assistant. How can I help you today?",
    "Welcome! I can answer questions about Assil’s skills, projects, or philosophy on software development.",
    "Hi there! Ask me anything about Assil’s experience, projects, or technical expertise.",
  ],
  about: [
    "Assil is a software developer with expertise in full-stack development, AI, and blockchain. He focuses on building efficient, scalable, and user-friendly solutions.",
    "With a strong foundation in modern technologies, Assil combines technical skills with creative problem-solving to deliver quality software.",
    "Assil is passionate about continuous learning and innovation, always seeking to improve both his skills and the products he builds.",
  ],
  skills: [
    "Assil is proficient in React, Node.js, Python, Solidity, and MongoDB. He also has experience with AI/ML and cloud technologies.",
    "His skill set includes full-stack web development, smart contract development, AI integration, and building scalable applications.",
    "Assil has hands-on experience with front-end frameworks, back-end APIs, databases, and blockchain technologies, enabling him to handle end-to-end development.",
  ],
  projects: [
    "Assil has worked on projects including AI dashboards, blockchain platforms, and mobile applications that optimize user experience and performance.",
    "His portfolio demonstrates practical applications of technology, from full-stack web apps to AI-powered tools.",
    "Each project is built with scalability, maintainability, and usability in mind, ensuring long-term value for users.",
  ],
  philosophy: [
    "Assil believes that consistent practice, learning, and applying best practices are key to professional growth.",
    "He values clean, maintainable code and believes in balancing innovation with reliability.",
    "Continuous improvement, collaboration, and understanding user needs are central to how Assil approaches software development.",
  ],
  contact: [
    "You can reach Assil via the contact form or email. He’s open to collaborations, internships, and professional connections.",
    "For inquiries about projects or partnerships, please get in touch with Assil using the contact section.",
    "Assil welcomes meaningful conversations and collaborations that align with his expertise and interests.",
  ],
  farewell: [
    "Thank you for stopping by. Feel free to reach out anytime.",
    "Goodbye! Wishing you success in your endeavors.",
    "Take care! Assil looks forward to collaborating or sharing knowledge with you in the future.",
  ],
  advice: [
    "When building software, focus on clean, maintainable code and keep the user experience in mind.",
    "Learning new technologies is important, but understanding fundamentals will make you more adaptable.",
    "Collaboration and communication are as important as technical skills in software development.",
  ],
  career: [
    "Assil is currently seeking opportunities to work on innovative full-stack or AI projects.",
    "His career goals involve building impactful software solutions and continuously improving his technical expertise.",
    "He is open to collaboration on projects that leverage modern technologies to solve real-world problems.",
  ],
  misc: [
    "Could you clarify your question so I can provide a better response?",
    "I’m here to answer questions about Assil’s skills, projects, or career.",
    "Feel free to ask me about development technologies, project experience, or professional advice.",
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
