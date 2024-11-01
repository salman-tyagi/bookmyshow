import { ReactNode } from 'react';

import { City } from './citiesSlice';

import Spinner from '../../ui/Spinner';

interface CityListProps {
  children: ReactNode;
  cities: City[];
}

function CityList({ children, cities }: CityListProps): ReactNode {
  if (!cities.length) return <Spinner />;

  return children;
}

export default CityList;
