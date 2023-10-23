import { createBrowserRouter, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';
import './index.css';
import { Body, Header, WatchPage, VideoContainer, Error } from './components';

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
          { path: 'search', element: <VideoContainer /> }
        ],
        errorElement: <Error />
      }
    ]
  }
]);

export default appRouter;
