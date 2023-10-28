import React from "react";
import { Link } from "react-router-dom";
import { formatDateDifference } from "../../utils/commonFn";

const SearchVideoCard = ({ videoItem }) => {
  const { snippet } = videoItem;
  const { channelId, channelTitle, description, publishedAt, thumbnails } =
    snippet;

  return (
    <div className="">
      <div className="flex flex-col md:flex-row p-2 m-2 my-3 max-w-md md:max-w-xl rounded-lg shadow-sm bg-slate-100 hover:shadow-lg cursor-pointer">
        <div className="w-full">
          <div className="relative">
            <img
              src={thumbnails?.medium?.url}
              alt="thumbnail"
              className="rounded-xl h-30 md:h-[9.5rem] w-full object-cover"
            />
          </div>
        </div>
        <div className="md:ml-4 w-full">
          <div className="font-semibold overflow-x-hidden h-fit ml-1 text-sm overflow-hidden">
            {channelTitle}
          </div>
          <div>
            <p className="text-gray-500 mt-1">{description}</p>
          </div>

          <div className="text-gray-500 ml-0 md:ml-1 mt-2 flex justify-between ">
            <Link to={`/channel/${channelId}`}>
              <p className="font-bold text-gray-600">View Channel</p>
            </Link>
            <p className="text-gray-500 pr-5">
              {formatDateDifference(publishedAt)}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchVideoCard;
