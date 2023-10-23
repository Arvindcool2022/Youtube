import { createBrowserRouter, Outlet } from 'react-router-dom';
import { Provider } from 'react-redux';
import Store from './store/store';
import './index.css';
import { Body, Header, WatchPage, VideoContainer, Error } from './components';

const App = () => {
  return (
    <div className="dark">
      <div className="dark:bg-black dark:text-white">
        <Provider store={Store}>
          <Header />
          <Outlet />
        </Provider>
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
