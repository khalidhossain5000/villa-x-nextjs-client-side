"use client";
import { useAuth } from "@/Hooks/useAuth";
import useRole from "@/Hooks/useRole";
import React from "react";
import Loader from "../Shared/Loading/Loader";
import { usePathname, useRouter } from "next/navigation";
import RoomDetailsSkeleton from "../Shared/SkeletonLoader/RoomDetailsSkeleton";

const PrivateRoute = ({ children, requiredRoles = [] }) => {
  const { userInfo, loading: authLoading } = useAuth();
  const { role, roleLoading } = useRole();
  const router = useRouter();
  const pathname = usePathname();
  if (authLoading || roleLoading || !userInfo || role == null) {
    return <RoomDetailsSkeleton />;
  }
// console.log('requiredRoles',requiredRoles)
  // console.log(authLoading, "this is authloading", roleLoading, userInfo, role);
  // const userExist = !!(userInfo && userInfo.email);
  const userExist = Boolean(userInfo?.email);

  // console.log(userExist, "this is euser exist over here");
  if (!userExist) {
    router.push(`/auth/login?callbackUrl=${pathname}`);
    return;
  }
  // role base private route checking over here
  if (
    !roleLoading &&
    requiredRoles.length > 0 &&
    !requiredRoles.includes(role)
  ) {
    return router.push("/forbidden");
  }

  return <>{children}</>;
};

export default PrivateRoute;
