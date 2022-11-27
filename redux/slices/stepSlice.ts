import { createSlice } from '@reduxjs/toolkit';
import { RootState } from 'redux/store';

export interface StepState {
  value: number;
}

const initialState: StepState = {
  value: 0,
};

export const stepSlice = createSlice({
  name: 'step',
  initialState,
  reducers: {
    incrementStep: state => {
      state.value += 1;
    },
    decrementStep: state => {
      state.value -= 1;
    },
    setStep: (state, { payload }) => {
      state.value = payload;
    },
  },
});

export const { incrementStep, decrementStep, setStep } = stepSlice.actions;

export const selectValueStep = (state: RootState) => state.step.value;

export default stepSlice.reducer;
