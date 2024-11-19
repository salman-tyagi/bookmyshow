import { Link, useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { useAppSelector } from '../hooks/hooks';

import Spinner from '../ui/Spinner';

import { getReleaseDetails } from '../movies/services/apiReleases';
import createSlug from '../utils/createSlug';
import dateWithWords, { IDateWithWords } from '../utils/dateWithWords';
import { useState } from 'react';

function BuyTickets(): JSX.Element {
  const params = useParams();
  const id = params.releaseId?.split('-').slice(-1).join('') as string;

  const { storedCity } = useAppSelector(state => state.cities);

  const { isLoading, data: releaseDetails } = useQuery({
    queryKey: ['release'],
    queryFn: () => getReleaseDetails(id)
  });

  const movie = releaseDetails?.movie;
  const movieDateAndTime = releaseDetails?.movieDateAndTime;
  const { title = '', certification = '', genres = [] } = movie || {};

  const movieDates = movieDateAndTime?.length
    ? dateWithWords(movieDateAndTime)
    : [];

  const titleSlug = createSlug(title);

  if (isLoading) return <Spinner />;

  return (
    <>
      <div className='border-b border-stone-300'>
        <header className='pb-3 pt-7 xl:px-36'>
          <Link
            to={`/${storedCity}/movies/${titleSlug}`}
            className='text-4xl font-semibold text-stone-700 hover:underline'
          >
            {title}
          </Link>

          <div className='mt-2 flex items-center gap-3'>
            <p className='flex h-6 w-6 items-center justify-center rounded-full border-2 border-stone-500 p-3 text-sm font-semibold text-stone-500'>
              {certification}
            </p>
            <Genres genres={genres} />
          </div>
        </header>
      </div>

      <section className='xl:px-36'>
        <MovieDates dates={movieDates} />
      </section>
    </>
  );
}

function Genres({ genres }: { genres: string[] }): JSX.Element {
  return (
    <ul className='flex items-center gap-2'>
      {genres?.map((genre, i) => <Genre genre={genre} key={i} />)}
    </ul>
  );
}

function Genre({ genre }: { genre: string }): JSX.Element {
  return (
    <li className='rounded-full border border-stone-600 px-2 py-[2px] text-[10px] uppercase text-stone-600'>
      {genre}
    </li>
  );
}

function MovieDates({ dates }: { dates: IDateWithWords[] }): JSX.Element {
  const [selectedDate, setSelectedDate] = useState(0);

  const handleSelectDate = (id: number): void => {
    setSelectedDate(id);
  };

  return (
    <div className='inline-flex py-2'>
      {dates.map((date, i) => (
        <Link
          to={``}
          key={i}
          className={`${i === selectedDate ? 'bg-rose-500 font-medium' : 'group'} rounded-lg px-3 py-1 text-center leading-none`}
          onClick={() => handleSelectDate(i)}
        >
          <p
            className={`text-xs text-stone-500 ${i === selectedDate ? 'text-white' : ''} group-hover:text-rose-500`}
          >
            {date.day.toUpperCase()}
          </p>
          <p
            className={`font-medium text-stone-700 ${i === selectedDate ? 'text-white' : ''} group-hover:text-rose-500`}
          >
            {date.date}
          </p>
          <p
            className={`text-xs text-stone-500 ${i === selectedDate ? 'text-white' : ''} group-hover:text-rose-500`}
          >
            {date.month.toUpperCase()}
          </p>
        </Link>
      ))}
    </div>
  );
}

export default BuyTickets;
