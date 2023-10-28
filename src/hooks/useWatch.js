import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { closeMenu } from "../utils/slices/appSlice";
import { YOUTUBE_VIDEOS_API } from "../config/constantAPI";

const useWatch = () => {
  const dispatch = useDispatch();
  const [watchVideo, setWatchVideo] = useState([]);

  // const { itemId } = useParams(); Use the itemId to fetch and display the item details.
  // Use the itemId to fetch and display the item details
  //  so when you've queryParams (/watch?vt=${v.id}) in the url so use useSearchParams hooks

  // The useSearchParams hook is used to access and manipulate query parameters in the URL. Query parameters are used to pass additional information to a page, often in the form of key-value pairs

  const [searchParams] = useSearchParams();

  useEffect(() => {
    window.scrollTo(0, 0);
    dispatch(closeMenu());
  }, [dispatch]);

  useEffect(() => {
    fetchWatchAPIData();
  }, []);
  const fetchWatchAPIData = async () => {
    try {
      const getData = await fetch(YOUTUBE_VIDEOS_API);
      const response = await getData.json();

      if (response?.items) {
        setWatchVideo(response.items);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const filteredWatchVideo = watchVideo.filter(
    (v) => v.id === searchParams.get("vt")
  );

  return {
    filteredWatchVideo,
    searchParams,
  };
};

export default useWatch;
