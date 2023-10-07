import React from 'react';
import Sidebar from './Sidebar';
import VideoContainer from './VideoContainer';

const Body = () => {
  return (
    <div>
      {' '}
      <p className="text-3xl font-bold text-red-600">Body</p>
      <Sidebar />
      <VideoContainer />
    </div>
  );
};

export default Body;
