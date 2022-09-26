import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react';
import { getTodos } from './todo.service';

/**
 * we are using different config because
 * in this case we have multiple api url to work with it
 * usually we only have one api url
 */
const baseUrl = 'https://jsonplaceholder.typicode.com';

export const todoApi = createApi({
  reducerPath: 'todoApi',
  baseQuery: fetchBaseQuery({
    baseUrl,
  }),
  endpoints: builder => ({
    getTodos: getTodos(builder),
  }),
});

export const { useGetTodosQuery, useLazyGetTodosQuery } = todoApi;

export * from './types';
