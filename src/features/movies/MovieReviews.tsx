import { Link } from 'react-router-dom';

import { IoChevronForward } from 'react-icons/io5';

import { useReleaseMovie } from './hooks/useReleaseMovie';

import Spinner from '../ui/Spinner';
import MovieReviewItem from './MovieReviewItem';

import { useAppSelector } from '../hooks/hooks';
import { useMovieReviewsQuery } from './hooks/queries/useMovieReviewsQuery';

function MovieReviews(): JSX.Element {
  const { movieId, movieSlug } = useReleaseMovie();
  const { isLoading, reviews } = useMovieReviewsQuery(movieId);
  const { storedCity } = useAppSelector(state => state.cities);

  if (isLoading) return <Spinner width={32} />;

  return (
    <div className='mx-36 flex'>
      <div className='w-[57rem] border-b border-stone-300 py-9'>
        <div className='mb-5 flex items-center justify-between'>
          <p className='text-2xl font-bold text-black'>Top reviews</p>

          <Link
            to={`/${storedCity}/movies/${movieSlug}/${movieId}/user-reviews`}
            className='space-x-1 text-xl font-semibold text-rose-600'
          >
            <span>
              {reviews.length} {reviews.length > 1 ? 'reviews' : 'review'}
            </span>
            <IoChevronForward className='inline-block text-sm' />
          </Link>
        </div>

        <p className='mb-3 text-stone-600'>
          Summary of {reviews.length}
          {reviews.length > 1 ? ' reviews' : ' review'}.
        </p>

        {reviews.length > 0 && (
          <ul className='flex min-w-full gap-10 overflow-auto'>
            {reviews.slice(0, 5).map(review => (
              <MovieReviewItem key={review.email} review={review} />
            ))}
          </ul>
        )}
      </div>

      <div></div>
    </div>
  );
}

export default MovieReviews;
