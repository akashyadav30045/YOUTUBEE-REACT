import { configureStore } from "@reduxjs/toolkit";
import appSlice from "../utils/slices/appSlice";
import searchSlice from "../utils/slices/searchSlice";
import chatSlice from "../utils/slices/chatSlice";
import videoReducer from "../utils/slices/videoSlice"

const store = configureStore({
  reducer: {
    app: appSlice,
    search: searchSlice,
    liveChat: chatSlice,
    video: videoReducer,
  },
});

export default store;
