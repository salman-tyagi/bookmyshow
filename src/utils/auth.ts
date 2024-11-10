import { getItem, setItem } from './localStorage';

export const isAuthenticated = (): boolean => {
  const token = getItem('token');
  return token ? true : false;
};

export const getEmail = (): string | undefined => getItem('email');

export const logout = (): void => {
  const city = getItem('city');
  localStorage.clear();
  setItem('city', city);

  location.href = '/';
};
