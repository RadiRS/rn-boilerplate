import createSensitiveStorage from 'redux-persist-sensitive-storage';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { persistReducer } from 'redux-persist';
import { combineReducers } from '@reduxjs/toolkit';

import { api } from '@/services/api';
import { todoApi } from '@/services/todo';

import { authReducer } from './auth';
import { themeReducer } from './theme';
import { initReducer } from './init';

const sensitiveStorage = createSensitiveStorage({
  keychainService: 'authKeychain',
  sharedPreferencesName: 'authSharedPrefs',
});

const authPersistConfig = {
  key: 'auth',
  storage: sensitiveStorage,
};

const mainPersistConfig = {
  key: 'main',
  storage: AsyncStorage,
  whitelist: ['theme', 'init'],
};

const rootReducers = combineReducers({
  theme: themeReducer,
  init: initReducer,
  auth: persistReducer(authPersistConfig, authReducer),
  [api.reducerPath]: api.reducer,
  [todoApi.reducerPath]: todoApi.reducer,
});

export default persistReducer(mainPersistConfig, rootReducers);
