import { createSlice } from "@reduxjs/toolkit";

const videoSlice = createSlice({
  name: "video",
  initialState: [],
  reducers: {
    setClickedVideo: (state, action) => {
      const videoExists = state.some(
        (video) =>
          //  video.id === action.payload.id
          video.id === action.payload.id ||
          (video.id && video.id.videoId === action.payload.id)
      );
      if (!videoExists) {
        state.push(action.payload);
      }
    },
    removeClickedVideo: (state, action) => {
      const { id } = action.payload;
      return state.filter((video) => {
        return video.id !== id;
        // return video.id === id || (video.id && video.id.videoId === id);
      });
    },

    removeAllClickedVideos: (state) => {
      return [];
    },
  },
});

export const { setClickedVideo, removeClickedVideo, removeAllClickedVideos } =
  videoSlice.actions;
export default videoSlice.reducer;
