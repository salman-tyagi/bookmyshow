import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface CitiesState {
  storedCity: string;
}

const initialState: CitiesState = {
  storedCity: ''
};

const citySlice = createSlice({
  name: 'cities',
  initialState,
  reducers: {
    setCity(state, action: PayloadAction<string>) {
      state.storedCity = action.payload.toLowerCase();
    }
  }
});

export const { setCity } = citySlice.actions;

export default citySlice.reducer;
