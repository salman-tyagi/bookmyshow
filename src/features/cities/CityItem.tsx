import { useNavigate } from 'react-router-dom';
import { City } from './citiesSlice';

interface CityItemProps {
  city: City;
  onCloseCitiesModal(): void;
}

function CityItem({ city, onCloseCitiesModal }: CityItemProps): JSX.Element {
  const navigate = useNavigate();

  const handleSelectCity = (city: string): void => {
    localStorage.setItem('city', city);
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
