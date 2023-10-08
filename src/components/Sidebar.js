import React from 'react';
import MenuItems from './MenuItems';
const Sidebar = ({ visibility }) => {
  return visibility ? (
    <aside className="border-e-[1px] border-gray-300 h-[90vh]">
      <MenuItems />
    </aside>
  ) : null;
};

export default Sidebar;
