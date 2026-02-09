// "use client";
// import { useAuth } from "@/Hooks/useAuth";
// import useRole from "@/Hooks/useRole";
// import { usePathname, useRouter } from "next/navigation";
// import React, { useEffect } from "react";
// import Loader from "../Shared/Loading/Loader";

// const PrivateRoute = ({ children, requiredRoles = [] }) => {
//   const { userInfo, loading: authLoading } = useAuth();
//   const { role, roleLoading } = useRole();
//   const router = useRouter();
//   const pathname = usePathname();

//  console.log(authLoading,'this is authloading')
//   // wait until both auth and role are loaded
//   const loading = authLoading || roleLoading || (userInfo && role === null);
//   // make sure user is null if not logged in
//   const user = userInfo?.email ? userInfo : null;
//    console.log(pathname, "this is pathname in privateroute",user,role,loading,authLoading,'user,role,loadig');
//   useEffect(() => {
//     if (!loading) {
//       if (!user) {
//         router.push(`/auth/login?callbackUrl=${pathname}`);
//         return;
//       }
//       // Role check
//       if (requiredRoles.length > 0 && !requiredRoles.includes(role)) {
//         router.push("/forbidden");
//       }
//     }
//   }, [loading, user, requiredRoles, role, router, pathname]);
//   if (loading || !user) {
//     return <Loader/>; // spinner or blank
//   }

//   return <>{children}</>;
// };

// export default PrivateRoute;








































































"use client";
import { useAuth } from "@/Hooks/useAuth";
import useRole from "@/Hooks/useRole";
import React from "react";
import Loader from "../Shared/Loading/Loader";
import { usePathname, useRouter } from "next/navigation";

const PrivateRoute = ({ children, requiredRoles = [] }) => {
  const { userInfo, loading:authLoading } = useAuth();
  const { role, roleLoading } = useRole();
  const router = useRouter();
  const pathname = usePathname();
  if (authLoading || roleLoading || !userInfo || role == null) {
    return <Loader />;
  }


  console.log(authLoading,'this is authloading',roleLoading,userInfo,role)
  // const userExist = !!(userInfo && userInfo.email);
  const userExist = Boolean(userInfo?.email);

console.log(userExist,'this is euser exist over here')
  if (!userExist) {
     router.push(`/auth/login?callbackUrl=${pathname}`)
     return
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






