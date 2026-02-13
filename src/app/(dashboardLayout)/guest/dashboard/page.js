import Profile from "@/components/Dashboard/Common/Profile/Profile";
import PrivateRoute from "@/components/PrivateRoute/PrivateRoute";
import PageTitle from "@/components/Shared/Title/PageTitle";
import React from "react";

const GuestDashboardHomePage = () => {
  return (
    <PrivateRoute requiredRoles={["guest"]}>
      <div>
        <PageTitle className={`pt-6 lg:pt-12 font-playfair`}>My Profile & Stats</PageTitle>

        <Profile />
      </div>
    </PrivateRoute>
  );
};

export default GuestDashboardHomePage;
