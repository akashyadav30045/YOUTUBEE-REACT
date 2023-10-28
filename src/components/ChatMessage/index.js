// import { USER_ICON } from "../../constants/constant";

const ChatMessage = ({ name, message, img }) => {
  return (
    <div className="flex items-center space-x-2 py-2 shadow-sm">
      <img className="h-8 w-8 rounded-full" src={img} alt="user" />
      <span className="font-bold ">{name}</span>
      <span className=" whitespace-normal line-clamp-2 ">{message}</span>
    </div>
  );
};

export default ChatMessage;
