// @ts-check

/**
 * Generates a random starship registry number.
 *
 * @returns {string} the generated registry number.
 */
export function randomShipRegistryNumber() {
  return `NCC-${Math.floor(Math.random() * (9999 - 1000 + 1)) + 1000}`
}
randomShipRegistryNumber()

/**
 * Generates a random stardate.
 *
 * @returns {number} a stardate between 41000 (inclusive) and 42000 (exclusive).
 */
export function randomStardate() {
  const randomDate = 41000 + Math.random() * (42000 - 41000)
  return randomDate  ;
}
randomStardate()

/**
 * Generates a random planet class.
 *
 * @returns {string} a one-letter planet class.
 */
export function randomPlanetClass() {
  const classes = ["D", "H", "J", "K", "L", "M", "N", "R", "T","Y"]
  const randomClasses = Math.floor(Math.random() * 10)
/*   const randomClasses = Math.floot ( Math.random() * classes.length) */

  const classGotten = classes[randomClasses];
  return `${classGotten}`;
}

randomPlanetClass();
