export const dateFormatter = (myDate: string) => {
  const dateString: string = new Date(myDate).toDateString();
  const [day, month, date, year] = dateString.split(' ');

  return {
    day,
    month,
    date,
    year,
  };
};
