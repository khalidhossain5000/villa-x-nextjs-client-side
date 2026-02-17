'use client'
import Loader from '@/components/Shared/Loading/Loader';
import { useAuth } from '@/Hooks/useAuth';
import useAxiosSecure from '@/Hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import React from 'react';

const GuestStats = () => {
    const { userInfo: user, loading } = useAuth();
      const axiosSecure = useAxiosSecure();
    
      const { data: guestStats = [], isLoading } = useQuery({
        queryKey: ["guestStats", user?.email],
        enabled: !!user?.email,
        queryFn: async () => {
          const res = await axiosSecure(`/api/guest-stats/${user?.email}`);
          return res.data;
        },
      });
      if (isLoading) return <Loader/>;

      console.log(guestStats,'guestStats')
    return (
        <div>
            
        </div>
    );
};

export default GuestStats;