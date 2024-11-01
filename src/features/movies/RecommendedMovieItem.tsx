import { Release } from '../../services/movies/getAllReleases';

import { FaStar } from 'react-icons/fa';

interface RecommendedMovieItem {
  release: Release;
}

const RecommendedMovieItem = ({
  release: {
    movie: { image, ratingsAverage, votes, title, genres }
  }
}: RecommendedMovieItem): JSX.Element => {
  return (
    <li className='max-w-[223.8px]'>
      <div className='mb-2 overflow-clip rounded-lg bg-gray-200'>
        <img src={`images/${image}`} alt='picture-img-name' />
        <div className='flex items-center gap-2 bg-black px-3 py-2 text-lg leading-none text-white'>
          <span>
            <FaStar className='text-red-600' />
          </span>
          <span>{ratingsAverage}/10</span>
          <span>
            {votes} {`${votes > 1 ? 'votes' : 'vote'}`}
          </span>
        </div>
      </div>

      <p className='mb-1 text-lg font-bold text-stone-800'>{title}</p>
      <p className='font-medium'>
        {genres
          .map(genre => `${genre[0].toUpperCase()}${genre.slice(1)}`)
          .slice(0, 3)
          .join('/')}
      </p>
    </li>
  );
};

export default RecommendedMovieItem;
