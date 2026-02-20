"use client";
import Loader from "@/components/Shared/Loading/Loader";
import { useAuth } from "@/Hooks/useAuth";
import useAxiosSecure from "@/Hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import React from "react";
import AdminStatsCard from "./AdminStatsCard";
import UsersPieChart from "./UsersPieChart";
import RoomCatPieChart from "./RoomCatPieChart";
import ChartSkeleton from "@/components/Shared/SkeletonLoader/ChartSkeleton";

const AdminStats = () => {
  const { userInfo: user, loading } = useAuth();
  const axiosSecure = useAxiosSecure();

  const { data: adminStats = [], isLoading } = useQuery({
    queryKey: ["adminStats", user?.email],
    enabled: !!user?.email,
    queryFn: async () => {
      const res = await axiosSecure(`/api/stats/admin/stats/${user?.email}`);
      return res.data;
    },
  });
  if (isLoading) return <ChartSkeleton />;

  const cardData = {};
  return (
    <div>
      <AdminStatsCard
        totalRooms={adminStats?.totalRooms}
        totalUsers={adminStats?.totalUsers}
      />

      <div className="container flex flex-col lg:flex-row gap-6 lg:gap-9 pt-12 items-stretch">
        <div className="lg:flex-1">
          <UsersPieChart roleChartData={adminStats?.roleChartData} />
        </div>
       <div className="lg:flex-1 h-full">
         <RoomCatPieChart
          roomCategoryChartData={adminStats?.roomCategoryChartData}
        />
       </div>
      </div>
    </div>
  );
};

export default AdminStats;
