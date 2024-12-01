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
      languages = [],
      genres = [],
      about = '',
      cast,
      crew
    } = {},
    screen = [],
    releaseDate = ''
  } = release || {};

  const durationInHours = duration / 60;
  const durationInMins = duration % 60;

  const screens = screen.map(
    (scr, i): { id: number; scr: string; link: string } => {
      return {
        id: i,
        scr,
        link: `/explore/movies-${storedCity}-${scr}`
      };
    }
  );

  const _languages = languages.map((lang, i) => {
    return {
      id: i,
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
    screen,
    about,
    cast,
    crew,
    durationInHours,
    durationInMins
  };
};
