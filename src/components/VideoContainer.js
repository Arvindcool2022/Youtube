import VideoGrid from './VideoGrid';
import ButtonList from './ButtonList';
import { useEffect, useState } from 'react';
import { YOUTUBE_API } from '../utils/contants';

const VideoContainer = () => {
  const [videoData, setVideoData] = useState([]);

  useEffect(() => {
    fetchVideo();
  }, []);

  const fetchVideo = async () => {
    try {
      const response = await fetch(YOUTUBE_API);
      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }
      const data = await response.json();
      setVideoData(data?.items);
    } catch (error) {
      console.error('Error fetching video data:', error);
    }
  };

  if (videoData.length === 0) return <h1>loading...</h1>;

  console.log(videoData[0]);

  return (
    <section className="px-5 flex-grow">
      <ButtonList />
      <section className="grid grid-cols-auto-fit-250 gap-8 justify-items-center justify-center">
        {' '}
        {videoData.map(item => (
          <VideoGrid key={item?.id} info={item} />
        ))}
      </section>
    </section>
  );
};

export default VideoContainer;
