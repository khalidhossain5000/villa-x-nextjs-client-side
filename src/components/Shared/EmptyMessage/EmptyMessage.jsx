import React from "react";

const EmptyMessage = ({ message, label}) => {
  return (
    <div className="h-screen gap-5 flex flex-col justify-center items-center pb-16 ">
      <p className="text-gray-600 text-xl lg:text-3xl">{message}</p>
     
        <button  >{label}</button>
  
    </div>
  );
};

export default EmptyMessage;
