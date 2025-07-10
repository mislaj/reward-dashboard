"use client";

import { useEffect } from "react";
import { motion } from "framer-motion";
import { useDashboardStore } from "@/lib/store";
import { UserProfile } from "@/components/user-profile";
import { BenefitsSection } from "@/components/benefits-section";
import { RewardProgress } from "@/components/reward-progress";
import { EnhancedThemeToggle } from "@/components/enhanced-theme-toggle";
import { LoadingSkeleton } from "@/components/loading-skeleton";
import { ErrorBoundary } from "@/components/error-boundary";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 10,
    },
  },
};

export default function Dashboard() {
  const { isLoading, error, initializeData } = useDashboardStore();

  useEffect(() => {
    initializeData();
  }, [initializeData]);

  if (error) {
    return <ErrorBoundary error={error} onRetry={initializeData} />;
  }

  if (isLoading) {
    return <LoadingSkeleton />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20 transition-colors duration-500">
      <div className="container mx-auto px-4 py-8 max-w-7xl">
        {/* Header */}
        <motion.div
          className="flex justify-between items-center mb-8"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div>
            <h1 className="text-4xl font-bold bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              Rewards Dashboard
            </h1>
            <p className="text-muted-foreground mt-1">Your rewards dashboard</p>
          </div>
          <EnhancedThemeToggle />
        </motion.div>

        {/* Main Content */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-8"
        >
          {/* User Profile */}
          <motion.div variants={itemVariants}>
            <UserProfile />
          </motion.div>

          {/* Reward Progress */}
          <motion.div variants={itemVariants}>
            <RewardProgress />
          </motion.div>

          {/* Benefits Section */}
          <motion.div variants={itemVariants}>
            <BenefitsSection />
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
