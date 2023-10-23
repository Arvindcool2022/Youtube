import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { toggleVisibility } from '../store/sideBarSlice';
import { cacheResults } from '../store/searchSlice';
import { clearSearchFeed, updateFeed } from '../store/feedDataSlice';
import { SUGGEST_API } from '../utils/contants';
import { searchVideos } from '../utils/fetchdata';
import logo from '../images/youtube-svgrepo-com.svg';
import userIcon from '../images/user .png';
import searchIcon from '../images/search.svg';
import searchWhIcon from '../images/search white.svg';

const Header = () => {
  //* SideBar Toggle Starts.
  const dispatch = useDispatch();
  const sideBarToggle = () => dispatch(toggleVisibility());
  //# toggler icon animation
  const isVisible = useSelector(store => store.sideBar.visibility);
  const toggleStyle = isVisible
    ? 'toggle toggle-left left-right'
    : 'toggle toggle-left left-right active';
  //* SideBar Toggle Ends.

  //* Search Suggestions Starts.
  const [searchQuery, setSearchQuery] = useState('');
  const [debounceTimer, setDebounceTimer] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestion, setShowSuggestion] = useState(false);
  const [selectedSearchQuery, setSelectedSearchQuery] = useState('');

  //# search in cache before api call
  const searchCache = useSelector(store => store.search);

  useEffect(() => {
    if (searchCache[searchQuery]) setSuggestions(searchCache[searchQuery]);
    else if (searchQuery) {
      //# debouncing the search
      if (debounceTimer) clearTimeout(debounceTimer);

      const newDebounceTimer = setTimeout(() => fetchSuggestions(), 300);
      setDebounceTimer(newDebounceTimer);
    } else setSuggestions([]);

    // return () => {clearTimeout(debounceTimer);}; doesn't work well
  }, [searchQuery]);

  useEffect(() => {
    if (searchQuery === '') setSuggestions([]);
  }, [isLoading]);

  const fetchSuggestions = async () => {
    try {
      setIsLoading(true);
      const suggestions = await getData(searchQuery);
      setSuggestions(suggestions);
      dispatch(cacheResults({ [searchQuery]: suggestions }));
    } catch (error) {
      console.error('Error fetching video data:', error);
    } finally {
      setIsLoading(false);
    }
  };
  //* Search Suggestions Ends.

  // * Effect to update video feed content based on the selected search term
  useEffect(() => {
    if (selectedSearchQuery !== '') {
      (async () => {
        const searchVideoFeed = await searchVideos(selectedSearchQuery);
        dispatch(updateFeed(searchVideoFeed?.items));
      })();
    } else {
      dispatch(clearSearchFeed());
    }
  }, [selectedSearchQuery]);
  //* ends here.

  //* color theme.
  const darkMode = useSelector(store => store.colorTheme.mode);

  return (
    <header className="flex justify-between items-center pt-6 pd-4 px-2">
      <div className="flex">
        <div className="wrap" onClick={() => sideBarToggle()}>
          <svg height="40" width="40" className={toggleStyle}>
            <g className="bar-1 bar">
              <path d="m 5 5 l 30 0" />
            </g>
            <g className="bar-2 bar">
              <path d="m 5 20 l 30 0" />
            </g>
            <g className="bar-3 bar">
              <path d="m 5 35 l 30 0" />
            </g>
            <g className="bar-1-after bar-after">
              <path d="m 35 20 l -15 -15 l -15 0" />
            </g>
            <g className="bar-2-after bar-after">
              <path d="m 5 20 l 15 0" />
            </g>
            <g className="bar-3-after bar-after">
              <path d="m 35 20 l -15 15 l -15 0" />
            </g>
          </svg>
        </div>

        <Link to={'/'}>
          <img
            className="h-8 ps-3 me-1 cursor-pointer"
            src={logo}
            alt="youtube-logo"
            onClick={() => {
              setSearchQuery('');
              dispatch(clearSearchFeed());
            }}
          />
        </Link>

        <Link to={'/'}>
          <p
            className="font-Roboto tracking-tighter text-3xl font-semibold cursor-pointer hidden scale-x-75 origin-left sm:block"
            onClick={() => {
              setSearchQuery('');
              dispatch(clearSearchFeed());
            }}
          >
            YouTube
          </p>
        </Link>
      </div>
      <div className="flex flex-grow justify-center mx-1">
        <div className="flex flex-grow sm:flex-grow-0 sm:w-3/4 md:w-1/2 relative">
          {isLoading && <Loading />}
          {suggestions.length > 0 && showSuggestion && (
            <ul className="p-3 border border-gray-500 rounded-2xl bg-gray-200 dark:bg-stone-950 absolute text-center top-11 right-0 left-0 z-10 overflow-hidden cursor-pointer">
              {suggestions.map(item => (
                <li
                  className="p-1 transition-all duration-200 ease-in-out hover:scale-105 hover:bg-gray-50"
                  key={item}
                  onClick={e => {
                    const text = e.target.innerText;
                    setSelectedSearchQuery(text);
                    setSearchQuery(text);
                  }}
                >
                  {item}
                </li>
              ))}
            </ul>
          )}
          <input
            className="bg-gray-200 flex-2 rounded-s-full outline-none border border-solid  dark:bg-stone-900 dark:border-stone-800 border-gray-500 ps-3 flex-grow"
            type="text"
            placeholder="Search..."
            value={searchQuery}
            onChange={e => setSearchQuery(e.target.value)}
            onFocus={() => setShowSuggestion(true)}
            onBlur={() => {
              setTimeout(() => {
                setShowSuggestion(false);
              }, 300);
            }}
          />
          <button className="group px-4 py-2 bg-gray-200  dark:bg-stone-900 capitalize border border-solid border-gray-500 dark:border-stone-800 border-s-0 rounded-e-full transition-all duration-200 ease-in-out hover:bg-stone-700 ">
            <img
              className="h-5 transition-all duration-200 ease-in-out group-active:scale-90"
              src={darkMode ? searchWhIcon : searchIcon}
              alt="search"
              onClick={() => {
                console.log(searchQuery);
                setSelectedSearchQuery(searchQuery);
              }}
            />
          </button>
        </div>
      </div>
      <div className="hidden md:block">
        <img className="h-8 cursor-pointer" src={userIcon} alt="user-icon" />
      </div>
    </header>
  );
};

export default Header;

async function getData(searchQuery) {
  const response = await fetch(SUGGEST_API + searchQuery);
  if (!response.ok) throw new Error('Failed to fetch data');
  const text = await response.text();
  //# Check Format
  if (text.startsWith('window.google.ac.h(')) {
    const jsonString = text.slice('window.google.ac.h('.length, -1);
    const data = JSON.parse(jsonString);
    const suggestions = data[1].map(item => item[0]);
    return suggestions;
  } else {
    console.log(text);
    throw new Error('response not in expected format');
  }
}

function Loading() {
  return (
    <p className="p-3 text-xl rounded-2xl font-semibold bg-gray-200 dark:bg-stone-950 absolute text-center left-0 right-0 top-11">
      Loading..
    </p>
  );
}
