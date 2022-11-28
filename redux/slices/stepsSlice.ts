import { createSlice } from '@reduxjs/toolkit';
import { RootState } from 'redux/store';
import { Steps } from 'types';

export interface StepsState {
  value: Steps;
}

const initialState: StepsState = {
  value: [],
};

export const stepsSlice = createSlice({
  name: 'steps',
  initialState,
  reducers: {
    setSteps: (state, { payload }) => {
      state.value = payload;
    },
  },
});

export const { setSteps } = stepsSlice.actions;

export const selectValueSteps = (state: RootState) => state.steps.value;

export default stepsSlice.reducer;
