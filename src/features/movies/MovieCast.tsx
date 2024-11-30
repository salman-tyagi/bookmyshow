import { useReleaseMovie } from './hooks/useReleaseMovie';

function MovieCast(): JSX.Element {
  const { cast: { actor = [], actress = [] } = {} } = useReleaseMovie();

  const movieCast = [...actor, ...actress];

  return (
    <div className='mx-36 flex'>
      <div className='w-[57rem] border-b border-stone-300 py-9'>
        <p className='mb-3 text-2xl font-bold text-black'>Cast</p>
        {movieCast.length ? (
          <ul className='flex gap-7 overflow-auto text-center'>
            {movieCast.map((cast, i) => (
              <CastItem key={i} cast={cast} />
            ))}
          </ul>
        ) : null}
      </div>

      <div></div>
    </div>
  );
}

function CastItem({ cast }: { cast: string }): JSX.Element {
  return (
    <li>
      <div className='mb-2 h-32 w-32 overflow-hidden rounded-full bg-stone-200'>
        <img
          className='w-full'
          src='/images/favicon.avif'
          alt={`photo of ${cast}`}
        />
      </div>
      <p className='font-medium'>{cast}</p>
    </li>
  );
}

export default MovieCast;
