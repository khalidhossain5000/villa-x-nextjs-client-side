/* eslint-disable @next/next/no-img-element */
"use client";
import GlobalButton from "@/components/Shared/Button/GlobalButton";
import { useAuth } from "@/Hooks/useAuth";
import { signOutUser } from "@/Redux/Features/authSlice";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useDispatch } from "react-redux";

const UserInfo = () => {
  const { userInfo, loading } = useAuth();
const dispatch=useDispatch()
  if (loading || !userInfo ) return <p>Loading...</p>;
  console.log(userInfo.photoUrl, "this is user info in userinfo component");

  const signOutHandler=()=>{
    dispatch(signOutUser())
  }
  return (
    <div>
      {userInfo?.photoUrl ? (
       
        <div className='flex items-center gap-4'>
          <img
          src={userInfo?.photoUrl}
          alt="user photo"
          className="rounded-full border-2 border-primary w-10 h-10 p-1"
        />
        <button onClick={signOutHandler} className="text-secondary dark:text-background  text-sm  font-medium font-urbanist rounded-sm bg-red-500 hover:bg-accent-hover/50  px-5 py-2 2xl:font-bold">Sign Out</button>
        </div>
      ) : (
        <Link href="/auth/login">
          <GlobalButton
            className={
              "text-secondary dark:text-background  text-sm  font-medium font-urbanist rounded-sm bg-accent hover:bg-accent-hover/50  px-5 py-2 2xl:font-bold"
            }
          >
            Login
          </GlobalButton>
        </Link>
      )}
    </div>
  );
};

export default UserInfo;
