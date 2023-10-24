import { useState, useEffect } from 'react';

const useTimeDifference = publishedAt => {
  const millisecondsInSecond = 1000;
  const millisecondsInMinute = millisecondsInSecond * 60;
  const millisecondsInHour = millisecondsInMinute * 60;
  const millisecondsInDay = millisecondsInHour * 24;
  const millisecondsInMonth = millisecondsInDay * 30;
  const millisecondsInYear = millisecondsInMonth * 12;

  const calculateTimeDifference = publishedDate => {
    const currentDate = new Date();
    const difference = currentDate - publishedDate;
    return difference;
  };

  const formatTime = timeDifference => {
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

  const [timeDifference, setTimeDifference] = useState(0);

  useEffect(() => {
    const publishedDate = new Date(publishedAt); //# Parsing the 'publishedAt' into a Date object
    const difference = calculateTimeDifference(publishedDate);
    setTimeDifference(difference);
  }, [publishedAt]);

  const formattedTime = formatTime(timeDifference);

  return formattedTime;
};

export default useTimeDifference;
