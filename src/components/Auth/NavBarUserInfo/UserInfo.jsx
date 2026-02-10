/* eslint-disable @next/next/no-img-element */
"use client";
import GlobalButton from "@/components/Shared/Button/GlobalButton";
import { useAuth } from "@/Hooks/useAuth";
import { signOutUser } from "@/Redux/Features/authSlice";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useDispatch } from "react-redux";
import './logoutstyles.css'
const UserInfo = () => {
  const { userInfo, loading } = useAuth();
  const dispatch = useDispatch();
  if (loading || !userInfo) return <p>Loading...</p>;

  const signOutHandler = () => {
    dispatch(signOutUser());
  };
  return (
    <div>
      {userInfo?.photoUrl ? (
        <div className="flex items-center gap-4">
          <img
            src={userInfo?.photoUrl}
            alt="user photo"
            className="rounded-full border-2 border-primary w-10 h-10 p-1"
          />

          <button className="Btn" onClick={signOutHandler}>
            <div className="sign">
              <svg viewBox="0 0 512 512">
                <path d="M377.9 105.9L500.7 230.7c7.2 7.2 11.3 17.1 11.3 27.3s-4.1 20.1-11.3 27.3L377.9 406.1c-6.4 6.4-15 9.9-24 9.9c-18.7 0-33.9-15.2-33.9-33.9l0-62.1-128 0c-17.7 0-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32l128 0 0-62.1c0-18.7 15.2-33.9 33.9-33.9c9 0 17.6 3.6 24 9.9zM160 96L96 96c-17.7 0-32 14.3-32 32l0 256c0 17.7 14.3 32 32 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-64 0c-53 0-96-43-96-96L0 128C0 75 43 32 96 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32z"></path>
              </svg>
            </div>

            <div className="text">Logout</div>
          </button>
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
