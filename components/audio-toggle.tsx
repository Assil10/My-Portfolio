"use client"

import { Volume2, VolumeX } from "lucide-react"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { useAudio } from "@/components/audio-provider"

export default function AudioToggle() {
  const { isEnabled, toggle } = useAudio()

  return (
    <Button
      variant="outline"
      size="icon"
      onClick={toggle}
      className="border-red-500/30 bg-background/80 backdrop-blur-sm hover:bg-red-500/10"
    >
      <motion.div animate={{ scale: isEnabled ? 1 : 0.8 }} transition={{ duration: 0.2 }}>
        {isEnabled ? <Volume2 className="h-4 w-4 text-red-500" /> : <VolumeX className="h-4 w-4 text-red-500/50" />}
      </motion.div>
    </Button>
  )
}
