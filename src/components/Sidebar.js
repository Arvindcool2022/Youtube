import React from 'react';
import MenuItems from './MenuItems';
import { useSelector } from 'react-redux';

const Sidebar = () => {
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
