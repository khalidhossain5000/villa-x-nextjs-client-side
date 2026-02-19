"use client";
import axios from "axios";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import Loader from "@/components/Shared/Loading/Loader";
import { signOutUser } from "@/Redux/Features/authSlice";

const axiosSecure = axios.create({
  // baseURL: process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000",
  baseURL: process.env.NEXT_PUBLIC_API_URL,
});

const useAxiosSecure = () => {
  const dispatch=useDispatch()
  const { user, loading, } = useSelector((state) => state.auth);
 
  useEffect(() => {
   
    if (!user?.accessToken ) return;

    // intercept request
    const reqInterceptor = axiosSecure.interceptors.request.use((config) => {
      config.headers.Authorization = `Bearer ${user?.accessToken}`;
      return config;
    });

    // interceptor response
    const resInterceptor = axiosSecure.interceptors.response.use(
      (response) => {
        return response;
      },
      (error) => {
        console.log(error);

        const statusCode = error.status;
        if (statusCode === 401 || statusCode === 403) {
          // dispatch(signOutUser());
        }

        return Promise.reject(error);
      },
    );

    return () => {
      axiosSecure.interceptors.request.eject(reqInterceptor);
      axiosSecure.interceptors.response.eject(resInterceptor);
    };
  }, [  user,dispatch]);

  return axiosSecure;
};

export default useAxiosSecure;
