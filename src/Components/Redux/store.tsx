import { configureStore } from '@reduxjs/toolkit'
import { authSlice } from './auth'

export const store = configureStore({
    reducer: {
      user: authSlice.reducer
    }
  })

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch 