import React from "react";

const ShimmerComment = () => {
  return (
    <div className="bg-gray-150 rounded-lg shadow-md p-4 my-4 shimmer">
      <div className="animate-pulse flex items-center space-x-2">
        <div className="rounded-full h-10 w-10 bg-gray-300" />
        <div className="flex-1 space-y-6 py-1">
          <div className="h-2 bg-gray-300 rounded" />
          <div className="space-y-3">
            <div className="grid grid-cols-3 gap-4">
              <div className="h-2 bg-gray-300 rounded col-span-2" />
              <div className="h-2 bg-gray-300 rounded col-span-1" />
            </div>
            <div className="h-2 bg-gray-300 rounded" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShimmerComment;
