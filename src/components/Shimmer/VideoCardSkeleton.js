import React from "react";
const VideoCardSkeleton = () => {
  return (
    <div className="video-card p-4 m-2 w-72 bg-white shadow-md rounded-md animate-pulse">
      <div className="h-32 bg-gray-200 rounded-lg"></div>
      <div className="mt-2">
        <div className="h-4 bg-gray-200 rounded w-2/3 mb-1"></div>
        <div className="h-4 bg-gray-200 rounded w-1/3"></div>
      </div>

      <div className="flex justify-between py-1">
        <div className="h-4 bg-gray-200 rounded w-1/3"></div>
        <div className="h-4 bg-gray-200 rounded w-1/4"></div>
      </div>
    </div>
  );
};

export default VideoCardSkeleton;
