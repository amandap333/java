/* ------------------------------------------------------------
Using forEach, capitalize all the strings in the months 
array and store them in the array capitalizedMonths.

filteredColors should be: ['JANUARY', 'FEBRUARY', 'MARCH', 'APRIL', 'MAY']
------------------------------------------------------------ */
const months = ['january', 'february', 'march', 'april', 'may'];
capitalizedMonths = [];

months.forEach((month) => {
  let capitalizedMonth = month.toUpperCase();
  capitalizedMonths.push(capitalizedMonth);
});
console.log(capitalizedMonths);