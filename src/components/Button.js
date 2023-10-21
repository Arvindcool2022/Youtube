// import { useEffect, useState } from 'react';
// import { fetchSuggestedVideos } from '../utils/fetchdata';
// import { useDispatch } from 'react-redux';
// import { updateFeed } from '../store/feedDataSlice';

const Button = ({ name, index, pressed, isPressed }) => {
  // const [suggestedCategory, setSuggestedCategory] = useState(null);
  // const dispatch = useDispatch();

  const handleClick = e => {
    //   const text = e.target.innerText.toLowerCase();
    //   if (text !== 'all') {
    //     setSuggestedCategory(text);
    //   } else {
    //     setSuggestedCategory(null);
    //   }
    pressed(index);
  };

  // useEffect(() => {
  //   if (suggestedCategory) {
  //     (async () => {
  //       const response = await fetchSuggestedVideos();
  //       dispatch(updateFeed(response?.items));
  //     })();
  //   }
  // }, [suggestedCategory]);

  const commonStyles =
    'px-2 py-1 rounded-lg first-letter:uppercase transition-all duration-200 ease-in-out';

  const style = isPressed
    ? `${commonStyles} bg-stone-900 text-white`
    : `${commonStyles} bg-gray-200 hover:bg-gray-300`;

  return (
    <button className={style} onClick={handleClick}>
      {name}
    </button>
  );
};

export default Button;
