import React from 'react';
import Sidebar from './Sidebar';
import VideoContainer from './VideoContainer';

const Body = ({ toggler }) => {
  return (
    <div className="flex">
      <Sidebar visibility={toggler} />
      <VideoContainer />
    </div>
  );
};

export default Body;
