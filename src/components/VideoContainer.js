import React from 'react';
import VideoGrid from './VideoGrid';
import GenreButtons from './GenreButtons';

const VideoContainer = () => {
  return (
    <div className="p-10">
      <p>VideoContainer</p>
      <VideoGrid />
      <GenreButtons />
    </div>
  );
};

export default VideoContainer;
