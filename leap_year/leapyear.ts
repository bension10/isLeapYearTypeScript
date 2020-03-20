// check if year is leap year
const isLeapYear = (year: number): boolean => {
  return (year % 100 === 0) ? (year % 400 === 0) : (year % 4 === 0);
}

console.log(isLeapYear(2000));