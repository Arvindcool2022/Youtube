import { configureStore } from '@reduxjs/toolkit';
import sidebarReducer from './sideBarSlice';
import searchReducer from './searchSlice';
import feedDataReducer from './feedDataSlice';
import colorThemeReducer from './colorTheme';

const store = configureStore({
  reducer: {
    sideBar: sidebarReducer,
    search: searchReducer,
    feedData: feedDataReducer,
    colorTheme: colorThemeReducer
  }
});

export default store;
