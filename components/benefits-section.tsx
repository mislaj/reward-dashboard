"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { useDashboardStore } from "@/lib/store"
import type { LucideIcon } from "lucide-react"

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const cardVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 15,
    },
  },
}

interface BenefitCardProps {
  benefit: {
    id: string
    title: string
    description: string
    icon: LucideIcon
    status: "available" | "claimed" | "locked"
    value?: string
  }
  onClaim: (id: string) => void
}

function BenefitCard({ benefit, onClaim }: BenefitCardProps) {
  const Icon = benefit.icon

  return (
    <motion.div
      variants={cardVariants}
      whileHover={{ y: -5, scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
      <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-card to-card/80 backdrop-blur-sm group">
        <CardHeader className="pb-4">
          <div className="flex items-start justify-between">
            <motion.div
              className="p-3 rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-colors duration-300"
              whileHover={{ rotate: [0, -10, 10, 0] }}
              transition={{ duration: 0.5 }}
            >
              <Icon className="w-6 h-6 text-primary" />
            </motion.div>
            {benefit.value && (
              <Badge variant="outline" className="font-mono">
                {benefit.value}
              </Badge>
            )}
          </div>
          <CardTitle className="text-xl group-hover:text-primary transition-colors duration-300">
            {benefit.title}
          </CardTitle>
        </CardHeader>
        <CardContent className="pt-0">
          <p className="text-muted-foreground mb-6 leading-relaxed">{benefit.description}</p>
          <Button
            onClick={() => onClaim(benefit.id)}
            disabled={benefit.status === "claimed" || benefit.status === "locked"}
            className="w-full group-hover:scale-105 transition-transform duration-200"
            variant={benefit.status === "claimed" ? "secondary" : "default"}
          >
            {benefit.status === "claimed" ? "Claimed" : benefit.status === "locked" ? "Locked" : "Claim Now"}
          </Button>
        </CardContent>
      </Card>
    </motion.div>
  )
}

export function BenefitsSection() {
  const { benefits, claimBenefit } = useDashboardStore()

  return (
    <div className="space-y-6">
      <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}>
        <h2 className="text-2xl font-bold mb-2">Available Benefits</h2>
        <p className="text-muted-foreground">Claim your rewards and unlock exclusive benefits</p>
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {benefits.map((benefit) => (
          <BenefitCard key={benefit.id} benefit={benefit} onClaim={claimBenefit} />
        ))}
      </motion.div>
    </div>
  )
}
