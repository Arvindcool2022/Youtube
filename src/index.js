import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './index.css';
import Body from './components/Body';
import Header from './components/Header';
import store from './store/store';
import WatchPage from './components/WatchPage';
import Error from './components/Error';
import VideoContainer from './components/VideoContainer';

function App() {
  return (
    <Provider store={store}>
      <Header />
      <RouterProvider router={appRouter} />
    </Provider>
  );
}

const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <Body />,
    children: [
      { path: '/', element: <VideoContainer /> },
      { path: 'watch', element: <WatchPage /> }
    ],
    errorElement: <Error />
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

/* 
header
main
 sidebar
   menu/nav items
 video container
   genre btns
   video grid
*/
