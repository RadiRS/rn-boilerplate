import { createSlice } from '@reduxjs/toolkit';
import { ThemePayload, ThemeState } from './types';

const initialState: ThemeState = {
  theme: 'default',
  darkMode: null,
};

const themeSlice = createSlice({
  name: 'theme',
  initialState: initialState,
  reducers: {
    changeTheme: (state, { payload: { theme, darkMode } }: ThemePayload) => {
      if (typeof theme !== 'undefined') {
        state.theme = theme;
      }
      if (typeof darkMode !== 'undefined') {
        state.darkMode = darkMode;
      }
    },
    setDefaultTheme: (
      state,
      { payload: { theme, darkMode } }: ThemePayload,
    ) => {
      if (!state.theme) {
        if (typeof theme !== 'undefined') {
          state.theme = theme;
        }
        if (typeof darkMode !== 'undefined') {
          state.darkMode = darkMode;
        }
      }
    },
  },
});

export const { changeTheme, setDefaultTheme } = themeSlice.actions;

export default themeSlice.reducer;
