// @ts-check
//
// The line above enables type checking for this file. Various IDEs interpret
// the @ts-check directive. It will give you helpful autocompletion when
// implementing this exercise.

/**
 * Return each wagon's id in form of an array.
 *
 * @param {...number} ids
 * @returns {number[]} wagon ids
 */
export function getListOfWagons(...wagonId) {
  return wagonId
}
getListOfWagons(1, 7, 12, 3, 14, 8, 5)

/**
 * Reorder the array of wagons by moving the first 2 wagons to the end of the array.
 *
 * @param {Iterable<number>} ids
 * @returns {number[]} reordered list of wagons
 */
export function fixListOfWagons(ids) {
  const [a, b , ...rest] = ids;
  const formattedValue = [...rest, a, b]
  return formattedValue;
  
}
const eachWagonsID = [2, 5, 1, 7, 4, 12, 6, 3, 13];
fixListOfWagons(eachWagonsID);

/**
 * Fixes the array of wagons by inserting an array of wagons after the first element in eachWagonsID.
 *
 * @param {Iterable<number>} ids
 * @param {Iterable<number>} missingWagons
 * @returns {number[]} corrected list of wagons
 */
export function correctListOfWagons(ids, missingWagons) {
  const [a , ...rest] = ids;
  const newCorrectedIds = [a, ...missingWagons , ...rest];
  return newCorrectedIds;
  
}
const eachWagonsID2 = [1, 5, 20, 7, 4, 8];
const missingWagons = [3, 17, 6, 15];
correctListOfWagons(eachWagonsID2, missingWagons)

/**
 * Extend route information by adding another object
 *
 * @param {Record<string, string>} information
 * @param {Record<string, string>} additional
 * @returns {Record<string, string>} extended route information
 */
export function extendRouteInformation(information, additional) {
  const info = information;
  const addOns = additional;
  return {
    ...info, ...addOns
  }
  //Another shorter way of solving the Challenge
/*   return {
    ...information , ...additional
  } */
  
}
const route = { from: 'Berlin', to: 'Hamburg' };
const moreRouteInformation = { length: '100', speed: '50' };
extendRouteInformation(route, moreRouteInformation);
/**
 * Separate arrival time from the route information object
 *
 * @param {Record<string, string>} information
 * @returns {[string, Record<string, string>]} array with arrival time and object without arrival time
 */
export function separateTimeOfArrival(information) {
  const { timeOfArrival, ...rest } = information;
  console.log([timeOfArrival, rest])
  return [timeOfArrival, rest];
  
  
}
const routeInformation = {
  from: 'Berlin',
  to: 'Hamburg',
  length: '100',
  timeOfArrival: '10:10',
};
separateTimeOfArrival(routeInformation);
