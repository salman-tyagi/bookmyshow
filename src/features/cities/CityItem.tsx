import { useNavigate } from 'react-router-dom';

import { City } from './services/apiGetAllCities';
import createSlug from '../utils/createSlug';

interface CityItemProps {
  city: City;
  onCloseCitiesModal(): void;
  onStoreCity(city: string): void;
}

function CityItem({
  city,
  onCloseCitiesModal,
  onStoreCity
}: CityItemProps): JSX.Element {
  const navigate = useNavigate();
  const slugCity = createSlug(city.city);

  const handleSelectCity = (city: string): void => {
    onStoreCity(city);
    onCloseCitiesModal();

    navigate(`/home/${city}`);
    return;
  };

  return (
    <li
      className='group cursor-pointer text-center'
      onClick={() => handleSelectCity(slugCity)}
    >
      <div className='mb-1 max-w-16 justify-self-center'>
        <img
          className='w-full'
          src={`/images/${city.cityImage}`}
          alt={`${slugCity}-image`}
        />
      </div>

      <p className='text-sm font-medium text-stone-500 group-hover:text-stone-700'>
        {slugCity.replace(slugCity[0], slugCity[0].toUpperCase())}
      </p>
    </li>
  );
}

export default CityItem;
