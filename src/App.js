import { Provider } from 'react-redux';
import { createBrowserRouter, Outlet } from 'react-router-dom';

import './index.css';

import Body from './components/Body';
import Header from './components/Header';
import Store from './store/store';
import WatchPage from './components/WatchPage';
import Error from './components/Error';
import VideoContainer from './components/VideoContainer';

const App = () => (
  <Provider store={Store}>
    <Header />
    <Outlet />
  </Provider>
);

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
