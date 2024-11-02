export const isAuthenticated = (): boolean => {
  const token = localStorage.getItem('token');
  return token ? true : false;
};

export const getEmail = (): string => {
  const email = localStorage.getItem('email');
  return email || '';
};

export const logout = (): void => {
  const city = localStorage.getItem('city');
  localStorage.clear();
  localStorage.setItem('city', city!);

  location.href = '/';
};
