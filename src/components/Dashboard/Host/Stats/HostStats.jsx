'use client'
import Loader from '@/components/Shared/Loading/Loader';
import { useAuth } from '@/Hooks/useAuth';
import useAxiosSecure from '@/Hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import React from 'react';
import StatsCard from './StatsCard';
import HostBarChart from './HostBarChart';

const HostStats = () => {
    const { userInfo: user, loading } = useAuth();
        const axiosSecure=useAxiosSecure()
          
          const {
            data: hostStats = [],
            isLoading,
          } = useQuery({
            queryKey: ["hostStats", user?.email],
            enabled: !!user?.email,
            queryFn: async () => {
              const res = await axiosSecure(
                `/api/stats/host/${user?.email}`,
              );
              return res.data;
            },
          });
          if (isLoading) return <Loader />;
          console.log(hostStats,'hostStats');
          const charts=hostStats?.charts
    return (
        <div>
            <StatsCard hostStats={hostStats}/>

            <HostBarChart data={charts}/>
        </div>
    );
};

export default HostStats;