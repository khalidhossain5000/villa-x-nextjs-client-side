'use client'
import React from 'react';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import { useTheme } from "next-themes"; 

const RoomSliderSkleton = () => {
  const { theme } = useTheme();
  const skeletonCards = [1, 2, 3];

  
  const isDark = theme === "dark";
  const baseColor = isDark ? "#202020" : "#e0e0e0";
  const highlightColor = isDark ? "#333333" : "#f5f5f5";

  return (
    <div className="w-full md:w-11/12 mx-auto py-10">
      <SkeletonTheme baseColor={baseColor} highlightColor={highlightColor}>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {skeletonCards.map((_, index) => (
            <div 
              key={index} 
              className={`flex flex-col gap-4 ${index === 1 ? 'hidden md:flex' : ''} ${index === 2 ? 'hidden xl:flex' : ''}`}
            >
              <Skeleton height={400} borderRadius={16} />
              <div className="px-2">
                <Skeleton width="60%" height={28} className="mb-2" />
                <Skeleton width="100%" height={16} count={2} />
              </div>
            </div>
          ))}
        </div>
      </SkeletonTheme>
    </div>
  );
};

export default RoomSliderSkleton;