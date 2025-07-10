"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Skeleton } from "@/components/ui/skeleton"

const pulseVariants = {
  pulse: {
    opacity: [0.4, 1, 0.4],
    transition: {
      duration: 1.5,
      repeat: Number.POSITIVE_INFINITY,
      ease: "easeInOut",
    },
  },
}

const waveVariants = {
  wave: {
    x: [-100, 300],
    transition: {
      duration: 2,
      repeat: Number.POSITIVE_INFINITY,
      ease: "easeInOut",
    },
  },
}

const shimmer = {
  hidden: { opacity: 0.3 },
  visible: {
    opacity: 1,
    transition: {
      repeat: Number.POSITIVE_INFINITY,
      repeatType: "reverse" as const,
      duration: 1.5,
      ease: "easeInOut",
    },
  },
}

export function LoadingSkeleton() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20">
      <div className="container mx-auto px-4 py-8 max-w-7xl">
        {/* Header Skeleton */}
        <motion.div
          className="flex justify-between items-center mb-8"
          variants={shimmer}
          initial="hidden"
          animate="visible"
        >
          <div className="space-y-2">
            <Skeleton className="h-10 w-48" />
            <Skeleton className="h-4 w-32" />
          </div>
          <Skeleton className="h-10 w-10 rounded-full" />
        </motion.div>

        <div className="space-y-8">
          {/* User Profile Skeleton */}
          <motion.div variants={shimmer} initial="hidden" animate="visible">
            <Card className="border-0 shadow-xl relative overflow-hidden">
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/5 to-transparent"
                variants={waveVariants}
                animate="wave"
                style={{ clipPath: "polygon(0 0, 100% 0, 90% 100%, 10% 100%)" }}
              />
              <CardContent className="p-8">
                <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
                  <Skeleton className="w-24 h-24 rounded-full" />
                  <div className="flex-1 space-y-4">
                    <div className="space-y-2">
                      <div className="flex items-center gap-3">
                        <Skeleton className="h-8 w-48" />
                        <Skeleton className="h-6 w-20 rounded-full" />
                      </div>
                      <Skeleton className="h-4 w-32" />
                    </div>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <Skeleton className="h-4 w-32" />
                        <Skeleton className="h-4 w-24" />
                      </div>
                      <Skeleton className="h-3 w-full" />
                      <Skeleton className="h-3 w-40" />
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Reward Progress Skeleton */}
          <motion.div variants={shimmer} initial="hidden" animate="visible" transition={{ delay: 0.1 }}>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {[...Array(3)].map((_, i) => (
                <Card key={i} className="border-0 shadow-lg relative overflow-hidden">
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/5 to-transparent"
                    variants={waveVariants}
                    animate="wave"
                    style={{ clipPath: "polygon(0 0, 100% 0, 90% 100%, 10% 100%)" }}
                  />
                  <CardHeader className="pb-3">
                    <div className="flex items-center gap-2">
                      <Skeleton className="w-5 h-5" />
                      <Skeleton className="h-5 w-24" />
                    </div>
                  </CardHeader>
                  <CardContent>
                    <Skeleton className="h-32 w-full mb-2" />
                    <Skeleton className="h-4 w-20 mx-auto" />
                  </CardContent>
                </Card>
              ))}
            </div>
          </motion.div>

          {/* Benefits Section Skeleton */}
          <motion.div variants={shimmer} initial="hidden" animate="visible" transition={{ delay: 0.2 }}>
            <div className="space-y-6">
              <div>
                <Skeleton className="h-8 w-48 mb-2" />
                <Skeleton className="h-4 w-80" />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[...Array(6)].map((_, i) => (
                  <Card key={i} className="border-0 shadow-lg relative overflow-hidden">
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/5 to-transparent"
                      variants={waveVariants}
                      animate="wave"
                      style={{ clipPath: "polygon(0 0, 100% 0, 90% 100%, 10% 100%)" }}
                    />
                    <CardHeader className="pb-4">
                      <div className="flex items-start justify-between">
                        <Skeleton className="w-12 h-12 rounded-xl" />
                        <Skeleton className="h-6 w-16 rounded-full" />
                      </div>
                      <Skeleton className="h-6 w-32" />
                    </CardHeader>
                    <CardContent className="pt-0">
                      <div className="space-y-2 mb-6">
                        <Skeleton className="h-4 w-full" />
                        <Skeleton className="h-4 w-3/4" />
                      </div>
                      <Skeleton className="h-10 w-full" />
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
