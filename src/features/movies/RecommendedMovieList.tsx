import { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { useAppDispatch, useAppSelector } from '../hooks/hooks';
import { IoChevronForward } from 'react-icons/io5';
import { IoChevronBack } from 'react-icons/io5';

import RecommendedMovieItem from './RecommendedMovieItem';
import Spinner from '../../ui/Spinner';

import { getAllReleases } from '../../services/movies/getAllReleases';

const RecommendedMovieList = (): JSX.Element => {
  const [translateCount, setTranslateCount] = useState(0);
  const { movies: releases } = useAppSelector(state => state.releases);

  const dispatch = useAppDispatch();

  const fetchReleases = async (): Promise<void> => {
    try {
      const res = await dispatch(getAllReleases());

      if (!res.payload) {
        toast.error('Failed to fetch movies', { id: 'failed' });
        return;
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    if (releases.length) return;
    fetchReleases();
  }, []);

  if (!releases.length)
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
