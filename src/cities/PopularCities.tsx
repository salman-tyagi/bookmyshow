import CityList from './CityList';

function PopularCities(): JSX.Element {
  return (
    <div className='p-4'>
      <p className='mb-4 text-center'>Popular Cities</p>
      <CityList />
    </div>
  );
}

export default PopularCities;
