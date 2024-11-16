import { useQuery } from '@tanstack/react-query';
import { useAppSelector } from '../hooks/hooks';

import Modal from '../ui/Modal';
import SearchBar from '../ui/SearchBar';
import DetectLocation from '../ui/DetectLocation';
import PopularCities from './PopularCities';
import CityList from './CityList';
import CityItem from './CityItem';
import OtherCities from './OtherCities';

import { apiGetAllCities } from './services/apiGetAllCities';

interface CitiesProps {
  onClose(): void;
  onStoreCity(city: string): void;
}

function Cities({ onClose, onStoreCity }: CitiesProps): JSX.Element | null {
  const { data: cities = [] } = useQuery({
    queryKey: ['cities'],
    queryFn: apiGetAllCities
  });

  const { storedCity } = useAppSelector(state => state.cities);

  return (
    <Modal top={96} rounded='' onClose={!storedCity ? () => {} : onClose}>
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
                  onStoreCity={onStoreCity}
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
