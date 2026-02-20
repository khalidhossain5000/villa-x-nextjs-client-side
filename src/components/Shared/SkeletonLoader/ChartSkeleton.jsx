'use client'
import React from 'react';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import { useTheme } from "next-themes";

const ChartSkeleton = () => {
    const { theme } = useTheme();

    const isDark = theme === "dark";
    const baseColor = isDark ? "#202020" : "#e0e0e0";
    const highlightColor = isDark ? "#333333" : "#f5f5f5";

    return (
        <div className="w-full p-6 bg-white dark:bg-zinc-900/50 rounded-2xl border border-gray-100 dark:border-zinc-800 shadow-sm">
            <SkeletonTheme baseColor={baseColor} highlightColor={highlightColor}>
                
                <div className="mb-8">
                    <Skeleton width="150px" height={24} className="mb-2" />
                    <Skeleton width="250px" height={16} />
                </div>

                <div className="relative w-full">
                    <Skeleton height={350} borderRadius={12} />
                </div>

                <div className="flex gap-6 mt-8 justify-center">
                    <div className="flex items-center gap-2">
                        <Skeleton circle width={12} height={12} />
                        <Skeleton width={60} height={12} />
                    </div>
                    <div className="flex items-center gap-2">
                        <Skeleton circle width={12} height={12} />
                        <Skeleton width={60} height={12} />
                    </div>
                    <div className="flex items-center gap-2">
                        <Skeleton circle width={12} height={12} />
                        <Skeleton width={60} height={12} />
                    </div>
                </div>

            </SkeletonTheme>
        </div>
    );
};

export default ChartSkeleton;