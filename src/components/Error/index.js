import React from "react";
import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const getError = useRouteError();

  return (
    <div className="flex flex-col items-center justify-center  mt-[50%] md:mt-[12%]">
      <div className="text-red-500 text-2xl md:text-4xl font-bold mb-0 md:mb-4 animate-bounce">
        Oops, something went wrong!
      </div>
      <div className="text-gray-700 text-lg mb-4">
        Error Status: { getError.status || 403 }
      </div>
      <div className="text-gray-700 text-lg mb-8">
        Error Message: { getError.statusText || 'API limit exceeded.' }
      </div>
      <div className="animate-pulse">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-16 w-16 text-gray-500"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M10 0a10 10 0 110 20 10 10 0 010-20zm0 18a8 8 0 100-16 8 8 0 000 16zm-1-6a1 1 0 012 0v4a1 1 0 01-2 0v-4zm0-2a1 1 0 012 0v1a1 1 0 01-2 0v-1z"
            clipRule="evenodd"
          />
        </svg>
      </div>
    </div>
  );
};

export default ErrorPage;
