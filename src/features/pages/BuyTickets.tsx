import { Link, useParams, useSearchParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { useAppSelector } from '../hooks/hooks';

import Spinner from '../ui/Spinner';
import Message from '../ui/Message';

import { getReleaseTheatres } from '../movies/services/apiReleases';

export default function BuyTickets(): JSX.Element {
  const params = useParams<{ movieData: string; releaseId: string }>();
  const [searchParams, setSearchParams] = useSearchParams();
  const { storedCity } = useAppSelector(state => state.cities);

  const year = searchParams.get('releaseDate')?.slice(0, 4);
  const month = searchParams.get('releaseDate')?.slice(4, 6);
  const day = searchParams.get('releaseDate')?.slice(-2);

  const movieParams = params.movieData?.split('-');
  const selectedScreen = movieParams?.splice(-1).join('');
  const selectedLanguage = movieParams?.splice(-1).join('');
  const movieSlug = movieParams?.join('-');

  const { isLoading, data: releaseTheatres = [], error } = useQuery({
    queryKey: ['release'],
    queryFn: () => getReleaseTheatres(movieSlug!, `${year}-${month}-${day}`, selectedScreen!)
  });

  const movieTitle = releaseTheatres.map(release => release.movieTitle)[0];
  const certification = releaseTheatres.map(release => release.certification)[0];
  const genres = releaseTheatres.map(release => release.genres)[0];
  
  if (error) return <Message message={error.message} />;
  if (isLoading) return <Spinner />;

  return (
    <>
      <div className='border-b border-stone-300'>
        <header className='pt-7 pb-3 xl:px-36'>
          <Link
            to={`/${storedCity}/movies/${movieSlug}`}
            className='space-x-2 text-4xl font-semibold text-stone-700 hover:underline'
          >
            <span>{movieTitle}</span>
            <span className='capitalize'>({selectedLanguage})</span>
            <span className='uppercase'>- {selectedScreen}</span>
          </Link>

          <div className='mt-2 flex items-center gap-3'>
            <p className='flex h-6 w-6 items-center justify-center rounded-full border-1 border-stone-500 p-3 text-sm font-semibold text-stone-500'>
              {certification}
            </p>

            <ul className='flex items-center gap-2'>
              {genres?.map((genre, i) => (
                <li
                  key={i}
                  className='rounded-full border border-stone-600 px-2 py-[0.5px] text-[10px] text-stone-600 uppercase'
                >
                  {genre}
                </li>
              ))}
            </ul>
          </div>
        </header>
      </div>

      <section className='xl:px-36'>
        {/* <ul className='inline-flex text-center'>
          {movieDates.map((date, i) => (
            <li
              className={`${i === 0 ? 'bg-rose-500' : 'group'} rounded-lg px-2 py-1 font-medium leading-none`}
              key={i}
              onClick={() => setSearchParams(`releasedate=${formatDate(date)}`)}
            >
              <p
                className={`text-xs ${i === 0 ? 'text-white' : 'text-stone-500'} group-hover:text-rose-500`}
              >
                {date.toUpperCase()}
              </p>
              <p
                className={`font-medium ${i === 0 ? 'text-white' : 'text-stone-700'} group-hover:text-rose-500`}
              >
                {date}
              </p>
              <p
                className={`text-xs ${i === 0 ? 'text-white' : 'text-stone-500'} group-hover:text-rose-500`}
              >
                {date.toUpperCase()}
              </p>
            </li>
          ))}
        </ul> */}
      </section>
    </>
  );
}
