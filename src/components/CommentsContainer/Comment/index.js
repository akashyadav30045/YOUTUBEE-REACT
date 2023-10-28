import { USER_ICON } from "../../../constants/constant";

const Comment = ({ data }) => {
  const { name, text } = data
  return <div className="flex shadow-sm p-3 bg-gray-200 rounded-xl my-3">
    <img className="h-8" src={ USER_ICON } alt="user" />
    <div className="px-3">
      <p className="font-bold">{ name }</p>
      <p>{ text }</p>
    </div>
  </div>;
};
export default Comment;
