import { createSlice } from '@reduxjs/toolkit';

const sideBarSlice = createSlice({
  name: 'sideBar', // Name should be a string, e.g., 'sideBar'
  initialState: { visibility: true },
  reducers: {
    toggleVisibility: state => {
      state.visibility = !state.visibility;
    }
  }
});

export const { toggleVisibility } = sideBarSlice.actions; // Export the action creator

export default sideBarSlice.reducer; // Export the reducer
