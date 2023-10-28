import React, { useEffect, useMemo, useState } from "react";
import {
  HAMBURGER_MENU,
  YOUTUBE_LOGO,
  USER_ICON,
  SEARCH_ICON,
} from "../../constants/constant";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../../utils/slices/appSlice";
import { YOUTUBE_SEARCH_API } from "../../config/constantAPI";

const Header = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);

  const cachedResults = useMemo(() => {
    return {}; // Initial cache object
  }, []);

  // useEffect(() => {
  //   let isCancelled = false;

  //   const fetchSearchResults = async function () {
  //     if (!searchQuery) return;

  //     const getSearchResults = await fetch(YOUTUBE_SEARCH_API + searchQuery);

  //     if (!isCancelled) {
  //       const getSearchJson = await getSearchResults.json();

  //       console.log({ getSearchJson });
  //     }
  //   };

  //   const debounceFetch = debounce(fetchSearchResults, 200);
  //   debounceFetch();

  //   return () => {
  //     isCancelled = true;
  //   };
  // }, [searchQuery]);

  // optimize way

  useEffect(() => {
    const fetchSearchResults = async () => {
      if (!searchQuery) {
        setSearchResults([]);
        return;
      }

      if (cachedResults[searchQuery]) {
        setSearchResults(cachedResults[searchQuery]);
        return;
      }

      // console.log({ searchQuery });

      const getSearchResults = await fetch(YOUTUBE_SEARCH_API + searchQuery);

      const getSearchJson = await getSearchResults.json();

      setSearchResults(getSearchJson[1]);

      // Update the cache with new results
      cachedResults[searchQuery] = getSearchJson[1];
    };

    // debounce concept
    const timer = setTimeout(() => fetchSearchResults(), 200);

    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery, cachedResults]);

  const dispatch = useDispatch();

  const hamburgerMenuHandler = () => {
    dispatch(toggleMenu());
  };

  return (
    <div className="grid grid-flow-col p-2 m-2 shadow-lg">
      <div className="flex  col-span-1 ">
        <img
          className="h-6 cursor-pointer"
          src={HAMBURGER_MENU}
          alt="menu"
          onClick={() => {
            hamburgerMenuHandler();
          }}
        />
        <a href="/">
          <img
            className="h-16 mt-[-20px] mx-6 cursor-pointer"
            src={YOUTUBE_LOGO}
            alt="yt-logo"
          />
        </a>
      </div>

      <div className=" col-span-10">
        <div className=" flex items-center justify-center ">
          <input
            className="rounded-l-full p-2 pl-4 w-1/2 border border-sky-300 focus:outline-none focus:shadow-outline focus:border-blue-400 shadow-sm text-gray-600 placeholder-gray-500"
            type="text"
            placeholder="Search"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onFocus={() => setShowSuggestions(true)}
            onBlur={() => setShowSuggestions(false)}
          />
          <div className="rounded-r-full px-5 py-[5px] border border-gray-500 cursor-pointer bg-gray-50">
            <img className="h-6" src={SEARCH_ICON} alt="search-logo" />
          </div>
        </div>
        {showSuggestions && (
          <div className="absolute bg-white w-full md:w-[40%] lg:w-[37%] p-3 rounded-lg py-2  mt-2 md:mt-0 md:ml-[16rem] shadow-2xl ">
            {showSuggestions &&
              searchResults.map((result, i) => (
                <div
                  key={i}
                  className="text-gray-900 font-semibold m-1 p-1 border-b flex hover:bg-gray-100 hove: rounded-lg"
                >
                  <img className="h-4" src={SEARCH_ICON} alt="search-logo" />
                  <p className="px-3">{result}</p>
                </div>
              ))}
          </div>
        )}
      </div>

      <div className="col-span-1">
        <img className="h-8" src={USER_ICON} alt="user" />
      </div>
    </div>
  );
};

export default Header;
