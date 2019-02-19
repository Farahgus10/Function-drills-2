'use strict';

function jediName(firstName, lastName){
  const firstJediName = lastName.slice(0, 3);
  const lastJediName = firstName.slice(0, 2);
  return firstJediName + lastJediName; 
}

function beyond(num) {
  if (num == Number.POSITIVE_INFINITY || num == Number.NEGATIVE_INFINITY) {
    console.log('And beyond');
  } else if (num > 0) {
    console.log('To infinity');
  } else if (num < 0) {
    console.log('To negative infinity');
  } else if (num === 0) {
    console.log('Staying home');
  }
}

console.log(beyond(5));
console.log(beyond(-100));
console.log(beyond(0));

