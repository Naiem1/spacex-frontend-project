import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { spacexApi } from './../api/spacexApi';

const store = configureStore({
  reducer: {
    [spacexApi.reducerPath]: spacexApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(spacexApi.middleware),
});

export default store;
