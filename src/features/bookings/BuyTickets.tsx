import { useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';

import Spinner from '../ui/Spinner';

import { getReleaseDetails } from '../movies/services/apiReleases';

// import parseDateStringToDate from '../utils/parseDateStringToDate';

function BuyTickets(): JSX.Element {
  const params = useParams();

  const id = params.releaseId?.split('-').slice(-1).join('') as string;
  // const date = parseDateStringToDate(params.date as string);

  const { isLoading, data: releaseDetails } = useQuery({
    queryKey: ['release'],
    queryFn: () => getReleaseDetails(id)
  });

  if (isLoading) return <Spinner />;

  const movie = releaseDetails?.movie;
  const theatre = releaseDetails?.theatre;

  const { title, certification, genres } = movie || {};

  return (
    <div className='container mx-auto'>
      <header className='pb-3 pt-7'>
        <h1 className='mb-2 text-4xl font-semibold text-stone-700'>{title}</h1>

        <div className='flex items-center gap-3'>
          <p className='flex h-6 w-6 items-center justify-center rounded-full border-2 border-stone-500 p-3 text-sm font-semibold text-stone-500'>
            {certification}
          </p>
          <ul className='flex items-center gap-2'>
            {genres?.map(genre => <Genre genre={genre} key={genre} />)}
          </ul>
        </div>
      </header>
    </div>
  );
}

function Genre({ genre }: { genre: string }): JSX.Element {
  return (
    <li className='rounded-full border border-stone-600 px-2 py-[2px] text-[10px] uppercase text-stone-600'>
      {genre}
    </li>
  );
}

export default BuyTickets;
