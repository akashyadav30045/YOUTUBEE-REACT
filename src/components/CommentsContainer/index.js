import { CommentData } from "../../constants/constant";
import CommentList from "./CommentList";

const CommentsContainer = () => {
  return (
    <div className="m-5 p-2 ">
      <h1 className="font-bold text-2xl">Comments</h1>
      <div className="p-2">
        {/* <Comment data={ CommentData[0] } /> */ }
        <CommentList comments={ CommentData } />
      </div>
    </div>
  );
};

export default CommentsContainer;
