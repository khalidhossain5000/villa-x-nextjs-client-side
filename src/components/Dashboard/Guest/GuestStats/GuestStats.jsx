'use client'
import Loader from '@/components/Shared/Loading/Loader';
import { useAuth } from '@/Hooks/useAuth';
import useAxiosSecure from '@/Hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import React from 'react';
import GuestStatsCard from './GuestStatsCard';

const GuestStats = () => {
    const { userInfo: user, loading } = useAuth();
      const axiosSecure = useAxiosSecure();
    
      const { data: guestStats = [], isLoading } = useQuery({
        queryKey: ["guestStats", user?.email],
        enabled: !!user?.email,
        queryFn: async () => {
          const res = await axiosSecure(`/api/stats/guest-stats/${user?.email}`);
          return res.data;
        },
      });
      if (isLoading) return <Loader/>;

      console.log(guestStats,'guestStats')
    return (
        <div className='pt-9 pb-6'>
            <GuestStatsCard guestStats={guestStats}/>
        </div>
    );
};

export default GuestStats;