import { Location, useLocation, useNavigate } from 'react-router-dom';

import { IoChevronBackOutline } from 'react-icons/io5';
import { SlPencil } from 'react-icons/sl';

import MovieTime from '../ui/MovieTime';
import { INavigateState } from './BuyTickets';

import { atWhatDay, dateWithWords, formatTime } from '../utils/helpers';

interface ILocation extends Location {
  state: INavigateState;
}

function SeatLayout(): JSX.Element {
  const navigate = useNavigate();
  const {
    state: { movieTitle, certification, theatre, filteredMovieDates, timing }
  } = useLocation() as ILocation;

  const selectedTime = formatTime(timing).toUpperCase();

  const dateMonth = `${dateWithWords([timing])[0].date} ${dateWithWords([timing])[0].month}`;

  const goBack = (): void => navigate(-1);

  const movieTime = (movieDate: string): string => {
    return formatTime(movieDate).toUpperCase();
  };

  return (
    <div>
      <header className='mb-3 flex items-center gap-3 p-2'>
        <IoChevronBackOutline
          className='cursor-pointer'
          size={28}
          onClick={goBack}
        />

        <div>
          <div className='flex items-center gap-2'>
            <p>{movieTitle}</p>
            <span className='grid h-5 w-5 place-items-center rounded-full border border-stone-600 text-sm'>
              {certification}
            </span>
          </div>

          <div className='flex items-center gap-2 text-sm font-medium text-stone-700 capitalize'>
            <p>{theatre}</p>
            <span>|</span>
            <time>{`${atWhatDay(timing)}, ${dateMonth}, ${selectedTime}`}</time>
          </div>
        </div>

        <button className='ml-auto cursor-pointer space-x-2 rounded border border-stone-400 px-2 py-1 text-sm font-semibold text-stone-600'>
          <span>2 Tickets</span>
          <SlPencil className='inline' size={10} />
        </button>

        <span
          className='ml-10 inline-block cursor-pointer pr-4 text-3xl'
          onClick={goBack}
        >
          &times;
        </span>
      </header>

      <div className='flex items-center gap-3 border-b bg-stone-100 px-12 py-2.5'>
        {filteredMovieDates.map((date, i) => (
          <MovieTime
            key={i}
            onLayoutPage
            selected={movieTime(date) === selectedTime}
          >
            {movieTime(date)}
          </MovieTime>
        ))}
      </div>
    </div>
  );
}

export default SeatLayout;
