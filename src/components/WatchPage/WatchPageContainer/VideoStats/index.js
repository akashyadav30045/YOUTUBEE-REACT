import React, { useState } from "react";
import { Statistic, formatDateDifference } from "../../../../utils/commonFn";
import { Link } from "react-router-dom";

const VideoStates = ({ statsInfo }) => {
  const [showFullDescription, setShowFullDescription] = useState(false);
  // console.log({statsInfo});
  const { snippet, statistics } = statsInfo;
  const {
    channelTitle,
    description,
    publishedAt,
    thumbnails,
    title,
    channelId,
  } = snippet;
  const { viewCount, commentCount, likeCount } = statistics;
  const MAX_DESCRIPTION_LENGTH = 150;

  const toggleDescription = () => {
    setShowFullDescription(!showFullDescription);
  };
  const truncatedDescription =
    description.length > MAX_DESCRIPTION_LENGTH
      ? showFullDescription
        ? description
        : `${description.slice(0, MAX_DESCRIPTION_LENGTH)}... `
      : description;

  return (
    <div className="video watch-card p-4 m-2 ml-4 my-[-15px]  w-[97%] bg-slate-50 shadow-sm rounded-md">
      <h1 className="font-bold text-lg">{title}</h1>
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-2 py-2">
          <img
            className="rounded-[50%] h-10 w-10 object-cover "
            src={thumbnails.default.url}
            alt="thumbnail"
          />
          <Link to={`/channel/${channelId}`}>
            <span className="font-bold text-md">{channelTitle}</span>
          </Link>
        </div>
        <div className="mt-2 space-x-5 pr-5">
          <Statistic label="Views" value={viewCount} />
          <Statistic label="Comments" value={commentCount} />
          <Statistic label="Likes" value={likeCount} />
        </div>
      </div>
      <div className="flex flex-col">
        <p className="text-slate-900 font-semibold text-md">
          {formatDateDifference(publishedAt)}
        </p>
        <p className="text-gray-700 text-sm ">
          {truncatedDescription}{" "}
          {description.length > MAX_DESCRIPTION_LENGTH && (
            <button
              className="text-blue-600 text-md font-semibold hover:underline  hover:text-pink-600 transition-colors duration-300 focus:outline-none"
              onClick={toggleDescription}
            >
              {showFullDescription ? "Hide" : "Read more"}
            </button>
          )}
        </p>
      </div>
    </div>
  );
};

export default VideoStates;
