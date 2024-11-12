import { FaStar } from 'react-icons/fa';

interface RateMovieProps {
  ratings: number;
  votes: number;
}

function RateMovie({ ratings, votes }: RateMovieProps): JSX.Element {
  return (
    <div className='mb-6 flex max-w-fit items-center gap-2 rounded-lg bg-[#333] px-5 py-3'>
      <FaStar size={22} className='inline-block text-rose-400' />
      <span className='text-lg font-semibold'>{ratings}/10</span>
      <span className='font-medium'>({votes} Votes)</span>

      <button className='ml-36 rounded-lg bg-white px-4 py-2 text-lg font-semibold text-stone-800'>
        Rate now
      </button>
    </div>
  );
}

export default RateMovie;
