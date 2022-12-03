import { configureStore } from '@reduxjs/toolkit';
import stepSlice from './slices/stepSlice';
import stepsSlice from './slices/stepsSlice';

export const store = configureStore({
  reducer: {
    steps: stepsSlice,
    step: stepSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
