import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../hooks/hooks';

import Modal from '../../ui/Modal';
import SearchBar from '../../ui/SearchBar';
import DetectLocation from '../../ui/DetectLocation';
import PopularCities from './PopularCities';
import CityList from './CityList';
import CityItem from './CityItem';
import OtherCities from './OtherCities';

import { getAllCities } from '../../services/cities/getAllCities';

interface CitiesProps {
  onClose(): void;
}

function Cities({ onClose }: CitiesProps): JSX.Element {
  const dispatch = useAppDispatch();
  const { cities } = useAppSelector(state => state.cities);

  useEffect(() => {
    if (cities.length) return;

    dispatch(getAllCities());
  }, [dispatch, cities]);

  return (
    <Modal top={96} rounded='' onClose={onClose}>
      <div className='p-4'>
        <SearchBar placeholder='Search for your city' text='sm' />
      </div>

      <DetectLocation onCloseCities={onClose} />

      <PopularCities>
        <div className='p-4'>
          <p className='mb-4 text-center'>Popular Cities</p>
          <CityList cities={cities}>
            <ul className='grid grid-cols-10 gap-6'>
              {cities.map(city => (
                <CityItem
                  key={city._id}
                  city={city}
                  onCloseCitiesModal={onClose}
                />
              ))}
            </ul>
          </CityList>
        </div>
      </PopularCities>

      <OtherCities />
    </Modal>
  );
}

export default Cities;
