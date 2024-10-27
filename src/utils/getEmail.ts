const getEmail = (): string => {
  const email = localStorage.getItem('email');
  return email || '';
};

export default getEmail;
