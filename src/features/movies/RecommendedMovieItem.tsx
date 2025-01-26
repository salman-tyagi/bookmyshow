import { Link } from 'react-router-dom';
import { FaStar } from 'react-icons/fa';
import { useAppSelector } from '../hooks/hooks';

import { RecommendedReleases } from './services/apiReleases';

import createSlug from '../utils/createSlug';

interface RecommendedMovieItemProps {
  release: RecommendedReleases;
}

const RecommendedMovieItem = ({
  release: {
    movie: { image, ratingsAverage, votes, title, genres },
    slug
  }
}: RecommendedMovieItemProps): JSX.Element => {
  const { city } = useAppSelector(state => state.cities);
  const citySlug = createSlug(city);

  return (
    <li className='max-w-[14rem] cursor-pointer'>
      <Link to={`/${citySlug}/movies/${slug}`}>
        <div className='mb-2 overflow-clip rounded-lg bg-gray-200'>
          <img loading='lazy' src={`/images/${image}`} alt={`${title}-image`} />
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
      </Link>
    </li>
  );
};

export default RecommendedMovieItem;
