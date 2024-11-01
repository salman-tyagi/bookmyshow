import { createSlice } from '@reduxjs/toolkit';

import { getAllReleases, Release } from '../../services/movies/getAllReleases';

interface MoviesState {
  loading: boolean;
  movies: Release[];
  error: string;
}

const initialState: MoviesState = {
  loading: false,
  movies: [],
  error: ''
};

const moviesSlice = createSlice({
  name: 'movies',
  initialState,
  reducers: {},
  extraReducers(builder): void {
    builder
      .addCase(getAllReleases.pending, state => {
        state.loading = true;
        state.error = '';
      })
      .addCase(getAllReleases.fulfilled, (state, action) => {
        state.loading = false;
        state.movies = action.payload || [];
      })
      .addCase(getAllReleases.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Unknown error';
      });
  }
});

export default moviesSlice.reducer;
