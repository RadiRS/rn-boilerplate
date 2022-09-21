import { Config } from '@/config';
import {
  BaseQueryFn,
  FetchArgs,
  createApi,
  fetchBaseQuery,
  FetchBaseQueryError,
} from '@reduxjs/toolkit/query/react';

import { RootState } from '@/store/index';
import { logout, setCredentials, AuthState } from '@/store/auth/authSlice';

const baseQuery = fetchBaseQuery({
  baseUrl: Config.API_URL,
  credentials: 'include',
  prepareHeaders: (headers, { getState }) => {
    const accessToken = (getState() as RootState).auth.accessToken;
    if (accessToken) {
      headers.set('authorization', `Bearer ${accessToken}`);
    }
    return headers;
  },
});

const baseQueryWithInterceptor: BaseQueryFn<
  string | FetchArgs,
  unknown,
  FetchBaseQueryError
> = async (args, api, extraOptions) => {
  let result = await baseQuery(args, api, extraOptions);

  // Forbidden
  if (result.error && result.meta?.response?.status === 403) {
    // send refresh token to get new access token
    const refreshResponse = await baseQuery('/refresh', api, extraOptions);
    const data = refreshResponse.data as { accessToken: string } | null;

    if (data) {
      // store the new token and user data
      const user = (api.getState() as RootState).auth.user;
      const authState = {
        user,
        accessToken: data.accessToken,
      } as AuthState;

      api.dispatch(setCredentials(authState));

      // retry the original query with new access token
      result = await baseQuery(args, api, extraOptions);
    } else {
      await baseQuery('/logout', api, extraOptions);
      api.dispatch(logout());
    }
  }

  // Unauthorized
  if (result.error && result.error.status === 401) {
  }

  return result;
};

export const api = createApi({
  baseQuery: baseQueryWithInterceptor,
  endpoints: () => ({}),
});
