// @ts-check
//
// The line above enables type checking for this file. Various IDEs interpret
// the @ts-check directive. It will give you helpful autocompletion when
// implementing this exercise.

/**
 * Determines how long it takes to prepare a certain juice.
 *
 * @param {string} name
 * @returns {number} time in minutes
 */
export function timeToMixJuice(name) {
  switch (name) {
    case 'Pure Strawberry Joy':
      return  0.5;
      break;
    case 'Energizer' :
    case 'Green Garden': 
      return  1.5
      break
    case 'Tropical Island':
      return   3
      break;
        case 'All or Nothing':
      return  5
      break;
    default:
        return 2.5;
  }
  return result
}
timeToMixJuice('Energizer') 

/**
 * Calculates the number of limes that need to be cut
 * to reach a certain supply.
 *
 * @param {number} wedgesNeeded
 * @param {string[]} limes
 * @returns {number} number of limes cut
 */
export function limesToCut(wedgesNeeded, limes) {
  let lime = 0;
  let i = 0;
  let wedgesGotten = 0;
  while (wedgesGotten < wedgesNeeded && i < limes.length) {
    if (limes[i] === 'small') {
      wedgesGotten += 6
    }else if (limes[i] === 'medium') {
      wedgesGotten +=8
    }else if (limes[i] === 'large') {
      wedgesGotten +=10
    }
    lime++;
    i++
    
  }
  return lime;
}
limesToCut(25, ['small', 'small', 'large', 'medium', 'small']);

/**
 * Determines which juices still need to be prepared after the end of the shift.
 *
 * @param {number} timeLeft
 * @param {string[]} orders
 * @returns {string[]} remaining orders after the time is up
 */
export function remainingOrders(timeLeft, orders) {

  while (orders.length > 0 && timeLeft > 0) {
    timeLeft -= timeToMixJuice(orders[0]);
    orders.shift();
  }
  return orders;
  

}
remainingOrders(5, ['Energizer', 'All or Nothing', 'Green Garden']);
