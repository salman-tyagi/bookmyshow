import { Link } from 'react-router-dom';
import { getItem } from '../utils/localStorage';

function TopBar(): JSX.Element {
  const city = getItem('city') as string;

  return (
    <div className='flex items-center justify-between bg-gray-50 px-4 py-3 md:px-6 xl:px-36'>
      <div className='flex gap-5 text-sm'>
        <Link
          to={`explore/movies-${city.toLowerCase()}`}
          className='cursor-pointer'
        >
          Movies
        </Link>
        <p className='cursor-pointer'>Stream</p>
        <p className='cursor-pointer'>Events</p>
        <p className='cursor-pointer'>Plays</p>
        <p className='cursor-pointer'>Sports</p>
        <p className='cursor-pointer'>Activities</p>
      </div>

      <div className='flex cursor-pointer gap-6 text-xs'>
        <p className='cursor-pointer'>ListYourShow</p>
        <p className='cursor-pointer'>Corporates</p>
        <p className='cursor-pointer'>Offers</p>
        <p className='cursor-pointer'>Gift cards</p>
      </div>
    </div>
  );
}

export default TopBar;
