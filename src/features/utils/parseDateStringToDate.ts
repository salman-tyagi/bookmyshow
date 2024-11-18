const parseDateStringToDate = (dateString: string): Date => {
  const month = parseInt(dateString.slice(0, 2), 10) - 1;
  const day = parseInt(dateString.slice(2, 4), 10);
  const year = parseInt(dateString.slice(-4), 10);

  return new Date(year, month, day);
};

export default parseDateStringToDate;
