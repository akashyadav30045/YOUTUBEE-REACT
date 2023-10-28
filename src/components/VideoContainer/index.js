import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { YOUTUBE_VIDEOS_API } from "../../config/constantAPI";

import VideoCard, { AidVideoCard2WithStyles, aidVideoCard } from "../VideoCard";
import Spinner from "../Spinner";
import VideoCardSkeleton from "../Shimmer/VideoCardSkeleton";
import ScrollToTopButton from "../ScrollToTopButton";
import { useDispatch } from "react-redux";
import { setClickedVideo } from "../../utils/slices/videoSlice";

const VideoContainer = () => {
  const dispatch = useDispatch();
  const [videos, setVideos] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [showVideoCard, setShowVideoCard] = useState(false);
  const [nextPageToken, setNextPageToken] = useState("");

  const AdPromoCard = aidVideoCard(VideoCard);

  useEffect(() => {
    fetchAPIData();
    const timer = setTimeout(() => {
      setShowVideoCard(true);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);
  const fetchAPIData = async () => {
    try {
      const getData = await fetch(YOUTUBE_VIDEOS_API);
      const response = await getData.json();

      if (response?.items) {
        setVideos(response.items);
        setNextPageToken(response?.nextPageToken);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleScroll = () => {
    if (
      window.innerHeight + window.scrollY >=
      document.body.offsetHeight - 100
    ) {
      fetchMoreData();
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [videos]);

  const fetchMoreData = async () => {
    if (!nextPageToken) return;

    try {
      const nextPageData = await fetch(
        `${YOUTUBE_VIDEOS_API}&pageToken=${nextPageToken}`
      );
      const response = await nextPageData.json();
      if (response?.items) {
        setVideos((prevVideos) => [...prevVideos, ...response.items]);
        setNextPageToken(response.nextPageToken);
      }
    } catch (error) {
      console.error("Error fetching more data:", error);
    }
  };

  const handleVideoClick = (v) => {
    dispatch(setClickedVideo(v));
  };

  const renderVideoCard = (v, idx) => (
    <Link
      to={`/watch?vt=${v.id}`}
      key={`${v.id}-${idx}`}
      onClick={() => handleVideoClick(v)}
    >
      {showVideoCard ? <VideoCard vInfo={v} /> : <VideoCardSkeleton />}
    </Link>
  );

  return (
    <div className="flex flex-wrap p-6">
      {isLoading ? (
        <>
          <Spinner />
        </>
      ) : videos.length > 0 ? (
        <div className="grid grid-cols-3 gap-4 sm:grid-cols-4 md:grid-cols-4 lg:grid-cols-4 ">
          <AdPromoCard vInfo={videos[0]} />
          <AidVideoCard2WithStyles vInfo={videos[4]} />

          {videos.map(renderVideoCard)}
          <ScrollToTopButton />
        </div>
      ) : (
        <p className="m-auto text-lg text-gray-600">
          No videos available currently.
        </p>
      )}
    </div>
  );
};

export default VideoContainer;
