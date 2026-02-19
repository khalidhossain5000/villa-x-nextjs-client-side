import axios from 'axios';
import React from 'react';


const axiosInstance = axios.create({
  // baseURL: process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000'
  baseURL: process.env.NEXT_PUBLIC_API_URL 
})

const useAxios = () => {
    return axiosInstance;
};

export default useAxios;