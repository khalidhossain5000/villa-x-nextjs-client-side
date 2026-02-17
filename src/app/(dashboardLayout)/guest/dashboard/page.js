import Profile from "@/components/Dashboard/Common/Profile/Profile";
import GuestStats from "@/components/Dashboard/Guest/GuestStats/GuestStats";
import PrivateRoute from "@/components/PrivateRoute/PrivateRoute";
import PageTitle from "@/components/Shared/Title/PageTitle";
import React from "react";

const GuestDashboardHomePage = () => {
  return (
    <PrivateRoute requiredRoles={["guest"]}>
      <div>
        <PageTitle className={`pt-6 lg:pt-12 font-playfair`}>
          My Profile & Stats
        </PageTitle>
        <div>
          <GuestStats />
        </div>
        <Profile />
      </div>
    </PrivateRoute>
  );
};

export default GuestDashboardHomePage;
