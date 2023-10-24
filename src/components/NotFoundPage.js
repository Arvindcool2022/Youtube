import React from 'react';
import { Link } from 'react-router-dom';

const NotFoundPage = () => {
  return (
    <div className="text-center w-full h-full my-12 text-xl">
      <h2>Not Found</h2>
      <p>The page you're looking for does not exist.</p>
      <p>
        Let take you back{' '}
        <Link className="text-red-600" href="/">
          {' '}
          home{' '}
        </Link>
      </p>
    </div>
  );
};

export default NotFoundPage;
