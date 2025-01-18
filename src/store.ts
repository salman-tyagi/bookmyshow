import { configureStore } from '@reduxjs/toolkit';

import citiesReducer from './features/cities/slices/citySlice';
import userReducer from './features/authentication/userSlice';

const store = configureStore({
  reducer: {
    cities: citiesReducer,
    users: userReducer
  }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
