import React from 'react';
import useTimeDifference from '../hooks/useTimeDifference';

const RecommendVideoCard = ({ data }) => {
  if (!data) return null; // or an empty component
  const {
    snippet: {
      title,
      channelTitle,
      publishedAt,
      thumbnails: {
        medium: { url: thumbnailIMG }
      }
    }
  } = data;

  return (
    <div className="text-sm flex cursor-pointer gap-2 mb-4">
      <img className="w-1/2" src={thumbnailIMG} alt="video thumbnail" />
      <div>
        <p>{title}</p>
        <p className="text-stone-700">{channelTitle}</p>
        <p className="text-zinc-300">{useTimeDifference(publishedAt)}</p>
      </div>
    </div>
  );
};

export default RecommendVideoCard;
