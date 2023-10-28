const SideVideoCardSkeleton = () => {
  return (
    <div className="relative flex flex-col md:flex-row p-2 m-2 my-1 max-w-md md:max-w-xl rounded-lg shadow-sm bg-white hover:shadow-lg cursor-pointer">
      <div className="w-full md:w-3/4">
        <div className="animate-pulse bg-gray-300 rounded-xl h-32 md:h-36 w-full"></div>
      </div>
      <div className="md:ml-4 w-full">
        <div className="animate-pulse bg-gray-300 rounded font-semibold text-base md:text-lg overflow-x-hidden h-12 md:h-16 mt-2 md:mt-0"></div>
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center text-sm mt-1">
          <div className="animate-pulse bg-gray-300 rounded w-1/2 md:w-auto h-5 md:h-auto"></div>
          <div className="animate-pulse bg-gray-300 rounded w-1/2 md:w-auto h-5 md:h-auto mt-1 md:mt-0"></div>
        </div>
      </div>
    </div>
  );
};

export default SideVideoCardSkeleton;
