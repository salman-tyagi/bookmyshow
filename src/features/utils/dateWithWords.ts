const days = ['sun', 'mon', 'tues', 'wed', 'thurs', 'fri', 'sat'];

// prettier-ignore
const months = ['jan', 'feb', 'mar', 'apr', 'may', 'jun', 'jul', 'aug', 'sept', 'oct', 'nov', 'dec'];

export interface IDateWithWords {
  day: string;
  date: number;
  month: string;
}

const dateWithWords = (dates: string[]): IDateWithWords[] => {
  const parsedDates = dates.map(dateString => {
    const day = days[new Date(dateString).getDay()];
    const date = new Date(dateString).getDate();
    const month = months[new Date(dateString).getMonth()];

    return { day, date, month };
  });

  return parsedDates;
};

export default dateWithWords;
