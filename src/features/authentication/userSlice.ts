import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface IUserState {
  isAuthenticated: boolean;
  user: {
    firstName: string;
    lastName: string;
    email: string;
    photo: string;
  };
}

const initialState = {
  isAuthenticated: false,
  user: {}
} as IUserState;

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    login(
      state,
      action: PayloadAction<{
        firstName: string;
        lastName: string;
        email: string;
        photo: string;
      }>
    ) {
      state.isAuthenticated = true;
      state.user = action.payload;
    }
  }
});

export const { login } = userSlice.actions;

export default userSlice.reducer;
