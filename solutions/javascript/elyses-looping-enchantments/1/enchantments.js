// @ts-check

/**
 * Determine how many cards of a certain type there are in the deck
 *
 * @param {number[]} stack
 * @param {number} card
 *
 * @returns {number} number of cards of a single type there are in the deck
 */
export function cardTypeCheck(stack, card) {
  // 🚨 Use .forEach
  let int = 0;
  stack.forEach((number) => {
    if (number === card) {
      return int++
    }
  })
  return int;
  
}
const cardType = 3;
cardTypeCheck([1, 2, 3, 4], cardType);

/**
 * Determine how many cards are odd or even
 *
 * @param {number[]} stack
 * @param {boolean} type the type of value to check for - odd or even
 * @returns {number} number of cards that are either odd or even (depending on `type`)
 */
export function determineOddEvenCards(stack, type) {
  // 🚨 Use a `for...of` loop
  let int = 0;
  const typeRemainder = type ? 0 : 1
  for (let num of stack) {
    if (num % 2 === typeRemainder ) {
      int ++
    }
  }
  return int;
}
determineOddEvenCards([1, 2, 3, 1, 5, 6], true);
determineOddEvenCards([1, 2, 3, 1, 5, 6], false);