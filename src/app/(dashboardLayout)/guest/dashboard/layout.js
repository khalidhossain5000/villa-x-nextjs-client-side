import PrivateRoute from "@/components/PrivateRoute/PrivateRoute";
import React from "react";

const GuestDashboardLayout = ({ children }) => {
  return <PrivateRoute requiredRoles={["guest"]}>
    <div>{children}</div>
  </PrivateRoute>;
};

export default GuestDashboardLayout;
