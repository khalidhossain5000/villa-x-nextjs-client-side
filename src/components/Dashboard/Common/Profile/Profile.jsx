/* eslint-disable @next/next/no-img-element */
"use client";
import Loader from "@/components/Shared/Loading/Loader";
import useAxiosSecure from "@/Hooks/useAxiosSecure";

import useRole from "@/Hooks/useRole";
import { useQuery } from "@tanstack/react-query";
import { useSelector } from "react-redux";
import bgImg from "../../../../assets/dashboard/profile-bg.jpg";
import UpdateProfile from "@/components/Shared/Modal/UpdateProfileModal/UpdateProfile";
const Profile = () => {
  const { user, loading } = useSelector((state) => state.auth);

  const { role, roleLoading } = useRole();
  const axiosSecure = useAxiosSecure();
  const { isLoading, data: singleUser } = useQuery({
    queryKey: ["single-user-data-here", user?.email],
    queryFn: async () => {
      const res = await axiosSecure.get(
        `/api/auth/single-users?email=${user.email}`,
      );

      return res.data.singleUser;
    },
    enabled: !!user?.email,
  });

  if (roleLoading || loading || isLoading || !singleUser || !user)
    return <Loader />;

  return (
    <div className="flex justify-center items-center h-full py-12 lg:py-20 px-4 lg:px-0">
      <div className="bg-white dark:bg-[#0f172b] shadow-lg rounded-2xl w-full lg:w-3/5">
        <img
          alt="profile"
          src={bgImg.src}
          className="w-full mb-4 rounded-t-lg h-36 lg:h-48 xl:56"
        />

        <div className="flex flex-col items-center justify-center p-4 -mt-16">
          <a href="#" className="relative block">
            <img
              alt="profile"
              src={user?.photoURL}
              className="mx-auto object-cover rounded-full h-24 w-24  border-2 border-white "
            />
          </a>

          <p className="p-2 px-4 text-xs text-white dark:text-black  bg-primary rounded-full font-bold">
            Role: {role && role.toUpperCase()}
          </p>
          <p className="mt-2 text-xl font-medium text-gray-800 dark:text-slate-100">
            User Id: {singleUser?._id}
          </p>

          <p className="mt-2 text-xl font-medium text-gray-800 dark:text-slate-100">
            Member Since:{" "}
            {singleUser?.createdAt &&
              new Date(singleUser.createdAt).toLocaleDateString("en-GB", {
                day: "numeric",
                month: "short",
                year: "numeric",
              })}
          </p>

          <p className="mt-2 text-xl font-medium text-gray-800  dark:text-slate-100 ">
            Last Updated:{" "}
            {singleUser?.updatedAt &&
              new Date(singleUser.updatedAt).toLocaleDateString("en-GB", {
                day: "numeric",
                month: "short",
                year: "numeric",
                hour: "numeric",
                minute: "numeric",
                second: "numeric",
                hour12: true,
              })}
          </p>

          <div className="w-full p-2 mt-4 rounded-lg">
            <div className="flex flex-wrap items-center justify-between text-sm text-gray-600 ">
              <p className="flex flex-col">
                Name
                <span className="font-bold text-black  dark:text-slate-100">
                  {user?.displayName}
                </span>
              </p>
              <p className="flex flex-col">
                Email
                <span className="font-bold text-black  dark:text-slate-100">
                  {user?.email}
                </span>
              </p>

              <div>
                <UpdateProfile />

                {/* <button className="bg-[#F43F5E] px-7 py-1 rounded-lg text-white cursor-pointer hover:bg-[#af4053]">
                  Change Password
                </button> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
