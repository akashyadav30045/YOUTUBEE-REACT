import Comment from "../Comment";

const CommentList = ({ comments }) => {
  return (
    comments &&
    comments.map((comment, index) => (
      <div key={index} >
        <Comment  data={comment} />
        <div className="ml-5 pl-3 border border-l-black  border-r-0  ">
          <CommentList  comments={comment.reply} />
        </div>
      </div>
    ))
  );
};

export default CommentList;
