export function decodedValue(colors: string[]): number {
  const colorMap: Record<string, number> = {
    black: 0,
    brown: 1,
    red: 2,
    orange: 3,
    yellow: 4,
    green: 5,
    blue: 6,
    violet: 7,
    grey: 8,
    white: 9,
  };

  const firstColor = colors[0].toLowerCase();
  const secondColor = colors[1].toLowerCase();

  const firstDigit = colorMap[firstColor];
  const secondDigit = colorMap[secondColor];

  return Number(`${firstDigit}${secondDigit}`);
}
