import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '@/store';

interface InitState {
  isFirstInstall: boolean;
}

const initialState: InitState = {
  isFirstInstall: true,
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
  },
});

export const selectIsFirstInstall = (state: RootState) =>
  state.init.isFirstInstall;

export const { setInitState } = initSlice.actions;

export default initSlice.reducer;
