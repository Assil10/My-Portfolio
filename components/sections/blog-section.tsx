"use client"

import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Calendar, Clock, ArrowRight, Eye, Heart, MessageCircle } from "lucide-react"

const blogPosts = [
  {
    title: "The Art of Clean Code: Lessons from Bushido",
    excerpt:
      "How the principles of the samurai way can guide us to write better, more maintainable code that stands the test of time.",
    date: "2024-01-15",
    readTime: "5 min read",
    category: "Philosophy",
    image: "/placeholder.svg?height=300&width=500",
    featured: true,
    views: 1247,
    likes: 89,
    comments: 23,
  },
  {
    title: "Building AI with Ethical Foundations",
    excerpt:
      "Exploring the intersection of artificial intelligence and moral responsibility in modern development practices.",
    date: "2024-01-10",
    readTime: "8 min read",
    category: "AI Ethics",
    image: "/placeholder.svg?height=300&width=500",
    featured: false,
    views: 892,
    likes: 67,
    comments: 15,
  },
  {
    title: "Microservices Architecture: The Samurai Approach",
    excerpt:
      "Applying discipline and precision to distributed systems design and implementation for scalable applications.",
    date: "2024-01-05",
    readTime: "6 min read",
    category: "Architecture",
    image: "/placeholder.svg?height=300&width=500",
    featured: false,
    views: 654,
    likes: 45,
    comments: 12,
  },
  {
    title: "The Future of Web Development: Beyond React",
    excerpt: "Exploring emerging frameworks and technologies that are shaping the next generation of web applications.",
    date: "2024-01-01",
    readTime: "7 min read",
    category: "Technology",
    image: "/placeholder.svg?height=300&width=500",
    featured: false,
    views: 1156,
    likes: 78,
    comments: 34,
  },
]

export default function BlogSection() {
  return (
    <section id="blog" className="py-20 px-4 dark:bg-gray-900/30 bg-amber-50/50 relative overflow-hidden">
      {/* Animated background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 25% 25%, rgba(239, 68, 68, 0.1) 0%, transparent 50%),
                           radial-gradient(circle at 75% 75%, rgba(239, 68, 68, 0.1) 0%, transparent 50%)`,
            backgroundSize: "100px 100px",
          }}
        />
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
            <span className="text-red-500">思考</span> Thoughts
          </h2>
          <motion.div
            className="w-20 h-1 bg-gradient-to-r from-red-500 to-orange-500 mx-auto mb-8"
            initial={{ width: 0 }}
            whileInView={{ width: 80 }}
            transition={{ duration: 1, delay: 0.5 }}
          />
          <p className="dark:text-gray-400 text-gray-600 text-lg">Reflections on code, life, and the way</p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={post.featured ? "md:col-span-2 lg:col-span-2" : ""}
            >
              <Card className="overflow-hidden dark:bg-gray-900/60 bg-white/90 backdrop-blur-sm border-red-500/20 hover:border-red-500/50 transition-all duration-500 group h-full hover:shadow-xl hover:shadow-red-500/10">
                {/* Image with enhanced effects */}
                <div className="relative overflow-hidden">
                  <img
                    src={post.image || "/placeholder.svg"}
                    alt={post.title}
                    className={`w-full object-cover group-hover:scale-110 transition-transform duration-700 ${
                      post.featured ? "h-64" : "h-48"
                    }`}
                  />

                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500"></div>

                  {/* Category Badge with glow */}
                  <motion.div className="absolute top-4 left-4" whileHover={{ scale: 1.05 }}>
                    <span className="px-3 py-1 bg-red-500/90 text-white text-sm rounded-full font-medium backdrop-blur-sm border border-red-400/50 shadow-lg shadow-red-500/25">
                      {post.category}
                    </span>
                  </motion.div>

                  {/* Reading stats overlay */}
                  <div className="absolute top-4 right-4 flex gap-2">
                    <motion.div
                      className="flex items-center gap-1 px-2 py-1 bg-black/50 rounded-full text-white text-xs backdrop-blur-sm"
                      whileHover={{ scale: 1.05 }}
                    >
                      <Eye className="w-3 h-3" />
                      <span>{post.views}</span>
                    </motion.div>
                  </div>

                  {/* Shine effect on hover */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"
                    style={{ transform: "skewX(-20deg)" }}
                  />
                </div>

                {/* Enhanced Content */}
                <div className="p-6">
                  <div className="flex items-center gap-4 text-sm dark:text-gray-400 text-gray-600 mb-4">
                    <motion.div className="flex items-center gap-1" whileHover={{ scale: 1.05 }}>
                      <Calendar className="w-4 h-4" />
                      <span>{new Date(post.date).toLocaleDateString()}</span>
                    </motion.div>
                    <motion.div className="flex items-center gap-1" whileHover={{ scale: 1.05 }}>
                      <Clock className="w-4 h-4" />
                      <span>{post.readTime}</span>
                    </motion.div>
                  </div>

                  <motion.h3
                    className="text-xl font-bold mb-3 group-hover:text-red-400 transition-colors line-clamp-2 font-serif"
                    whileHover={{ x: 5 }}
                  >
                    {post.title}
                  </motion.h3>

                  <p className="dark:text-gray-400 text-gray-600 mb-6 line-clamp-3 leading-relaxed">{post.excerpt}</p>

                  {/* Engagement stats */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-4 text-sm dark:text-gray-500 text-gray-500">
                      <motion.div
                        className="flex items-center gap-1 hover:text-red-400 transition-colors cursor-pointer"
                        whileHover={{ scale: 1.05 }}
                      >
                        <Heart className="w-4 h-4" />
                        <span>{post.likes}</span>
                      </motion.div>
                      <motion.div
                        className="flex items-center gap-1 hover:text-red-400 transition-colors cursor-pointer"
                        whileHover={{ scale: 1.05 }}
                      >
                        <MessageCircle className="w-4 h-4" />
                        <span>{post.comments}</span>
                      </motion.div>
                    </div>
                  </div>

                  <Button variant="ghost" className="p-0 h-auto text-red-500 hover:text-red-400 group/btn font-medium">
                    Read More
                    <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                  </Button>
                </div>

                {/* Hover glow effect */}
                <div className="absolute inset-0 rounded-lg bg-red-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Enhanced View All Button */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Button
            variant="outline"
            className="border-red-500 text-red-500 hover:bg-red-500 hover:text-white dark:hover:text-black px-8 py-3 bg-transparent group relative overflow-hidden"
          >
            <motion.div
              className="absolute inset-0 bg-red-500 opacity-0 group-hover:opacity-100 transition-opacity"
              whileHover={{ scale: 1.05 }}
            />
            <span className="relative z-10">View All Articles</span>
            <motion.span
              className="ml-2 relative z-10"
              animate={{ x: [0, 3, 0] }}
              transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
            >
              →
            </motion.span>
          </Button>
        </motion.div>

        {/* Philosophical Quote */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 1 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <motion.p className="text-red-400 text-lg font-mono mb-2" whileHover={{ scale: 1.05 }}>
            知識は力なり
          </motion.p>
          <p className="dark:text-gray-500 text-gray-600 text-sm">"Knowledge is power"</p>
        </motion.div>
      </div>
    </section>
  )
}
