import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import {
  fetchChannelDetails,
  fetchChannelVideoDetails
} from '../utils/fetchdata';
import useFormatViews from '../hooks/useFormatViews';
import VideoCard from './VideoCard';
import { useSelector } from 'react-redux';

const ChannelPage = () => {
  const { id } = useParams();
  const [channelDetails, setChannelDetails] = useState(null);
  const [videoData, setVideoData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const isVisible = useSelector(store => store.sideBar.visibility);

  useEffect(() => {
    async function fetchData() {
      try {
        const [channelDetailsResponse, videoDataResponse] = await Promise.all([
          fetchChannelDetails(id),
          fetchChannelVideoDetails(id)
        ]);

        setChannelDetails(channelDetailsResponse?.items[0]);
        setVideoData(videoDataResponse?.items);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, [id]);

  if (loading)
    return (
      <div className="h-screen w-full">
        <p className="text-center text-xl my-10">Loading...</p>
      </div>
    );

  if (error)
    return (
      <div className="h-screen w-full">
        <p className="font-xl">Error: {error.message}</p>
      </div>
    );

  console.log(channelDetails);

  const {
    snippet: {
      title,
      localized: { description },
      thumbnails: {
        medium: { url }
      }
    },
    statistics: { subscriberCount, videoCount, viewCount }
  } = channelDetails;

  return (
    <section className="mx-4 my-8 w-full overflow-hidden">
      <div className="flex items-center gap-3 pb-4 border-b border-b-gray-700">
        <img src={url} className="rounded-full max-h-32" />
        <div>
          <p className="text-2xl font-medium">{title}</p>
          <p className="opacity-60">
            {useFormatViews(subscriberCount)} Subscriber
          </p>
          <p className="opacity-60">{useFormatViews(viewCount)} Total views</p>
          <p className="opacity-60">{useFormatViews(videoCount)} videos</p>
        </div>
      </div>
      {/* <p className="w-4/5">{description}</p> */}
      <section className="mt-6  mx-auto">
        <h1 className="text-3xl font-medium">
          Videos of <span className="text-red-700">{title}</span>
        </h1>
        <div
          className={`grid grid-cols-1 ${
            isVisible
              ? 'md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'
              : 'sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5'
          } gap-8 mt-6 mx- sm:mx-2 justify-items-center justify-center`}
        >
          {videoData.map(info => (
            <VideoCard info={info} />
          ))}
        </div>
      </section>
    </section>
  );
};

export default ChannelPage;
