import { api } from '@/services/api';

export const authApi = api.injectEndpoints({
  endpoints: builder => ({
    login: builder.mutation({
      query: (credentials: { user: string; pwd: string }) => ({
        url: '/auth',
        method: 'POST',
        body: { ...credentials },
        credentials: 'include',
      }),
    }),
    logoutRequest: builder.query<any, void>({
      query: () => ({
        url: '/logout',
        method: 'GET',
        credentials: 'include',
      }),
    }),
  }),
  overrideExisting: true,
});

export const { useLoginMutation, useLazyLogoutRequestQuery } = authApi;
