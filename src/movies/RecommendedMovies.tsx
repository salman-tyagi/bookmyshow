import { IoChevronForward } from 'react-icons/io5';

import RecommendedMovieList from './RecommendedMovieList';

const RecommendedMovies = (): JSX.Element => {
  return (
    <section className='px-4 py-10 md:px-6 xl:px-36'>
      <header className='mb-2 flex'>
        <h3 className='text-2xl font-bold capitalize'>Recommended movies</h3>
        <button className='ml-auto flex items-center gap-1 text-sm capitalize text-rose-600'>
          <span>See all</span>
          <IoChevronForward />
        </button>
      </header>

      <RecommendedMovieList />
    </section>
  );
};

export default RecommendedMovies;
