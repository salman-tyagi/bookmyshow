import { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from '../hooks/hooks';

import { TbCurrentLocation } from 'react-icons/tb';

import Spinner from './Spinner';

import fetchCity from '../utils/fetchCity';
import createSlug from '../utils/createSlug';
import { setItem } from '../utils/localStorage';
import { setCity } from '../cities/slices/citySlice';

interface DetectLocationProps {
  onCloseCities(): void;
}

function DetectLocation({ onCloseCities }: DetectLocationProps): JSX.Element {
  const [loading, setLoading] = useState(false);
  const locationDeniedRef = useRef('');
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleDetectLocation = async (): Promise<void> => {
    try {
      setLoading(true);

      const city = createSlug(await fetchCity());
      const _city = city === 'delhi' ? 'delhi-ncr' : city;

      setItem('city', _city);
      dispatch(setCity(_city));

      onCloseCities();
      navigate(`/home/${_city}`);
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

      {loading && <Spinner position='left' width={18} borderWidth={3} />}

      {!loading && locationDeniedRef.current && (
        <em className='text-xs text-rose-500'>{locationDeniedRef.current}</em>
      )}
    </div>
  );
}

export default DetectLocation;
