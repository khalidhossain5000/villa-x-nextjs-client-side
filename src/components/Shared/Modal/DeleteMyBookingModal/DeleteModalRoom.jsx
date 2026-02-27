// 'use client'
// import { Dialog, Transition } from "@headlessui/react";
// import { Fragment, useState } from "react";

// const DeleteModalRoom = ({ modalHandler, closeModal, isOpen, id ,getCancelReason}) => {
//    const [cancelReason, setCancelReason] = useState("");
//   return (
//     <Transition appear show={isOpen} as={Fragment}>
//   <Dialog as="div" className="relative z-[999999999999999999999999999999999999999999999999999999999]" onClose={closeModal}>
    
//     {/* Background overlay */}
//     <Transition.Child
//       as={Fragment}
//       enter="ease-out duration-300"
//       enterFrom="opacity-0"
//       enterTo="opacity-100"
//       leave="ease-in duration-200"
//       leaveFrom="opacity-100"
//       leaveTo="opacity-0"
//     >
//       <div className="fixed inset-0 bg-black/40" />
//     </Transition.Child>

//     <div className="fixed inset-0 overflow-y-auto">
//       <div className="flex min-h-full items-center justify-center p-4 text-center">

//         {/* Modal panel */}
//         <Transition.Child
//           as={Fragment}
//           enter="ease-out duration-300"
//           enterFrom="opacity-0 scale-95"
//           enterTo="opacity-100 scale-100"
//           leave="ease-in duration-200"
//           leaveFrom="opacity-100 scale-100"
//           leaveTo="opacity-0 scale-95"
//         >
//           <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white dark:bg-gray-900 p-6 text-left align-middle shadow-xl transition-all">

//             {/* Reason Input */}
//             <div className="mt-2">
//               <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
//                 Please provide a reason:
//               </label>
//               <textarea
//                 className="mt-1 block w-full rounded-md border border-gray-300 bg-white dark:bg-gray-800 dark:border-gray-700 text-gray-900 dark:text-gray-100 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-2"
//                 placeholder="Enter your reason here..."
//                 value={cancelReason}
//                 onChange={(e) => setCancelReason(e.target.value)}
//               />
//               <p className="mt-2 text-xs text-gray-500 dark:text-gray-400">
//                 After checking by the host, if your cancel reason is valid or proper, your booking will be canceled.
//               </p>
//             </div>

//             <hr className="mt-4" />

//             {/* Buttons */}
//             <div className="flex mt-4 justify-around">
//               <button
//                 type="button"
//                 className="inline-flex justify-center rounded-md border border-transparent bg-red-100 px-4 py-2 text-sm font-medium text-red-900 hover:bg-red-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2"
//                 onClick={() => modalHandler(id,cancelReason)}
//               >
//                 Continue
//               </button>
//               <button
//                 type="button"
//                 className="inline-flex justify-center rounded-md border border-transparent bg-green-100 px-4 py-2 text-sm font-medium text-green-900 hover:bg-green-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-green-500 focus-visible:ring-offset-2"
//                 onClick={closeModal}
//               >
//                 Cancel
//               </button>
//             </div>

//           </Dialog.Panel>
//         </Transition.Child>

//       </div>
//     </div>

//   </Dialog>
// </Transition>
//   );
// };

// export default DeleteModalRoom;













'use client'
import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import { toast } from "react-hot-toast";

const DeleteModalRoom = ({ modalHandler, closeModal, isOpen, id }) => {
  const [cancelReason, setCancelReason] = useState("");


  // Continue button handler with validation
  const handleContinue = () => {
      

    if (!cancelReason.trim()) {
   
toast.error(
  ({ icon, message }) => (
    <div className="flex items-start gap-2">
      <span className="text-red-600 text-lg">{icon}</span>
      <div>
        <p className="font-semibold text-red-700">Cancel Reason Required!</p>
        <p className="text-sm text-red-600">
          Please provide a valid reason. The host will review it before approving your cancellation.
        </p>
      </div>
    </div>
  ),
  {
    duration: 5000,
    style: {
      background: "#fff5f5", // subtle red background
      border: "1px solid #f87171", // red border
      color: "#b91c1c", // main text color
      padding: "12px 16px",
      borderRadius: "8px",
      boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
      fontFamily: "Inter, sans-serif",
    },
  }
);
      closeModal()
      return;
    }
    console.log(cancelReason,'reasogn')
    // call the existing function with reason
    modalHandler(id, cancelReason);

    // optionally clear reason after submit
    setCancelReason("");
  };

  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-[9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999]" onClose={closeModal}>
        {/* Background overlay */}
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black/40" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            {/* Modal panel */}
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white dark:bg-gray-900 p-6 text-left align-middle shadow-xl transition-all">

                {/* Reason Input */}
                <div className="mt-2">
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                    Please provide a reason:
                  </label>
                  <textarea
                    className="mt-1 block w-full rounded-md border border-gray-300 bg-white dark:bg-gray-800 dark:border-gray-700 text-gray-900 dark:text-gray-100 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-2"
                    placeholder="Enter your reason here..."
                    value={cancelReason}
                    onChange={(e) => setCancelReason(e.target.value)}
                  />
                <p className="mt-2 text-xs sm:text-sm text-red-600 dark:text-gray-300 bg-gray-100 dark:bg-gray-800 px-3 py-2 rounded-md shadow-sm">
  After checking by the host, if your cancel reason is valid and proper, your booking will be canceled.
</p>
                  
                </div>

                <hr className="mt-4" />

                {/* Buttons */}
                <div className="flex mt-4 justify-around">
                  <button
                    type="button"
                    className="inline-flex justify-center rounded-md border border-transparent bg-red-100 px-4 py-2 text-sm font-medium text-red-900 hover:bg-red-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2"
                    onClick={handleContinue}
                  >
                    Continue
                  </button>
                  <button
                    type="button"
                    className="inline-flex justify-center rounded-md border border-transparent bg-green-100 px-4 py-2 text-sm font-medium text-green-900 hover:bg-green-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-green-500 focus-visible:ring-offset-2"
                    onClick={closeModal}
                  >
                    Cancel
                  </button>
                </div>

              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};

export default DeleteModalRoom;



