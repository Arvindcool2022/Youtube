import checkIcon from '../images/check-circle-fill.svg';

const ChannelCard = ({ info }) => {
  console.log(info);

  const {
    snippet: {
      title,
      thumbnails: {
        medium: { url }
      }
    }
  } = info;
  return (
    <div className="flex flex-col items-center w-full h-full gap-4 hover:scale-95 transition-transform duration-200 ease-in-out">
      <img
        src={url}
        alt="channel Profile picture"
        className="rounded-full mb-4 dark:scale-75 transition-transform duration-200 ease-in"
      />
      <p className="font-medium text-lg flex gap-2">
        {title}
        <img src={checkIcon} />
      </p>
    </div>
  );
};

export default ChannelCard;
