import React from "react";
import {
  Statistic,
  formatDateDifference,
  formatDurationToTime,
} from "../../utils/commonFn";
import { Link } from "react-router-dom";

const VideoCard = ({ vInfo }) => {
  const { snippet, statistics, contentDetails } = vInfo;
  const { channelTitle, publishedAt, thumbnails, title, channelId } = snippet;
  const { viewCount } = statistics;
  const duration = contentDetails?.duration;

  return (
    <div className="relative video-card p-4 m-2 w-72  bg-white shadow-md rounded-md">
      <img className="rounded-lg" src={thumbnails.medium.url} alt="thumbnail" />

      <span className="absolute top-[8.5rem] right-[1.5rem] rounded-sm  bg-black text-white font-semibold ">
        {formatDurationToTime(duration)}
      </span>

      <div className="mt-2">
        <p className="font-bold text-lg text-ellipsis overflow-hidden">
          {title}
        </p>

        <Link to={`/channel/${channelId}`}>
          <p className="font-semibold text-sm">{channelTitle}</p>
        </Link>
      </div>

      <div className="flex justify-between mt-2">
        <p className="text-gray-600  text-md">
          {formatDateDifference(publishedAt)}
        </p>
        <Statistic label="Views" value={viewCount} />
      </div>
    </div>
  );
};

// Writing HOC component in different ways
const aidVideoCard = () => {
  return (props) => {
    return (
      <div className=" border-blue-900 border">
        <VideoCard {...props} />
      </div>
    );
  };
};

const withVideoCardStyles = (WrappedComponent, borderClass) => {
  return ({ vInfo }) => (
    <div className={` border ${borderClass}`}>
      <WrappedComponent vInfo={vInfo} />
    </div>
  );
};
const AidVideoCard = (vInfo) => {
  return (
    <div className="  border border-pink-900">
      <VideoCard {...vInfo} />
    </div>
  );
};

const AidVideoCard2 = ({ vInfo }) => {
  return (
    <div className=" border border-green-900">
      <VideoCard vInfo={vInfo} />
    </div>
  );
};

const AidVideoCard3 = (vInfo) => {
  return (
    <div className="">
      <VideoCard {...vInfo} />
    </div>
  );
};

const AidVideoCard4 = ({ vInfo }) => {
  return (
    <div>
      <VideoCard vInfo={vInfo} />
    </div>
  );
};

const AidVideoCard2WithStyles = withVideoCardStyles(
  AidVideoCard3,
  "border-yellow-500"
);
const AidVideoCardWithStyles = withVideoCardStyles(
  AidVideoCard4,
  "border-gray-400"
);
export {
  AidVideoCardWithStyles,
  AidVideoCard2WithStyles,
  aidVideoCard,
  AidVideoCard,
  AidVideoCard2,
};

export default VideoCard;
