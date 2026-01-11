import React from "react";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook, FaGithub, FaTwitter } from "react-icons/fa";
import { RiLockPasswordLine, RiUserLine } from "react-icons/ri";
import Link from "next/link";
import SocialLogin from "@/components/Auth/SocialLogin/SocialLogin";
import LoginForm from "@/components/Auth/Login/LoginForm";

const LoginPage = () => {
  return (
    <div
      style={{
        background:
          "radial-gradient(125% 125% at 50% 90%, #f1f5f9 30%, #71f9a3 100%)",
      }}
      className="absolute inset-0 z-0 min-h-screen flex items-center justify-center  p-4 transition-colors duration-300"
    >
      <div className="w-full max-w-md">
        {/* Login Card */}
        <div className="bg-white dark:bg-[#0a1929] rounded-2xl shadow-xl p-8 border border-gray-200 dark:border-gray-800 transition-all duration-300">
          {/* Header */}
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-[#1f2937] dark:text-[#f1f5f9] mb-2">
              Welcome Back
            </h2>
            <p className="text-gray-600 dark:text-[#cbd5e1]">
              Sign in to continue to your account
            </p>
          </div>

          {/* Social Login Buttons */}
          <SocialLogin />

          {/* Divider */}
          <div className="flex items-center my-8">
            <div className="flex-1 h-px bg-gray-300 dark:bg-gray-700"></div>
            <span className="px-4 text-sm text-gray-600 dark:text-[#cbd5e1]">
              Or continue with
            </span>
            <div className="flex-1 h-px bg-gray-300 dark:bg-gray-700"></div>
          </div>

          {/* Login Form */}
          <LoginForm />

          {/* Sign Up Link */}
          <div className="mt-8 text-center">
            <p className="text-sm text-gray-600 dark:text-[#cbd5e1]">
              Don&apos;t have an account?{" "}
              <Link
                href="/auth/register"
                className="font-medium text-[#1a5f0e] dark:text-[#4ade80] hover:text-[#0d9276] dark:hover:text-[#71f9a3] transition-colors duration-200 cursor-pointer"
              >
                Sign up
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
