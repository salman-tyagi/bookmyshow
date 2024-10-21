import { useEffect, useState } from 'react';
import toast from 'react-hot-toast';

import { getAllReleases } from '../services/movies/getAllReleases';
import RecommendedMovieItem from './RecommendedMovieItem';
import { Release } from '../services/movies/getAllReleases';

import { IoChevronForward } from 'react-icons/io5';
import { IoChevronBack } from 'react-icons/io5';

const RecommendedMovieList = (): JSX.Element => {
  const [releases, setReleases] = useState<Release[]>([]);
  const [translateCount, setTranslateCount] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  const fetchReleases = async (): Promise<void> => {
    try {
      setIsLoading(true);
      const data = await getAllReleases();
      if (data?.status === 'fail') {
        toast.error('Failed to fetch');
        return;
      }

      if (data?.data) setReleases(data.data);
      setIsLoading(false);
    } catch (err) {
      console.log(err);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchReleases();
  }, []);

  if (isLoading) return <p className='text-xl font-bold'>LOADING...</p>;

  return (
    <div className='relative'>
      <div className='overflow-clip'>
        {releases.length > 0 && (
          <ul
            className={`grid min-w-max grid-cols-10 gap-8`}
            style={{
              transition: 'transform 1s ease-in-out',
              transform: `translateX(-${translateCount ? `${50.5 * translateCount}%` : 0})`
            }}
          >
            {releases.map(release => (
              <RecommendedMovieItem key={release._id} release={release} />
            ))}
          </ul>
        )}
      </div>

      {translateCount > 0 ? (
        <button
          className='absolute -left-4 top-[42%] flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-stone-400 text-xl font-bold text-white'
          onClick={() => {
            if (translateCount === 0) return;
            setTranslateCount(c => c - 1);
          }}
        >
          <IoChevronBack />
        </button>
      ) : (
        <button
          className='absolute -right-4 top-[42%] flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-stone-400 text-xl font-bold text-white'
          onClick={() => {
            if (translateCount !== 0) return;
            setTranslateCount(c => c + 1);
          }}
        >
          <IoChevronForward />
        </button>
      )}
    </div>
  );
};

export default RecommendedMovieList;
