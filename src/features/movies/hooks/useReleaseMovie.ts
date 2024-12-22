import { useParams } from 'react-router-dom';
import { useAppSelector } from '../../hooks/hooks';
import { useReleasesQuery } from './queries/useReleasesQuery';

export const useReleaseMovie = () => {
  const { slug = '' } = useParams<{ slug: string }>();
  const { storedCity } = useAppSelector(state => state.cities);
  const { isLoading, release } = useReleasesQuery(slug);

  const {
    _id: releaseId = '',
    movie: {
      _id: movieId = '',
      title = '',
      image = '',
      ratingsAverage = 0,
      votes = 0,
      poster = '',
      duration = 0,
      certification = '',
      genres = [],
      about = '',
      cast,
      crew
    } = {},
    screen = [],
    language = [],
    releaseDate = '',
  } = release || {};

  const durationInHours = duration / 60;
  const durationInMins = duration % 60;

  const screens = screen.map((scr): { scr: string; link: string } => {
    return {
      scr,
      link: `/explore/movies-${storedCity}-${scr}`
    };
  });

  const _languages = language.map(lang => {
    return {
      lang: lang,
      link: `/explore/movies-${storedCity}-${lang}`
    };
  });

  const _genres = genres
    .map(genre => genre[0].toUpperCase() + genre.slice(1))
    .join(', ');

  return {
    isLoading,
    movieId,
    releaseId,
    releaseDate,
    title,
    image,
    ratingsAverage,
    votes,
    poster,
    certification,
    languages: _languages,
    genres: _genres,
    screens,
    about,
    cast,
    crew,
    durationInHours,
    durationInMins
  };
};
