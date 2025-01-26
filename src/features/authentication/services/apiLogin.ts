import axios, { AxiosError } from 'axios';

import API_URL from '../../utils/API_URL';

interface Login {
  email: string;
  OTP: number;
}

export interface User {
  _id: string;
  firstName: string;
  lastName: string;
  email: string;
  photo: string;
}

export interface ResLogin {
  status: string;
  token: string;
  data: User;
}

export const apiLogin = async (OTP: Login) => {
  try {
    const res = await axios.post<ResLogin>(`${API_URL}/api/v1/auth/login`, OTP);

    if (res.status === 201) return res.data;
  } catch (err) {
    if (err instanceof AxiosError) throw new Error(err.response?.data.message);
  }
};
