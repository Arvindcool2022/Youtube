import logo from '../images/youtube-svgrepo-com.svg';
import userIcon from '../images/user .png';
import searchIcon from '../images/search.svg';
import { useDispatch } from 'react-redux';
import { toggleVisibility } from '../store/sideBarSlice';
import { SUGGEST_API } from '../utils/contants';
import { useEffect, useState } from 'react';
const Header = () => {
  //# SideBar Toggle.
  const dispatch = useDispatch();
  const sideBarToggle = () => dispatch(toggleVisibility());

  //# search suggestions
  const [searchQuery, setSearchQuery] = useState('');
  const [timer, setTimer] = useState(null);
  const [loading, setLoading] = useState(false);
  const [suggestions, setSuggestions] = useState([]);

  useEffect(() => {
    if (searchQuery) {
      //# debouncing the search
      if (timer) clearTimeout(timer);

      const newTimer = setTimeout(() => {
        getData(searchQuery);
      }, 300);
      setTimer(newTimer);
    } else setSuggestions([]);
  }, [searchQuery]);

  useEffect(() => {
    if (searchQuery === '') setSuggestions([]);
  }, [loading]);

  const getData = async searchTerm => {
    try {
      setLoading(true);
      const response = await fetch(SUGGEST_API + searchTerm);
      if (!response.ok) throw new Error('Failed to fetch data');
      const text = await response.text();
      if (text.startsWith('window.google.ac.h(')) {
        const jsonString = text.slice('window.google.ac.h('.length, -1);
        const data = JSON.parse(jsonString);
        const suggestions = data[1].map(item => item[0]);
        setSuggestions(suggestions);
      } else {
        console.log(text);
        throw new Error('response not in expected format');
      }
    } catch (error) {
      console.error('Error fetching video data:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <header className="flex justify-between items-center p-4 ">
      <div className="flex">
        <img
          className="h-8 cursor-pointer"
          src="https://upload.wikimedia.org/wikipedia/commons/b/b2/Hamburger_icon.svg"
          alt="menu"
          onClick={sideBarToggle}
        />
        <img
          className="h-8 ps-3 me-1 cursor-pointer"
          src={logo}
          alt="youtube-logo"
        />

        <p className=" font-mono text-2xl font-semibold cursor-pointer">
          YOUTUBE
        </p>
      </div>
      <div className="flex flex-grow justify-center">
        <div className="flex flex-grow sm:flex-grow-0 sm:w-3/4 md:w-1/2 relative">
          {loading && (
            <p className="p-3 text-xl rounded-2xl font-semibold bg-gray-200 absolute text-center left-0 right-0 top-11">
              Loading..
            </p>
          )}
          {suggestions.length === 0 ? null : (
            <ul className="py-3 rounded-2xl bg-gray-200 absolute text-center top-11 right-0 left-0 overflow-hidden">
              {suggestions.map(item => (
                <li className="p-1 transition-all duration-200 ease-in-out hover:scale-105 hover:bg-gray-50">
                  {item}
                </li>
              ))}
            </ul>
          )}
          <input
            className="bg-gray-200 flex-2 rounded-s-full outline-none border border-solid border-gray-500 ps-3 flex-grow"
            type="text"
            value={searchQuery}
            onChange={e => setSearchQuery(e.target.value)}
          />
          <button className="group px-5 py-2 bg-gray-200 capitalize border border-solid border-gray-500 border-s-0 rounded-e-full transition-all duration-200 ease-in-out hover:bg-gray-300 ">
            <img
              className="h-5 transition-all duration-200 ease-in-out group-active:scale-90"
              src={searchIcon}
              alt="search"
            />
          </button>
        </div>
      </div>
      <div className="">
        <img className="h-8 cursor-pointer" src={userIcon} alt="user-icon" />
      </div>
    </header>
  );
};

export default Header;
