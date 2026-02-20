"use client";
import React from "react";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { useTheme } from "next-themes";

const DashboardSkeleton = () => {
  const { theme } = useTheme();

  const isDark = theme === "dark";
  const baseColor = isDark ? "#202020" : "#e0e0e0";
  const highlightColor = isDark ? "#333333" : "#f5f5f5";

  return (
    <div className="w-full p-4 md:p-6">
      <SkeletonTheme baseColor={baseColor} highlightColor={highlightColor}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-4 rounded-xl border border-gray-200 dark:border-zinc-800 shadow-sm">
            <div className="flex items-center gap-4 mb-4">
              <Skeleton circle width={50} height={50} />
              <div className="flex-1">
                <Skeleton width="40%" height={20} />
              </div>
            </div>
            <Skeleton height={150} borderRadius={12} />
            <div className="mt-4">
              <Skeleton count={2} height={15} />
            </div>
          </div>

          <div className="p-4 rounded-xl border border-gray-200 dark:border-zinc-800 shadow-sm">
            <div className="flex items-center gap-4 mb-4">
              <Skeleton circle width={50} height={50} />
              <div className="flex-1">
                <Skeleton width="40%" height={20} />
              </div>
            </div>
            <Skeleton height={150} borderRadius={12} />
            <div className="mt-4">
              <Skeleton count={2} height={15} />
            </div>
          </div>
        </div>
      </SkeletonTheme>
    </div>
  );
};

export default DashboardSkeleton;
