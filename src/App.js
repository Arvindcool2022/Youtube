import Body from './components/Body';
import Header from './components/Header';
import { Provider } from 'react-redux';
import store from './store/store';

function App() {
  return (
    <Provider store={store}>
      <Header />
      <Body />
    </Provider>
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
