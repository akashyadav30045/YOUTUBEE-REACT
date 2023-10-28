import ReactPlayer from "react-player";
// import CommentsContainer from "../CommentsContainer";
import SideVideo from "./WatchPageContainer/SideVideoContainer";
import LiveChat from "../LiveChat";
import VideoStates from "./WatchPageContainer/VideoStats";
import VideoStatsSkeleton from "../Shimmer/VideoStatsSkeleton";
import Comments from "../Comments";
import ShimmerComment from "../Shimmer/ShimmerComment";
import useWatch from "../../hooks/useWatch";

const WatchPage = () => {
  const { filteredWatchVideo, searchParams } = useWatch();
  const getId = searchParams.get("vt");

  return (
    <div className="grid grid-cols-12 gap-8">
      <div className="col-span-12 sm:col-span-8">
        <div className="p-2 m-2">
          <ReactPlayer
            url={`https://www.youtube.com/watch?v=${getId}`}
            width="100%"
            height="520px"
            controls
            config={{
              youtube: {
                playerVars: {
                  autoplay: 1,
                },
              },
            }}
          />
        </div>

        {filteredWatchVideo.length === 0 ? (
          <div className="m-auto">
            <VideoStatsSkeleton />
            <Comments id={getId} /> || <ShimmerComment />
          </div>
        ) : (
          <div>
            <VideoStates statsInfo={filteredWatchVideo[0]} />
            <Comments id={getId} /> || <ShimmerComment />
          </div>
        )}
      </div>
      <div className="col-span-12 sm:col-span-4">
        <LiveChat />
        <SideVideo />
      </div>
    </div>
  );
};

export default WatchPage;
