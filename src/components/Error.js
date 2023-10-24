import { useRouteError, Link } from 'react-router-dom';
import NotFoundPage from './NotFoundPage';

const Error = () => {
  const err = useRouteError();
  console.log(err);
  const { error } = useOutlet();

  // Check if the error is a 404 error
  if (error?.status === 404) {
    return <NotFoundPage />;
  }
  return (
    <section className="text-center h-full">
      <h1>
        {err.status} : {err.statusText}
      </h1>
      <p className="text-xl">
        Sorry, either you mistyped the URL or we deleted the page either way,
        lets agree to blame this on you.😉
      </p>
      <p>
        Let take you back{' '}
        <Link className="text-red-600" href="/">
          {' '}
          home{' '}
        </Link>
      </p>
    </section>
  );
};

export default Error;
