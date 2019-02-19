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

function monthDays (month, leapYear){
  let result;
  switch (month) {
    case 'January':
    case 'March':
    case 'May':
    case 'July':
    case 'August':
    case 'October':
    case 'December':
      result = `${month} has 31 days.`;
      break;
    case 'April':
    case 'June':
    case 'September':
    case 'November':
      result = `${month} has 30 days.`;
      break;
    case 'February':
      if (leapYear) {
      result = `February has 29 days.`;  
      }    
      else {
      result = `February has 28 days.`;
      }
      break;
    default: 
      throw new Error ('Must provide a valid month.');
  }
  return result;
}

console.log(monthDays('June', false));