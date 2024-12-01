import { useQuery } from '@tanstack/react-query';
import { getRelease } from '../../services/apiReleases';

export const useReleasesQuery = (slug: string) => {
  const { isLoading, data: release } = useQuery({
    queryKey: ['movie'],
    queryFn: () => getRelease(slug!)
  });

  return { isLoading, release };
};
