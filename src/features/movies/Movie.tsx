import Spinner from '../../ui/Spinner';

import useMovie, { Movie as IMovie } from '../hooks/useMovie';

function Movie(): JSX.Element {
  const { isLoading } = useMovie() as { isLoading: boolean };

  const {
    title,
    image,
    poster,
    certification,
    releaseDate,
    screens,
    languages,
    durationInHours,
    durationInMins,
    genres
  } = useMovie() as IMovie;

  return (
    <section
      className='flex h-[30rem] items-center gap-8 bg-black bg-right bg-no-repeat px-36 py-6 text-white'
      style={{
        backgroundImage: `linear-gradient(90deg, #1a1a1a 32%, #00000033 70%, #1a1a1a 98%), url(/images/${poster})`
      }}
    >
      {!isLoading ? (
        <>
          <div className='max-w-64 overflow-clip rounded-md bg-black text-center text-sm font-semibold'>
            <img
              className='w-full'
              src={`/images/${image}`}
              alt={`${title}-image`}
            />

            <p className='pb-1 pt-2 text-sm'>In cinemas &bull; Streaming now</p>
          </div>

          <div className='w-[32rem]'>
            <p className='mb-6 text-4xl font-bold'>{title}</p>
            <p className='mb-2 w-fit rounded bg-stone-200 p-2 font-medium text-stone-800'>
              {screens}
            </p>
            <p className='mb-5 w-fit rounded bg-stone-200 px-2 py-1 font-medium text-stone-800'>
              {languages}
            </p>

            <div className='mb-8 flex flex-wrap items-center gap-2 font-medium'>
              <p>
                <span>{Math.floor(durationInHours)}</span>h{' '}
                <span>{durationInMins}</span>m
              </p>

              <span className='text-xs'>&bull;</span>

              <p>{genres}</p>

              <span className='text-xs'>&bull;</span>

              <p>{certification}</p>

              <span className='text-xs'>&bull;</span>

              <p>
                {new Date(releaseDate).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'short',
                  day: '2-digit'
                })}
              </p>
            </div>

            <div className='space-x-4'>
              <button className='w-52 rounded-md bg-rose-500 px-2 py-3 font-semibold text-white hover:bg-rose-600 active:bg-rose-500'>
                Book tickets
              </button>

              <button className='w-52 rounded-md bg-rose-500 px-2 py-3 font-semibold text-white hover:bg-rose-600 active:bg-rose-500'>
                Buy or Rent
              </button>
            </div>
          </div>
        </>
      ) : (
        <div className='mx-auto'>
          <Spinner width={48} borderWidth={10} />
        </div>
      )}
    </section>
  );
}

export default Movie;
