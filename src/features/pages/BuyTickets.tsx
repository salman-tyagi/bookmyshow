import { Link, useParams, useSearchParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { useAppSelector } from '../hooks/hooks';

import { GoHeartFill } from 'react-icons/go';
import { HiOutlineDevicePhoneMobile } from 'react-icons/hi2';
import { IoFastFoodOutline } from 'react-icons/io5';

import Spinner from '../ui/Spinner';
import Message from '../ui/Message';

import { getReleaseTheatres } from '../movies/services/apiReleases';
import { formatTime } from '../utils/helpers';

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
    queryFn: () =>
      getReleaseTheatres(movieSlug!, `${year}-${month}-${day}`, selectedScreen!)
  });

  const movieTitle = releaseTheatres.map(release => release.title)[0];
  const certification = releaseTheatres.map(release => release.certification)[0];
  const genres = releaseTheatres.map(release => release.genres)[0];

  if (isLoading) return <Spinner />;
  if (error) return <Message message={error.message} />;

  return (
    <>
      <section className='border-b border-stone-300'>
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
      </section>

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

        <div></div>
      </section>

      <section className='bg-stone-100 px-36 py-3'>
        <div className='flex items-center justify-end gap-2 bg-white px-5 py-2 text-[10px] text-stone-600 uppercase'>
          <span className='h-2 w-2 rounded-full bg-green-500'></span>
          <p>Available</p>

          <span className='h-2 w-2 rounded-full bg-orange-400'></span>
          <p>Fast filling</p>

          <span className='before:content-() after:content-() relative border border-green-500 px-0.5 leading-3 font-medium text-green-500 before:absolute before:top-full before:left-4 before:border-3 before:border-green-500 before:border-r-transparent before:border-b-transparent before:border-l-transparent after:absolute after:top-full after:left-4 after:-mt-px after:border-3 after:border-white after:border-r-transparent after:border-b-transparent after:border-l-transparent'>
            LAN
          </span>
          <p>Subtitles language</p>
        </div>

        <ul className='bg-white'>
          {releaseTheatres.map((release, i) => (
            <li key={i} className='flex gap-5 border-t-1 px-5 py-4'>
              <GoHeartFill className='cursor-pointer fill-white stroke-1 transition delay-40 hover:fill-rose-500 hover:stroke-rose-500' />

              <div className='basis-1/5 text-sm'>
                <p className='mb-3 leading-4 font-semibold text-stone-800 capitalize'>
                  {release.theatre}: {release.locality}
                </p>

                {release.mTicket ? (
                  <span className='inline-flex items-center gap-1 text-green-400'>
                    <HiOutlineDevicePhoneMobile size={18} />
                    <p className='mr-6'>M-Ticket</p>
                  </span>
                ) : null}

                {release.foodAndBeverages ? (
                  <span className='inline-flex items-center gap-2 text-orange-400'>
                    <IoFastFoodOutline size={18} />
                    <p>Food & Beverage</p>
                  </span>
                ) : null}
              </div>

              <button className='space-x-1 self-start pr-6 text-sm font-medium text-stone-500 uppercase'>
                <span>&#128712;</span>
                <span className='text-xs'>info</span>
              </button>

              <div>
                <ul className='flex gap-4 py-1.5'>
                  {release.timings.map((timing, i) => (
                    <li key={i} className='cursor-pointer'>
                      <div className='rounded border border-stone-400 px-7 py-2.5 text-[13px] text-green-500'>
                        {formatTime(timing).toUpperCase()}
                      </div>
                    </li>
                  ))}
                </ul>

                <div className='mt-2 flex items-center gap-3'>
                  <span className='text-3xl leading-3 text-yellow-400'>
                    &bull;
                  </span>
                  <p className='text-xs text-stone-600'>
                    {release.ticketCancellation
                      ? 'Cancellation Available'
                      : 'Non-cancellable'}
                  </p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}
