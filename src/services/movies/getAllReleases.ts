import axios, { AxiosError } from 'axios';

const API_URL = import.meta.env.VITE_API_URL;

export interface Release {
  _id: string;
  movie: {
    _id: string;
    title: string;
    image: string;
    poster: string;
    ratingsAverage: number;
    votes: number;
    genres: string[];
  };
  // movieDateAndTime: string[];
  // releaseDate: string;
  // screen: string[];
  // theatre: { locality: string; theatre: string; _id: string };
  // createdAt: string;
}

export interface ReleasesResponse {
  status: string;
  result: number;
  data: Release[];
  message?: string;
}

export const getAllReleases = async (): Promise<
  ReleasesResponse | undefined
> => {
  try {
    const res = await axios.get<ReleasesResponse>(
      `${API_URL}/api/v1/releases?sort=price`
    );
    if (res.status === 200) return res.data;
  } catch (err) {
    if (err instanceof AxiosError) {
      return err.response?.data;
    }
  }
};
