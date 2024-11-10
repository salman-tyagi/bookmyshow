import { getItem, setItem } from '../../utils/localStorage';

export const logout = (): void => {
  const city = getItem('city');
  localStorage.clear();
  setItem('city', city);

  location.href = '/';
};
