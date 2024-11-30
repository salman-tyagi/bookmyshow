import { useReleaseMovie } from './hooks/useReleaseMovie';

function MovieCrew(): JSX.Element {
  const {
    crew: {
      director = [],
      actionDirector = [],
      producer = [],
      creativeProducer = [],
      executiveProducer = [],
      cinematographer = [],
      editor = [],
      writer = [],
      musician = [],
      singer = [],
      lyricist = [],
      screenplay = []
    } = {}
  } = useReleaseMovie();

  return (
    <div className='mx-36'>
      <div className='w-[57rem] border-b border-stone-300 py-9'>
        <p className='mb-3 text-2xl font-bold text-black'>Crew</p>

        <div className='flex gap-7 overflow-auto text-center'>
          {director.length > 0 && (
            <ul className='flex gap-7'>
              {director.map((dir, i) => (
                <li key={i}>
                  <div className='mb-2 h-32 w-32 overflow-hidden rounded-full bg-stone-200'>
                    <img
                      className='w-full'
                      src='/images/favicon.avif'
                      alt={`photo of ${dir}`}
                    />
                  </div>
                  <p className='font-medium'>{dir}</p>
                  <p>Director</p>
                </li>
              ))}
            </ul>
          )}

          {actionDirector.length > 0 && (
            <ul className='flex gap-7'>
              {actionDirector.map((dir, i) => (
                <li key={i}>
                  <div className='mb-2 h-32 w-32 overflow-hidden rounded-full bg-stone-200'>
                    <img
                      className='w-full'
                      src='/images/favicon.avif'
                      alt={`photo of ${dir}`}
                    />
                  </div>
                  <p className='font-medium'>{dir}</p>
                  <p>ActionDirector</p>
                </li>
              ))}
            </ul>
          )}

          {producer.length > 0 && (
            <ul className='flex gap-7'>
              {producer.map((pro, i) => (
                <li key={i}>
                  <div className='mb-2 h-32 w-32 overflow-hidden rounded-full bg-stone-200'>
                    <img
                      className='w-full'
                      src='/images/favicon.avif'
                      alt={`photo of ${pro}`}
                    />
                  </div>
                  <p className='font-medium'>{pro}</p>
                  <p>Producer</p>
                </li>
              ))}
            </ul>
          )}

          {creativeProducer.length > 0 && (
            <ul className='flex gap-7'>
              {creativeProducer.map((dir, i) => (
                <li key={i}>
                  <div className='mb-2 h-32 w-32 overflow-hidden rounded-full bg-stone-200'>
                    <img
                      className='w-full'
                      src='/images/favicon.avif'
                      alt={`photo of ${dir}`}
                    />
                  </div>
                  <p className='font-medium'>{dir}</p>
                  <p>CreativeProducer</p>
                </li>
              ))}
            </ul>
          )}

          {executiveProducer.length > 0 && (
            <ul className='flex gap-7'>
              {executiveProducer.map((dir, i) => (
                <li key={i}>
                  <div className='mb-2 h-32 w-32 overflow-hidden rounded-full bg-stone-200'>
                    <img
                      className='w-full'
                      src='/images/favicon.avif'
                      alt={`photo of ${dir}`}
                    />
                  </div>
                  <p className='font-medium'>{dir}</p>
                  <p>ExecutiveProducer</p>
                </li>
              ))}
            </ul>
          )}

          {cinematographer.length > 0 && (
            <ul className='flex gap-7'>
              {cinematographer.map((dir, i) => (
                <li key={i}>
                  <div className='mb-2 h-32 w-32 overflow-hidden rounded-full bg-stone-200'>
                    <img
                      className='w-full'
                      src='/images/favicon.avif'
                      alt={`photo of ${dir}`}
                    />
                  </div>
                  <p className='font-medium'>{dir}</p>
                  <p>Cinematographer</p>
                </li>
              ))}
            </ul>
          )}

          {editor.length > 0 && (
            <ul className='flex gap-7'>
              {editor.map((dir, i) => (
                <li key={i}>
                  <div className='mb-2 h-32 w-32 overflow-hidden rounded-full bg-stone-200'>
                    <img
                      className='w-full'
                      src='/images/favicon.avif'
                      alt={`photo of ${dir}`}
                    />
                  </div>
                  <p className='font-medium'>{dir}</p>
                  <p>Editor</p>
                </li>
              ))}
            </ul>
          )}

          {writer.length > 0 && (
            <ul className='flex gap-7'>
              {writer.map((dir, i) => (
                <li key={i}>
                  <div className='mb-2 h-32 w-32 overflow-hidden rounded-full bg-stone-200'>
                    <img
                      className='w-full'
                      src='/images/favicon.avif'
                      alt={`photo of ${dir}`}
                    />
                  </div>
                  <p className='font-medium'>{dir}</p>
                  <p>Writer</p>
                </li>
              ))}
            </ul>
          )}

          {musician.length > 0 && (
            <ul className='flex gap-7'>
              {musician.map((item, i) => (
                <li key={i}>
                  <div className='mb-2 h-32 w-32 overflow-hidden rounded-full bg-stone-200'>
                    <img
                      className='w-full'
                      src='/images/favicon.avif'
                      alt={`photo of ${item}`}
                    />
                  </div>
                  <p className='font-medium'>{item}</p>
                  <p>Musician</p>
                </li>
              ))}
            </ul>
          )}

          {singer.length > 0 && (
            <ul className='flex gap-7'>
              {singer.map((dir, i) => (
                <li key={i}>
                  <div className='mb-2 h-32 w-32 overflow-hidden rounded-full bg-stone-200'>
                    <img
                      className='w-full'
                      src='/images/favicon.avif'
                      alt={`photo of ${dir}`}
                    />
                  </div>
                  <p className='font-medium'>{dir}</p>
                  <p>Singer</p>
                </li>
              ))}
            </ul>
          )}

          {lyricist.length > 0 && (
            <ul className='flex gap-7'>
              {lyricist.map((dir, i) => (
                <li key={i}>
                  <div className='mb-2 h-32 w-32 overflow-hidden rounded-full bg-stone-200'>
                    <img
                      className='w-full'
                      src='/images/favicon.avif'
                      alt={`photo of ${dir}`}
                    />
                  </div>
                  <p className='font-medium'>{dir}</p>
                  <p>Lyricist</p>
                </li>
              ))}
            </ul>
          )}

          {screenplay.length > 0 && (
            <ul className='flex gap-7'>
              {screenplay.map((item, i) => (
                <li key={i}>
                  <div className='mb-2 h-32 w-32 overflow-hidden rounded-full bg-stone-200'>
                    <img
                      className='w-full'
                      src='/images/favicon.avif'
                      alt={`photo of ${item}`}
                    />
                  </div>
                  <p className='font-medium'>{item}</p>
                  <p>Screenplay</p>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>

      <div></div>
    </div>
  );
}

export default MovieCrew;
