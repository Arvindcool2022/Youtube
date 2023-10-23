import { useRef } from 'react';
import { useSelector } from 'react-redux';
import ButtonList from './ButtonList';

const Sidebar = () => {
  const isVisible = useSelector(store => store.sideBar.visibility);

  //# early return pattern
  if (!isVisible) return null;
  const windowWidth = useRef(window.innerWidth);
  const windowHeight = useRef(window.innerHeight);

  console.log('width: ', windowWidth.current);
  console.log('height: ', windowHeight.current);

  return (
    <aside className="z-50 absolute bg-white bg-opacity-90 w-full h-full text-center sm:h-[90vh] sm:max-w-max sm:static ">
      <ButtonList />
    </aside>
  );
};

export default Sidebar;
// h-[90vh]  min-w-max
