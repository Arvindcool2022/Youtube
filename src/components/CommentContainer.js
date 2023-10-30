import { useEffect, useState } from 'react';
import Comments from './Comments';
import { fetchComments } from '../utils/fetchdata';

const CommentContainer = ({ videoId }) => {
  const [comments, setComments] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetchComments(videoId);
        console.log(response?.items);
      } catch (err) {
        setError(err);
      } finally {
        // setLoading(false);
      }
    }

    fetchData();
  }, [videoId]);

  if (!comments) return null;
  console.log(passed);
  return (
    <section className="m-4">
      <h1 className="my-4 text-xl font-bold">Comments:</h1>
      {comments.map(item => (
        <Comments info={item} key={item.text} />
      ))}
    </section>
  );
};

export default CommentContainer;
