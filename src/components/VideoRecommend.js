import React, { useEffect, useState } from 'react';
import { fetchSuggestedVideos } from '../utils/fetchdata';
import RecommendVideoCard from './RecommendVideoCard';
import { Link } from 'react-router-dom';

const VideoRecommend = ({ id }) => {
  const [videoData, setVideoData] = useState();

  useEffect(() => {
    async function fetchData() {
      const response = await fetchSuggestedVideos(id);
      // console.log(response.items);
      setVideoData(response.items);
    }
    fetchData();
  }, [id]);

  if (!videoData) return <h1>Loading...</h1>;

  return (
    <section className="max-w-[325px] xl:max-w-[400px] flex-shrink hidden lg:block">
      {videoData.map(info => (
        <Link to={'?v=' + info?.id?.videoId} key={info?.id?.videoId}>
          <RecommendVideoCard data={info} />
        </Link>
      ))}
    </section>
  );
};

export default VideoRecommend;
