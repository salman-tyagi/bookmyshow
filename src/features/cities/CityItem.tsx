import { useNavigate } from 'react-router-dom';

import { City } from './services/apiGetAllCities';

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

  const handleSelectCity = (city: string): void => {
    onStoreCity(city);
    onCloseCitiesModal();

    navigate(`/home/${city.toLowerCase()}`);
    return;
  };

  return (
    <li
      className='group cursor-pointer text-center'
      onClick={() => handleSelectCity(city.city)}
    >
      <div className='mb-1 max-w-16 justify-self-center'>
        <img
          className='w-full'
          src={`/images/${city.cityImage}`}
          alt={`${city.city}-image`}
        />
      </div>

      <p className='text-sm font-medium text-stone-500 group-hover:text-stone-700'>
        {city.city}
      </p>
    </li>
  );
}

export default CityItem;
