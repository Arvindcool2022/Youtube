import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';

const Body = () => (
  <div className="flex">
    <Sidebar />
    <Outlet />
  </div>
);

export default Body;
