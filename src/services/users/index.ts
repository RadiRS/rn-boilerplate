import { api } from '@/services/api';
import { getUsers } from './user.service';

const userApi = api.injectEndpoints({
  endpoints: builder => ({
    getUsers: getUsers(builder),
  }),

  overrideExisting: true,
});

export const { useGetUsersQuery } = userApi;

export * from './type';
