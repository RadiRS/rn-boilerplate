import createSensitiveStorage from 'redux-persist-sensitive-storage';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { persistReducer } from 'redux-persist';

import { api } from '@/services/api';
import { combineReducers } from '@reduxjs/toolkit';
import { authReducer } from './auth';
import { themeReducer } from './theme';

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
  whitelist: ['theme'],
};

const rootReducers = combineReducers({
  theme: themeReducer,
  auth: persistReducer(authPersistConfig, authReducer),
  [api.reducerPath]: api.reducer,
});

export default persistReducer(mainPersistConfig, rootReducers);
