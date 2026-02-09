"use client";
import { useAuth } from "@/Hooks/useAuth";
import { loginUser } from "@/Redux/Features/authSlice";
import { useRouter, useSearchParams } from "next/navigation";
import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { RiLockPasswordLine, RiUserLine } from "react-icons/ri";
import { useDispatch } from "react-redux";

const LoginForm = () => {
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { userInfo: user, loading } = useAuth();
  const router = useRouter();
  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get("callbackUrl") || "/";
  // If user already logged-in → redirect home automatically
  useEffect(() => {
    if (!loading && !user==null) {
      router.push("/"); // redirect home
    }
  }, [user, loading, router]);




  const onSubmit = (data) => {
    console.log(data);
    const email = data.email;
    const password = data.password;
    dispatch(loginUser({ email, password }));
    router.push(callbackUrl);
  };
  return (
    <div>
      <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
        {/* Email Input */}
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-[#cbd5e1] mb-2">
            Email Address
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <RiUserLine className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="email"
              {...register("email", { required: true })}
              className="block w-full pl-10 pr-3 py-3 border border-gray-300 dark:border-gray-700 rounded-lg bg-transparent text-[#1f2937] dark:text-[#f1f5f9] placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#1a5f0e] dark:focus:ring-[#4ade80] focus:border-transparent transition-all duration-200"
              placeholder="Enter your email"
            />
          </div>
        </div>

        {/* Password Input */}
        <div>
          <div className="flex items-center justify-between mb-2">
            <label className="block text-sm font-medium text-gray-700 dark:text-[#cbd5e1]">
              Password
            </label>
            <a
              href="#"
              className="text-sm text-[#1a5f0e] dark:text-[#4ade80] hover:text-[#0d9276] dark:hover:text-[#71f9a3] transition-colors duration-200"
            >
              Forgot password?
            </a>
          </div>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <RiLockPasswordLine className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="password"
              {...register("password", { required: true })}
              className="block w-full pl-10 pr-3 py-3 border border-gray-300 dark:border-gray-700 rounded-lg bg-transparent text-[#1f2937] dark:text-[#f1f5f9] placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#1a5f0e] dark:focus:ring-[#4ade80] focus:border-transparent transition-all duration-200"
              placeholder="Enter your password"
            />
          </div>
        </div>

        {/* Login Button */}
        <button
          type="submit"
          className="w-full py-3 px-4 bg-[#1a5f0e] dark:bg-[#4ade80] text-white font-semibold rounded-lg hover:bg-[#0d9276] dark:hover:bg-[#71f9a3] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#1a5f0e] dark:focus:ring-[#4ade80] transition-all duration-200 transform hover:-translate-y-0.5"
        >
          Sign In
        </button>
      </form>
    </div>
  );
};

export default LoginForm;
