import { useParams } from 'react-router-dom';
import { useMovieReviewsQuery } from '../movies/hooks/queries/useMovieReviewsQuery';

import Spinner from '../ui/Spinner';

function UserReviews(): JSX.Element {
  const { movieId } = useParams<{ movieId: string }>();
  const { isLoading, reviews } = useMovieReviewsQuery(movieId!);

  if (isLoading) return <Spinner />;

  return <div>{JSON.stringify(reviews.map(review => review.review))}</div>;
}

export default UserReviews;
