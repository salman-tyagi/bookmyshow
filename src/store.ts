import { configureStore } from '@reduxjs/toolkit';
import userReducer from './authentication/authSlice';

const store = configureStore({
  reducer: {
    auth: userReducer
  }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
