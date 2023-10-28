import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  removeClickedVideo,
  setClickedVideo,
} from "../../utils/slices/videoSlice";
import SideCard from "../WatchPage/WatchPageContainer/SideCard";

const HistoryPage = () => {
  const dispatch = useDispatch();
  const clickedVideos = useSelector((state) => state.video);

  const handleVideoClick = (v) => {
    dispatch(setClickedVideo(v));
  };

  const handleVideoRemove = (id) => {
    dispatch(removeClickedVideo({ id }));
  };

  return (
    <div className="flex flex-col gap-2 mt-5  mx-auto  max-w-screen-sm">
      {clickedVideos &&
        clickedVideos.map((v) => (
          <div className="flex items-center justify-between mb-2 ">
            <Link
              to={
                v.id?.videoId
                  ? `/watch?vt=${v.id?.videoId}`
                  : `/watch?vt=${v.id}`
              }
              key={v.id || (v.id?.videoId ? v.id.videoId.toString() : "")}
              onClick={() => handleVideoClick(v)}
            >
              <SideCard sideVideoInfo={v} />
            </Link>

            <button
              className="p-2 ml-2 py-2 px-5 bg-red-600 hover:bg-red-900 text-white rounded-full shadow-lg transition ease-in-out delay-150  focus:outline-none"
              onClick={() => handleVideoRemove(v.id)}
            >
              Remove
            </button>
          </div>
        ))}
    </div>
  );
};

export default HistoryPage;
