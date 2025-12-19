/// <reference path="./global.d.ts" />
// @ts-check

/**
 * Creates a new score board with an initial entry.
 *
 * @returns {Record<string, number>} new score board
 */
export function createScoreBoard() {
 
  const scoreBoard = {
    'The Best Ever' : 1000000
  }
  return scoreBoard;
}
createScoreBoard()

/**
 * Adds a player to a score board.
 *
 * @param {Record<string, number>} scoreBoard
 * @param {string} player
 * @param {number} score
 * @returns {Record<string, number>} updated score board
 */
export function addPlayer(scoreBoard, player, score) {
    scoreBoard[player] = score;
  


  return scoreBoard;
  

  return scoreBoard
}

addPlayer({ 'Dave Thomas': 0 }, 'José Valim', 486373);

/**
 * Removes a player from a score board.
 *
 * @param {Record<string, number>} scoreBoard
 * @param {string} player
 * @returns {Record<string, number>} updated score board
 */
export function removePlayer(scoreBoard, player) {
    delete scoreBoard[player];
  

  return scoreBoard;
}
removePlayer({ 'Dave Thomas': 0 }, 'Dave Thomas');

/**
 * Increases a player's score by the given amount.
 *
 * @param {Record<string, number>} scoreBoard
 * @param {string} player
 * @param {number} points
 * @returns {Record<string, number>} updated score board
 */
export function updateScore(scoreBoard, player, points) {
/*     scoreBoard[player] = scoreBoard[player]  + points; */
    scoreBoard[player] += points;
  return scoreBoard;
}
updateScore({ 'Freyja Ćirić': 12771008 }, 'Freyja Ćirić', 73);

/**
 * Applies 100 bonus points to all players on the board.
 *
 * @param {Record<string, number>} scoreBoard
 * @returns {Record<string, number>} updated score board
 */
export function applyMondayBonus(scoreBoard) {
   for (let player in scoreBoard) {
     scoreBoard[player] += 100;
   }
  return scoreBoard;
  
}
const scoreBoard = {
  'Dave Thomas': 44,
  'Freyja Ćirić': 539,
  'José Valim': 265,
};
applyMondayBonus(scoreBoard);
