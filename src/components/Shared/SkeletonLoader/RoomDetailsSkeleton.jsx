'use client'
import React from 'react';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import { useTheme } from "next-themes";

const RoomDetailsSkeleton = () => {
    const { theme } = useTheme();

  
    const isDark = theme === "dark";
    const baseColor = isDark ? "#1a1a1a" : "#e5e7eb";
    const highlightColor = isDark ? "#2a2a2a" : "#f3f4f6";

    return (
        <div className="max-w-7xl mx-auto px-4 py-10">
            <SkeletonTheme baseColor={baseColor} highlightColor={highlightColor}>
                
            
                <div className="w-full mb-10">
                    <Skeleton height={500} borderRadius={20} className="w-full shadow-lg" />
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
                    
                  
                    <div className="lg:col-span-8 space-y-6">
                    
                        <div className="flex justify-between items-center">
                            <Skeleton width="60%" height={40} />
                            <Skeleton width="100px" height={30} borderRadius={20} />
                        </div>

                     
                        <div className="flex gap-4">
                            <Skeleton width={120} height={20} />
                            <Skeleton width={120} height={20} />
                        </div>

                        <hr className="border-gray-200 dark:border-zinc-800" />

                        <div className="space-y-4">
                            <Skeleton width="100%" height={24} />
                            <Skeleton width="95%" height={20} count={4} />
                        </div>

                        <div className="pt-6">
                            <Skeleton width="150px" height={28} className="mb-4" />
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                                {[1, 2, 3, 4].map(i => (
                                    <Skeleton key={i} height={80} borderRadius={12} />
                                ))}
                            </div>
                        </div>
                    </div>

       
                    <div className="lg:col-span-4">
                        <div className="p-6 rounded-2xl border border-gray-100 dark:border-zinc-800 shadow-sm sticky top-24">
                      
                            <div className="space-y-6">
                                <div className="flex justify-between items-end">
                                    <Skeleton width="120px" height={35} />
                                    <Skeleton width="60px" height={20} />
                                </div>

                         
                                <div className="space-y-3">
                                    <Skeleton height={50} borderRadius={10} />
                                    <Skeleton height={50} borderRadius={10} />
                                </div>

                             
                                <Skeleton height={55} borderRadius={12} className="w-full" />
                                
                                <div className="pt-4 space-y-2">
                                    <Skeleton width="100%" height={15} />
                                    <Skeleton width="80%" height={15} />
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </SkeletonTheme>
        </div>
    );
};

export default RoomDetailsSkeleton;