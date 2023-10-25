import useFormatViews from '../hooks/useFormatViews';
import useTimeDifference from '../hooks/useTimeDifference';

const VideoCard = ({ info }) => {
  if (!info?.snippet) {
    console.log('failed', info);
    return null;
  }
  // console.log('success', info);
  const {
    snippet: {
      channelTitle = 'n/a',
      title = 'n/a',
      publishedAt,
      thumbnails: {
        high: { url: thumbnailIMG }
      }
    }
  } = info;

  const viewCount = Math.floor(Math.random() * (3500000 - 1000000) + 1000000);

  const time = useTimeDifference(publishedAt);

  const displayViews = useFormatViews(viewCount);

  return (
    <div className="text-neutral-800 dark:text-white rounded-xl w-full cursor-pointer hover:scale-95 transition-transform duration-200 ease-in-out">
      <div className="min-w-full mb-4">
        {' '}
        <img
          className=" object-cover w-full rounded-xl hover:rounded-none"
          src={thumbnailIMG}
          alt="thumbnail"
        />
      </div>
      <div className="flex p-2 gap-4">
        <img
          className="h-8 rounded-full aspect-square object-cover"
          src={thumbnailIMG}
          alt="user-icon"
        />
        <div>
          <p className="font-semibold dark:font-medium two-line-ellipsis leading-snug">
            {' '}
            {title}
          </p>
          <p className=" text-stone-500 mt-1">{channelTitle}</p>
          <div className="flex gap-3 text-stone-500 text-sm">
            <p> {displayViews} views</p>
            <p>{time} ago</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export const ADVideoCard = ({ info }) => (
  <div className="bg-slate-200 dark:bg-black dark:border dark:border-stone-900  rounded-lg w-full">
    <span className="text-xs px-2 py-1 m-1 rounded-lg bg-zinc-900 text-white absolute dark:bg-zinc-500 dark:text-black z-0">
      Promoted
    </span>
    <VideoCard info={info} />
  </div>
);

export default VideoCard;
