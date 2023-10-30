import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';
import { useState } from 'react';

const Body = () => {
  const [isWatchLive, setIsWatchLive] = useState(false);

  const toggle = s => {
    setIsWatchLive(s);
  };
  return (
    <div className="flex">
      <Sidebar isWatchLive={isWatchLive} />
      <Outlet context={toggle} />
    </div>
  );
};

export default Body;
