import { EndpointBuilder } from '@reduxjs/toolkit/dist/query/endpointDefinitions';
import { Todo, ParamsTodo } from './types';

const initParams: ParamsTodo = {
  _limit: 20,
  _page: 1,
};

export const getTodos = (builder: EndpointBuilder<any, any, any>) =>
  builder.query<Todo[], ParamsTodo | void>({
    query: (params = initParams) =>
      `/todos?_limit=${params?._limit || ''}&_page=${params?._page || ''}&q=${
        params?.q || ''
      }`,
  });

// Future improvement
// export const getTodos = (builder: EndpointBuilder<any, any, any>) =>
//   builder.query<Todo[], ParamsTodo | void>({
//     query: (params = initParams) => {
//       let queryString = '?';

//       queryString += params?._limit ? `_limit=${params?._limit}` : '';
//       queryString += params?._page ? `&_page=${params?._page}` : '';

//       queryString += params?.q ? `&q=${params?.q}` : '';

//       const p = Object.keys(params as ParamsTodo);
//       console.log('p', p);
//       const s = p
//         .map((key, i) =>
//           params?.[key]
//             ? `${key}=${params[key]}${i < p.length - 1 ? '&' : ''}`
//             : '',
//         )
//         .toString();
//       console.log('s', s);

//       return `/todos${queryString}`;
//     },
//   });
