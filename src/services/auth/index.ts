import { api } from '@/services/api';
import { postLogin, postRegister, getLogout } from './auth.service';

const authApi = api.injectEndpoints({
  endpoints: builder => ({
    postLogin: postLogin(builder),
    postRegister: postRegister(builder),
    getLogout: getLogout(builder),
  }),

  overrideExisting: true,
});

export const {
  usePostLoginMutation,
  usePostRegisterMutation,
  useLazyGetLogoutQuery,
} = authApi;

export * from './type';
