import AdminStats from "@/components/Dashboard/admin/AdminStats/AdminStats";
import PrivateRoute from "@/components/PrivateRoute/PrivateRoute";
import PageTitle from "@/components/Shared/Title/PageTitle";
import React from "react";

const AdminDashboardHomePage = () => {
  return (
    <PrivateRoute requiredRoles={["admin"]}>
      <div>
 <PageTitle className={`pt-6 lg:pt-12 font-playfair`}>
          Admin Stats & Chart
        </PageTitle>
        <AdminStats/>
      </div>
    </PrivateRoute>
  );
};

export default AdminDashboardHomePage;
