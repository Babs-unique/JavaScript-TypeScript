// @ts-check

/**
 * Calculates the sum of the two input arrays.
 *
 * @param {number[]} array1
 * @param {number[]} array2
 * @returns {number} sum of the two arrays
 */
export function twoSum(array1, array2) {
  const string1 = array1.join("");
  const string2 = array2.join("");


  const cal1 = Number(string1);
  const cal2 = Number(string2)

  return cal1 + cal2;
 
}
twoSum([1, 2, 3], [0, 7]);
/**
 * Checks whether a number is a palindrome.
 *
 * @param {number} value
 * @returns {boolean} whether the number is a palindrome or not
 */
export function luckyNumber(value) {
 const str = String(value)
 const palindrome = str.split('').reverse().join('')

  return str === palindrome
}
luckyNumber(1441);
/**
 * Determines the error message that should be shown to the user
 * for the given input value.
 *
 * @param {string|null|undefined} input
 * @returns {string} error message
 */
export function errorMessage(input) {
 if (input === '' || input === null || input === undefined) {
    return 'Required field';
  }
 const numberValue = Number(input);

  if (Number.isNaN(numberValue) || numberValue === 0) {
    return 'Must be a number besides 0';
  }
  return '';
  
}
errorMessage('123');