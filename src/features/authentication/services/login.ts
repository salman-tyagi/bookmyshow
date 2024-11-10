import axios, { AxiosError } from 'axios';

const API_URL = import.meta.env.VITE_API_URL;

interface Login {
  email: string;
  OTP: number;
}

export interface ResLogin {
  status: string;
  token: string;
  data: { email: string };
}

export const login = async (OTP: Login) => {
  try {
    const res = await axios.post<ResLogin>(`${API_URL}/api/v1/auth/login`, OTP);

    if (res.status === 201) return res.data;
  } catch (err) {
    if (err instanceof AxiosError) return new Error(err.response?.data.message);
  }
};
