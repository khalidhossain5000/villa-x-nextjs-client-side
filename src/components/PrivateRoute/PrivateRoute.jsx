"use client";
import { useAuth } from "@/Hooks/useAuth";
import useRole from "@/Hooks/useRole";
import { usePathname, useRouter } from "next/navigation";
import React, { useEffect } from "react";
import Loader from "../Shared/Loading/Loader";

const PrivateRoute = ({ children, requiredRoles = [] }) => {
  const { userInfo, loading: authLoading } = useAuth();
  const { role, roleLoading } = useRole();
  const router = useRouter();
  const pathname = usePathname();

 
  // wait until both auth and role are loaded
  const loading = authLoading || roleLoading;
  // make sure user is null if not logged in
  const user = userInfo?.email ? userInfo : null;
   console.log(pathname, "this is pathname in privateroute",user,role);
  useEffect(() => {
    if (!loading) {
      if (!user) {
        router.push(`/auth/login?callbackUrl=${pathname}`);
        return;
      }
      // Role check
      if (requiredRoles.length > 0 && !requiredRoles.includes(role)) {
        router.push("/forbidden");
      }
    }
  }, [loading, user, requiredRoles, role, router, pathname]);
  if (loading || !user) {
    return <Loader/>; // spinner or blank
  }

  return <>{children}</>;
};

export default PrivateRoute;
