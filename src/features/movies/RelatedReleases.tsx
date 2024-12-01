import { Link } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';

import { IoChevronForward } from 'react-icons/io5';

import { useAppSelector } from '../hooks/hooks';
import { useReleaseMovie } from './hooks/useReleaseMovie';

import Spinner from '../ui/Spinner';
import RelatedReleaseItem from './RelatedReleaseItem';

import { getAllRelatedReleases } from './services/apiReleases';

function RelatedReleases(): JSX.Element {
  const { movieSlug } = useReleaseMovie();

  const { isLoading, data: relatedReleases = [] } = useQuery({
    queryKey: ['relatedReleases'],
    queryFn: () => getAllRelatedReleases(movieSlug)
  });

  const { storedCity } = useAppSelector(state => state.cities);

  if (isLoading) return <Spinner />;

  return (
    <div className='mx-36 flex'>
      <div className='w-[57rem] border-b border-stone-300 py-9'>
        <div className='mb-5 flex items-center justify-between'>
          <p className='text-2xl font-bold text-black'>You might also like</p>
          <Link
            to={`/explore/movies-${storedCity}`}
            className='space-x-1 text-xl font-semibold text-rose-600'
          >
            <span className='text-lg'>View All</span>
            <IoChevronForward className='inline-block text-sm' />
          </Link>
        </div>

        {relatedReleases.length > 0 && (
          <ul className='flex min-w-full gap-8 overflow-auto'>
            {relatedReleases.map(relatedRelease => (
              <RelatedReleaseItem
                key={relatedRelease.movie._id}
                relatedRelease={relatedRelease}
              />
            ))}
          </ul>
        )}
      </div>

      <div></div>
    </div>
  );
}

export default RelatedReleases;
