import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { defaultFeed, updateFeed } from '../store/feedDataSlice';
import { fetchPopularVideos } from '../utils/fetchdata';
import VideoCard, { ADVideoCard } from './VideoCard';
import ButtonList from './ButtonList';

const VideoContainer = () => {
  const [videoData, setVideoData] = useState([]);

  useEffect(() => {
    fetchVideo();
  }, []);

  const dispatch = useDispatch();

  const fetchVideo = async () => {
    const response = await fetchPopularVideos();
    if (response !== undefined) dispatch(defaultFeed(response?.items)); // 1st data fetch
    // console.log(response?.items);
  };

  const defaultData = useSelector(store => store.feedData.initialFeed);
  const searchData = useSelector(store => store.feedData.data);
  useEffect(() => {
    console.log('store default: ', defaultData, 'searchData: ', searchData);
    const vidData = searchData.length !== 0 ? searchData : defaultData;
    setVideoData(vidData[0]);
    // console.log(vidData[0]);
  }, [defaultData, searchData]);

  const isVisible = useSelector(store => store.sideBar.visibility);

  if (!videoData || videoData.length === 0) return <h1>loading...</h1>;

  const promotedVideo = videoData[Math.floor(Math.random() * (19 - 10) + 10)];

  return (
    <section
      className={`grid grid-cols-[auto-fit_minmax(250px,_350px)] sm:grid-cols-auto-fit-250 gap-8 mt-6 mx-4 sm:mx-2 justify-items-center justify-center ${
        isVisible ? 'w-full' : 'w-screen'
      }`}
    >
      {!promotedVideo?.id?.videoId && (
        <Link to={'watch?v=' + promotedVideo?.id} key={promotedVideo?.id}>
          <ADVideoCard info={promotedVideo} />
        </Link>
      )}
      {videoData.map(item =>
        (item?.id?.videoId || item?.id) && item?.snippet ? (
          <Link
            to={'watch?v=' + (item?.id?.videoId || item?.id)}
            key={item?.id?.videoId || item?.id}
          >
            <VideoCard info={item} />
          </Link>
        ) : null
      )}
    </section>
  );
};

export default VideoContainer;
