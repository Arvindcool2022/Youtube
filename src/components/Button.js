import { useEffect, useState } from 'react';
import { searchVideos } from '../utils/fetchdata';
import { useDispatch } from 'react-redux';
import { clearSearchFeed, updateFeed } from '../store/feedDataSlice';
import { toggleVisibility } from '../store/sideBarSlice';
import { Link } from 'react-router-dom';

const Button = ({ name, index, pressed, isPressed, screenWidth }) => {
  const dispatch = useDispatch();
  const [suggestedCategory, setSuggestedCategory] = useState('');
  const [bool, setBool] = useState(false); //without this useEffect Bugs out after 3 or 4 clicks.

  const closeList = () => {
    // console.log(screenWidth);
    if (screenWidth <= 480) {
      dispatch(toggleVisibility());
    }
  };

  const handleClick = e => {
    const text = e.target.innerText.toLowerCase().trim();
    // console.log('clicked: ', text);
    setSuggestedCategory(text);
    setBool(!bool);
    if (!isPressed) pressed(index);
    closeList();
  };

  useEffect(() => {
    const fetchAndSetFeed = async () => {
      try {
        if (suggestedCategory === 'all') {
          // console.log('clicked all');
          dispatch(clearSearchFeed());
        } else if (suggestedCategory) {
          // console.log("clicked something else 'not all'");
          const response = await searchVideos(suggestedCategory);
          dispatch(updateFeed(response?.items));
        }
        // else console.log('no fetch call made: ', suggestedCategory);
      } catch (error) {
        console.error('Error fetching and updating feed:', error);
      }
    };

    fetchAndSetFeed();
  }, [suggestedCategory, dispatch, bool]);

  const isActive = isPressed
    ? ' bg-[#f61c0d] text-white'
    : ' hover:bg-red-300 dark:hover:bg-red-900 dark:hover:bg-opacity-50';

  return (
    <Link to={'/'}>
      <li
        className={`px-4 py-1 my-3 rounded-full cursor-pointer first-letter:uppercase transition-all duration-200 ease-in-out ${isActive}`}
        onClick={handleClick}
      >
        {name}
      </li>
    </Link>
  );
};

export default Button;
