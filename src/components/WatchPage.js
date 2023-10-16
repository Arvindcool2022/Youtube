import { useDispatch } from 'react-redux';
import { invisibile } from '../store/sideBarSlice';
import { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';

const WatchPage = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(invisibile());
  }, []);
  const [params, setParams] = useSearchParams();
  console.log(params.get('v'));

  return (
    <div>
      <iframe
        className="m-4"
        width="1044"
        height="550"
        src={`https://www.youtube.com/embed/${params.get('v')}`}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default WatchPage;
