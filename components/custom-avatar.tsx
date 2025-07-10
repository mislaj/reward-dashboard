"use client"

import { motion } from "framer-motion"
import { User } from "lucide-react"
import { cn } from "@/lib/utils"

interface CustomAvatarProps {
  src?: string
  alt?: string
  fallback?: string
  size?: "sm" | "md" | "lg" | "xl"
  className?: string
}

const sizeClasses = {
  sm: "w-8 h-8 text-sm",
  md: "w-12 h-12 text-base",
  lg: "w-24 h-24 text-2xl",
  xl: "w-32 h-32 text-4xl",
}

export function CustomAvatar({ src, alt, fallback, size = "md", className }: CustomAvatarProps) {
  return (
    <motion.div
      className={cn(
        "relative rounded-full border-4 border-primary/20 shadow-lg overflow-hidden bg-gradient-to-br from-primary/10 to-primary/20 flex items-center justify-center",
        sizeClasses[size],
        className,
      )}
      whileHover={{ scale: 1.05 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
      {src ? (
        <motion.img
          src={src}
          alt={alt}
          className="w-full h-full object-cover"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3 }}
          onError={(e) => {
            e.currentTarget.style.display = "none"
          }}
        />
      ) : fallback ? (
        <motion.span
          className="font-bold bg-gradient-to-br from-primary to-primary/60 bg-clip-text text-transparent"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3 }}
        >
          {fallback}
        </motion.span>
      ) : (
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3 }}
        >
          <User className="w-1/2 h-1/2 text-primary" />
        </motion.div>
      )}
    </motion.div>
  )
}
