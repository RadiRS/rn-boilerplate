import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '@/store';
import { AuthState } from './types';

const initialState: AuthState = {
  user: null,
  accessToken: null,
  status: 'idle',
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setCredentials: (state, action: PayloadAction<AuthState>) => {
      const { user, accessToken } = action.payload;
      state.user = user;
      state.accessToken = accessToken;
      state.status = 'signIn';
    },
    clearCredentials: state => {
      state.user = null;
      state.accessToken = null;
      state.status = 'signOut';
    },
  },
});

export const selectCurrentUser = (state: RootState) => state.auth.user;
export const selectCurrentToken = (state: RootState) => state.auth.accessToken;
export const selectCurrentStatus = (state: RootState) => state.auth.status;

export const { setCredentials, clearCredentials } = authSlice.actions;

export default authSlice.reducer;
