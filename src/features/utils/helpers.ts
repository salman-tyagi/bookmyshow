// prettier-ignore
const days = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];

// prettier-ignore
const months = ['january', 'february', 'march', 'april', 'may', 'june', 'july', 'august', 'september', 'october', 'november', 'december'];

export interface IDateWithWords {
  day: string;
  date: number;
  month: string;
  year: number;
}

export const dateWithWords = (dates: string[]): IDateWithWords[] => {
  const parsedDates = dates.map(dateString => {
    const day = days[new Date(dateString).getDay()].slice(0, 3);
    const date = new Date(dateString).getDate();
    const month = months[new Date(dateString).getMonth()].slice(0, 3);
    const year = new Date(dateString).getFullYear();

    return { day, date, month, year };
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

export const atWhatDay = (dateString: string): string => {
  const numDate = new Date(dateString).getDate();
  const numCurrentDate = new Date().getDate();

  if (numDate === numCurrentDate) return 'today';
  if (numDate === numCurrentDate + 1) return 'tomorrow';
  return days[new Date(dateString).getDay()];
};
