import { createSlice } from '@reduxjs/toolkit';

const feedDataSlice = createSlice({
  name: 'Feed',
  initialState: { initialFeed: [], data: [] },
  reducers: {
    updateFeed: (state, action) => {
      if (action.payload) {
        state.data.length = 0;
        state.data.push(action.payload);
      } else console.log('not updated error in payload: ', action.payload);
    },
    clearSearchFeed: state => {
      state.data.length = 0;
    },
    defaultFeed: (state, action) => {
      state.initialFeed.length = 0;
      state.initialFeed.push(action.payload);
      // console.log('cleared');
    }
  }
});

export default feedDataSlice.reducer;

export const { updateFeed, defaultFeed, clearSearchFeed } =
  feedDataSlice.actions;
