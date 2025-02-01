import { Link } from 'react-router-dom';
import { useAppSelector } from '../hooks/hooks';

import { IoChevronForward } from 'react-icons/io5';

import RecommendedMovieList from './RecommendedMovieList';

const RecommendedMovies = (): JSX.Element => {
  const { city } = useAppSelector(state => state.cities);

  return (
    <section className='px-4 py-8 md:px-6 xl:px-36'>
      <header className='mb-2 flex'>
        <h3 className='text-2xl font-bold capitalize'>Recommended movies</h3>
        <button className='ml-auto flex items-center gap-1 text-sm text-rose-600 capitalize'>
          <Link to={`/explore/movies-${city}`}>See all</Link>
          <IoChevronForward />
        </button>
      </header>

      <RecommendedMovieList />
    </section>
  );
};

export default RecommendedMovies;
