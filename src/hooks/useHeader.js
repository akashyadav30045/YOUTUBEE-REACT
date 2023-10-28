import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  GOOGLE_API_KEY,
  SEARCH_API_URL,
  YOUTUBE_SEARCH_API,
} from "../config/constantAPI";
import { cacheResults, storeResponse } from "../utils/slices/searchSlice";
import { toggleMenu } from "../utils/slices/appSlice";

const useHeader = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);

  const dispatch = useDispatch();

  const searchCache = useSelector((store) => store.search);
  // console.log({ searchCache });

  /****
    searchCache = {
      "moto":["moto+","motoG40","motoFusion"]
    };
    searchQuery = moto
    */

  useEffect(() => {
    const timer = setTimeout(() => {
      if (searchCache[searchQuery]) {
        setSearchResults(searchCache[searchQuery]);
      } else {
        fetchSearchResults();
        fetchSearchQueryResults();
      }
    }, 200);

    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);

  const fetchSearchResults = async () => {
    // console.log({ searchQuery });

    const getSearchResults = await fetch(YOUTUBE_SEARCH_API + searchQuery);

    const getSearchJson = await getSearchResults.json();
    // console.log({getSearchJson});

    setSearchResults(getSearchJson[1]);

    // if searchQuery not present in searchCache then update the searchCache with new results
    dispatch(
      cacheResults({
        [searchQuery]: getSearchJson[1],
      })
    );
  };

  const fetchSearchQueryResults = async () => {
    if (!searchQuery) return;

    const searchResult = await fetch(
      `${SEARCH_API_URL}${searchQuery}&key=${GOOGLE_API_KEY}`
    );
    const response = await searchResult.json();
    // console.log({ response });
    dispatch(storeResponse(response));
  };

  const hamburgerMenuHandler = () => {
    dispatch(toggleMenu());
  };

  const handleSuggestionClick = (res) => {
    setSearchQuery(res);
    setSearchResults([]);
    setShowSuggestions(false);
  };
  const handleSearchQueryChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleShowSuggestions = () => {
    setShowSuggestions(!showSuggestions);
  };

  return {
    searchQuery,
    searchResults,
    showSuggestions,
    hamburgerMenuHandler,
    handleSuggestionClick,
    handleSearchQueryChange,
    handleShowSuggestions,
  };
};

export default useHeader;
