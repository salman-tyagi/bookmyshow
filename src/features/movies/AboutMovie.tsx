import { useReleaseMovie } from './hooks/useReleaseMovie';

function AboutMovie(): JSX.Element {
  const { about } = useReleaseMovie();

  return (
    <div className='mx-36 flex'>
      <div className='w-[57rem] border-b border-stone-300 py-9'>
        <p className='mb-3 text-2xl font-bold text-black'>About the movie</p>
        <p className='font-medium'>{about}</p>
      </div>

      <div></div>
    </div>
  );
}

export default AboutMovie;
