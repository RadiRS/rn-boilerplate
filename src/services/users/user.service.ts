import { EndpointBuilder } from '@reduxjs/toolkit/dist/query/endpointDefinitions';
import { User } from './type';

export const getUsers = (builder: EndpointBuilder<any, any, any>) =>
  builder.query<User[], void>({
    query: () => '/users',
  });
