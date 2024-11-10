import axios, { AxiosError } from 'axios';

const API_URL: string = import.meta.env.VITE_API_URL;

interface Signup {
  email: string;
}

export interface ResData {
  status: string;
  message: string;
}

export const apiSignup = async (data: Signup) => {
  try {
    const res = await axios.post<ResData>(`${API_URL}/api/v1/auth/signup`, data);

    if (res.status === 201) return { ...res.data, email: data.email };
  } catch (err) {
    if (err instanceof AxiosError) return new Error(err.response?.data.message);
  }
};
