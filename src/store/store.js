import { configureStore } from '@reduxjs/toolkit';
import sidebarReducer from './sideBarSlice';

const store = configureStore({
  reducer: {
    sideBar: sidebarReducer
  }
});

export default store;
