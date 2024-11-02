import { useQuery } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';

import { getRelease } from '../../services/movies/apiReleases';

export interface Movie {
  title: string;
  image: string;
  poster: string;
  certification: string;
  releaseDate: string;
  screens: string;
  languages: string;
  durationInHours: number;
  durationInMins: number;
  genres: string;
}

const useMovie = (): Movie | { isLoading: boolean } => {
  const { slug } = useParams();

  const { isLoading, data: release = [] } = useQuery({
    queryKey: ['movie'],
    queryFn: () => getRelease(slug!)
  });

  if (isLoading) return { isLoading };

  const {
    movie: { title, image, poster, certification, genres, duration, languages },
    screen,
    releaseDate
  } = release[0];

  const screens = screen.map(scr => scr.toUpperCase()).join(', ');
  const _languages = languages
    .map(lan => lan[0].toUpperCase() + lan.slice(1))
    .join(', ');

  const durationInHours = duration / 60;
  const durationInMins = duration % 60;

  const _genres = genres
    .map(genre => genre[0].toUpperCase() + genre.slice(1))
    .join(', ');

  return {
    title,
    image,
    poster,
    certification,
    releaseDate,
    screens,
    languages: _languages,
    durationInHours,
    durationInMins,
    genres: _genres
  };
};

export default useMovie;
