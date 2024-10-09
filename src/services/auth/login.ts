import axios, { AxiosError } from 'axios';

const API_URL = import.meta.env.VITE_API_URL;

interface Login {
  email: string;
  OTP: number;
}

interface LoginRes {
  status: string;
  token: string;
  message: string;
}

export const login = async (OTP: Login): Promise<LoginRes | undefined> => {
  try {
    const res = await axios.post<LoginRes>(`${API_URL}/api/v1/auth/login`, OTP);

    if (res.status === 201) {
      return res.data;
    }
  } catch (err) {
    console.log(err);
    if (err instanceof AxiosError) {
      return err.response?.data;
    }
  }
};
