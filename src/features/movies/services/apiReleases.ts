import axios, { AxiosError } from 'axios';

import API_URL from '../../utils/API_URL';

/**
 * Get All Releases
 */
export interface Releases {
  _id: string;
  movie: {
    _id: string;
    title: string;
    image: string;
    ratingsAverage: number;
    votes: number;
    genres: string[];
    slug: string;
  };
}

interface ReleasesRes {
  status: string;
  result: number;
  data: Releases[];
}

export const getAllReleases = async () => {
  try {
    const res = await axios.get<ReleasesRes>(
      `${API_URL}/api/v1/releases?fields=movie`
    );
    return res.data?.data;
  } catch (err) {
    if (err instanceof AxiosError)
      throw new Error(err.response?.data.message || err.message);
  }
};

/**
 * Get Release
 */
export interface Release {
  _id: string;
  title: string;
  image: string;
  poster: string;
  duration: number;
  certification: string;
  languages: string[];
  genres: string[];
}

interface ReleaseRes {
  status: string;
  data: {
    _id: string;
    movie: Release;
    releaseDate: string;
    screen: string[];
  }[];
}

export const getRelease = async (slug: string) => {
  try {
    const res = await axios.get<ReleaseRes>(
      `${API_URL}/api/v1/releases/${slug}?fields=movie,screen,releaseDate`
    );

    return res.data.data;
  } catch (err) {
    console.log(err);
  }
};
