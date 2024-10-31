import { configureStore } from '@reduxjs/toolkit';

import userReducer from './authentication/authSlice';
import citiesReducer from './cities/citiesSlice';

const store = configureStore({
  reducer: {
    auth: userReducer,
    cities: citiesReducer
  }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
