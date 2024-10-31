import { TbCurrentLocation } from 'react-icons/tb';

function DetectLocation(): JSX.Element {
  return (
    <>
      <button className='flex items-center gap-3 px-4 pb-3 text-rose-500'>
        <TbCurrentLocation />
        <span className='text-sm font-medium'>Detect my location</span>
      </button>
      <div className='border-b'></div>
    </>
  );
}

export default DetectLocation;
