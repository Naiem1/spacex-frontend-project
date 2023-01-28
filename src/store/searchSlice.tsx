import { createSlice } from '@reduxjs/toolkit';

type stateType = {
  value: string;
};

const initialState: stateType = {
  value: '',
};

const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    addSearchValue: (state, action) => {
        state.value = action.payload;
    },
  },
});

export const {addSearchValue} = searchSlice.actions;

export default searchSlice.reducer;
