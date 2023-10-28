import { Link, useParams } from "react-router-dom";
import useChannelDetails from "../../hooks/useChannelDetails";
import { Statistic, formatDate } from "../../utils/commonFn";
import { useEffect, useState } from "react";
import Spinner from "../Spinner";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../../utils/slices/appSlice";

const ChannelDetails = () => {
  const [loading, setLoading] = useState(true);
  const { channelId } = useParams();
  const channelStats = useChannelDetails(channelId);
  const dispatch = useDispatch();

  useEffect(() => {
    window.scrollTo(0, 0);
    dispatch(toggleMenu());
  }, [dispatch]);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  if (!channelStats || loading) return <Spinner />;

  const { snippet, statistics } = channelStats?.items[0];
  const { country, customUrl, description, publishedAt, thumbnails, title } =
    snippet;
  const { subscriberCount, videoCount, viewCount } = statistics;

  return (
    <div className="flex flex-col md:flex-row w-full">
      <div className="md:w-1/2 p-4">
        <div className="flex justify-center items-center">
          <img
            className="rounded-full w-64 h-64"
            src={thumbnails?.high?.url}
            alt="thumbnail"
          />
        </div>
      </div>

      <div className="md:w-full p-4 my-2">
        <h1 className="text-3xl font-bold text-slate-900">{title}</h1>
        <p className="text-gray-600 mt-2">{description}</p>
        {customUrl && (
          <p className="text-blue-600 mt-4 font-semibold">
            <Link to={`https://www.youtube.com/${customUrl}`} target="_blank">
              Channel: {customUrl}
            </Link>
          </p>
        )}
        <p className="mt-4 font-semibold">Country: {country}</p>

        <div className="mt-4 ">
          <Statistic label="Subscriber" value={subscriberCount} />
        </div>

        <p className="mt-4 font-semibold">Video count: {videoCount}</p>
        <p className="mt-4 font-semibold">View: {viewCount}</p>
        <p className="mt-4 font-semibold">Joined: {formatDate(publishedAt)}</p>
      </div>
    </div>
  );
};

export default ChannelDetails;
