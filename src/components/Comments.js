import userIcon from '../images/user .png';

const Comments = ({ info }) => {
  const { name, text, replies } = info;
  return (
    <div className="flex items-start gap-2 p-2  border-l border-l-gray-300 mb-1">
      <img className="w-7" src={userIcon} alt="user pic" />
      <div>
        <h3 className="font-semibold text-lg">{name}</h3>
        <p className="mb-2 text-stone-700">{text}</p>
        {replies &&
          replies.map(item => <Comments info={item} key={item.text} />)}
      </div>
    </div>
  );
};

export default Comments;
