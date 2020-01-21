/* ------------------------------------------------------------
Use reduce() to add up the total number of names that start 
with the letter 'G'.

Result should be: 4
------------------------------------------------------------ */
const names = ['Gary', 'Pasan', 'Gabe', 'Treasure', 'Gengis', 'Gladys', 'Tony'];
namesG = names.reduce((gname,name)=>{
  if (name[0]==='G'){
  return gname + 1 
  };
  return gname;
},0);

