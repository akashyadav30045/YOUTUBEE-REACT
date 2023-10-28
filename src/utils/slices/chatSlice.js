import { createSlice, nanoid } from "@reduxjs/toolkit";
import { OFFSET_LIVE_CHAT } from "../../config/constantAPI";

const chatSlice = createSlice({
  name: "chat",
  initialState: {
    messages: [],
  },
  reducers: {
    addMessage: (state, action) => {
      // state.messages.push(action.payload);
      const newMessage = {
        id: nanoid(), // Generate a unique ID
        message: action.payload.message,
        name: action.payload.name,
        img: action.payload.img,
      };
      state.messages.splice(OFFSET_LIVE_CHAT, 1);
      state.messages.unshift(newMessage);
      // state.messages.push(newMessage);
    },
  },
});

export const { addMessage } = chatSlice.actions;
export default chatSlice.reducer;
