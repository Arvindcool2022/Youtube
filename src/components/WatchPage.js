import { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { invisibile } from '../store/sideBarSlice';
import { COMMENTS_EXAMPLE } from '../utils/contants';
import CommentContainer from './CommentContainer';

const WatchPage = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(invisibile());
  }, []);
  const [params] = useSearchParams();
  return (
    <div>
      <iframe
        className="m-4"
        width="963"
        height="554"
        src={`https://www.youtube.com/embed/${params.get('v')}`}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
      <CommentContainer data={COMMENTS_EXAMPLE} />
    </div>
  );
};

export default WatchPage;
