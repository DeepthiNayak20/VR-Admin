import { configureStore } from '@reduxjs/toolkit'
import { HeaderSlice } from '../redux/HeaderSlice'
import showProfileSlice from './showProfile'

export const store = configureStore({
  reducer: {
    showProfile: showProfileSlice.reducer,
  },
})
