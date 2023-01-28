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
  }),
});

export const { useLaunchesQuery } = spacexApi;
