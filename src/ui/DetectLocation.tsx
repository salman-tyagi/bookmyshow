import { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { TbCurrentLocation } from 'react-icons/tb';

import Spinner from './Spinner';

import getPosition from '../utils/getPosition';

interface DetectLocationProps {
  onCloseCities(): void;
}

function DetectLocation({ onCloseCities }: DetectLocationProps): JSX.Element {
  const [loading, setLoading] = useState(false);
  const locationDeniedRef = useRef('');

  const navigate = useNavigate();

  const handleDetectLocation = async (): Promise<void> => {
    try {
      setLoading(true);

      const city = await getPosition();

      const _city = city === 'Delhi' ? 'Delhi-NCR' : city;
      localStorage.setItem('city', _city);

      onCloseCities();
      navigate(`/home/${_city.toLowerCase()}`);
    } catch (err) {
      if (err instanceof Error) locationDeniedRef.current = err.message;
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className='flex items-center border-b pb-3'>
      <button
        className='flex items-center gap-3 px-4 text-rose-500'
        onClick={handleDetectLocation}
      >
        <TbCurrentLocation />
        <span className='text-sm font-medium'>Detect my location</span>
      </button>

      {loading && <Spinner width={18} borderWidth={3} />}

      {!loading && locationDeniedRef.current && (
        <em className='text-xs text-rose-500'>{locationDeniedRef.current}</em>
      )}
    </div>
  );
}

export default DetectLocation;
