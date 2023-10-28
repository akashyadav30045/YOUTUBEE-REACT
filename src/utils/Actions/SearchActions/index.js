const cacheResults = (state, action) => {
  return { ...state, ...action.payload };
  /***
    {"mac":["machi","machine","machona","mach-mini","macho"]}
      state = { ...action.payload, ...state };
    merge two object: Object.assign(target,sourceObj1, sourceObj2...)
    state = Object.assign(state, action.payload);
      same thing : return {  ...action.payload,...state };
       */
};

const queryResult = (state, action) => {
  state.currQuerySearch = action.payload;
};
const searchUtils = {
  cacheResults,
  queryResult,
};

export default searchUtils;
