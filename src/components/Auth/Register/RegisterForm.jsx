"use client";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { RiLockPasswordLine, RiUserLine } from "react-icons/ri";
import { zodResolver } from "@hookform/resolvers/zod";
import { registerSchema } from "@/ZodSchema/register.schema";
import { useDispatch, useSelector } from "react-redux";
import { createUser } from "@/Redux/Features/authSlice";
import toast from "react-hot-toast";
import { useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";

const RegisterForm = () => {
  const [registering, setRegistering] = useState(false);
  const [fireBaseError, setfireBaseError] = useState("");
  const router = useRouter();
  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get("callbackUrl") || "/";

  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(registerSchema),
  });
  const onSubmit = (data) => {
    setRegistering(true);
    const email = data.email;
    const password = data.password;
    const name = data.fullName;
    dispatch(createUser({ email, password, name }))
      .then((res) => {
        if (res?.payload?.accessToken) {
          toast.success(`User Registered SuccessFully`, {
            className: "w-[400px] h-[100px] text-xl font-bold ",
            removeDelay: 1000,
            iconTheme: {
              primary: "#16061e",
              secondary: "#ef54e2",
            },
            style: {
              border: "1px solid #08086c",
              color: "black",
              backgroundImage:
                "linear-gradient(to bottom right, #f98d00,#f9a300 )",
            },
          });
          setRegistering(false);
          router.push(callbackUrl);
        }
        if (res?.error?.message) {
          toast.success(`${res?.error?.message}`, {
            className: "w-[400px] h-[100px] text-xl font-bold ",
            removeDelay: 1000,
            iconTheme: {
              primary: "#16061e",
              secondary: "#ef54e2",
            },
            style: {
              border: "1px solid #08086c",
              color: "white",
              backgroundImage:
                "linear-gradient(to bottom right, #8d010a,#dc0018 )",
            },
          });
          setfireBaseError(res.error.message);
        }
        setRegistering(false);
      })
      .catch((error) => {
        console.log(error, "this is create user errro");
        setRegistering(false);
      });
  };

  return (
    <div>
      <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
        {/* Name Input */}
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-[#cbd5e1] mb-2">
            Enter Your Full Name
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <RiUserLine className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="text"
              {...register("fullName")}
              className="block w-full pl-10 pr-3 py-3 border border-gray-300 dark:border-gray-700 rounded-lg bg-transparent text-[#1f2937] dark:text-[#f1f5f9] placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#1a5f0e] dark:focus:ring-[#4ade80] focus:border-transparent transition-all duration-200"
              placeholder="Enter your Name"
            />
          </div>
          {/* errors */}
          {errors && (
            <p className="text-lg font-smibold text-red-600">
              {errors?.fullName?.message}
            </p>
          )}
        </div>
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
              {...register("email")}
              className="block w-full pl-10 pr-3 py-3 border border-gray-300 dark:border-gray-700 rounded-lg bg-transparent text-[#1f2937] dark:text-[#f1f5f9] placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#1a5f0e] dark:focus:ring-[#4ade80] focus:border-transparent transition-all duration-200"
              placeholder="Enter your email"
            />
          </div>
          {fireBaseError && (
            <p className="text-lg font-smibold text-red-600">{fireBaseError}</p>
          )}
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
              {...register("password")}
              className="block w-full pl-10 pr-3 py-3 border border-gray-300 dark:border-gray-700 rounded-lg bg-transparent text-[#1f2937] dark:text-[#f1f5f9] placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#1a5f0e] dark:focus:ring-[#4ade80] focus:border-transparent transition-all duration-200"
              placeholder="Enter your password"
            />
          </div>
        </div>

        {/* Register Button */}
        <button
          type="submit"
          className="w-full py-3 px-4 bg-[#1a5f0e] dark:bg-[#4ade80] text-white font-semibold rounded-lg hover:bg-[#0d9276] dark:hover:bg-[#71f9a3] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#1a5f0e] dark:focus:ring-[#4ade80] transition-all duration-200 transform hover:-translate-y-0.5 cursor-pointer"
        >
          {registering ? "Registering......" : "Sign Up"}
        </button>
      </form>
    </div>
  );
};

export default RegisterForm;
