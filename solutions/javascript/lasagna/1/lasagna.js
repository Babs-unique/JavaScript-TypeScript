export const EXPECTED_MINUTES_IN_OVEN = 40;

/**
 * @returns {number} the number of minutes the lasagna should be in the oven
 */
export function expectedMinutesInOven() {
  return EXPECTED_MINUTES_IN_OVEN;
}

/**
 * @param {number} actualMinutesInOven
 * @returns {number} the number of minutes remaining
 */
export function remainingMinutesInOven(actualMinutesInOven) {
  return EXPECTED_MINUTES_IN_OVEN - actualMinutesInOven;
}

/**
 * @param {number} numberOfLayers
 * @returns {number} the total preparation time in minutes
 */
export function preparationTimeInMinutes(numberOfLayers) {
  const PREPARATION_MINUTES_PER_LAYER = 2;
  return numberOfLayers * PREPARATION_MINUTES_PER_LAYER;
}

/**
 * @param {number} numberOfLayers
 * @param {number} actualMinutesInOven
 * @returns {number} the total working time
 */
export function totalTimeInMinutes(numberOfLayers, actualMinutesInOven) {
  return preparationTimeInMinutes(numberOfLayers) + actualMinutesInOven;
}
