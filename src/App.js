import { createBrowserRouter, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';
import './index.css';
import { Body, Header, WatchPage, VideoContainer, Error } from './components';
import NotFoundPage from './components/NotFoundPage';
import ChannelPage from './components/ChannelPage';

const App = () => {
  const darkMode = useSelector(store => store.colorTheme.mode);

  return (
    <div className={darkMode ? 'dark' : ''}>
      <div className="dark:bg-black dark:text-white">
        <Header />
        <Outlet />
      </div>
    </div>
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
          { path: 'watch', element: <WatchPage /> },
          { path: 'search', element: <VideoContainer /> },
          { path: 'channel/:name/:id', element: <ChannelPage /> },
          { path: '*', element: <NotFoundPage /> }
        ],
        errorElement: <Error />
      }
    ]
  }
]);

export default appRouter;
