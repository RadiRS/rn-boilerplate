import { api } from '@/services/api';
import { combineReducers } from '@reduxjs/toolkit';
import { authReducer } from './auth';
import { themeReducer } from './theme';

export const reducers = combineReducers({
  theme: themeReducer,
  auth: authReducer,
  [api.reducerPath]: api.reducer,
});
