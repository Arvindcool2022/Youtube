import userIcon from '../images/user .png';

const Comments = ({ info }) => {
  const { name, text, replies } = info;
  if (replies.length) console.log(replies);
  return (
    <div className="flex items-start gap-2 p-2">
      <img className="w-7" src={userIcon} alt="user pic" />
      <div>
        <h3 className="font-semibold text-lg">{name}</h3>
        <p>{text}</p>
        {replies &&
          replies.map(item => <Comments info={item} key={item.text} />)}
      </div>
    </div>
  );
};

// const Replies = () => {};

export default Comments;
