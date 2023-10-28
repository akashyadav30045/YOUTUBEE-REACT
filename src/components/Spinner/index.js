import React from "react";

const Spinner = () => {
  return (
    <div className="flex items-center justify-center py-3 m-auto">
      <div className="w-10 h-10 border-2 border-cyan-500 rounded-full animate-spin border-t-transparent"></div>
    </div>
  );
};

export default Spinner;
