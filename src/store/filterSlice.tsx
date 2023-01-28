import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type stateType = {
  value: string;
};

const initialState: stateType = {
  value: 'all',
};

const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    addFilterValue: (state, action) => {
     state.value = action.payload;
    },
  },
});

export const { addFilterValue } = filterSlice.actions;

export default filterSlice.reducer;
