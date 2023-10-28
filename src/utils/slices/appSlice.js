import { createSlice } from "@reduxjs/toolkit";
import toggleUtils from "../Actions/ToggleActions";

const appSlice = createSlice({
  name: "collapsible-app",
  initialState: {
    isMenuOpen: true,
  },
  reducers: {
    toggleMenu: toggleUtils.toggleMenu,
    closeMenu: toggleUtils.closeMenu,
  },
});

export const { toggleMenu, closeMenu } = appSlice.actions;
export default appSlice.reducer;
