export const truncateString = (str: string, length: number) => {
  return str.substring(0, length) + '...';
};