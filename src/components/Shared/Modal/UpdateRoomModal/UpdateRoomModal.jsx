import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import React from "react";
import UpdateForm from "./UpdateForm";

const UpdateRoomModal = ({ roomId ,room,refetch}) => {
 
  return (
    <div>
      <Dialog>
        <DialogTrigger>
          <div>
            <span className="relative cursor-pointer inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
              <span
                aria-hidden="true"
                className="absolute inset-0 bg-green-200 dark:bg-green-600 dark:text-black opacity-50 rounded-full"
              ></span>
              <span className="relative  dark:text-slate-100">Update</span>
            </span>
          </div>
        </DialogTrigger>

        <DialogContent className='max-w-5xl mx-auto max-h-[90vh] overflow-auto p-6'>
          <DialogHeader>
            <DialogTitle>Update Room</DialogTitle>
            <DialogDescription>
                <div>

            <UpdateForm room={room} roomId={roomId} refetch={refetch}></UpdateForm>
                </div>
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default UpdateRoomModal;
