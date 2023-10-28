import { useEffect, useState } from "react";
import ChatMessage from "../ChatMessage";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../../utils/slices/chatSlice";
import { generateRandomName, makeRandomStr } from "../../helper/mockNames";
import { generateRandomThreeDigitNumber } from "../../utils/commonFn";
import { BASE_IMAGE_URL, IMG_URL } from "../../config/constantAPI";

const LiveChat = () => {
  const [inputChat, setInputChat] = useState("");
  const [showChat, setShowChat] = useState(true);
  const [randomThreeDigitNumber, setRandomThreeDigitNumber] = useState(312);

  const dispatch = useDispatch();
  const getMessages = useSelector((store) => store.liveChat.messages);

  useEffect(() => {
    const timer = setInterval(() => {
      // API Polling
      const updatedRandomNumber = generateRandomThreeDigitNumber();
      setRandomThreeDigitNumber(updatedRandomNumber);

      dispatch(
        addMessage({
          name: generateRandomName(),
          message: makeRandomStr(22),
          img: `${BASE_IMAGE_URL}${updatedRandomNumber}.jpg`,
        })
      );
    }, 1500);

    return () => clearInterval(timer);
  }, [dispatch]);

  const handleChatSubmit = (e) => {
    e.preventDefault();
    if (inputChat.trim() !== "") {
      dispatch(
        addMessage({
          name: "you",
          message: inputChat,
          // img: `${BASE_IMAGE_URL}${randomThreeDigitNumber}.jpg`,
          img:IMG_URL
        })
      );
    }
    setInputChat("");
  };

  return (
    <>
      <div className="flex flex-col mt-4 p-2  mx-2 md:mx-10 sm:mx-2 items-center border border-gray-400 shadow-xl rounded-lg bg-slate-100">
        <div className="w-full flex justify-between p-1 mt-[-8px] border-b-4">
          <p className="text-lg font-bold text-orange-400">Live Chat</p>
          <button
            onClick={() => setShowChat(!showChat)}
            className="w-full sm:w-auto px-2 py-1 lg:my-0 sm:my-2 bg-sky-500 hover:bg-sky-400 rounded-lg text-white font-semibold"
          >
            {showChat ? "Hide Chat" : "Show Chat"}
          </button>
        </div>

        {showChat && (
          <>
            <div className="p-3 max-h-[420px] flex flex-col-reverse overflow-y-scroll overflow-x-hidden w-full">
              {getMessages.map((chat) => (
                <ChatMessage
                  key={chat.id}
                  name={chat.name}
                  message={chat.message}
                  img={chat.img}
                />
              ))}
            </div>

            <form
              onSubmit={handleChatSubmit}
              className="flex flex-col sm:flex-row w-full p-2 mt-auto sm:mt-0"
            >
              <input
                className="flex-grow px-3 py-2 mb-2 sm:mb-0 border border-gray-300 rounded-lg focus:outline-none focus:ring-1"
                placeholder="Type your message..."
                type="text"
                value={inputChat}
                onChange={(e) => setInputChat(e.target.value)}
              />
              <button
                className="w-full sm:w-auto px-4 py-2 ml-0 sm:ml-2 mt-2 sm:mt-0 bg-green-400 hover:bg-green-700 rounded-lg text-white font-semibold"
                onClick={handleChatSubmit}
              >
                Send
              </button>
            </form>
          </>
        )}
      </div>
    </>
  );
};
export default LiveChat;
