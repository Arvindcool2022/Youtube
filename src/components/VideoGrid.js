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

const VideoGrid = ({ info }) => {
  const {
    snippet: {
      channelTitle = 'n/a',
      title = 'n/a',
      publishedAt,
      thumbnails: {
        medium: { url: thumbnailIMG },
        default: { url: channelIcon }
      }
    },
    statistics: { viewCount = 'n/a' }
  } = info;

  const publishedDate = new Date(publishedAt); //# Parsing the 'publishedAt' into a Date object

  const [timeDifference, setTimeDifference] = useState(0);

  useEffect(() => {
    const currentDate = new Date();
    const difference = currentDate - publishedDate;
    setTimeDifference(difference);
  }, [info]);

  const time = timeCalc(timeDifference) || 'n/a';
  const displayViews = calcViews(viewCount);

  return (
    <div className="text-neutral-800 rounded-xl cursor-pointer">
      <div className="max-w-[480px] mb-4">
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
          src={channelIcon}
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

export default VideoGrid;
