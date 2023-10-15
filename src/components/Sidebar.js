import React from 'react';
import MenuItems from './MenuItems';
import { useDispatch, useSelector } from 'react-redux';

const Sidebar = () => {
  const isVisible = useSelector(store => store.sideBar.visibility);

  return isVisible ? (
    <aside className="border-e-[1px] border-gray-300 h-[90vh]">
      <MenuItems />
    </aside>
  ) : null;
};

export default Sidebar;
