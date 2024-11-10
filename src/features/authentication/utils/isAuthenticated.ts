import { getItem } from '../../utils/localStorage';

export const isAuthenticated = (): boolean => {
  const token = getItem('token');
  return token ? true : false;
};
