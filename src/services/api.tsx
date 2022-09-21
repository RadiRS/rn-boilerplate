import { createApi } from '@reduxjs/toolkit/query/react';

import { baseQueryWithInterceptor } from './interceptor';

export const api = createApi({
  baseQuery: baseQueryWithInterceptor,
  endpoints: () => ({}),
});
