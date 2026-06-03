'use client'
import { useQuery } from '@tanstack/react-query';
import React from 'react';

import useAxiosSecure from './useAxiosSecure';
import { useAuth } from './useAuth';

const useRole = () => {
    const { userInfo } = useAuth();
    const axiosSecure = useAxiosSecure();
    console.log(userInfo,'this is user info from useRole','user role has been hitted')
    const { isLoading: roleLoading, data: role  } = useQuery({
        queryKey: ['user-roles', userInfo?.email],
        queryFn: async () => {
            const res = await axiosSecure.get(`/api/auth/role/${userInfo.email}`);
            console.log(res,'this is res')
            return res.data?.userRole ;
        },
        enabled: !!userInfo?.email,
    })

    return { role, roleLoading };
};

export default useRole;