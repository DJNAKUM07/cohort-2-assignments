/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  str = str.toLowerCase().replace(/[,?!. ]+/g, '');

  let left = 0;
  let right = str.length - 1;

  while (left < right) {

    if (str[left] !== str[right])
      return false;

    left++;
    right--;
  }
  return true;
}

let str = 'Eva, can I see bees in a cave?';
console.log(isPalindrome(str))

module.exports = isPalindrome;
