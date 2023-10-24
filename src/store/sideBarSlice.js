import { createSlice } from '@reduxjs/toolkit';

const sideBarSlice = createSlice({
  name: 'sideBar', // Name should be a string, e.g., 'sideBar'
  initialState: { visibility: true },
  reducers: {
    toggleVisibility: state => {
      state.visibility = !state.visibility;
    },
    invisible: state => {
      state.visibility = false;
    },
    visible: state => {
      state.visibility = true;
    }
  }
});

export const { toggleVisibility, invisible, visible } = sideBarSlice.actions; // Export the action creator

export default sideBarSlice.reducer; // Export the reducer
