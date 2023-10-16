import VideoGrid from './VideoGrid';
import ButtonList from './ButtonList';
import { useEffect, useState } from 'react';
import { YOUTUBE_API } from '../utils/contants';
import { Link } from 'react-router-dom';

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

  // console.log(videoData[0]);

  return (
    <section className="px-5 flex-grow">
      <ButtonList />
      <section className="grid grid-cols-[auto-fit_minmax(250px,_350px)] sm:grid-cols-auto-fit-250 gap-8 mx-2 sm:mx-0 justify-items-center justify-center">
        {' '}
        {videoData.map(item => (
          <Link to={'watch?v=' + item.id} key={item?.id}>
            <VideoGrid info={item} />
          </Link>
        ))}
      </section>
    </section>
  );
};

export default VideoContainer;
