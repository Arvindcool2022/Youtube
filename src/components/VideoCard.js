import { useEffect, useState } from 'react';

const calcViews = num => {
  const moreThanSix = (num / 1000000).toFixed(1);
  const fiveDigits = Math.floor(num / 10000);

  const views =
    moreThanSix >= 1
      ? `${moreThanSix}m`
      : fiveDigits >= 1
      ? `${fiveDigits}k`
      : num;
  return views;
};

const timeCalc = timeDifference => {
  const millisecondsInSecond = 1000;
  const millisecondsInMinute = millisecondsInSecond * 60;
  const millisecondsInHour = millisecondsInMinute * 60;
  const millisecondsInDay = millisecondsInHour * 24;
  const millisecondsInMonth = millisecondsInDay * 30;
  const millisecondsInYear = millisecondsInMonth * 12;

  const years = Math.floor(timeDifference / millisecondsInYear);
  const months = Math.floor(timeDifference / millisecondsInMonth);
  const days = Math.floor(timeDifference / millisecondsInDay);
  const hours = Math.floor(timeDifference / millisecondsInHour);
  const minutes = Math.floor(timeDifference / millisecondsInMinute);

  const time =
    years !== 0
      ? `${years} years`
      : months !== 0
      ? `${months} months`
      : days !== 0
      ? `${days} days`
      : hours !== 0
      ? `${hours} hours`
      : minutes !== 0
      ? `${minutes} minutes`
      : 'just now';

  return time;
};

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

  const publishedDate = new Date(publishedAt); //# Parsing the 'publishedAt' into a Date object

  const [timeDifference, setTimeDifference] = useState(0);

  useEffect(() => {
    const currentDate = new Date();
    const difference = currentDate - publishedDate;
    setTimeDifference(difference);
  }, [publishedAt]);

  const time = timeCalc(timeDifference) || 'n/a';
  const displayViews = calcViews(viewCount);

  return (
    <div className="text-neutral-800 rounded-xl w-full cursor-pointer">
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
          <p className="font-semibold leading-snug"> {title}</p>
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
  <div className="bg-slate-200 rounded-lg w-full">
    <span className="text-xs px-2 py-1 m-1 rounded-lg bg-zinc-900 text-white absolute z-0">
      Promoted
    </span>
    <VideoCard info={info} />
  </div>
);

export default VideoCard;
