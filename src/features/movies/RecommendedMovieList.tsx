import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';

import { IoChevronForward } from 'react-icons/io5';
import { IoChevronBack } from 'react-icons/io5';

import RecommendedMovieItem from './RecommendedMovieItem';

import { getAllReleases } from './services/apiReleases';
import Spinner from '../ui/Spinner';

const RecommendedMovieList = (): JSX.Element => {
  const [translateCount, setTranslateCount] = useState(0);

  const { isLoading, data: releases = [] } = useQuery({
    queryKey: ['releases'],
    queryFn: getAllReleases
  });

  if (isLoading)
    return (
      <div className='my-10 flex h-64 items-center justify-center'>
        <Spinner width={50} />
      </div>
    );

  return (
    <div className='relative'>
      <div className='overflow-clip'>
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
      </div>

      {releases.length > 5 &&
        (translateCount > 0 ? (
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
        ))}
    </div>
  );
};

export default RecommendedMovieList;
