import { useEffect, useState } from "react";
import { YOUTUBE_VIDEOS_API } from "../config/constantAPI";

const useSideVideo = () => {
  const [sideVideo, setSideVideo] = useState([]);
  const [isSideVideoLoading, setIsSideVideoLoading] = useState(true);

  useEffect(() => {
    fetchAPIData();
  }, []);
  const fetchAPIData = async () => {
    try {
      const getData = await fetch(YOUTUBE_VIDEOS_API);
      const response = await getData.json();

      if (response?.items) {
        const last25Items = response.items.slice(-25); // Get the last 25 items
        setSideVideo(last25Items);
        // setSideVideo(response.items);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setIsSideVideoLoading(false);
    }
  };

  return { sideVideo, isSideVideoLoading };
};

export default useSideVideo;
