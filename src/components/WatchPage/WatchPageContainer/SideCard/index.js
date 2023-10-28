import { Link } from "react-router-dom";
import {
  Statistic,
  formatDateDifference,
  formatDurationToTime,
  generateRandomThreeDigitNumber,
} from "../../../../utils/commonFn";

const SideCard = ({ sideVideoInfo }) => {
  const { snippet, statistics, contentDetails } = sideVideoInfo;
  const { channelTitle, title, thumbnails, publishedAt, channelId } = snippet;
  const duration = contentDetails?.duration;
  return (
    <div className="  flex flex-col md:flex-row p-2 m-2 my-1 max-w-md md:max-w-xl rounded-lg shadow-sm bg-slate-100 hover:shadow-lg cursor-pointer">
      <div className="w-full md:w-3/4">
        <div className="relative">
          <img
            src={ thumbnails?.medium?.url }
            alt="thumbnail"
            className="rounded-xl h-30 md:h-[6.5rem] w-full object-cover"
          />
          { duration && <span className="absolute bottom-1 right-1 bg-black text-white font-semibold rounded-sm p-1">
            { formatDurationToTime(duration) }
          </span>
          }
        </div>
      </div>
      <div className="md:ml-4 w-full">
        <div className="font-semibold overflow-x-hidden h-fit ml-1 text-sm overflow-hidden">
          { title }
        </div>
        <div className="text-gray-500 mt-1">
          <Link to={ `/channel/${channelId}` }>
            <p className="font-bold text-gray-600">{ channelTitle }</p>
          </Link>

          <div className="text-gray-500 ml-0 md:ml-1 mt-2 flex justify-between ">
            <Statistic
              label="Views"
              value={ statistics?.viewCount ?? generateRandomThreeDigitNumber() }
            />
            <p className="text-gray-500 pr-5">
              { formatDateDifference(publishedAt) }
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideCard;
