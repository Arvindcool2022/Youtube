import { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { invisibile, visibile } from '../store/sideBarSlice';
import { COMMENTS_EXAMPLE } from '../utils/contants';
import CommentContainer from './CommentContainer';
import ReactPlayer from 'react-player/lazy';

const WatchPage = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(invisibile());

    return () => {
      dispatch(visibile());
    };
  }, []);
  const [params] = useSearchParams();
  return (
    <div className="px-6">
      <div className="player-wrapper">
        <ReactPlayer
          url={`https://www.youtube.com/embed/${params.get('v')}`}
          controls
          playing
          width="100%"
          height="100%"
          muted
          className="react-player"
        />
      </div>
      <CommentContainer data={COMMENTS_EXAMPLE} />
    </div>
  );
};

export default WatchPage;

/* 
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
*/
