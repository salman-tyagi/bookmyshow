import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { getItem } from '../../utils/localStorage';

interface CitiesState {
  city: string;
}

const initialState: CitiesState = {
  city: getItem('city') || ''
};

const citySlice = createSlice({
  name: 'cities',
  initialState,
  reducers: {
    setCity(state, action: PayloadAction<string>) {
      state.city = action.payload;
    }
  }
});

export const { setCity } = citySlice.actions;

export default citySlice.reducer;
