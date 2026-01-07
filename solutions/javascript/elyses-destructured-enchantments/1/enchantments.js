/// <reference path="./global.d.ts" />
// @ts-check

/**
 * Get the first card in the given deck
 *
 * @param {Card[]} deck
 *
 * @returns {Card} the first card in the deck
 */
export function getFirstCard(deck) {
   const[firstCard] = deck;
  return firstCard;
}
const deck = [5, 9, 7, 1, 8];
getFirstCard(deck);

/**
 * Get the second card in the given deck
 *
 * @param {Card[]} deck
 *
 * @returns {Card} the second card in the deck
 */
export function getSecondCard(decks) {
  const [firstCard , secondCard] = decks;
  return secondCard;
}
const decks = [3, 2, 10, 6, 7];

getSecondCard(decks);

/**
 * Switch the position of the two cards
 *
 * @param {[Card, Card]} deck
 *
 * @returns {[Card, Card]} new deck with the 2 cards swapped
 */
export function swapTwoCards(deck) {
  const [first , second ] = deck;
  return [second , first]
}
const swappedDeck = [10, 7];

swapTwoCards(swappedDeck)

/**
 * Rotate (shift) the position of the three cards (by one place)
 *
 * @param {[Card, Card, Card]} deck
 *
 * @returns {[Card, Card, Card]} new deck with the 3 cards shifted by one position
 */
export function shiftThreeCardsAround(deck) {
 const [first , second , third ] = deck;
  return [second ,third, first]
}
const tripleDeck = [2, 6, 10];

shiftThreeCardsAround(tripleDeck)

/**
 * Grab the chosen pile from the available piles
 *
 * @param {{ chosen: Card[], disregarded: Card[] }} piles
 *
 * @returns {Card[]} the pile named chosen
 */
export function pickNamedPile(piles) {
  const {chosen :first,  disregarded:second } = piles;
  return first
}
const deckPile = [5, 4, 7, 10];
const chosen = [5, 4];
const disregarded = [7, 10];


pickNamedPile({ chosen, disregarded })

/**
 * Swap the chosen pile for the disregarded pile and the disregarded pile for the chosen pile
 *
 * @param {{ chosen: Card[], disregarded: Card[] }} piles
 * @returns {{ chosen: Card[], disregarded: Card[] }} new piles where the two piles are swapped
 */
export function swapNamedPile(piles) {
  const { chosen, disregarded } = piles;
  return { 
    chosen: disregarded,   
    disregarded: chosen
  };
}

const chosen2 = [5, 4];
const disregarded2 = [7, 10];

console.log(swapNamedPile({ chosen2, disregarded2 }));

