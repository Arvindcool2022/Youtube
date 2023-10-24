import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ButtonList from './ButtonList';
import { invisible, visible } from '../store/sideBarSlice';
import { darkTheme, lightTheme, toggleMode } from '../store/colorTheme';

const Sidebar = ({ isWatchLive }) => {
  const isVisible = useSelector(store => store.sideBar.visibility);
  const darkMode = useSelector(store => store.colorTheme.mode);
  const dispatch = useDispatch();
  const [windowDimensions, setWindowDimensions] = useState(window.innerWidth);
  const [mobile, setMobile] = useState();
  const [systemThemeControl, setSystemThemeControl] = useState(true);

  useEffect(() => {
    if (mobile || isWatchLive) dispatch(invisible());
    else dispatch(visible());
  }, [mobile]);

  useEffect(() => {
    if (windowDimensions <= 480) setMobile(true);
    else setMobile(false);
  }, [windowDimensions]);

  useEffect(() => {
    const handleResize = () => setWindowDimensions(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    if (
      localStorage.theme === 'dark' ||
      (!('theme' in localStorage) &&
        window.matchMedia('(prefers-color-scheme: dark)').matches)
    )
      dispatch(darkTheme());

    const systemThemeMediaQuery = window.matchMedia(
      '(prefers-color-scheme: dark)'
    );

    //# check if user clicked the toggletheme btn
    if (systemThemeControl)
      // if yes then control from system is taken
      systemThemeMediaQuery.addEventListener('change', handleSystemThemeChange);

    function handleSystemThemeChange(event) {
      if (event.matches) dispatch(darkTheme());
      else dispatch(lightTheme());
    }

    return () => {
      systemThemeMediaQuery.removeEventListener(
        'change',
        handleSystemThemeChange
      );
    };
  }, [systemThemeControl]);

  const toggleTheme = () => {
    if (systemThemeControl) {
      setSystemThemeControl(false);
    }
    dispatch(toggleMode());
  };

  const width = isVisible ? 'w-full sm:max-w-max' : 'w-0';

  return (
    <aside
      className={`z-50 absolute bg-white bg-opacity-90 overflow-hidden h-full text-center dark:bg-black sm:h-[90vh] sm:static ${width}`}
    >
      <div className="">
        <button
          className="text-sm mt-4 me-2 px-6 py-1 rounded-full bg-stone-900 text-white dark:bg-white dark:text-black active:scale-95 transition-all duration-200 ease-in"
          onClick={() => toggleTheme()}
        >
          {darkMode ? 'light mode' : 'dark mode'}
        </button>
      </div>
      <ButtonList width={windowDimensions} />
    </aside>
  );
};

export default Sidebar;
