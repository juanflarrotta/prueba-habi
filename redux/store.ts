import { configureStore } from '@reduxjs/toolkit'
import nameSlice from './slices/nameSlice'

export const store = configureStore({
    reducer: {
        name: nameSlice,
    },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch