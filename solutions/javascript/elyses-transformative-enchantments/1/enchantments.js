// @ts-check

/**
 * Double every card in the deck.
 *
 * @param {number[]} deck
 *
 * @returns {number[]} deck with every card doubled
 */
export function seeingDouble(deck) {
  const doubled = deck.map((val) => val * 2)
  return doubled;
  
}
const deck = [1, 2, 3, 4, 10];
seeingDouble(deck);

/**
 *  Creates triplicates of every 3 found in the deck.
 *
 * @param {number[]} deck
 *
 * @returns {number[]} deck with triplicate 3s
 */
export function threeOfEachThree(deck) {
  const threeOnthree = deck.reduce((acc, val) =>{
    if(val === 3){
      acc.push(3,3,3)
    }else{
      acc.push(val);
    }
    return acc ;
  },[])
  return threeOnthree;
   
}
const deck2 = [1, 3, 9, 3, 7];
threeOfEachThree(deck2);

/**
 * Extracts the middle two cards from a deck.
 * Assumes a deck is always 10 cards.
 *
 * @param {number[]} deck of 10 cards
 *
 * @returns {number[]} deck with only two middle cards
 */
export function middleTwo(deck) {
    const middle = deck.slice(4 , 6 )
    return middle;
}
const deck3 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
middleTwo(deck3);

/**
 * Moves the outside two cards to the middle.
 *
 * @param {number[]} deck with even number of cards
 *
 * @returns {number[]} transformed deck
 */

export function sandwichTrick(deck) {
  const bottomCard = deck.pop();
  const topCard = deck.shift()
  const length = deck.length / 2 ;
  deck.splice(length, 0 , bottomCard, topCard)
  return deck;
  
}
const deck4 = [1, 2, 3, 5, 6, 10];
sandwichTrick(deck4);

/**
 * Removes every card from the deck except 2s.
 *
 * @param {number[]} deck
 *
 * @returns {number[]} deck with only 2s
 */
export function twoIsSpecial(deck) {
   return deck.filter((value) => value === 2);
}
const deck5 = [1, 2, 3, 4, 10, 2];
twoIsSpecial(deck5);

/**
 * Returns a perfectly order deck from lowest to highest.
 *
 * @param {number[]} deck shuffled deck
 *
 * @returns {number[]} ordered deck
 */
export function perfectlyOrdered(deck) {
  const sorted = deck.sort((item1, item2) => {
    if (item1 < item2) {
      return -1;
    }
    if (item1  > item2) {
      return 1
    }
    return 0 
  });
  return sorted;
 
}
const deck6= [10, 1, 5, 3, 2, 8, 7];
perfectlyOrdered(deck6);

/**
 * Reorders the deck so that the top card ends up at the bottom.
 *
 * @param {number[]} deck
 *
 * @returns {number[]} reordered deck
 */
export function reorder(deck) {
  return deck.reverse()
}
const deck7 = [10, 1, 5, 3, 2];
reorder(deck7);
