import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import React from "react";

const UpdateRoomModal = ({updateId}) => {
    console.log(updateId,'update to be a id ')
  return (
    <div>
      <Dialog>
        <DialogTrigger>
          <button>
            <span className="relative cursor-pointer inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
              <span
                aria-hidden="true"
                className="absolute inset-0 bg-green-200 dark:bg-green-600 dark:text-black opacity-50 rounded-full"
              ></span>
              <span className="relative  dark:text-slate-100">Update</span>
            </span>
          </button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Are you absolutely sure?</DialogTitle>
            <DialogDescription>
              This action cannot be undone. This will permanently delete your
              account and remove your data from our servers.
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default UpdateRoomModal;
