import { configureStore } from '@reduxjs/toolkit';
import nameSlice from './slices/nameSlice';
import stepsSlice from './slices/stepsSlice';

export const store = configureStore({
  reducer: {
    steps: stepsSlice,
    name: nameSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
