import axios, { AxiosError } from 'axios';

import API_URL from '../../utils/API_URL';

// Get All Releases
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
  languages: string[];
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

interface ReleaseTheatre {
  status: string;
  data: {
    _id: string;
    movie: IReleaseMovie;
    releaseDate: string;
    screen: string[];
  };
}

export const getRelease = async (slug: string) => {
  try {
    const res = await axios.get<ReleaseTheatre>(
      `${API_URL}/api/v1/releases/${slug}`
    );

    if (res.data.status === 'success') return res.data.data;
  } catch (err) {
    console.log(err);
  }
};

export type MultiplexChain = 'inox' | 'pvr' | 'cinepolis';

interface ReleaseDetails {
  status: string;
  data: {
    timings: string[];
    theatre: string;
    movieTitle: string;
    certification: string;
    genres: string[];
    releaseDate: string;
    facilities: {
      ticketCancellation: boolean;
      foodAndBeverages: boolean;
      mTicket: boolean;
      wheelChair: boolean;
      parking: boolean;
      foodCourt: boolean;
    };
    locality: string;
  }[];
}

export const getReleaseTheatres = async (
  movieSlug: string,
  date: string,
  screen: string
) => {
  try {
    const res = await axios.get<ReleaseDetails>(
      `${API_URL}/api/v1/releases/theatres/${movieSlug}`,
      { params: { dateString: date, screen } }
    );

    if (res.data.status === 'success') return res.data.data;
  } catch (err) {
    console.log(err);
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
