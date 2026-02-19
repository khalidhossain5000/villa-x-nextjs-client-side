import HostStats from "@/components/Dashboard/Host/Stats/HostStats";
import StatsCard from "@/components/Dashboard/Host/Stats/StatsCard";
import PrivateRoute from "@/components/PrivateRoute/PrivateRoute";
import PageTitle from "@/components/Shared/Title/PageTitle";
import React from "react";

const HostDashboardHomePage = () => {
  return (
    <PrivateRoute requiredRoles={["host"]}>
      <div>
        <PageTitle className={`pt-6 lg:pt-12 font-playfair`}>
          Host Stats
        </PageTitle>

        {/* <StatsCard/> */}
        <HostStats />
      </div>
    </PrivateRoute>
  );
};

export default HostDashboardHomePage;
