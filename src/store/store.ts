import { configureStore } from '@reduxjs/toolkit';
import { spacexApi } from './../api/spacexApi';
import filterReducer from './filterSlice';
import searchReducer from './searchSlice';

const store = configureStore({
  reducer: {
    [spacexApi.reducerPath]: spacexApi.reducer,
    filterValue: filterReducer,
    searchValue: searchReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(spacexApi.middleware),
});

export default store;
