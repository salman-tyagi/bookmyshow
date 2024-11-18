import { useQuery } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';

import { getRelease } from '../services/apiReleases';

export interface Movie {
  releaseId: string;
  title: string;
  image: string;
  poster: string;
  certification: string;
  releaseDate: string;
  screen: string[];
  languages: string[];
  durationInHours: number;
  durationInMins: number;
  genres: string[];
}

const useMovie = (): Movie | { isLoading: boolean } => {
  const { slug } = useParams();

  const { isLoading, data: release = [] } = useQuery({
    queryKey: ['movie'],
    queryFn: () => getRelease(slug!)
  });

  if (isLoading) return { isLoading };

  const {
    _id,
    movie: { title, image, poster, certification, genres, duration, languages },
    screen,
    releaseDate
  } = release[0];

  const durationInHours = duration / 60;
  const durationInMins = duration % 60;

  const _genres = genres.map(genre => genre[0].toUpperCase() + genre.slice(1));

  return {
    releaseId: _id,
    title,
    image,
    poster,
    certification,
    releaseDate,
    screen,
    languages,
    durationInHours,
    durationInMins,
    genres: _genres
  };
};

export default useMovie;
