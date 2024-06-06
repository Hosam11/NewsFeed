export const formatDate = (date: Date): string => {
  console.log('formatDate: date >> ' + date);
  return new Intl.DateTimeFormat('en-GB', {
    day: '2-digit',
    month: 'long',
    year: 'numeric',
  }).format(date);
};
