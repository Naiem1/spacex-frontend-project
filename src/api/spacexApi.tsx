import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const spacexApi = createApi({
  reducerPath: 'spacexApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api.spacexdata.com/v3/',
  }),
  endpoints: (builder) => ({
    launches: builder.query({
      query: () => '/launches',
    }),
    launch: builder.query({
      query: (id) => `/launches/${id}`,
    }),
  }),
});

export const { useLaunchesQuery, useLaunchQuery } = spacexApi;
