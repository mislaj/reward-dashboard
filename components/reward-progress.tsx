"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useDashboardStore } from "@/lib/store";
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";
import { Coins, TrendingUp, Target } from "lucide-react";
import { EnhancedRadialProgress } from "@/components/enhanced-radial-progress";

const COLORS = [
  "hsl(var(--primary))",
  "hsl(var(--muted))",
  "hsl(var(--accent))",
];

export function RewardProgress() {
  const { user, rewardStats } = useDashboardStore();

  if (!user || !rewardStats) return null;

  const radialData = [
    {
      name: "Progress",
      value: Math.min(Math.round((user.totalPoints / 10000) * 100), 100),
      fill: "#3b82f6",
    },
  ];

  const barData = rewardStats.monthlyProgress;

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      {/* Total Points Card */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <Card className="border-0 shadow-lg bg-gradient-to-br from-primary/5 to-primary/10">
          <CardHeader className="pb-3">
            <CardTitle className="flex items-center gap-2 text-lg">
              <motion.div
                animate={{ rotate: [0, 360] }}
                transition={{
                  duration: 2,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "linear",
                }}
              >
                <Coins className="w-5 h-5 text-primary" />
              </motion.div>
              Total Points
            </CardTitle>
          </CardHeader>
          <CardContent>
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
              className="text-3xl font-bold text-primary mb-2"
            >
              {user.totalPoints.toLocaleString()}
            </motion.div>
            <p className="text-sm text-muted-foreground">
              +{rewardStats.pointsThisMonth} this month
            </p>
          </CardContent>
        </Card>
      </motion.div>

      {/* Progress Chart */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        <Card className="border-0 shadow-lg bg-gradient-to-br from-card to-card/80">
          <CardHeader className="pb-3">
            <CardTitle className="flex items-center gap-2 text-lg">
              <Target className="w-5 h-5 text-primary" />
              Progress to Next Tier
            </CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col items-center space-y-4">
            <EnhancedRadialProgress
              value={Math.round((user.totalPoints / 10000) * 100)}
              size={140}
              strokeWidth={12}
            />

            {/* Progress Details */}
            <div className="w-full space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Current</span>
                <span className="font-medium">
                  {user.totalPoints.toLocaleString()}
                </span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Target</span>
                <span className="font-medium">10,000</span>
              </div>
              <div className="w-full bg-muted/30 rounded-full h-2 overflow-hidden">
                <motion.div
                  className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 h-full rounded-full"
                  initial={{ width: 0 }}
                  animate={{
                    width: `${Math.min(
                      Math.round((user.totalPoints / 10000) * 100),
                      100
                    )}%`,
                  }}
                  transition={{ duration: 2, delay: 0.5, ease: "easeOut" }}
                />
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
}
