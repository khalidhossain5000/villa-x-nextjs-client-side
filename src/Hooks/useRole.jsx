import { useQuery } from '@tanstack/react-query';
import React from 'react';

import useAxiosSecure from './useAxiosSecure';
import { useAuth } from './useAuth';

const useRole = () => {
    const { userInfo } = useAuth();
    const axiosSecure = useAxiosSecure();
    const { isLoading: roleLoading, data: role = 'user' } = useQuery({
        queryKey: ['user-role', userInfo?.email],
        queryFn: async () => {
            const res = await axiosSecure.get(`/api/auth/role?email=${userInfo.email}`);
            
            return res.data?.userRole || 'user';
        },
        enabled: !!userInfo?.email,
    })

    return { role, roleLoading };
};

export default useRole;