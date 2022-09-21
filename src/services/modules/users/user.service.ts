import { api } from '@/services/api';

interface User {
  username: string;
  _id: string;
}

export const authApi = api.injectEndpoints({
  endpoints: builder => ({
    getUsers: builder.query<User[], void>({
      query: () => '/users',
      // keepUnusedDataFor: 5, // just for testing set time cache rtk to 5 second
      // providesTags: ['Users'],
    }),
  }),
  overrideExisting: true,
});

export const { useGetUsersQuery } = authApi;
