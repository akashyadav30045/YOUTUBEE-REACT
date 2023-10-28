import React from "react";

const VideoStatsSkeleton = () => {
  return (
    <div className="video watch-card p-4 m-2 ml-4 my-[-15px]  w-[97%] bg-slate-50 shadow-sm rounded-md animate-pulse">
      <div className="h-4 bg-gray-200 rounded w-2/3 mb-2"></div>
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-2 py-2">
          <div className="h-10 w-10 bg-gray-200 rounded-full"></div>
          <div className="h-4 bg-gray-200 rounded w-16"></div>
        </div>
        <div className=" space-x-5 flex items-center">
          <div className="h-4 bg-gray-200 rounded w-16"></div>
          <div className="h-4 bg-gray-200 rounded w-16"></div>
          <div className="h-4 bg-gray-200 rounded w-16"></div>
        </div>
      </div>
      <div className="flex flex-col">
        <div className="h-4 bg-gray-200 rounded w-1/4 mb-1"></div>
        <div className="h-4 bg-gray-200 rounded w-full mb-1"></div>
        <div className="h-4 bg-gray-200 rounded w-3/4"></div>
      </div>
    </div>
  );
};

export default VideoStatsSkeleton;
