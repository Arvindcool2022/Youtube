import Comments from './Comments';

const CommentContainer = ({ data }) => {
  //   console.log(data);
  return (
    <section className="m-4">
      <h1 className="my-4 text-xl font-bold">Comments:</h1>
      {data.map(item => (
        <Comments info={item} key={item.text} />
      ))}
    </section>
  );
};

export default CommentContainer;
