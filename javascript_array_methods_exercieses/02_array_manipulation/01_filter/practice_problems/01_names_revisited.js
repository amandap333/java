// ------------------------------------------------------------
// Using the filter() method on the names array, return an array 
// of only the names that start with "S".
// 
// Result Should be: ['Selma', 'Sam', 'Sharon'];
// ------------------------------------------------------------
const names = ['Selma', 'Ted', 'Mike', 'Sam', 'Sharon', 'Marvin'];

const sNames = names.filter((name) => {
  return name.toLocaleLowerCase()[0] === 's';
});
console.log(sNames);