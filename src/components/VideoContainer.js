import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { updateFeed } from '../store/feedDataSlice';
import { fetchSuggestedVideos } from '../utils/fetchdata';
import VideoCard, { ADVideoCard } from './VideoCard';
import ButtonList from './ButtonList';

const VideoContainer = () => {
  const [videoData, setVideoData] = useState([]);

  useEffect(() => {
    fetchVideo();
  }, []);

  const dispatch = useDispatch();

  const fetchVideo = async () => {
    const response = await fetchSuggestedVideos();
    dispatch(updateFeed(response?.items));
  };

  const data = useSelector(store => store.feedData.data);
  useEffect(() => {
    setVideoData(data[0]);
  }, [data]);

  if (!videoData || videoData.length === 0) return <h1>loading...</h1>;

  const promotedVideo = videoData[Math.floor(Math.random() * (9 + 1) + 1)];

  return (
    <section className="px-5 flex-grow">
      <ButtonList />
      <section className="grid grid-cols-[auto-fit_minmax(250px,_350px)] sm:grid-cols-auto-fit-250 gap-8 mx-2 sm:mx-0 justify-items-center justify-center">
        {
          <Link
            to={'watch?v=' + promotedVideo?.id?.videoId}
            key={promotedVideo?.id?.videoId}
          >
            <ADVideoCard info={promotedVideo} />
          </Link>
        }
        {videoData.map(item =>
          item?.id?.videoId && item?.snippet ? (
            <Link to={'watch?v=' + item?.id?.videoId} key={item?.id?.videoId}>
              <VideoCard info={item} />
            </Link>
          ) : null
        )}
      </section>
    </section>
  );
};

export default VideoContainer;
