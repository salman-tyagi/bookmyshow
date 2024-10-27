import { createAsyncThunk } from '@reduxjs/toolkit';
import axios, { AxiosError } from 'axios';

const API_URL: string = import.meta.env.VITE_API_URL;

interface Signup {
  email: string;
}

interface ResData {
  status: string;
  message: string;
  email: string;
}

export const signup = createAsyncThunk(
  'auth/signup',
  async (data: Signup): Promise<ResData | void> => {
    try {
      const res = await axios.post<ResData>(
        `${API_URL}/api/v1/auth/signup`,
        data
      );

      return { ...res.data, email: data.email };
    } catch (err) {
      if (err instanceof AxiosError) {
        return err.response?.data.message;
      }
    }
  }
);
