"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { useDashboardStore } from "@/lib/store"
import { Trophy, Star, Zap } from "lucide-react"
import { CustomAvatar } from "@/components/custom-avatar"

export function UserProfile() {
  const { user } = useDashboardStore()

  if (!user) return null

  const progressPercentage = (user.currentXP / user.nextLevelXP) * 100

  return (
    <Card className="overflow-hidden border-0 shadow-xl bg-gradient-to-r from-card via-card to-card/80 backdrop-blur-sm">
      <CardContent className="p-8">
        <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
          {/* Avatar Section */}
          <motion.div
            className="relative"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
            <CustomAvatar
              src={user.avatar}
              alt={user.name}
              fallback={user.name
                .split(" ")
                .map((n) => n[0])
                .join("")}
              size="lg"
            />
            <motion.div
              className="absolute -top-2 -right-2 bg-primary rounded-full p-2"
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, repeatDelay: 3 }}
            >
              <Trophy className="w-4 h-4 text-primary-foreground" />
            </motion.div>
          </motion.div>

          {/* User Info */}
          <div className="flex-1 space-y-4">
            <div>
              <div className="flex items-center gap-3 mb-2">
                <h2 className="text-3xl font-bold">{user.name}</h2>
                <Badge variant="secondary" className="px-3 py-1">
                  <Star className="w-4 h-4 mr-1" />
                  Level {user.level}
                </Badge>
              </div>
              <p className="text-muted-foreground">{user.title}</p>
            </div>

            {/* XP Progress */}
            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <span className="text-sm font-medium flex items-center gap-1">
                  <Zap className="w-4 h-4 text-primary" />
                  Experience Points
                </span>
                <span className="text-sm text-muted-foreground">
                  {user.currentXP} / {user.nextLevelXP} XP
                </span>
              </div>
              <div className="relative">
                <Progress value={progressPercentage} className="h-3" />
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                  animate={{ x: [-100, 300] }}
                  transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, repeatDelay: 3 }}
                  style={{ clipPath: "polygon(0 0, 100% 0, 90% 100%, 10% 100%)" }}
                />
              </div>
              <p className="text-xs text-muted-foreground">{user.nextLevelXP - user.currentXP} XP to next level</p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
