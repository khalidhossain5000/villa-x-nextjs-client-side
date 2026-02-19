import ManageUsers from "@/components/Dashboard/admin/ManageUsers/ManageUsers";
import PageTitle from "@/components/Shared/Title/PageTitle";
import React from "react";

const ManageUsersPage = () => {
  return (
    <div>
      <PageTitle className={`pt-6 lg:pt-12 font-playfair`}>
        Manage Users Page
      </PageTitle>

      <ManageUsers />
    </div>
  );
};

export default ManageUsersPage;
