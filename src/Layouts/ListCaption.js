import React from "react";

export default function ListCaption({ dataLength }) {
  return (
    <div className="flex">
      <div className="flex flex-1 gap-2">
        <div className="text-gray-800 font-semibold text-xl text-center">
          Team members
        </div>
        {dataLength && (
          <div className="p-2 bg-white text-violet-500 text-xs font-normal rounded-full">
            {dataLength && dataLength <= 9 ? `0${dataLength}` : dataLength} user
            {dataLength > 1 && "s"}
          </div>
        )}
      </div>
    </div>
  );
}
