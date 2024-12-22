import axios, { AxiosError, isAxiosError } from 'axios';

import API_URL from '../../utils/API_URL';

// Get All Releases
export interface RecommendedRelease {
  _id: string;
  movie: {
    _id: string;
    title: string;
    image: string;
    genres: string[];
    ratingsAverage: number;
    votes: number;
  };
  slug: string;
}

interface RecommendedReleasesRes {
  status: string;
  result: number;
  data: RecommendedRelease[];
}

export const getAllRecommendedReleases = async () => {
  try {
    const res = await axios.get<RecommendedReleasesRes>(
      `${API_URL}/api/v1/releases/recommended-releases`
    );

    return res.data?.status === 'success' ? res.data?.data : [];
  } catch (err) {
    if (err instanceof AxiosError)
      throw new Error(err.response?.data.message || err.message);
  }
};

// Get Release
export interface IReleaseMovie {
  _id: string;
  title: string;
  image: string;
  poster: string;
  ratingsAverage: number;
  votes: number;
  duration: number;
  certification: string;
  genres: string[];
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
}

interface ReleaseRes {
  status: string;
  data: {
    _id: string;
    movie: IReleaseMovie;
    releaseDate: string;
    languageAndScreen: { [key: string]: string[] };
  };
}

export const getRelease = async (slug: string) => {
  try {
    const res = await axios.get<ReleaseRes>(
      `${API_URL}/api/v1/releases/${slug}`
    );

    if (res.data.status === 'success') return res.data.data;
  } catch (err) {
    console.log(err);
  }
};

export type MultiplexChain = 'inox' | 'pvr' | 'cinepolis';

interface IReleaseTheatres {
  status: string;
  data: {
    theatre: string;
    locality: string;
    mTicket: boolean;
    foodAndBeverages: boolean;
    ticketCancellation: boolean;
    timings: string[];
    title: string;
    languages: string[];
    genres: string[];
    certification: string;
  }[];
}

export const getReleaseTheatres = async (
  movieSlug: string,
  date: string,
  screen: string
) => {
  try {
    const res = await axios.get<IReleaseTheatres>(
      `${API_URL}/api/v1/releases/theatres/${movieSlug}`,
      { params: { dateString: date, screen } }
    );

    if (res.data.status === 'success') return res.data.data;
  } catch (err) {
    if (isAxiosError(err)) throw new Error(err.response?.data.message);
  }
};

export interface MovieReview {
  _id: string;
  rating: number;
  review: string;
  email: string;
  createdAt: string;
}

interface MovieReviewsRes {
  status: string;
  result: number;
  data: MovieReview[];
}

export const getMovieReviews = async (movieId: string) => {
  try {
    const res = await axios.get<MovieReviewsRes>(
      `${API_URL}/api/v1/movies/${movieId}/reviews`
    );

    if (res.data.status === 'success') return res.data.data;
  } catch (err) {
    console.log(err);
  }
};

export interface RelatedRelease {
  _id: string;
  movie: {
    _id: string;
    title: string;
    image: string;
    ratingsAverage: number;
    votes: number;
    slug: string;
  };
}

interface RelatedReleasesRes {
  status: string;
  result: number;
  data: RelatedRelease[];
}

export const getAllRelatedReleases = async (movieSlug: string) => {
  try {
    const res = await axios.get<RelatedReleasesRes>(
      `${API_URL}/api/v1/releases/${movieSlug}/related-releases`
    );

    if (res.data.status === 'success') return res.data.data;
  } catch (err) {
    console.log(err);
  }
};
