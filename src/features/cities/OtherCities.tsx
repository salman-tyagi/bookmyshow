import { useState } from 'react';

function OtherCities(): JSX.Element {
  const [showOtherCities, setShowOtherCities] = useState(false);

  return (
    <>
      {showOtherCities && (
        <div className='p-4'>
          <p className='mb-4 text-center'>Other Cities</p>

          <div className='grid grid-cols-5 text-xs font-medium text-stone-500'>
            <ul>
              {Array.from({ length: 7 }, (_, i) => i).map(item => (
                <li key={item} className='cursor-pointer hover:text-stone-700'>
                  {item}
                </li>
              ))}
            </ul>

            <ul>
              {Array.from({ length: 7 }, (_, i) => i).map(item => (
                <li key={item} className='cursor-pointer hover:text-stone-700'>
                  {item}
                </li>
              ))}
            </ul>

            <ul>
              {Array.from({ length: 7 }, (_, i) => i).map(item => (
                <li key={item} className='cursor-pointer hover:text-stone-700'>
                  {item}
                </li>
              ))}
            </ul>

            <ul>
              {Array.from({ length: 7 }, (_, i) => i).map(item => (
                <li key={item} className='cursor-pointer hover:text-stone-700'>
                  {item}
                </li>
              ))}
            </ul>

            <ul>
              {Array.from({ length: 7 }, (_, i) => i).map(item => (
                <li key={item} className='cursor-pointer hover:text-stone-700'>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}

      <div className='p-4 text-center'>
        <button
          className='capitalize text-rose-600'
          onClick={() => setShowOtherCities(show => !show)}
        >
          {showOtherCities ? 'Hide all cities' : 'View all cities'}
        </button>
      </div>
    </>
  );
}

export default OtherCities;
