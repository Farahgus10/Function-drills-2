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


function decode(encryptedSentence) {
  const words = encryptedSentence.split(' ');
  let decoded = '';
  for (let i = 0; i < words.length; i++) {
    let word = words[i];
    let letter = word[0];
    switch(letter) {
    case 'a' :
      decoded += word[1];
      break;
    case 'b' :
      decoded += word[2];
      break;
    case 'c' :
      decoded += word[3];
      break;
    case 'd' :
      decoded += word[4];
      break;
    default :
      decoded += ' ';
    }
  }
  return decoded;
}

console.log(decode('craft block argon meter bells brown croon droop'));