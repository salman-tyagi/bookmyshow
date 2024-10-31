import { City } from './citiesSlice';

interface CityItemProps {
  city: City;
}

function CityItem({ city }: CityItemProps): JSX.Element {
  return (
    <li className='group cursor-pointer text-center'>
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
