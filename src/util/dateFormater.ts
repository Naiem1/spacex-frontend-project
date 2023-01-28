export const dateFormatter = (
  myDate: string
): { day: string; month: string; monthCount: string; year: string } => {
  const dateString = new Date(myDate).toDateString();
  const [day, month, date, year] = dateString.split(' ');

  return {
    day,
    month,
    date,
    year,
  };
};
