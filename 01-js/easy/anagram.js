/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
  // Check if the lengths are equal
  if (str1.length !== str2.length) {
    return false;
  }

  // Convert the strings to arrays and sort them
  const str1Arr = str1.toLowerCase().split('').sort();
  const str2Arr = str2.toLowerCase().split('').sort();

  // Check if the arrays are equal
  return str1Arr.join('') === str2Arr.join('');
}

module.exports = isAnagram;
