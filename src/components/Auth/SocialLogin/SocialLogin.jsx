'use client'
import { githubSignIn, googleSignIn } from "@/Redux/Features/authSlice";
import React from "react";
import { FaFacebook, FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { useDispatch } from "react-redux";

const SocialLogin = () => {
  const dispatch=useDispatch()
  const handleGoogleLogin=()=>{
    dispatch(googleSignIn())
  }


  //handle github sign in
  const githubLogin=()=>{
    dispatch(githubSignIn())
  }
  return (
    <div className="mb-8">
      <p className="text-sm text-gray-600 dark:text-[#cbd5e1] mb-4 text-center">
        Sign in with
      </p>
      <div className="grid grid-cols-2 gap-3">
        {/* Google Button */}
        <button onClick={handleGoogleLogin} className="flex items-center justify-center gap-2 px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors duration-200 group">
          <FcGoogle className="w-5 h-5" />
          <span className="text-sm font-medium text-gray-700 dark:text-[#cbd5e1]">
            Google
          </span>
        </button>

        {/* Github Button */}
        <button onClick={githubLogin} className="flex items-center justify-center gap-2 px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors duration-200 group">
          <FaGithub className="w-5 h-5 text-[#1877F2]" />
          <span className="text-sm font-medium text-gray-700 dark:text-[#cbd5e1]">
            Github
          </span>
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
