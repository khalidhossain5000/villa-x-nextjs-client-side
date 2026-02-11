import PrivateRoute from "@/components/PrivateRoute/PrivateRoute";
import React from "react";
//guest dashboard this is over here layout
const GuestDashboardLayout = ({ children }) => {
  return <PrivateRoute requiredRoles={["guest","host"]}>
    <div>{children}</div>
  </PrivateRoute>;
};

export default GuestDashboardLayout;
