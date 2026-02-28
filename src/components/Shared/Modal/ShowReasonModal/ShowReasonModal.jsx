

import React from "react";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

const ShowReasonModal = ({ cancelReason }) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <button className="hover:scale-110 transition duration-300 relative inline-flex h-10 active:scale-95 overflow-hidden rounded-lg p-[1px] focus:outline-none">
          <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#16100f_0%,#f9a300_50%,#f9a300_100%)]"></span>
          <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-lg bg-[#f97c00] dark:bg-slate-950 px-7 text-sm lg:text-xl lg:font-bold font-medium text-black dark:text-white backdrop-blur-3xl gap-2">
            View Reason
          </span>
        </button>
      </DialogTrigger>

      <DialogContent className="sm:max-w-md w-full rounded-3xl p-8 bg-gradient-to-br from-yellow-200 to-yellow-400 dark:from-gray-900 dark:to-gray-800 shadow-2xl border border-yellow-300 dark:border-gray-700">
        <DialogHeader className="text-center">
          <DialogTitle className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-gray-100">
            Room Cancel Reason
          </DialogTitle>
          <DialogDescription className="mt-4 text-base sm:text-lg text-gray-800 dark:text-gray-300 leading-relaxed">
            <p className="whitespace-pre-wrap wrap-break text-lg">
              {cancelReason || "No reason provided by the user."}
            </p>
          </DialogDescription>
        </DialogHeader>

        <DialogFooter className="mt-6 flex justify-center">
          <DialogClose asChild>
            <Button
              variant="outline"
              className="w-full sm:w-auto px-6 py-3 text-lg font-semibold bg-white dark:bg-gray-900 text-gray-900 dark:text-white border border-gray-300 dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-all"
            >
              Close
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default ShowReasonModal;




