"use client"

import { createContext, useContext, useState, type ReactNode } from "react"

interface AudioContextType {
  isEnabled: boolean
  toggle: () => void
  playSound: (soundType: "hover" | "click" | "swoosh") => void
}

const AudioContext = createContext<AudioContextType | undefined>(undefined)

export function AudioProvider({ children }: { children: ReactNode }) {
  const [isEnabled, setIsEnabled] = useState(false)

  const toggle = () => setIsEnabled(!isEnabled)

  const playSound = (soundType: "hover" | "click" | "swoosh") => {
    if (!isEnabled) return

    // Create audio context and play sound
    // This is a placeholder - in a real app you'd load actual audio files
    const audioContext = new (window.AudioContext || (window as any).webkitAudioContext)()
    const oscillator = audioContext.createOscillator()
    const gainNode = audioContext.createGain()

    oscillator.connect(gainNode)
    gainNode.connect(audioContext.destination)

    // Different frequencies for different sounds
    const frequencies = {
      hover: 800,
      click: 1000,
      swoosh: 400,
    }

    oscillator.frequency.setValueAtTime(frequencies[soundType], audioContext.currentTime)
    gainNode.gain.setValueAtTime(0.1, audioContext.currentTime)
    gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.1)

    oscillator.start(audioContext.currentTime)
    oscillator.stop(audioContext.currentTime + 0.1)
  }

  return <AudioContext.Provider value={{ isEnabled, toggle, playSound }}>{children}</AudioContext.Provider>
}

export function useAudio() {
  const context = useContext(AudioContext)
  if (context === undefined) {
    throw new Error("useAudio must be used within an AudioProvider")
  }
  return context
}
