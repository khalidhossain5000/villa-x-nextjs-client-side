'use client'
import { githubSignIn, googleSignIn } from "@/Redux/Features/authSlice";
import React from "react";
import { FaFacebook, FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { useDispatch } from "react-redux";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

const SocialLogin = () => {


  const router=useRouter()

  const dispatch=useDispatch()
  // const handleGoogleLogin=()=>{
  //   dispatch(googleSignIn())
  //   //  router.push('/')
  // }

const handleGoogleLogin = async () => {
  try {
  
    await dispatch(googleSignIn()).unwrap();
   
    toast.success("Login with google is Successful", {
            className:
              "w-[400px] h-[100px] text-xl font-bold relative z-[999999999999999999999999999999999999999999999999]",
            removeDelay: 4000,
            iconTheme: { primary: "#16061e", secondary: "#ef54e2" },
            style: {
              border: "1px solid #08086c",
              color: "black",
              backgroundImage: "linear-gradient(to bottom right, #f98d00,#f9a300)",
            },
          });
    router.push('/'); // success redirect
  } catch (err) {
    console.error(err);
  }
};
  //handle github sign in
  const githubLogin=()=>{
    dispatch(githubSignIn())
    //  router.push('/')
  }
  return (
    <div className="mb-8">
      <p className="text-sm text-gray-600 dark:text-[#cbd5e1] mb-4 text-center">
        Sign in with
      </p>
      <div className="">
        {/* Google Button */}
        <button onClick={handleGoogleLogin} className="flex items-center justify-center gap-2 px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors duration-200 group w-full cursor-pointer">
          <FcGoogle className="w-5 h-5" />
          <span className="text-sm font-medium text-gray-700 dark:text-[#cbd5e1]">
            Google login
          </span>
        </button>

        {/* Github Button */}
        {/* <button onClick={githubLogin} className="flex items-center justify-center gap-2 px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors duration-200 group">
          <FaGithub className="w-5 h-5 text-[#1877F2]" />
          <span className="text-sm font-medium text-gray-700 dark:text-[#cbd5e1]">
            Github
          </span>
        </button> */}
      </div>
    </div>
  );
};

export default SocialLogin;
