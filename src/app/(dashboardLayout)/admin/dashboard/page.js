import PrivateRoute from "@/components/PrivateRoute/PrivateRoute";
import React from "react";

const AdminDashboardHomePage = () => {
  return (
    <PrivateRoute requiredRoles={["admin"]}>
      <div>
        <h2>Welcome to Admin dashboard page ove r here</h2>
      </div>
    </PrivateRoute>
  );
};

export default AdminDashboardHomePage;
