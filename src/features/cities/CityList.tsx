import { ReactNode } from 'react';

import Spinner from '../ui/Spinner';

import { City } from './services/apiGetAllCities';

interface CityListProps {
  children: ReactNode;
  cities: City[];
}

function CityList({ children, cities }: CityListProps): ReactNode {
  if (!cities.length) return <Spinner />;

  return children;
}

export default CityList;
