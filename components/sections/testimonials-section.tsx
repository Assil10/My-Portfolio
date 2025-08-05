"use client"

import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import { Star, Quote } from "lucide-react"

const testimonials = [
  {
    name: "Sarah Chen",
    role: "Tech Lead at InnovateCorp",
    content: "Assilo's approach to AI development is both innovative and practical. His code is poetry in motion.",
    rating: 5,
    avatar: "/placeholder.svg?height=60&width=60",
  },
  {
    name: "Marcus Rodriguez",
    role: "CTO at StartupX",
    content:
      "Working with Assilo was like having a samurai on our development team - precise, disciplined, and masterful.",
    rating: 5,
    avatar: "/placeholder.svg?height=60&width=60",
  },
  {
    name: "Dr. Yuki Tanaka",
    role: "AI Research Director",
    content: "His understanding of both Eastern philosophy and Western technology creates truly unique solutions.",
    rating: 5,
    avatar: "/placeholder.svg?height=60&width=60",
  },
]

export default function TestimonialsSection() {
  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-8">
            <span className="text-red-500">証言</span> Testimonials
          </h2>
          <div className="w-20 h-1 bg-red-500 mx-auto mb-8"></div>
          <p className="dark:text-gray-400 text-gray-600 text-lg">Words from fellow warriors</p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <Card className="p-6 h-full dark:bg-gray-900/50 bg-white/80 backdrop-blur-sm border-red-500/20 hover:border-red-500/40 transition-all duration-300 group relative overflow-hidden">
                {/* Quote Icon */}
                <Quote className="absolute top-4 right-4 w-8 h-8 text-red-500/20 group-hover:text-red-500/40 transition-colors" />

                {/* Rating */}
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-red-500 text-red-500" />
                  ))}
                </div>

                {/* Content */}
                <p className="dark:text-gray-300 text-gray-700 mb-6 italic leading-relaxed">"{testimonial.content}"</p>

                {/* Author */}
                <div className="flex items-center gap-4">
                  <img
                    src={testimonial.avatar || "/placeholder.svg"}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full border-2 border-red-500/30"
                  />
                  <div>
                    <h4 className="font-semibold group-hover:text-red-400 transition-colors">{testimonial.name}</h4>
                    <p className="text-sm dark:text-gray-400 text-gray-600">{testimonial.role}</p>
                  </div>
                </div>

                {/* Hover Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-red-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
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
          <p className="text-red-400 text-lg font-mono mb-2">信頼は歩いてくるが、走って逃げる</p>
          <p className="dark:text-gray-500 text-gray-600 text-sm">"Trust walks slowly but runs away quickly"</p>
        </motion.div>
      </div>
    </section>
  )
}
