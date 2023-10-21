import { createBrowserRouter, Outlet } from 'react-router-dom';
import { Provider } from 'react-redux';
import Store from './store/store';
import './index.css';
import { Body, Header, WatchPage, VideoContainer, Error } from './components';
import { useEffect } from 'react';

const App = () => {
  return (
    <Provider store={Store}>
      <Header />
      <Outlet />
    </Provider>
  );
};

const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Body />,
        children: [
          { path: '/', element: <VideoContainer /> },
          { path: 'watch', element: <WatchPage /> }
        ],
        errorElement: <Error />
      }
    ]
  }
]);

export default appRouter;
