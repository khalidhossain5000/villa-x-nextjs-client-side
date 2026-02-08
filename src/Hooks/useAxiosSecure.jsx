'use client'
import axios from 'axios';
import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useAuth } from './useAuth';
import Loader from '@/components/Shared/Loading/Loader';

const axiosSecure = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000'
})

const useAxiosSecure = () => {
     const { userInfo,logOutHandler } = useAuth();
  const {user,loading}=useSelector((state)=>state.auth)

console.log(user)



    useEffect(() => {


  if (!user?.accessToken || !userInfo) return; 















        // intercept request
        const reqInterceptor = axiosSecure.interceptors.request.use(config => {
            console.log(userInfo,'inside axios secure','this is ocnfing')
            config.headers.Authorization = `Bearer ${user?.accessToken}`
            return config
        })

        // interceptor response
        const resInterceptor = axiosSecure.interceptors.response.use((response) => {
            return response;
        }, (error) => {
            console.log(error);

            const statusCode = error.status;
            if (statusCode === 401 || statusCode === 403) {
                // logOutHandler()
            }


            return Promise.reject(error);
        })

        return () => {
            axiosSecure.interceptors.request.eject(reqInterceptor);
            axiosSecure.interceptors.response.eject(resInterceptor);
        }

    }, [userInfo, logOutHandler,user])

    return axiosSecure;
};

export default useAxiosSecure;