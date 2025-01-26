import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { getItem } from '../utils/localStorage';

import { User } from './services/apiLogin';

const token = getItem('token');
const user = getItem('user');
const isAuthenticated = token && user ? true : false;

interface IUserState {
  isAuthenticated: boolean;
  user: User;
}

const initialState = {
  isAuthenticated,
  user: isAuthenticated ? JSON.parse(user) : {}
} as IUserState;

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    login(state, action: PayloadAction<User>) {
      state.isAuthenticated = true;
      state.user = action.payload;
    }
  }
});

export const { login } = userSlice.actions;

export default userSlice.reducer;
