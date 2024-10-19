import { useEffect, useState } from 'react';
import toast from 'react-hot-toast';

import { getAllReleases } from '../services/movies/getAllReleases';
import RecommendedMovieItem from './RecommendedMovieItem';
import { Release } from '../services/movies/getAllReleases';

const RecommendedMovieList = (): JSX.Element => {
  const [releases, setReleases] = useState<Release[]>([]);

  const fetchReleases = async (): Promise<void> => {
    try {
      const data = await getAllReleases();
      if (data?.status === 'fail') {
        toast.error('Failed to fetch');
        return;
      }

      if (data?.data) setReleases(data.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchReleases();
  }, []);

  return (
    <div className='no-scrollbar overflow-auto'>
      {releases.length > 0 && (
        <ul className='grid min-w-max grid-cols-10 gap-8'>
          {releases.map(release => (
            <RecommendedMovieItem key={release._id} release={release} />
          ))}
        </ul>
      )}
    </div>
  );
};

export default RecommendedMovieList;
