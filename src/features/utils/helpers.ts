const days = ['sun', 'mon', 'tues', 'wed', 'thurs', 'fri', 'sat'];

// prettier-ignore
const months = ['jan', 'feb', 'mar', 'apr', 'may', 'jun', 'jul', 'aug', 'sept', 'oct', 'nov', 'dec'];

export interface IDateWithWords {
  day: string;
  date: number;
  month: string;
}

export const dateWithWords = (dates: string[]): IDateWithWords[] => {
  const parsedDates = dates.map(dateString => {
    const day = days[new Date(dateString).getDay()];
    const date = new Date(dateString).getDate();
    const month = months[new Date(dateString).getMonth()];

    return { day, date, month };
  });

  return parsedDates;
};

export const parseDateStringToDate = (dateString: string): Date => {
  const month = parseInt(dateString.slice(0, 2), 10) - 1;
  const day = parseInt(dateString.slice(2, 4), 10);
  const year = parseInt(dateString.slice(-4), 10);

  return new Date(year, month, day);
};

export const formatDate = (date: string): string => {
  const dateString = new Intl.DateTimeFormat('en-IN')
    .format(new Date(date))
    .slice()
    .split('/')
    .map(item => item.padStart(2, '0'))
    .reverse()
    .join('');

  return dateString;
};

export const formatTime = (date: string): string => {
  return new Date(date).toLocaleTimeString('en-IN', {
    hour: '2-digit',
    minute: '2-digit'
  });
};
