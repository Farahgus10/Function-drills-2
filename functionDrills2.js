'use strict';

function jediName(firstName, lastName){
  const firstJediName = lastName.slice(0, 3);
  const lastJediName = firstName.slice(0, 2);
  return firstJediName + lastJediName; 
}

console.log(jediName('Farah', 'Gustafson'));