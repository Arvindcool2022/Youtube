import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { invisible, visible } from '../store/sideBarSlice';
import useFormatViews from '../hooks/useFormatViews';
import useTimeDifference from '../hooks/useTimeDifference';
import { fetchChannelDetails, fetchVideoDetails } from '../utils/fetchdata';
import ReactPlayer from 'react-player/lazy';
import CommentContainer from './CommentContainer';
import VideoRecommend from './VideoRecommend';
import { COMMENTS_EXAMPLE } from '../utils/contants';

const WatchPage = () => {
  const [params] = useSearchParams();
  const videoId = params.get('v');
  const [videoDetails, setVideoDetails] = useState(null);
  const [channelDetails, setChannelDetails] = useState(null);
  const dispatch = useDispatch();
  const time = useTimeDifference(videoDetails?.snippet?.publishedAt);

  useEffect(() => {
    const fetchData = async () => {
      try {
        dispatch(invisible());
        const response = await fetchVideoDetails(videoId);
        setVideoDetails(response.items[0]);
        dispatch(visible());
      } catch (error) {
        // Handle error
      }
    };

    fetchData();
  }, [dispatch, videoId]);

  useEffect(() => {
    if (videoDetails) {
      const fetchChannelData = async () => {
        try {
          const response = await fetchChannelDetails(
            videoDetails?.snippet?.channelId
          );
          setChannelDetails(response.items[0]);
        } catch (error) {
          // Handle error
        }
      };

      fetchChannelData();
    }
  }, [videoDetails]);

  if (!videoDetails || !channelDetails) {
    return <h1>Loading...</h1>;
  }

  const {
    snippet: {
      channelTitle,
      localized: { title },
      publishedAt
    },
    statistics: { commentCount, likeCount, viewCount }
  } = videoDetails;

  const {
    snippet: {
      thumbnails: {
        medium: { url: thumbnailIMG }
      }
    },
    statistics: { subscriberCount }
  } = channelDetails;

  return (
    <section className="m-6 md:flex">
      <div className="">
        <div className="player-wrapper">
          <ReactPlayer
            url={`https://www.youtube.com/embed/${videoId}`}
            controls
            playing
            width="100%"
            height="100%"
            muted
            className="react-player"
          />
        </div>
        <div className="my-2">
          <p className="font-medium text-lg">{title}</p>
          <section className="bg-zinc-100 dark:bg-stone-950 pt-2 pb-4 px-1 rounded-2xl">
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-2">
                <img
                  className="w-10 rounded-full"
                  src={thumbnailIMG}
                  alt="channel thumbnail"
                />
                <div className="my-2">
                  <p className="font-bold">{channelTitle}</p>
                  <p className="text-xs">
                    {useFormatViews(subscriberCount)} Subscribers
                  </p>
                </div>
              </div>
              <p className="bg-zinc-200 dark:bg-stone-900 px-5 py-1 rounded-full text-sm capitalize">
                <span className="font-medium">{time}</span> ago
              </p>
            </div>
            <ul className="flex flex-wrap gap-3 text-sm">
              <li className="bg-zinc-200 dark:bg-stone-900 px-5 py-1 rounded-full">
                <span className="font-medium">{useFormatViews(viewCount)}</span>{' '}
                views
              </li>
              <li className="bg-zinc-200 dark:bg-stone-900 px-5 py-1 rounded-full">
                <span className="font-medium">{useFormatViews(likeCount)}</span>{' '}
                likes
              </li>
              <li className="bg-zinc-200 dark:bg-stone-900 px-5 py-1 rounded-full">
                <span className="font-medium">
                  {useFormatViews(commentCount)}
                </span>{' '}
                comments
              </li>
            </ul>
          </section>
        </div>
        <CommentContainer data={COMMENTS_EXAMPLE} />
        {/** Load 1st 5 comments, then click of a button loads next 5, and so on */}
      </div>
      <VideoRecommend />
    </section>
  );
};

export default WatchPage;
