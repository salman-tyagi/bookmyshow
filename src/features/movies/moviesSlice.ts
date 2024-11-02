// import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// import { getAllReleases, Release } from '../../services/movies/apiReleases';

// interface MoviesState {
//   loading: boolean;
//   movies: Release[];
//   error: string;
//   release: Release;
// }

// const initialState: MoviesState = {
//   loading: false,
//   movies: [],
//   error: '',
//   release: {
//     _id: '',
//     movie: {
//       _id: '',
//       title: '',
//       image: '',
//       poster: '',
//       ratingsAverage: 0,
//       votes: 0,
//       genres: [],
//       languages: [],
//       duration: 0,
//       certification: ''
//     },
//     screen: [],
//     releaseDate: ''
//   }
// };

// const moviesSlice = createSlice({
//   name: 'movies',
//   initialState,
//   reducers: {
//     selectedRelease(state, action: PayloadAction<number>) {
//       state.release = state.movies[action.payload];
//     }
//   },
//   extraReducers(builder): void {
//     builder
//       .addCase(getAllReleases.pending, state => {
//         state.loading = true;
//         state.error = '';
//       })
//       .addCase(getAllReleases.fulfilled, (state, action) => {
//         state.loading = false;
//         state.movies = action.payload || [];
//       })
//       .addCase(getAllReleases.rejected, (state, action) => {
//         state.loading = false;
//         state.error = action.error.message || 'Unknown error';
//       });
//   }
// });

// export const { selectedRelease } = moviesSlice.actions;

// export default moviesSlice.reducer;
