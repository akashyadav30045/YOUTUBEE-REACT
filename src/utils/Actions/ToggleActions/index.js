const toggleMenu = (state) => {
  state.isMenuOpen = !state.isMenuOpen;
};

const closeMenu = (state) => {
  state.isMenuOpen = false;
};

const toggleUtils = {
  toggleMenu,
  closeMenu,
};

export default toggleUtils;
