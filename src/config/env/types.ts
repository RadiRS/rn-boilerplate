export type EnvType = 'dev' | 'stag' | 'prod';

export type EnvConfigType = {
  ENV: EnvType;
  API_URL?: string;
  AUTH_URL?: string;
  WEB_URL?: string;
  SERVERLESS_URL?: string;
  CLIENT_ID?: string;
};
