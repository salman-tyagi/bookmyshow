import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

import { City } from '../../cities/citiesSlice';

const API_URL: string = import.meta.env.VITE_API_URL;

interface GetAllCitiesResponse {
  status: string;
  result: number;
  data: City[];
}

export const getAllCities = createAsyncThunk(
  'cities/fetched',
  async (): Promise<City[] | void> => {
    try {
      const res = await axios.get<GetAllCitiesResponse>(
        `${API_URL}/api/v1/cities`
      );

      if (res.data) return res.data.data;
    } catch (err) {
      console.log(err);
    }
  }
);
