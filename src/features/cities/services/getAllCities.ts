import axios, { AxiosError } from 'axios';

const API_URL: string = import.meta.env.VITE_API_URL;

export interface City {
  _id: string;
  city: string;
  cityImage: string;
}

interface GetAllCitiesResponse {
  status: string;
  result: number;
  data: City[];
}

export const getAllCities = async () => {
  try {
    const res = await axios.get<GetAllCitiesResponse>(
      `${API_URL}/api/v1/cities`
    );

    if (res.data.status === 'success') return res.data.data;
  } catch (err) {
    if (err instanceof AxiosError) throw new Error(err.response?.data.message);
  }
};
