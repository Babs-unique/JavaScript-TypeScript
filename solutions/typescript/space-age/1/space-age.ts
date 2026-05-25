export function age(planet: string, seconds: number): number {
  const earthYearsInSeconds: number = 31557600;
  const planetPeriods = [
  { planet: "Mercury", period: 0.2408467 },
  { planet: "Venus", period: 0.61519726 },
  { planet: "Earth", period: 1.0 },
  { planet: "Mars", period: 1.8808158 },
  { planet: "Jupiter", period: 11.862615 },
  { planet: "Saturn", period: 29.447498 },
  { planet: "Uranus", period: 84.016846 },
  { planet: "Neptune", period: 164.79132 }
];

  const foundPlanet = planetPeriods.find((item) =>{
    return item.planet.toLowerCase() === planet.toLowerCase();
  })
  if (!foundPlanet) {
    throw new Error('Planet not found')
  }
  const expectedAges = seconds / (foundPlanet.period * earthYearsInSeconds);
  return Number(expectedAges.toFixed(2));

}
age('earth', 1000000000);
