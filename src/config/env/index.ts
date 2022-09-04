import { NativeModules, Platform } from 'react-native';
// import {DEV_API_URL, STAG_API_URL, PROD_API_URL }from '@env'
import { EnvConfigType, EnvType } from './types';

const env: EnvType =
  Platform.OS === 'ios' ? 'dev' : NativeModules.RNConfig.env || 'dev';

const devEnvConfig: EnvConfigType = {
  env: env,
  apiUrl: 'https://jsonplaceholder.typicode.com/',
};

const stagEnvConfig: EnvConfigType = {
  env: env,
  apiUrl: 'https://jsonplaceholder.typicode.com/',
};

const prodEnvConfig: EnvConfigType = {
  env: env,
  apiUrl: 'https://jsonplaceholder.typicode.com/',
};

const isDevelopment = __DEV__ || env === 'dev';

// const isStaging = env === 'stag';
const isStaging = false;

const envConfig = isDevelopment
  ? devEnvConfig
  : isStaging
  ? stagEnvConfig
  : prodEnvConfig;

export default envConfig;
