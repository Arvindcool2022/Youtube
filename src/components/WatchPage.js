import { useEffect, useState } from 'react';
import { useOutletContext, useParams, useSearchParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { invisibile, visibile } from '../store/sideBarSlice';
import { COMMENTS_EXAMPLE } from '../utils/contants';
import CommentContainer from './CommentContainer';
import ReactPlayer from 'react-player/lazy';
import VideoRecommend from './VideoRecommend';
import { fetchChannelDetails, fetchVideoDetails } from '../utils/fetchdata';
import useFormatViews from '../hooks/useFormatViews';
import useTimeDifference from '../hooks/useTimeDifference';

const WatchPage = () => {
  const [videoDetails, setVideoDetails] = useState(null);
  const [channelDetails, setChannelDetails] = useState(null);
  const dispatch = useDispatch();
  const toggle = useOutletContext();
  const [params] = useSearchParams();
  const videoId = params.get('v');
  useEffect(() => {
    dispatch(invisibile());
    toggle(true);
    fetchdetails();
    return () => {
      dispatch(visibile());
      toggle(false);
    };
  }, []);
  const time = useTimeDifference(videoDetails?.snippet?.publishedAt);

  useEffect(() => {
    if (videoDetails) fetchChannelData();
  }, [videoDetails]);

  const fetchdetails = async () => {
    const response = await fetchVideoDetails(videoId);
    console.log(response.items[0]);
    setVideoDetails(response.items[0]);
  };

  if (!videoDetails) return <h1>loading...</h1>;

  const {
    snippet: {
      channelId,
      channelTitle,
      publishedAt,
      localized: { title, description }
    },
    statistics: { commentCount, likeCount, viewCount }
  } = videoDetails;

  const fetchChannelData = async () => {
    const response = await fetchChannelDetails(channelId);
    console.log(response.items[0]);
    setChannelDetails(response.items[0]);
  };

  if (!channelDetails) return <h1>loading...</h1>;
  const {
    snippet: {
      thumbnails: {
        medium: { url: thumbnailIMG }
      }
    },
    statistics: { subscriberCount }
  } = channelDetails;

  return (
    <section className="m-6 sm:flex">
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
          <section className=" bg-zinc-100 dark:bg-stone-950 pt-2 pb-4 px-1 rounded-2xl">
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
              <p className="bg-zinc-200  dark:bg-stone-900 px-5 py-1 rounded-full text-sm capitalize">
                <span className="font-medium">{time} </span> ago
              </p>
            </div>
            <ul className="flex gap-3 text-sm ">
              <li className="bg-zinc-200  dark:bg-stone-900 px-5 py-1 rounded-full">
                <span className="font-medium">
                  {useFormatViews(viewCount)}{' '}
                </span>
                views
              </li>
              <li className="bg-zinc-200  dark:bg-stone-900 px-5 py-1 rounded-full">
                <span className="font-medium">
                  {useFormatViews(likeCount)}{' '}
                </span>
                likes
              </li>
              <li className="bg-zinc-200  dark:bg-stone-900 px-5 py-1 rounded-full">
                <span className="font-medium">
                  {useFormatViews(commentCount)}{' '}
                </span>
                comments
              </li>
            </ul>
          </section>
        </div>
        <CommentContainer data={COMMENTS_EXAMPLE} />{' '}
        {/** loads 1st 5 then click of a button loads next 5 and so on */}
      </div>
      <VideoRecommend />
    </section>
  );
};

export default WatchPage;
