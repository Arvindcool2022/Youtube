import { useEffect, useState } from 'react';
import { searchVideos } from '../utils/fetchdata';
import { useDispatch } from 'react-redux';
import { clearSearchFeed, updateFeed } from '../store/feedDataSlice';

const Button = ({ name, index, pressed, isPressed }) => {
  const [suggestedCategory, setSuggestedCategory] = useState('');
  const [bool, setBool] = useState(false); //without this useEffect Bugs out 3 or 4 clicks.
  const dispatch = useDispatch();

  const handleClick = e => {
    const text = e.target.innerText.toLowerCase().trim();
    console.log('clicked: ', text);
    setSuggestedCategory(text);
    setBool(!bool);
    pressed(index);
  };

  useEffect(() => {
    const fetchAndSetFeed = async () => {
      try {
        if (suggestedCategory === 'all') {
          console.log('clicked all');
          dispatch(clearSearchFeed());
        } else if (suggestedCategory) {
          console.log("clicked something else 'not all'");
          const response = await searchVideos(suggestedCategory);
          dispatch(updateFeed(response?.items));
        } else console.log('no fetch call made: ', suggestedCategory);
      } catch (error) {
        console.error('Error fetching and updating feed:', error);
      }
    };

    fetchAndSetFeed();
  }, [suggestedCategory, dispatch, bool]);

  const commonStyles =
    'px-2 py-1 rounded-lg first-letter:uppercase transition-all duration-200 ease-in-out';

  const style = isPressed
    ? `${commonStyles} bg-stone-900 text-white`
    : `${commonStyles} bg-gray-200 hover-bg-gray-300`;

  return (
    <button className={style} onClick={handleClick}>
      {name}
    </button>
  );
};

export default Button;
