import { createSlice } from '@reduxjs/toolkit';

const colorTheme = createSlice({
  name: 'colorTheme',
  initialState: { mode: false },
  reducers: {
    toggleMode: state => {
      state.mode = !state.mode;
    },
    lightMode: state => {
      state.mode = false;
    },
    darkMode: state => {
      state.mode = true;
    }
  }
});

export default colorTheme.reducer;

export const { toggleMode, lightMode, darkMode } = colorTheme.actions;
