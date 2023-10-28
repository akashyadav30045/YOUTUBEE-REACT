import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useComments from "../../hooks/useComments";
import { formatDateDifference } from "../../utils/commonFn";
import ShimmerComment from "../Shimmer/ShimmerComment";
import "./shimmer.css";

const Comment = ({ comment }) => {
  const [showFullMessage, setShowFullMessage] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const delay = setTimeout(() => {
      setIsLoading(false);
      clearTimeout(delay);
    }, 3000);
  }, []);

  if (isLoading) {
    return <ShimmerComment />;
  }

  const {
    authorProfileImageUrl,
    authorDisplayName,
    textOriginal,
    publishedAt,
    authorChannelUrl,
  } = comment?.snippet?.topLevelComment?.snippet;

  const MAX_TEXT_LENGTH = 150;

  const toggleTextMessage = () => {
    setShowFullMessage(!showFullMessage);
  };
  const truncatedMessage =
    textOriginal.length > MAX_TEXT_LENGTH
      ? showFullMessage
        ? textOriginal
        : `${textOriginal.slice(0, MAX_TEXT_LENGTH)}... `
      : textOriginal;
  return (
    <div className="bg-gray-150 rounded-lg shadow-md p-4 my-4">
      <div className="flex items-center space-x-2">
        <img
          className="rounded-full h-10 w-10"
          src={authorProfileImageUrl}
          alt="user"
        />
        <h2 className="font-bold">
          <Link
            to={`${authorChannelUrl}`}
            target="_blank"
            className="hover:text-blue-600 hover:underline"
          >
            {authorDisplayName}
          </Link>
        </h2>
      </div>
      <div className="flex items-center justify-between">
        <p className="px-12">
          {truncatedMessage}{" "}
          {textOriginal.length > MAX_TEXT_LENGTH && (
            <button
              className="text-blue-600 text-md font-semibold hover:underline  hover:text-green-600 transition-colors duration-300 focus:outline-none"
              onClick={toggleTextMessage}
            >
              {showFullMessage ? "Hide" : "Read more"}
            </button>
          )}
        </p>
        <p className="text-ellipsis text-gray-800 truncate">
          {formatDateDifference(publishedAt)} • before
        </p>
      </div>
    </div>
  );
};

const Comments = ({ id }) => {
  const commentData = useComments(id);
  if (!commentData) return null;
  const topComments = commentData?.comments?.items;
  return (
    <div className="flex flex-col">
      {topComments && (
        <h1 className="font-bold text-xl pt-6 px-5 text-gray-800">{`(${topComments.length}) Comments`}</h1>
      )}

      <div className="p-2 m-2">
        {topComments?.map((comment) => (
          <Comment key={comment.id} comment={comment} />
        ))}
      </div>
    </div>
  );
};

export default Comments;
