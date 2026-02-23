"use client";
import UpdateUserModal from "@/components/Shared/Modal/UpdateUserModal/UpdateUserModal";
import { useAuth } from "@/Hooks/useAuth";
import useAxiosSecure from "@/Hooks/useAxiosSecure";
import { useMutation } from "@tanstack/react-query";
import { useState } from "react";

import { toast } from "react-hot-toast";
const UserDataRow = ({ user, refetch }) => {
  const [isOpen, setIsOpen] = useState(false);

  const axiosSecure = useAxiosSecure();

const {userInfo:loggedInUser}=useAuth()


  console.log(user, "from user data row");
  const { mutateAsync } = useMutation({
    mutationKey: ["update-user-role"],
    mutationFn: async (role) => {
      const res = await axiosSecure.patch(
        `/api/auth/update-user-role-admin/${user?._id}/role`,
        {
          role: role,
        },
      );
      return res.data;
    },
    onSuccess: (data) => {
      refetch();
      toast.success("User role updated successfully!");
    },
  });

  const modalHandler = async (role) => {

if(loggedInUser?.email===user?.email) {
  toast.error("Cannot change own user role")

  return setIsOpen(false)
};



    try {
      await mutateAsync(role);

      refetch();
    } catch (err) {
      console.log(err);
      toast.error(err.message);
    } finally {
      setIsOpen(false);
    }
  };
  return (
    <tr>
      <td className="px-5 py-5 border-b border-gray-200 bg-white dark:bg-[#1e293b]  dark:text-slate-100 dark:border-accent text-sm">
        <p className="text-gray-900 whitespace-no-wrap dark:text-slate-100">{user?.email}</p>
      </td>
      <td className="px-5 py-5 border-b border-gray-200 bg-white dark:bg-[#1e293b]  dark:text-slate-100 dark:border-accent  text-sm">
        <p className="text-gray-900 whitespace-no-wrap dark:text-slate-100">{user?.userRole}</p>
      </td>
      <td className="px-5 py-5 border-b border-gray-200 bg-white dark:bg-[#1e293b]  dark:text-slate-100 dark:border-accent text-sm">
        {user?.status ? (
          <p
            className={`${
              user.status === "verified" ? "text-green-500 bg-green-100 p-2 rounded-full font-bold" : "text-red-600 bg-red-100 p-2 rounded-full"
            } whitespace-no-wrap`}
          >
            {user.status}
          </p>
        ) : (
          <p className="text-red-500 whitespace-no-wrap dark:text-slate-100">Unavailable</p>
        )}
      </td>

      <td className="px-5 py-5 border-b border-gray-200 bg-white dark:bg-[#1e293b]   dark:border-accent text-sm">
        <span
          onClick={() => setIsOpen(true)}
          className="relative cursor-pointer inline-block px-3 py-1 font-semibold text-green-900 leading-tight"
        >
          <span
            aria-hidden="true"
            className="absolute inset-0 bg-green-200 opacity-50 rounded-full"
          ></span>
          <span className="relative dark:text-slate-100">Update Role</span>
        </span>
        {/* Modal */}
        <UpdateUserModal
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          user={user}
          modalHandler={modalHandler}
        />
      </td>
    </tr>
  );
};

export default UserDataRow;
