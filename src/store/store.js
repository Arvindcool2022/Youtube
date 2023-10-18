import { configureStore } from '@reduxjs/toolkit';
import sidebarReducer from './sideBarSlice';
import searchReducer from './searchSlice';

const store = configureStore({
  reducer: {
    sideBar: sidebarReducer,
    search: searchReducer
  }
});

export default store;
