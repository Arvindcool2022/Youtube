import { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ButtonList from './ButtonList';
import { invisibile, visibile } from '../store/sideBarSlice';

const Sidebar = () => {
  const isVisible = useSelector(store => store.sideBar.visibility);

  const dispatch = useDispatch();

  const sideBarToggle = () => dispatch(visibile());

  const [windowDimensions, setWindowDimensions] = useState(window.innerWidth);
  const [mobile, setMobile] = useState();

  useEffect(() => {
    if (mobile) dispatch(invisibile());
    else dispatch(visibile());
  }, [mobile]);

  useEffect(() => {
    if (windowDimensions <= 480) setMobile(true);
    else setMobile(false);
  }, [windowDimensions]);

  useEffect(() => {
    const handleResize = () => {
      const newDimensions = window.innerWidth;
      setWindowDimensions(newDimensions);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  //# early return pattern
  const width = isVisible ? 'w-full sm:max-w-max' : 'w-0';

  return (
    <aside
      className={`z-50 absolute bg-white bg-opacity-90 overflow-hidden h-full text-center dark:bg-black sm:h-[90vh] sm:static ${width}`}
    >
      <ButtonList width={windowDimensions} />
    </aside>
  );
};

export default Sidebar;
