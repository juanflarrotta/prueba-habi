import { createSlice } from '@reduxjs/toolkit';
import { RootState } from 'redux/store';

export interface NameState {
  value: string;
}

const initialState: NameState = {
  value: '',
};

export const nameSlice = createSlice({
  name: 'name',
  initialState,
  reducers: {
    setName: (state, { payload }) => {
      state.value = payload;
    },
  },
});

export const { setName } = nameSlice.actions;

export const selectValueName = (state: RootState) => state.name.value;

export default nameSlice.reducer;
