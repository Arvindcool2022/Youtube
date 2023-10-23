import { createSlice } from '@reduxjs/toolkit';

const colorTheme = createSlice({
  name: 'colorTheme',
  initialState: { mode: false },
  reducers: {
    toggleMode: state => {
      state.mode = !state.mode;
      localStorage.setItem('theme', state.mode ? 'dark' : 'light');
    },
    lightTheme: state => {
      state.mode = false;
      localStorage.setItem('theme', 'light');
    },
    darkTheme: state => {
      state.mode = true;
      localStorage.setItem('theme', 'dark');
    }
  }
});

export default colorTheme.reducer;

export const { toggleMode, lightTheme, darkTheme } = colorTheme.actions;
