import { configureStore } from '@reduxjs/toolkit';

import userReducer from './features/authentication/authSlice';
import citiesReducer from './features/cities/citiesSlice';
// import releasesReducer from './features/movies/moviesSlice';

const store = configureStore({
  reducer: {
    auth: userReducer,
    cities: citiesReducer,
    // releases: releasesReducer
  }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
