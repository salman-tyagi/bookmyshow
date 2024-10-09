import axios, { AxiosError } from 'axios';

const API_URL: string = import.meta.env.VITE_API_URL;

interface Signup {
  email: string;
}

interface ResData {
  status: string;
  message: string;
}

export const signup = async (data: Signup): Promise<ResData | undefined> => {
  try {
    const res = await axios.post<ResData>(`${API_URL}/api/v1/auth/signup`, data);

    if (res.status === 201) {
      localStorage.setItem('email', data.email);
      return res.data;
    }
  } catch (err) {
    console.log(err);
    if (err instanceof AxiosError) {
      return err.response?.data;
    }
  }
};
