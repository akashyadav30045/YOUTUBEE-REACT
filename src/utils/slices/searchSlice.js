import { createSlice } from "@reduxjs/toolkit";
import searchUtils from "../Actions/SearchActions";

const searchSlice = createSlice({
  name: "search",
  initialState: {
    response: null,
  },
  reducers: {
    cacheResults: searchUtils.cacheResults,
    storeResponse: (state, action) => {
      // Update state with the response data
      const newState = {
        ...state,
        response: action.payload,
      };

      // Persist the state in local storage
      localStorage.setItem("searchState", JSON.stringify(newState));

      return newState;
    },
  },
});

export const { cacheResults, storeResponse } = searchSlice.actions;

export default searchSlice.reducer;

// LRU cache
