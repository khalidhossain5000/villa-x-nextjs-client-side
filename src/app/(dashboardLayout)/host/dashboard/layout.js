import PrivateRoute from "@/components/PrivateRoute/PrivateRoute";
import React from "react";

const HostDashboardLayout = ({ children }) => {
  return (
    <PrivateRoute requiredRoles={["host"]}>
      <div>{children}</div>
    </PrivateRoute>
  );
};

export default HostDashboardLayout;
