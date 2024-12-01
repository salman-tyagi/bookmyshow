import { useQuery } from '@tanstack/react-query';

import { getMovieReviews } from '../../services/apiReleases';

export const useMovieReviewsQuery = (movieId: string) => {
  const { isLoading, data: reviews = [] } = useQuery({
    queryKey: ['reviews'],
    queryFn: () => getMovieReviews(movieId)
  });

  return { isLoading, reviews };
};
