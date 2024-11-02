const getCity = (): string => {
  const city = localStorage.getItem('city');
  return city || '';
};

export default getCity;
