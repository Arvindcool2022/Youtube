import { createSlice } from '@reduxjs/toolkit';

const feedDataSlice = createSlice({
  name: 'Feed',
  initialState: { data: [] },
  reducers: {
    updateFeed: (state, action) => {
      state.data.length = 0;
      state.data.push(action.payload);
    }
  }
});

export default feedDataSlice.reducer;

export const { updateFeed } = feedDataSlice.actions;
