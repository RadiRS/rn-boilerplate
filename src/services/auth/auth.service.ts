import { EndpointBuilder } from '@reduxjs/toolkit/dist/query/endpointDefinitions';
import { AccessToken, Credential } from './type';

export const postLogin = (builder: EndpointBuilder<any, any, any>) =>
  builder.mutation<AccessToken, Credential>({
    query: (credentials: Credential) => ({
      url: '/auth',
      method: 'POST',
      body: credentials,
      credentials: 'include',
    }),
  });

export const postRegister = (builder: EndpointBuilder<any, any, any>) =>
  builder.mutation<AccessToken, Credential>({
    query: (credentials: Credential) => ({
      url: '/register',
      method: 'POST',
      body: credentials,
      credentials: 'include',
    }),
  });

export const getLogout = (builder: EndpointBuilder<any, any, any>) =>
  builder.query<any, void>({
    query: () => ({
      url: '/logout',
      method: 'GET',
      credentials: 'include',
    }),
  });
