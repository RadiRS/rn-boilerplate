import { api } from '@/services/api';
import { postLogin, getLogout } from './auth.service';

const authApi = api.injectEndpoints({
  endpoints: builder => ({
    postLogin: postLogin(builder),
    getLogout: getLogout(builder),
  }),

  overrideExisting: true,
});

export const { usePostLoginMutation, useLazyGetLogoutQuery } = authApi;

export * from './type';
