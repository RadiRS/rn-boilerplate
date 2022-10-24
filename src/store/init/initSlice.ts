import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '@/store';

interface InitState {
  isFirstInstall: boolean;
  language: string | null;
}

const initialState: InitState = {
  isFirstInstall: true,
  language: null,
};

const initSlice = createSlice({
  name: 'init',
  initialState,
  reducers: {
    setInitState: (state, action: PayloadAction<InitState>) => {
      const { isFirstInstall } = action.payload;

      state.isFirstInstall = isFirstInstall;
    },
    clearInitState: state => {
      state.isFirstInstall = true;
    },
    setLanguage: (state, action: PayloadAction<string>) => {
      state.language = action.payload;
    },
  },
});

export const selectIsFirstInstall = (state: RootState) =>
  state.init.isFirstInstall;
export const selectLanguage = (state: RootState) => state.init.language;

export const { setInitState, setLanguage } = initSlice.actions;

export default initSlice.reducer;
