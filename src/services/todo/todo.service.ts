import { EndpointBuilder } from '@reduxjs/toolkit/dist/query/endpointDefinitions';
import { Todo, ParamsTodo } from './types';

const initParams: ParamsTodo = {
  _limit: 20,
  _page: 1,
};

export const getTodos = (builder: EndpointBuilder<any, any, any>) =>
  builder.query<Todo[], ParamsTodo | void>({
    query: (params = initParams) =>
      `/todos?_limit=${params?._limit}&_page=${params?._page}&q=${
        params?.q || ''
      }`,
  });
