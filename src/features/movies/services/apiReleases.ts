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

export type MultiplexChain = 'inox' | 'pvr' | 'cinepolis';

interface ReleaseDetails {
  status: string;
  data: {
    _id: string;
    movie: {
      title: string;
      image: string;
      poster: string;
      languages: string[];
      duration: number; // in mins
      ratingsQuantity: number;
      ratingsAverage: number;
      votes: number;
      genres: string[];
      certification: string;
      about: string;
      cast: { actor: string[]; actress: string[] };
      crew: {
        director: string[];
        actionDirector: string[];
        producer: string[];
        creativeProducer: string[];
        executiveProducer: string[];
        cinematographer: string[];
        editor: string[];
        writer: string[];
        musician: string[];
        singer: string[];
        lyricist: string[];
        screenplay: string[];
      };
    };
    theatre: {
      theatre: string;
      multiplexChain: MultiplexChain;
      location: { lat: number; lng: number };
      address: string;
      locality: string;
      city: string;
      state: string;
      pincode: number;
      region: string;
      country: string;
      facilities: {
        ticketCancellation: boolean;
        foodAndBeverages: boolean;
        mTicket: boolean;
        wheelChair: boolean;
        parking: boolean;
        foodCourt: boolean;
      };
      seats: {
        vip: { row: number; column: number };
        executive: { row: number; column: number };
        normal: { row: number; column: number };
      };
    };
    screen: string[];
    releaseDate: string;
    movieDateAndTime: string[];
  };
}

export const getReleaseDetails = async (id: string) => {
  try {
    const res = await axios.get<ReleaseDetails>(
      `${API_URL}/api/v1/releases/release-details/${id}`
    );

    if (res.data.status === 'success') return res.data.data;
  } catch (err) {
    console.log(err);
  }
};
