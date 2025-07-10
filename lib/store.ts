"use client";

import { create } from "zustand";
import { persist } from "zustand/middleware";
import {
  CreditCard,
  Gift,
  Plane,
  Car,
  Coffee,
  ShoppingBag,
  type LucideIcon,
} from "lucide-react";

interface User {
  id: string;
  name: string;
  title: string;
  avatar: string;
  level: number;
  currentXP: number;
  nextLevelXP: number;
  totalPoints: number;
}

interface Benefit {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
  status: "available" | "claimed" | "locked";
  value?: string;
}

interface RewardStats {
  pointsThisMonth: number;
  monthlyProgress: Array<{
    month: string;
    points: number;
  }>;
}

interface DashboardState {
  user: User | null;
  benefits: Benefit[];
  rewardStats: RewardStats | null;
  isLoading: boolean;
  error: string | null;
  initializeData: () => Promise<void>;
  claimBenefit: (id: string) => Promise<void>;
}

// Icon mapping for benefits
const iconMap: Record<string, LucideIcon> = {
  CreditCard,
  Gift,
  Plane,
  Car,
  Coffee,
  ShoppingBag,
};

export const useDashboardStore = create<DashboardState>()(
  persist(
    (set, get) => ({
      user: null,
      benefits: [],
      rewardStats: null,
      isLoading: true,
      error: null,

      initializeData: async () => {
        set({ isLoading: true, error: null });

        try {
          const response = await fetch("/api/dashboard");
          if (!response.ok) {
            throw new Error("Failed to fetch dashboard data");
          }

          const data = await response.json();

          // Map icon strings to actual icon components
          const benefitsWithIcons = data.benefits.map((benefit: any) => ({
            ...benefit,
            icon: iconMap[benefit.icon] || CreditCard,
          }));

          set({
            user: data.user,
            benefits: benefitsWithIcons,
            rewardStats: data.rewardStats,
            isLoading: false,
          });
        } catch (error) {
          console.error("Error fetching dashboard data:", error);
          set({
            error: "Failed to load dashboard data",
            isLoading: false,
          });
        }
      },

      claimBenefit: async (id: string) => {
        try {
          const response = await fetch("/api/dashboard", {
            method: "PATCH",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ benefitId: id }),
          });

          if (!response.ok) {
            throw new Error("Failed to claim benefit");
          }

          const data = await response.json();

          // Map icon strings to actual icon components
          const benefitsWithIcons = data.benefits.map((benefit: any) => ({
            ...benefit,
            icon: iconMap[benefit.icon] || CreditCard,
          }));

          set({
            user: data.user,
            benefits: benefitsWithIcons,
            rewardStats: data.rewardStats,
          });
        } catch (error) {
          console.error("Error claiming benefit:", error);
          set({ error: "Failed to claim benefit" });
        }
      },
    }),
    {
      name: "reaward-dashboard-storage",
      partialize: (state) => ({
        // Don't persist loading states or errors
        benefits: state.benefits,
        user: state.user,
      }),
    }
  )
);
