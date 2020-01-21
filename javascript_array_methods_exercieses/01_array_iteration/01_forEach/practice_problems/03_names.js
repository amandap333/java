/* ------------------------------------------------------------
Use the forEach() method to create a new array containing 
the capitalized version of the names starting with 'S'.

Result Should be: ['Selma', 'Sam', 'Sharon'];

Hint: To get started, you need to define a new array 
to store the new strings:

let sNames = [];
------------------------------------------------------------ */
const names = ['Selma', 'Ted', 'Mike', 'Sam', 'Sharon', 'Marvin'];

let sNames = [];

names.forEach(name => {
  if (name.toLowerCase().charAt(0) === 's') {
    console.log(true);
  } else {
    console.log(false);
  }
});

names.forEach(name => {
  if (name[0].toLowerCase() === 's') {
    console.log(true);
  } else {
    console.log(false);
  }
});


names.forEach(name => {
  name[0].toLowerCase() === 's' 
  ? 
    console.log(true) 
  : 
    console.log(false);
});

names.forEach(name => {
  name[0].toLowerCase() === 's'
    ?
      sNames.push(name)
      :
      null;
});
    
console.log(sNames);