import { createSlice } from '@reduxjs/toolkit';

import { getAllCities } from '../services/cities/getAllCities';

export interface City {
  _id: string;
  city: string;
  cityImage: string;
}

interface CitiesState {
  loading: boolean;
  cities: City[];
  error: string;
}

const initialState: CitiesState = {
  loading: false,
  cities: [],
  error: ''
};

const citiesSlice = createSlice({
  name: 'cities',
  initialState,
  reducers: {},
  extraReducers(builder): void {
    builder
      .addCase(getAllCities.pending, state => {
        state.loading = true;
        state.error = '';
      })
      .addCase(getAllCities.fulfilled, (state, action) => {
        state.loading = false;
        state.cities = action.payload || [];
      })
      .addCase(getAllCities.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || '';
      });
  }
});

export default citiesSlice.reducer;
