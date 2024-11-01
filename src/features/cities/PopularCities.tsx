import { ReactNode } from 'react';

interface PopularCitiesProps {
  children: ReactNode;
}

function PopularCities({ children }: PopularCitiesProps): ReactNode {
  return children;
}

export default PopularCities;
