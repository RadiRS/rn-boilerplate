export type EnvType = 'dev' | 'stag' | 'prod';

export type EnvConfigType = {
  env: EnvType;
  apiUrl?: string;
  authUrl?: string;
  webUrl?: string;
  serverlessUrl?: string;
  clientId?: string;
};
