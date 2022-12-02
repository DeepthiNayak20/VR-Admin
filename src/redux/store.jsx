import { configureStore } from '@reduxjs/toolkit'

import showProfileSlice from './showProfile'

export const store = configureStore({
  reducer: {
    showProfile: showProfileSlice.reducer,
  },
})
