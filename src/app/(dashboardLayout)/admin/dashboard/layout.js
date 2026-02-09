import PrivateRoute from "@/components/PrivateRoute/PrivateRoute";
import React from "react";

const AdminDashboardLayout = ({ children }) => {
  return (
    <PrivateRoute requiredRoles={["admin"]}>
    
      <div>{children}</div>
    </PrivateRoute>
  );
};

export default AdminDashboardLayout;
