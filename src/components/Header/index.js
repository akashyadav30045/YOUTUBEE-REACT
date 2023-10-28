import {
  HAMBURGER_MENU,
  YOUTUBE_LOGO,
  USER_ICON,
  SEARCH_ICON,
} from "../../constants/constant";

import useHeader from "../../hooks/useHeader";

const Header = () => {
  const {
    searchQuery,
    searchResults,
    showSuggestions,
    hamburgerMenuHandler,
    handleSuggestionClick,
    handleSearchQueryChange,
    handleShowSuggestions,
  } = useHeader();

  return (
    <div className="grid grid-flow-col p-2 m-2 shadow-lg">
      <div className="flex  col-span-1 ">
        <img
          className="h-6 cursor-pointer"
          src={ HAMBURGER_MENU }
          alt="menu"
          onClick={ () => {
            hamburgerMenuHandler();
          } }
        />
        <a href="/">
          <img
            className="h-10 mt-[-8px] md:h-16 md:mt-[-20px] mx-4 md:mx-6 cursor-pointer"
            src={ YOUTUBE_LOGO }
            alt="yt-logo"
          />
        </a>
      </div>

      <div className=" col-span-10 ">
        <div className=" flex items-center justify-center mt-[-8px] md:mt-0 ">
          <input
            className="rounded-l-full p-2 pl-4 w-1/2 border border-sky-300 focus:outline-none focus:shadow-outline focus:border-2 focus:border-blue-500 shadow-sm text-gray-600 placeholder-gray-500"
            type="text"
            placeholder="Search"
            value={ searchQuery }
            onChange={ handleSearchQueryChange }
            onFocus={ handleShowSuggestions }
          // onBlur={() => setShowSuggestions(false)}
          />
          <div className="rounded-r-full px-5 py-[8px]  md:py-[5px] border border-gray-500 cursor-pointer bg-gray-50">
            <img className="h-6" src={ SEARCH_ICON } alt="search-logo" />
          </div>
        </div>
        { showSuggestions && (
          <div className="absolute bg-white w-full md:w-[40%] lg:w-[36%] p-3 rounded-lg py-2  mt-2 md:mt-0 md:ml-[16rem]  shadow-2xl z-10 ">
            { showSuggestions &&
              searchResults.map((result, i) => (
                <a href={ `/results?searchQuery=${result}` } key={ i }>
                  <div
                    key={ i }
                    className="text-gray-900 font-semibold m-1 p-1 border-b flex hover:bg-gray-100 hove: rounded-lg "
                    onClick={ () => handleSuggestionClick(result) }
                  >
                    <img className="h-4" src={ SEARCH_ICON } alt="search-logo" />
                    <p className="px-3">{ result }</p>
                  </div>
                </a>
              )) }
          </div>
        ) }
      </div>

      <div className="col-span-1">
        <img className="h-8" src={ USER_ICON } alt="user" />
      </div>
    </div>
  );
};

export default Header;
