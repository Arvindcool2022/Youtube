import { useEffect } from 'react';
import MenuItems from './MenuItems';
import { useDispatch, useSelector } from 'react-redux';
import { visibile } from '../store/sideBarSlice';

const Sidebar = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(visibile());
  }, []);
  const isVisible = useSelector(store => store.sideBar.visibility);

  //# early return pattern
  if (!isVisible) return null;

  return (
    <aside className="h-[90vh]">
      <MenuItems />
    </aside>
  );
};

export default Sidebar;
