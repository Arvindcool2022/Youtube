import React from 'react';
import useTimeDifference from '../hooks/useTimeDifference';

const RecommendVideoCard = ({ data }) => {
  if (!data) return null; // or an empty component
  const {
    snippet: { title, channelTitle, publishedAt }
  } = data;

  return (
    <div className="text-sm flex items-start cursor-pointer gap-2 mb-4">
      <img
        className="w-1/2"
        src={data?.snippet?.thumbnails?.medium?.url}
        alt="video thumbnail"
      />
      <div>
        <p className=" two-line-ellipsis max-h-10">{title}</p>
        <p className="text-stone-700">{channelTitle}</p>
        <p className="text-zinc-300">{useTimeDifference(publishedAt)}</p>
      </div>
    </div>
  );
};

export default RecommendVideoCard;
