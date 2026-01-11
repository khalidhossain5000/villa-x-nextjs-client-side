"use client";
import GlobalButton from "@/components/Shared/Button/GlobalButton";
import { useAuth } from "@/Hooks/useAuth";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const UserInfo = () => {
  const { userInfo, loading } = useAuth();

  if (loading || !userInfo ) return <p>Loading...</p>;
  console.log(userInfo.photoUrl, "this is user info in userinfo component");
  return (
    <div>
      {userInfo?.photoUrl ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={userInfo?.photoUrl}
          alt="user photo"
          className="rounded-full border-2 border-primary w-10 h-10 p-1"
        />
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
