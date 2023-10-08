import { useState } from 'react';
import Body from './components/Body';
import Header from './components/Header';

function App() {
  const [sidebarVisibility, setSidebarVisibility] = useState(true);
  const toggle = () => {
    setSidebarVisibility(!sidebarVisibility);
  };

  return (
    <>
      <Header toggler={toggle} />
      <Body toggler={sidebarVisibility} />
    </>
  );
}

export default App;

/* 
header
main
 sidebar
   menu/nav items
 video container
   genre btns
   video grid
*/
