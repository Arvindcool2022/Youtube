import { configureStore } from '@reduxjs/toolkit';
import sidebarReducer from './sideBarSlice';
import searchReducer from './searchSlice';
import feedDataSlice from './feedDataSlice';

const store = configureStore({
  reducer: {
    sideBar: sidebarReducer,
    search: searchReducer,
    feedData: feedDataSlice
  }
});

export default store;
