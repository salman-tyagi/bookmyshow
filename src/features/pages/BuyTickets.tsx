import { useState } from 'react';
import { Link, useNavigate, useParams, useSearchParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { useAppSelector } from '../hooks/hooks';

import { GoHeartFill } from 'react-icons/go';
import { HiOutlineDevicePhoneMobile } from 'react-icons/hi2';
import { IoFastFoodOutline } from 'react-icons/io5';

import Spinner from '../ui/Spinner';
import ErrorPage from '../ui/ErrorPage';
import MovieTime from '../ui/MovieTime';

import { getReleaseTheatres, IReleaseTheatre } from '../movies/services/apiReleases';
import { dateWithWords, formatDate, formatTime } from '../utils/helpers';

export interface INavigateState {
  movieTitle: string;
  certification: string;
  theatre: string;
  filteredMovieDates: string[];
  timing: string;
}

export default function BuyTickets(): JSX.Element {
  const params = useParams<{ movieData: string; releaseId: string }>();
  const [searchParams, setSearchParams] = useSearchParams();
  const [dateIndex, setDateIndex] = useState(0);
  const { city } = useAppSelector(state => state.cities);
  const navigate = useNavigate();

  const movieParams = params.movieData?.split('-');
  const selectedScreen = movieParams?.splice(-1).join('');
  const selectedLanguage = movieParams?.splice(-1).join('');
  const movieSlug = movieParams?.join('-');

  const date = searchParams.get('date');

  const { isLoading, data: releaseTheatres = [], error } = useQuery({
    queryKey: [`release-${date}`],
    queryFn: () =>
      getReleaseTheatres(movieSlug!, date, selectedLanguage!, selectedScreen!)
  });

  const movieTitle = releaseTheatres.map(release => release.title)[0];
  const certification = releaseTheatres.map(release => release.certification)[0];
  const genres = releaseTheatres.map(release => release.genres)[0];

  const movieDates = dateWithWords([
    ...new Set(
      releaseTheatres
        .flatMap(item => item.timings)
        .map(date => date.slice(0, 10))
    )
  ]);

  const handleReleaseByDate = (i: number, date: number, month: string, year: number ): void => {
    if (i === dateIndex) return;

    setDateIndex(i);
    setSearchParams(`date=${year}-${month}-${date}`);
  };

  if (isLoading)
    return (
      <div className='grid h-dvh place-items-center backdrop-blur-lg'>
        <Spinner />
      </div>
    );

  if (error) return <ErrorPage message={error.message} />;

  if (!date) {
    setTimeout(() => {
      setSearchParams(
        `date=${movieDates[0].year}-${movieDates[0].month}-${movieDates[0].date}`
      );
    }, 10);
  }

  const gotoSeatLayout = (timing: string, release: IReleaseTheatre): void => {
    navigate(
      `/buytickets/${movieSlug}-${selectedLanguage}-${selectedScreen}/${formatDate(timing)}/seatlayout`,
      {
        state: {
          movieTitle,
          certification,
          theatre: `${release.theatre}, ${release.locality}`,
          filteredMovieDates: release.filteredMovieDates,
          timing
        } as INavigateState
      }
    );
  };

  return (
    <>
      <section className='border-b border-stone-300'>
        <header className='pt-7 pb-3 xl:px-36'>
          <Link
            to={`/${city}/movies/${movieSlug}`}
            className='space-x-2 text-4xl font-semibold text-stone-700 hover:underline'
          >
            <span>{movieTitle}</span>
            <span className='uppercase'>({selectedScreen})</span>
            <span className='capitalize'>- {selectedLanguage}</span>
          </Link>

          <div className='mt-2 flex items-center gap-3'>
            <p className='flex h-6 w-6 items-center justify-center rounded-full border-1 border-stone-500 p-3 text-sm font-semibold text-stone-500'>
              {certification}
            </p>

            <ul className='flex items-center gap-2'>
              {genres.map((genre, i) => (
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

      <section className='flex items-center justify-between py-1.5 xl:px-36'>
        <ul className='inline-flex text-center'>
          {movieDates.map(({ day, date, month, year }, i) => (
            <li
              className={`${i === dateIndex ? 'bg-rose-500' : 'group cursor-pointer'} w-12 rounded-lg py-1 leading-none font-medium`}
              key={i}
              onClick={() => handleReleaseByDate(i, date, month, year)}
            >
              <p
                className={`text-xs ${i === dateIndex ? 'text-white' : 'text-stone-500'} group-hover:text-rose-500`}
              >
                {day.toUpperCase()}
              </p>
              <p
                className={`font-medium ${i === dateIndex ? 'text-white' : 'text-stone-700'} group-hover:text-rose-500`}
              >
                {date}
              </p>
              <p
                className={`text-xs ${i === dateIndex ? 'text-white' : 'text-stone-500'} group-hover:text-rose-500`}
              >
                {month.toUpperCase()}
              </p>
            </li>
          ))}
        </ul>

        <div className='flex gap-5 text-sm'>
          <select>
            <option>
              {selectedLanguage} - {selectedScreen}
            </option>
            <option>hindi 2d</option>
            <option>english 3d</option>
            <option>english imax4d</option>
          </select>

          <select>
            <option>Filter sub-regions</option>
            <option>delhi</option>
            <option>gurgaon</option>
            <option>delhi-ncr</option>
          </select>

          <select>
            <option>Filter price range</option>
            <option>Rs. 0-300</option>
            <option>Rs. 301-700</option>
            <option>Rs. 701-1200</option>
          </select>

          <select>
            <option>Filter show timings</option>
            <option>08AM-12PM</option>
            <option>12PM-04PM</option>
            <option>04PM-08PM</option>
            <option>08PM-12AM</option>
          </select>
        </div>
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
                  {release.filteredMovieDates.map((timing, i) => (
                    <li
                      key={i}
                      className='group relative cursor-pointer'
                      onClick={() => gotoSeatLayout(timing, release)}
                    >
                      <MovieTime>{formatTime(timing).toUpperCase()}</MovieTime>

                      <ul className='before:content-() after:content-() absolute -top-[50%] -left-[-50%] hidden -translate-x-[50%] -translate-y-[98%] justify-center gap-5 border bg-white p-3 text-center shadow-md group-hover:flex before:absolute before:top-full before:left-[48%] before:border-8 before:border-r-transparent before:border-b-transparent before:border-l-transparent after:absolute after:top-full after:left-[48%] after:-mt-px after:border-8 after:border-white after:border-r-transparent after:border-b-transparent after:border-l-transparent'>
                        {Object.entries(release.price).map(
                          ([seatType, price]) => (
                            <li className='min-w-[90px]' key={seatType}>
                              <p>Rs. {price.toFixed(2)}</p>
                              <p className='text-xs'>
                                {seatType.replace(
                                  seatType[0],
                                  seatType[0].toUpperCase()
                                )}
                              </p>
                              <p
                                className={`text-sm ${seatType === 'vip' ? 'text-green-600' : seatType === 'executive' ? 'text-orange-600' : 'text-stone-600'}`}
                              >
                                {seatType === 'vip' && 'Available'}
                                {seatType === 'executive' && 'Sold out'}
                                {seatType === 'normal' && 'Fast filling'}
                              </p>
                            </li>
                          )
                        )}
                      </ul>
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
