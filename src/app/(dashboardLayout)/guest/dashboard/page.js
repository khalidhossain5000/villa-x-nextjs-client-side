import Profile from "@/components/Dashboard/Common/Profile/Profile";
import PrivateRoute from "@/components/PrivateRoute/PrivateRoute";
import React from "react";

const GuestDashboardHomePage = () => {
  return (
    <PrivateRoute requiredRoles={['guest']}>
      <div>
        <h2>Welcome to Guest dashboard page ove r here</h2>
        <h3 className="text-xl text-pink-600 text-center py-12">
          Here User Profile Will Be shown by default everytime
        </h3>

        <Profile />
      </div>
    </PrivateRoute>
  );
};

export default GuestDashboardHomePage;
