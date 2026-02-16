'use client'
import Loader from '@/components/Shared/Loading/Loader';
import { useAuth } from '@/Hooks/useAuth';
import useAxiosSecure from '@/Hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import React from 'react';
import AdminStatsCard from './AdminStatsCard';
import UsersPieChart from './UsersPieChart';
import RoomCatPieChart from './RoomCatPieChart';

const AdminStats = () => {
     const { userInfo: user, loading } = useAuth();
            const axiosSecure=useAxiosSecure()
              
              const {
                data: adminStats = [],
                isLoading,
              } = useQuery({
                queryKey: ["adminStats", user?.email],
                enabled: !!user?.email,
                queryFn: async () => {
                  const res = await axiosSecure(
                    `/api/stats/admin/stats/${user?.email}`,
                  );
                  return res.data;
                },
              });
              if (isLoading) return <Loader />;

const cardData={

}
              console.log(adminStats,'adminStatsadminStats')
    return (
        <div>
            <AdminStatsCard totalRooms={adminStats?.totalRooms} totalUsers={adminStats?.totalUsers}/>


            <div>
                <UsersPieChart roleChartData={adminStats?.roleChartData}/>
                <RoomCatPieChart roomCategoryChartData={adminStats?.roomCategoryChartData}/>
            </div>
        </div>
    );
};

export default AdminStats;