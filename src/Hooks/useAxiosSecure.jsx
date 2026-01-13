import axios from 'axios';
import React, { useEffect } from 'react';

import { useAuth } from './useAuth';


const axiosSecure = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000'
})

const useAxiosSecure = () => {
     const { userInfo, loading,logOutHandler } = useAuth();
  


    useEffect(() => {
        // intercept request
        const reqInterceptor = axiosSecure.interceptors.request.use(config => {
            config.headers.Authorization = `Bearer ${userInfo?.accessToken}`
            return config
        })

        // interceptor response
        const resInterceptor = axiosSecure.interceptors.response.use((response) => {
            return response;
        }, (error) => {
            console.log(error);

            const statusCode = error.status;
            if (statusCode === 401 || statusCode === 403) {
                logOutHandler()
            }


            return Promise.reject(error);
        })

        return () => {
            axiosSecure.interceptors.request.eject(reqInterceptor);
            axiosSecure.interceptors.response.eject(resInterceptor);
        }

    }, [userInfo, logOutHandler])

    return axiosSecure;
};

export default useAxiosSecure;