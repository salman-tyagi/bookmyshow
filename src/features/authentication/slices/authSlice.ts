import { createSlice } from '@reduxjs/toolkit';
// import type { PayloadAction } from '@reduxjs/toolkit';

// import { ResData, signup } from '../services/signup';
// import { login, ResLogin } from '../services/login';
// import { setItem } from '../../../utils/localStorage';

type Loading = 'idle' | 'pending' | 'success' | 'failed';

interface UserState {
  name: string;
  email: string;
  status: Loading;
  error: string;
}

const initialState: UserState = {
  name: '',
  email: '',
  status: 'idle',
  error: ''
};

const userSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  // extraReducers(builder) {
    // builder
    //   .addCase(signup.pending, state => {
    //     state.status = 'pending';
    //     state.error = '';
    //   })
    //   .addCase(
    //     signup.fulfilled,
    //     (state, action: PayloadAction<ResData | void>) => {
    //       state.status = 'success';
    //       state.email = action.payload?.email || '';
    //     }
    //   )
    //   .addCase(signup.rejected, (state, action) => {
    //     state.error = action.error.message || 'Unknown error';
    //   });

    // builder
    //   .addCase(login.pending, state => {
    //     state.status = 'pending';
    //     state.error = '';
    //   })
    //   .addCase(
    //     login.fulfilled,
    //     (state, action: PayloadAction<ResLogin | void>) => {
    //       if (!action.payload) return;

    //       setItem('email', action.payload.data.email);
    //       setItem('token', action.payload.token);
    //       state.status = 'success';
    //       state.email = '';
    //     }
    //   )
    //   .addCase(login.rejected, (state, action) => {
    //     state.status = 'failed';
    //     state.error = action.error.message || 'Unknown error';
    //   });
  // }
});

export default userSlice.reducer;
