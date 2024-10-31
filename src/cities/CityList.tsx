import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../hooks/hooks';

import { getAllCities } from '../services/cities/getAllCities';
import CityItem from './CityItem';
import Spinner from '../ui/Spinner';

function CityList(): JSX.Element {
  const dispatch = useAppDispatch();
  const { cities } = useAppSelector(state => state.cities);

  useEffect(() => {
    dispatch(getAllCities());
  }, [dispatch]);

  if (!cities.length) return <Spinner />;

  return (
    <ul className='grid grid-cols-10 justify-around gap-6'>
      {cities.map(city => (
        <CityItem key={city._id} city={city} />
      ))}
    </ul>
  );
}

export default CityList;
