import Profile from "@/components/Dashboard/Common/Profile/Profile";
import PageTitle from "@/components/Shared/Title/PageTitle";
import React from "react";

const HostProfile = () => {
  return (
    <div>
      <PageTitle className={`pt-6 lg:pt-12 font-playfair`}>
        My Profile
      </PageTitle>

      <Profile />
    </div>
  );
};

export default HostProfile;
